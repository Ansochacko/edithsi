# Edithsi (`https://edithsi.com`) — Search Console, Bing/IndexNow & Monthly Pay Index Setup (`seo/SETUP.md`)

I wrote this step-by-step operational setup guide for **Edithsi** (`https://edithsi.com`) so I can verify domain ownership in Google Search Console and Bing Webmaster Tools, trigger IndexNow submissions, update the monthly **Edithsi AI Work Pay Index**, and maintain email forwarding for `hello@edithsi.com`.

---

## 1. Why Dual Indexing (Google + Bing) Is Essential for SEO & Generative AI Citations (GEO)

To maximize visibility across both traditional organic search results and Generative AI answer engines, I maintain verified indexing in **both** Google Search Console and Bing Webmaster Tools:

1. **Google Search Console → Google Organic, Google AI Overviews, AI Mode & Gemini:**
   - **Gemini** (`gemini.google.com`) and **Google AI Overviews / Google AI Mode** ground their real-time answers, comparison tables, and source citations directly against Google's web search index and `Google-Extended` crawl permissions.
   - Without clean Google indexing, structured JSON-LD (`Dataset`, `FAQPage`, `Article`, `BreadcrumbList`), and reciprocal `hreflang` sitemaps, pages will not be surfaced in Gemini or AI Mode citations.
2. **Bing Webmaster Tools + IndexNow → ChatGPT Search, Perplexity & Microsoft Copilot:**
   - **ChatGPT Search** (`OAI-SearchBot` / `ChatGPT-User`) and **Microsoft Copilot** rely heavily on the **Bing Search index** and **IndexNow** feed for real-time retrieval and URL discovery, alongside **Perplexity** (`PerplexityBot`).
   - Submitting sitemaps to Bing Webmaster Tools and pushing instant URL updates via **IndexNow** ensures that new guides and monthly Pay Index releases on `https://edithsi.com` are discoverable by ChatGPT Search and Perplexity within minutes of deployment rather than waiting weeks for passive crawling.

---

## 2. Google Search Console — Domain Property (DNS TXT) & Sitemaps

### Step 2.1: Create a Domain Property
1. Open **Google Search Console** (`https://search.google.com/search-console/`).
2. Click the property selector in the top-left corner and choose **+ Add property**.
3. Select the **Domain** option on the left (this covers `https://edithsi.com`, `https://www.edithsi.com`, and all six language paths `en`, `fi`, `sv`, `de`, `fr`, `es` in one property).
4. Enter:
   ```text
   edithsi.com
   ```
5. Click **Continue**.

### Step 2.2: Verify via DNS TXT Record
1. Copy the verification string provided by Google:
   ```text
   google-site-verification=YOUR_UNIQUE_TOKEN_HERE
   ```
2. Open the DNS management panel for `edithsi.com` (at my domain registrar or Vercel DNS) and add a new **TXT** record:
   - **Type:** `TXT`
   - **Name / Host:** `@` (root domain `edithsi.com`)
   - **TTL:** `3600` (or Automatic)
   - **Value / Content:** `google-site-verification=YOUR_UNIQUE_TOKEN_HERE`
3. Wait 2–5 minutes and click **Verify** in Google Search Console.

### Step 2.3: Submit Both Sitemaps
1. In the left sidebar of Google Search Console, open **Indexing → Sitemaps**.
2. Submit the Astro sitemap index:
   ```text
   https://edithsi.com/sitemap-index.xml
   ```
3. Also submit the direct multilingual `hreflang` sitemap:
   ```text
   https://edithsi.com/sitemap.xml
   ```
4. Confirm both show status **Success** across all indexable routes (and verify that `/go/<role>/` redirect pages and `/404` are excluded from the sitemaps and carry `noindex`).

---

## 3. Bing Webmaster Tools & IndexNow (`npm run indexnow -- --live`)

### Step 3.1: Import from Google Search Console into Bing Webmaster Tools
1. Open **Bing Webmaster Tools** (`https://www.bing.com/webmasters/`).
2. Choose **Import from Google Search Console** and select `edithsi.com`.
3. Under **Sitemaps**, verify that both `https://edithsi.com/sitemap-index.xml` and `https://edithsi.com/sitemap.xml` are submitted and showing **Success**.

### Step 3.2: Verify IndexNow Key File & Trigger Live Submission
Edithsi includes a static IndexNow verification key file and automated payload generator (`scripts/indexnow.mjs`):
- **IndexNow Key:** `7f9b2c4e8a1d6f3b5e0c9a8d2f4b7e1c`
- **Public Verification URL:** `https://edithsi.com/7f9b2c4e8a1d6f3b5e0c9a8d2f4b7e1c.txt`
- **Generated Payload File:** `seo/indexnow-payload.json` (regenerated automatically on every `npm run build` from `dist/sitemap.xml`).

Once `https://edithsi.com` is deployed:
1. Confirm that `https://edithsi.com/7f9b2c4e8a1d6f3b5e0c9a8d2f4b7e1c.txt` returns `7f9b2c4e8a1d6f3b5e0c9a8d2f4b7e1c` with HTTP `200`.
2. Run the production build and trigger a live IndexNow ping to `https://api.indexnow.org/indexnow`:
   ```bash
   npm run build
   npm run indexnow -- --live
   ```
   *(Note: `npm run indexnow` sets `INDEXNOW_LIVE=1` and posts `seo/indexnow-payload.json` to `https://api.indexnow.org/indexnow`; during Vercel production builds where `VERCEL=1`, `npm run build` also triggers the ping automatically.)*

---

## 4. How to Update the Monthly "Edithsi AI Work Pay Index" (`src/data/pay-index/YYYY-MM.json` + CSV Regeneration)

On the **5th of every month**, I audit all active listings across **Mercor, micro1, Outlier, Alignerr, Handshake AI, and Mindrift** and publish the monthly Pay Index release:

### Step 4.1: Verify Official Listings & Create `src/data/pay-index/YYYY-MM.json`
1. Visit the official role pages on `work.mercor.com` (for all 8 roles in `src/data/roles.json`) and the public career/role portals of `micro1`, `Outlier`, `Alignerr`, `Handshake AI`, and `Mindrift`.
2. Copy the previous month's JSON snapshot in `src/data/pay-index/` to the new month (e.g., `cp src/data/pay-index/2026-11.json src/data/pay-index/2026-12.json`).
3. Update `month` (`"YYYY-MM"`), `checkedOn` (`"YYYY-MM-DD"`), and any changed `minUsdPerHour`, `maxUsdPerHour`, `rateLabel`, or `status` fields inside `src/data/pay-index/YYYY-MM.json`, `src/data/roles.json`, and `src/data/platforms.json`.
4. Update `CHECKED_ON` in `src/config.ts` to `"YYYY-MM-DD"`.

### Step 4.2: Regenerate the Downloadable Open-Data CSV Files (`CC BY 4.0`)
1. Export the updated rows from `src/data/pay-index/YYYY-MM.json` into:
   - `public/data/edithsi-ai-work-pay-index-YYYY-MM.csv` (the archived monthly snapshot)
   - `public/data/edithsi-ai-work-pay-index-latest.csv` (the canonical latest CSV linked from `/pay-index/` and Dataset JSON-LD)
2. Ensure the CSV header columns remain strictly consistent:
   ```csv
   month,checked_on,platform_id,platform_name,domain,role_title,min_usd_per_hour,max_usd_per_hour,rate_display,payment_method,hours_guaranteed,verification_url,license
   ```

### Step 4.3: Build, Verify & Ping IndexNow
1. Run `npm run build` and verify zero TypeScript or broken-link errors.
2. Run `npm run indexnow -- --live` so Bing, ChatGPT Search, and Perplexity immediately index the updated `/pay-index/` tables and `Dataset` schema.
3. Send the monthly press & data brief using the templates in `/seo/OUTREACH.md`.

---

## 5. Email Forwarding for `hello@edithsi.com`

Because `hello@edithsi.com` is published as my operator contact address on the Privacy Notice, Legal Notice, and site footer, I keep email forwarding active via **ImprovMX** or my domain registrar's MX forwarding:

1. **MX Records:** Point `@` (`edithsi.com`) to `mx1.improvmx.com` (Priority `10`) and `mx2.improvmx.com` (Priority `20`), or my registrar's forwarding MX servers.
2. **SPF TXT Record:** Set `@` TXT record to `v=spf1 include:spf.improvmx.com ~all` (or registrar equivalent).
3. **Alias Verification:** Forward `hello@edithsi.com` to my personal inbox and test delivery monthly.
