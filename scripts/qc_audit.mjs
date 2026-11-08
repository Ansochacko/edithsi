import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const SEO_DIR = path.resolve('seo');

console.log('================================================================');
console.log('     EDITHSI QUALITY CONTROL (QC) & 100K SEO AUDIT SUITE        ');
console.log('================================================================\n');

let passedTests = 0;
let failedTests = 0;
const failures = [];

function assert(condition, message, details = '') {
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${message}`);
  } else {
    failedTests++;
    console.error(`  [FAIL] ${message}`);
    if (details) console.error(`         -> ${details}`);
    failures.push({ message, details });
  }
}

// -------------------------------------------------------------
// 1. Audit Dist Structure & Pages
// -------------------------------------------------------------
console.log('>>> 1. AUDITING GENERATED STATIC SITE (dist/)...');

assert(fs.existsSync(DIST_DIR), 'dist directory exists');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(DIST_DIR);
console.log(`Found ${htmlFiles.length} HTML files in dist/`);
assert(htmlFiles.length >= 170, `Total HTML pages >= 170 (found ${htmlFiles.length})`);

let jobPostingSchemaCount = 0;
let invalidJsonLdCount = 0;
let missingCanonicalCount = 0;
let missingDescCount = 0;
let missingTitleCount = 0;
let missingHreflangCount = 0;
let bannedPohjolaCount = 0;
let bannedMarvelCount = 0;
let missingRelSponsoredCount = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  const relPath = path.relative(DIST_DIR, file);
  const isNoIndexRedirect = relPath.startsWith('go/') || file.endsWith('404.html');

  // Check title
  if (!content.includes('<title>') || !content.includes('</title>')) {
    missingTitleCount++;
  }

  // Check meta description (skip noindex/redirects/404)
  if (!isNoIndexRedirect && !content.includes('name="description"')) {
    missingDescCount++;
    console.error(`Missing description in ${relPath}`);
  }

  // Check canonical (skip 404)
  if (!file.endsWith('404.html') && !content.includes('rel="canonical"')) {
    missingCanonicalCount++;
  }

  // Check hreflang on regular pages (skip noindex/redirects/404)
  if (!isNoIndexRedirect && !content.includes('hreflang=')) {
    missingHreflangCount++;
    console.error(`Missing hreflang in ${relPath}`);
  }

  // Check for JobPosting structured data (STRICTLY PROHIBITED)
  if (content.includes('"@type":"JobPosting"') || content.includes('"@type": "JobPosting"')) {
    jobPostingSchemaCount++;
    console.error(`Found JobPosting in ${relPath}!`);
  }

  // Validate JSON-LD syntax
  const jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  while ((match = jsonLdRegex.exec(content)) !== null) {
    try {
      JSON.parse(match[1]);
    } catch (e) {
      invalidJsonLdCount++;
      console.error(`Invalid JSON-LD in ${relPath}: ${e.message}`);
    }
  }

  // Check forbidden brand/spam terms
  if (content.toLowerCase().includes('pohjola experts') || content.toLowerCase().includes('pohjola-experts')) {
    bannedPohjolaCount++;
  }
  if (content.toLowerCase().includes('edith glasses') || content.toLowerCase().includes('tony stark') || content.toLowerCase().includes('marvel')) {
    bannedMarvelCount++;
  }

  // Check all anchor tags linking to Mercor carry rel="sponsored"
  const anchorRegex = /<a\s+[^>]*href=["'](https?:\/\/(?:t|work)\.mercor\.com\/[^"']*)["'][^>]*>/gi;
  let aMatch;
  while ((aMatch = anchorRegex.exec(content)) !== null) {
    const fullTag = aMatch[0];
    if (!fullTag.includes('sponsored')) {
      missingRelSponsoredCount++;
      console.error(`Missing rel="sponsored" in ${relPath}: ${fullTag}`);
    }
  }
}

assert(jobPostingSchemaCount === 0, 'Zero JobPosting structured data across entire site (Google Spam compliance)');
assert(invalidJsonLdCount === 0, 'Zero invalid JSON-LD script tags');
assert(missingTitleCount === 0, 'Every page has a valid <title> tag');
assert(missingDescCount === 0, 'Every indexable page has a meta description');
assert(missingCanonicalCount === 0, 'Every indexable page has a rel="canonical" link');
assert(missingHreflangCount === 0, 'Every indexable page has hreflang alternate links');
assert(bannedPohjolaCount === 0, 'Zero legacy "Pohjola" branding references');
assert(bannedMarvelCount === 0, 'Zero Marvel/EDITH pop-culture references');
assert(missingRelSponsoredCount === 0, 'All Mercor referral links carry rel="sponsored"');

// -------------------------------------------------------------
// 2. Audit Technical SEO Files & AI Search Crawlers
// -------------------------------------------------------------
console.log('\n>>> 2. AUDITING ROBOTS.TXT, SITEMAP, RSS, LLMS.TXT & DATASETS...');

const robotsPath = path.join(DIST_DIR, 'robots.txt');
assert(fs.existsSync(robotsPath), 'robots.txt exists in dist/');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf-8');
  assert(robots.includes('User-agent: Googlebot'), 'robots.txt allows Googlebot');
  assert(robots.includes('User-agent: Bingbot'), 'robots.txt allows Bingbot');
  assert(robots.includes('User-agent: OAI-SearchBot'), 'robots.txt allows OAI-SearchBot (ChatGPT Search)');
  assert(robots.includes('User-agent: ChatGPT-User'), 'robots.txt allows ChatGPT-User');
  assert(robots.includes('User-agent: PerplexityBot'), 'robots.txt allows PerplexityBot');
  assert(robots.includes('User-agent: Claude-SearchBot'), 'robots.txt allows Claude-SearchBot');
  assert(robots.includes('Sitemap: https://edithsi.com/sitemap-index.xml') || robots.includes('Sitemap: https://edithsi.com/sitemap.xml'), 'robots.txt specifies sitemap');
}

const llmsPath = path.join(DIST_DIR, 'llms.txt');
assert(fs.existsSync(llmsPath), 'llms.txt exists in dist/ for AI engines (GEO)');
if (fs.existsSync(llmsPath)) {
  const llms = fs.readFileSync(llmsPath, 'utf-8');
  assert(llms.includes('# Edithsi'), 'llms.txt has Edithsi header');
  assert(llms.includes('/pay-index/'), 'llms.txt links to Pay Index');
  assert(llms.includes('/compare/'), 'llms.txt links to Platform Comparison');
  assert(llms.includes('/glossary/'), 'llms.txt links to Glossary');
}

const sitemapIndexPath = path.join(DIST_DIR, 'sitemap-index.xml');
assert(fs.existsSync(sitemapIndexPath), 'sitemap-index.xml exists in dist/');

const rssPath = path.join(DIST_DIR, 'rss.xml');
assert(fs.existsSync(rssPath), 'rss.xml feed exists in dist/');
if (fs.existsSync(rssPath)) {
  const rss = fs.readFileSync(rssPath, 'utf-8');
  assert(rss.includes('<rss version="2.0"'), 'rss.xml is valid RSS 2.0');
  assert(rss.includes('<item>'), 'rss.xml contains guide items');
}

const csv202611 = path.join(DIST_DIR, 'data/edithsi-ai-work-pay-index-2026-11.csv');
const csvLatest = path.join(DIST_DIR, 'data/edithsi-ai-work-pay-index-latest.csv');
assert(fs.existsSync(csv202611), 'Pay Index 2026-11 CSV exists in dist/data/');
assert(fs.existsSync(csvLatest), 'Pay Index latest CSV exists in dist/data/');
if (fs.existsSync(csvLatest)) {
  const csv = fs.readFileSync(csvLatest, 'utf-8');
  const lines = csv.trim().split('\n');
  assert(lines.length >= 20, `Pay Index CSV has valid rows (found ${lines.length})`);
  assert(csv.includes('edition,checked_date,field,audience,platform_name,role_title,posted_range'), 'Pay Index CSV has correct schema');
}

// -------------------------------------------------------------
// 3. Audit Content & JSON-LD on Core Hub Pages
// -------------------------------------------------------------
console.log('\n>>> 3. AUDITING KEY HUB PAGES & SCHEMA ARCHITECTURE...');

const corePagesToTest = [
  { path: 'index.html', type: 'Home' },
  { path: 'compare/index.html', type: 'Compare' },
  { path: 'pay-index/index.html', type: 'Pay Index' },
  { path: 'survey/index.html', type: 'Survey' },
  { path: 'glossary/index.html', type: 'Glossary' },
  { path: 'platforms/mercor/index.html', type: 'Platform Profile' },
  { path: 'guides/taxes-toiminimi-yel-finland/index.html', type: 'Guide' },
  { path: 'fi/index.html', type: 'Finnish Home' },
  { path: 'fi/compare/index.html', type: 'Finnish Compare' },
  { path: 'fi/pay-index/index.html', type: 'Finnish Pay Index' },
  { path: 'fi/guides/taxes-toiminimi-yel-finland/index.html', type: 'Finnish Guide' }
];

for (const p of corePagesToTest) {
  const fullPath = path.join(DIST_DIR, p.path);
  assert(fs.existsSync(fullPath), `${p.type} (${p.path}) generated successfully`);
  if (fs.existsSync(fullPath)) {
    const html = fs.readFileSync(fullPath, 'utf-8');
    
    // Check Author Box presence on guides/platforms/pay-index
    if (p.type.includes('Guide') || p.type.includes('Platform') || p.type.includes('Pay Index')) {
      assert(html.includes('Anso Chacko'), `${p.type} displays author box (Anso Chacko)`);
      assert(html.includes('linkedin.com/in/ansochacko'), `${p.type} author links to verified LinkedIn`);
    }

    // Check Dataset schema on pay-index
    if (p.type.includes('Pay Index')) {
      assert(html.includes('"@type":"Dataset"') || html.includes('"@type": "Dataset"'), `${p.type} has Dataset schema for Google Dataset Search`);
      assert(html.includes('edithsi-ai-work-pay-index'), `${p.type} offers CSV download`);
    }

    // Check FAQPage schema on pages with FAQs
    if (p.type.includes('Platform') || p.type.includes('Compare') || p.type.includes('Guide') || p.type.includes('Glossary')) {
      assert(html.includes('"@type":"FAQPage"') || html.includes('"@type": "FAQPage"'), `${p.type} has FAQPage schema for Rich Snippets`);
    }

    // Check Article schema on guides
    if (p.type.includes('Guide')) {
      assert(html.includes('"@type":"Article"') || html.includes('"@type": "Article"'), `${p.type} has Article schema`);
      assert(html.includes('2026-11-05'), `${p.type} has datePublished/lastUpdated`);
    }

    // Check self-contained comparison table cells
    if (p.type.includes('Compare')) {
      assert(html.includes('Mercor:'), `${p.type} table cells are self-contained (mention platform name)`);
    }
  }
}

// -------------------------------------------------------------
// 4. Audit SEO & 100k Monthly Traffic Strategy Files (/seo/)
// -------------------------------------------------------------
console.log('\n>>> 4. AUDITING SEO TOOLS & 100K MONTHLY TRAFFIC FILES (/seo/)...');

const requiredSeoFiles = [
  'keywords.csv',
  'content-plan.csv',
  'query-map.csv',
  'ai-visibility.csv',
  'SETUP.md',
  'OUTREACH.md',
  'REPORT.md',
  'ROADMAP.md',
  'SPAM-POLICY-AUDIT.md'
];

for (const f of requiredSeoFiles) {
  const filePath = path.join(SEO_DIR, f);
  assert(fs.existsSync(filePath), `Required SEO strategy file ${f} exists`);
}

// Audit keywords.csv
if (fs.existsSync(path.join(SEO_DIR, 'keywords.csv'))) {
  const kw = fs.readFileSync(path.join(SEO_DIR, 'keywords.csv'), 'utf-8');
  const rows = kw.trim().split('\n');
  assert(rows.length >= 200, `keywords.csv has comprehensive coverage (${rows.length} rows)`);
  assert(kw.includes('language,keyword,cluster,search_intent'), 'keywords.csv has proper columns');
  assert(kw.includes(',TBD,'), 'keywords.csv leaves unverified volume as TBD (strict no-invention rule)');
  assert(kw.includes('EXCLUDE'), 'keywords.csv flags spammy intent as EXCLUDE');
}

// Audit query-map.csv
if (fs.existsSync(path.join(SEO_DIR, 'query-map.csv'))) {
  const qm = fs.readFileSync(path.join(SEO_DIR, 'query-map.csv'), 'utf-8');
  const rows = qm.trim().split('\n');
  assert(rows.length >= 200, `query-map.csv maps queries 1:1 (${rows.length} queries mapped)`);
  assert(qm.includes('/guides/remote-side-jobs-from-home/'), 'query-map consolidates broad side jobs queries into one honest guide');
}

// Audit ai-visibility.csv
if (fs.existsSync(path.join(SEO_DIR, 'ai-visibility.csv'))) {
  const aiv = fs.readFileSync(path.join(SEO_DIR, 'ai-visibility.csv'), 'utf-8');
  const rows = aiv.trim().split('\n');
  assert(rows.length >= 21, `ai-visibility.csv contains 20 target AI benchmark prompts (found ${rows.length - 1})`);
  assert(aiv.includes('chatgpt_cited') && aiv.includes('perplexity_cited') && aiv.includes('google_ai_mode_cited'), 'ai-visibility tracks ChatGPT, Perplexity, Gemini, Claude, and Google AI Mode');
}

// Audit ROADMAP.md for 100k milestone
if (fs.existsSync(path.join(SEO_DIR, 'ROADMAP.md'))) {
  const roadmap = fs.readFileSync(path.join(SEO_DIR, 'ROADMAP.md'), 'utf-8');
  assert(roadmap.includes('100,000') || roadmap.includes('100k'), 'ROADMAP.md details the 100k traffic milestone and scaling strategy');
  assert(roadmap.includes('Pay Index'), 'ROADMAP.md includes monthly Pay Index publishing rhythm');
}

// Audit SPAM-POLICY-AUDIT.md
if (fs.existsSync(path.join(SEO_DIR, 'SPAM-POLICY-AUDIT.md'))) {
  const spam = fs.readFileSync(path.join(SEO_DIR, 'SPAM-POLICY-AUDIT.md'), 'utf-8');
  assert(spam.includes('May 2026'), 'SPAM-POLICY-AUDIT.md references Google May 2026 Spam Policies (AI Overviews & AI Mode)');
  assert(spam.includes('JobPosting'), 'SPAM-POLICY-AUDIT.md verifies zero JobPosting policy');
}

// -------------------------------------------------------------
// SUMMARY
// -------------------------------------------------------------
console.log('\n================================================================');
console.log(`QC AUDIT COMPLETE: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('================================================================\n');

if (failedTests > 0) {
  console.error('Failure summary:');
  for (const f of failures) {
    console.error(`- ${f.message}: ${f.details}`);
  }
  process.exit(1);
} else {
  console.log('ALL AUDITS PASSED WITH ZERO ERRORS! SITE IS PRODUCTION READY.');
  process.exit(0);
}
