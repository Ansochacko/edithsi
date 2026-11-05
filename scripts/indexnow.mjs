import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://edithsi.com';
const HOST = new URL(SITE_URL).host;
const KEY = '7f9b2c4e8a1d6f3b5e0c9a8d2f4b7e1c';
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;

const distSitemap = path.resolve('dist/sitemap.xml');
const seoPayloadFile = path.resolve('seo/indexnow-payload.json');

function extractUrls(xml) {
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return [...new Set(matches.map((m) => m[1].trim()))];
}

async function main() {
  if (!fs.existsSync(distSitemap)) {
    console.log('[IndexNow] dist/sitemap.xml not found; skipping.');
    return;
  }

  const xml = fs.readFileSync(distSitemap, 'utf8');
  const urlList = extractUrls(xml);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  fs.mkdirSync(path.dirname(seoPayloadFile), { recursive: true });
  fs.writeFileSync(seoPayloadFile, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  console.log(`[IndexNow] Prepared ${urlList.length} URLs in seo/indexnow-payload.json`);

  if (process.env.INDEXNOW_LIVE === '1' || process.env.VERCEL === '1') {
    try {
      const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      });
      console.log(`[IndexNow] Pinged api.indexnow.org -> HTTP ${response.status}`);
    } catch (err) {
      console.warn(`[IndexNow] Ping warning (non-fatal): ${err.message}`);
    }
  } else {
    console.log(
      '[IndexNow] Local build (not deployed): skipped live external ping. Set INDEXNOW_LIVE=1 or deploy on Vercel to ping api.indexnow.org.'
    );
  }
}

main();
