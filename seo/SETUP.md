# Edithsi (`https://edithsi.com`) — Search Console, IndexNow & Email Setup (`seo/SETUP.md`)

I wrote this step-by-step setup guide for **Edithsi** (`https://edithsi.com`) so I can verify domain ownership in Google Search Console, connect Bing Webmaster Tools + IndexNow, and configure free email forwarding for `hello@edithsi.com`.

---

## 1. Google Search Console — Domain Property (DNS TXT) & Sitemaps

### Step 1.1: Create a Domain Property
1. Open **Google Search Console** (`https://search.google.com/search-console/`).
2. Click the property selector in the top-left corner and choose **+ Add property**.
3. Select the **Domain** option on the left (this covers `https://edithsi.com`, `https://www.edithsi.com`, and all language subdirectories in one property).
4. Enter:
   ```text
   edithsi.com
   ```
5. Click **Continue**.

### Step 1.2: Verify via DNS TXT Record
1. Copy the verification string provided by Google:
   ```text
   google-site-verification=YOUR_UNIQUE_TOKEN_HERE
   ```
2. Open the DNS management panel for `edithsi.com` (at your domain registrar or Vercel DNS) and add a new **TXT** record:
   - **Type:** `TXT`
   - **Name / Host:** `@` (root domain `edithsi.com`)
   - **TTL:** `3600` (or Automatic)
   - **Value / Content:** `google-site-verification=YOUR_UNIQUE_TOKEN_HERE`
3. Wait 2–5 minutes and click **Verify** in Google Search Console.

### Step 1.3: Submit Both Sitemaps
1. In the left sidebar of Google Search Console, open **Indexing → Sitemaps**.
2. Submit the Astro sitemap index:
   ```text
   https://edithsi.com/sitemap-index.xml
   ```
3. Also submit the direct multilingual hreflang sitemap:
   ```text
   https://edithsi.com/sitemap.xml
   ```
4. Confirm both show status **Success** (`72` localized URLs across `en`, `fi`, `sv`, `de`, `fr`, `es`, including all 7 `/for/<slug>/` audience pages per language).

---

## 2. Bing Webmaster Tools Import & IndexNow Verification

### Step 2.1: Import from Google Search Console
1. Open **Bing Webmaster Tools** (`https://www.bing.com/webmasters/`).
2. Choose **Import from Google Search Console** and select `edithsi.com`.
3. Confirm that `https://edithsi.com/sitemap-index.xml` and `https://edithsi.com/sitemap.xml` are listed under **Sitemaps**.

### Step 2.2: Verify IndexNow Key File & Ping
Edithsi includes a static IndexNow verification key file and post-build payload generator:
- **Key:** `7f9b2c4e8a1d6f3b5e0c9a8d2f4b7e1c`
- **Public Verification URL:** `https://edithsi.com/7f9b2c4e8a1d6f3b5e0c9a8d2f4b7e1c.txt`
- **Generated Payload:** `seo/indexnow-payload.json` (regenerated automatically on `npm run build` by `scripts/indexnow.mjs`).

Once `https://edithsi.com` is live on Vercel:
1. Verify that `https://edithsi.com/7f9b2c4e8a1d6f3b5e0c9a8d2f4b7e1c.txt` returns `7f9b2c4e8a1d6f3b5e0c9a8d2f4b7e1c` with HTTP `200`.
2. Trigger a manual IndexNow ping anytime with:
   ```bash
   npm run indexnow
   ```
   (During Vercel production builds where `VERCEL=1`, `npm run build` automatically pings `https://api.indexnow.org/indexnow`.)

---

## 3. Email Forwarding for `hello@edithsi.com` (ImprovMX or Registrar MX)

Because `hello@edithsi.com` is published as the operator contact address on the Privacy Notice, Legal Notice, and site footer, set up email forwarding before launch using either **Option A (ImprovMX)** or **Option B (Your Domain Registrar's built-in email forwarding)**.

### Option A: Free Email Forwarding via ImprovMX (`https://improvmx.com`)
1. Go to `https://improvmx.com`, enter `edithsi.com` and your personal email address, and click **Create a free alias**.
2. In your DNS settings for `edithsi.com`, add the two **MX** records and one **TXT (SPF)** record shown by ImprovMX:
   - **MX Record 1:** Host `@`, Value `mx1.improvmx.com`, Priority `10`
   - **MX Record 2:** Host `@`, Value `mx2.improvmx.com`, Priority `20`
   - **TXT Record (SPF):** Host `@`, Value `v=spf1 include:spf.improvmx.com ~all`
3. In ImprovMX dashboard, set the alias `hello@edithsi.com` (or catch-all `*@edithsi.com`) to forward to your personal inbox.
4. Send a test email from an external account to `hello@edithsi.com` to confirm delivery.

### Option B: Built-in Email Forwarding at Your Registrar (Namecheap / Porkbun / Cloudflare / Gandi)
1. Open your domain registrar's **Email Forwarding** tab for `edithsi.com`.
2. Click **Add Forwarder**:
   - **Alias:** `hello` (`hello@edithsi.com`)
   - **Forward to:** your personal email address
3. Allow the registrar to automatically add its MX and SPF TXT records to `edithsi.com` (or copy its MX + SPF records into Vercel DNS if Vercel manages your nameservers).
4. Send a test email to `hello@edithsi.com` and verify receipt before going live.
