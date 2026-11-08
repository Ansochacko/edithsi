import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SCREENSHOT_DIR = path.join(ROOT, 'design', 'screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

// MIME types
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

// Production headers from vercel.json
const CSP = "default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'none'";

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath.endsWith('/')) {
    urlPath += 'index.html';
  }

  let filePath = path.join(DIST, urlPath);
  if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath += '.html';
  } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'application/octet-stream';

  const headers = {
    'Content-Type': contentType,
    'Content-Security-Policy': CSP,
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  };

  if (urlPath.startsWith('/fonts/')) {
    headers['Cache-Control'] = 'public, max-age=31536000, immutable';
  }

  res.writeHead(200, headers);
  fs.createReadStream(filePath).pipe(res);
});

const PORT = 43210;

server.listen(PORT, async () => {
  console.log(`Preview server running at http://localhost:${PORT}`);
  let hasErrors = false;
  const consoleErrors = [];
  const blockedResources = [];

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const routes = [
    { name: 'home-desktop', url: '/', width: 1440, height: 900 },
    { name: 'home-mobile', url: '/', width: 390, height: 844 },
    { name: 'roles-desktop', url: '/roles/', width: 1440, height: 900 },
    { name: 'roles-mobile', url: '/roles/', width: 390, height: 844 },
    { name: 'compare-desktop', url: '/compare/', width: 1440, height: 900 },
    { name: 'compare-mobile', url: '/compare/', width: 390, height: 844 },
    { name: 'pay-index-desktop', url: '/pay-index/', width: 1440, height: 900 },
    { name: 'how-it-works-mobile', url: '/how-it-works/', width: 390, height: 844 },
    { name: 'home-fi-desktop', url: '/fi/', width: 1440, height: 900 },
    { name: 'micro1-desktop', url: '/platforms/micro1/', width: 1440, height: 900 },
    { name: 'micro1-mobile', url: '/platforms/micro1/', width: 390, height: 844 },
  ];

  try {
    for (const r of routes) {
      const page = await browser.newPage();
      await page.setViewport({ width: r.width, height: r.height });

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          consoleErrors.push(`[${r.name}] Console Error: ${msg.text()}`);
        }
      });

      page.on('requestfailed', (req) => {
        blockedResources.push(`[${r.name}] Blocked resource: ${req.url()} (${req.failure()?.errorText})`);
      });

      await page.goto(`http://localhost:${PORT}${r.url}`, {
        waitUntil: 'networkidle0',
      });

      const shotPath = path.join(SCREENSHOT_DIR, `${r.name}.png`);
      await page.screenshot({ path: shotPath, fullPage: true });
      console.log(`Captured screenshot: ${r.name}.png`);

      // Verify referral code on any external Mercor links, micro1 referral links, or /go/ links on this page
      const referralLinks = await page.$$eval('a', (els) =>
        els
          .map((a) => ({
            href: a.getAttribute('href') || '',
            rel: a.getAttribute('rel') || '',
          }))
          .filter(
            (l) =>
              (l.href.includes('mercor.com') ||
                l.href.includes('refer.micro1.ai') ||
                l.href.startsWith('/go/')) &&
              !l.href.includes('/platforms/')
          )
      );

      for (const link of referralLinks) {
        if (link.href.includes('mercor.com')) {
          if (!link.href.includes('02e0c12a-d634-4738-9686-04f28f31f52b')) {
            console.error(`[ERROR] Missing Mercor referralCode on link: ${link.href}`);
            hasErrors = true;
          }
          if (!link.rel || !link.rel.includes('sponsored')) {
            console.error(`[ERROR] Missing rel="sponsored" on Mercor link: ${link.href}`);
            hasErrors = true;
          }
        } else if (link.href.includes('refer.micro1.ai') || link.href.startsWith('/go/micro1')) {
          if (link.href.includes('refer.micro1.ai') && !link.href.includes('ad081063-9c31-41f4-8c1d-210fee47018c')) {
            console.error(`[ERROR] Missing micro1 referralCode on link: ${link.href}`);
            hasErrors = true;
          }
          if (!link.rel || !link.rel.includes('sponsored')) {
            console.error(`[ERROR] Missing rel="sponsored" on micro1 link: ${link.href}`);
            hasErrors = true;
          }
        }
      }

      // Run axe accessibility check
      const axeSource = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
      await page.evaluate(axeSource);
      const axeResults = await page.evaluate(async () => {
        // @ts-ignore
        return await axe.run({
          runOnly: {
            type: 'tag',
            values: ['wcag2a', 'wcag2aa'],
          },
        });
      });

      if (axeResults.violations.length > 0) {
        console.error(`[${r.name}] Axe Violations: ${axeResults.violations.length}`);
        for (const v of axeResults.violations) {
          console.error(`  - ${v.id}: ${v.help} (${v.nodes.length} occurrences)`);
        }
        hasErrors = true;
      } else {
        console.log(`[${r.name}] Axe accessibility: 0 violations (WCAG 2.2 AA compliant)`);
      }

      await page.close();
    }
  } catch (err) {
    console.error('Test run failed:', err);
    hasErrors = true;
  } finally {
    await browser.close();
    server.close();
  }

  console.log('\n--- AUDIT SUMMARY ---');
  console.log(`Console errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    consoleErrors.forEach((e) => console.log('  ', e));
  }
  console.log(`Blocked resources: ${blockedResources.length}`);
  if (blockedResources.length > 0) {
    blockedResources.forEach((b) => console.log('  ', b));
  }

  if (consoleErrors.length > 0 || blockedResources.length > 0 || hasErrors) {
    console.error('\nFAILED verification checks.');
    process.exit(1);
  } else {
    console.log('\nPASSED all verification checks with 0 console errors, 0 blocked resources, and 100% compliant links!');
    process.exit(0);
  }
});
