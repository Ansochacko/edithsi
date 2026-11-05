# Edithsi (`https://edithsi.com`)

**Edithsi** is a production-ready, static 6-language reference guide (`en`, `fi`, `sv`, `de`, `fr`, `es`) built with **Astro**, **TypeScript**, and **plain CSS** (`DESIGN.md` custom properties) that helps credentialed professionals in Finland and Europe find remote AI-training work on Mercor's official listings, organized by profession (`"For you"`).

- **Independent & Transparent:** Not affiliated with, endorsed, or sponsored by Mercor. Operated by one person in Helsinki (`"I"`, never `"we"`). Never marketed as an AI or "super intelligence"; zero Marvel/EDITH references.
- **Zero Third-Party Requests:** Self-hosted WOFF2 fonts (`Familjen Grotesk` and `Source Serif 4`), build-time typographic Open Graph PNGs, zero cookies, zero analytics scripts, and strict Content-Security-Policy (`self` only).
- **Cookieless Referral Tracking (`/go/<role>`):** Every `"Apply on Mercor"` link routes through `/go/<role>/?src=<page-or-audience>&referralCode=02e0c12a-d634-4738-9686-04f28f31f52b` (counted only in short-term server logs on Vercel) to the official Mercor listing with `rel="sponsored noopener noreferrer"` and a localized `"referral link · ad"` label.

---

## 1. Before You Launch: Operator Details & Legal Review
1. Open [`src/config.ts`](src/config.ts) and replace the placeholder fields in `OPERATOR`:
   ```ts
   export const OPERATOR = {
     name: "[Your name]",
     city: "Helsinki",
     email: "hello@edithsi.com",
     businessId: "[Y-tunnus or empty]",
   } as const;
   ```
2. Review the Privacy Notice ([`src/components/views/PrivacyView.astro`](src/components/views/PrivacyView.astro)) and Legal Notice ([`src/components/views/LegalView.astro`](src/components/views/LegalView.astro)) with a qualified lawyer before launch.
3. Have a native speaker review [`src/i18n/sv.json`](src/i18n/sv.json), [`src/i18n/de.json`](src/i18n/de.json), [`src/i18n/fr.json`](src/i18n/fr.json), and [`src/i18n/es.json`](src/i18n/es.json) (and the corresponding sections in [`src/data/audiencePages.ts`](src/data/audiencePages.ts)), which are marked `"NEEDS NATIVE REVIEW"`.

---

## 2. Deploying on Vercel & Connecting `edithsi.com`

### Step A — Import Repository in Vercel
1. Push this repository to your GitHub account.
2. Log in to **Vercel** (`https://vercel.com/new`) and click **Add New… → Project**.
3. Import your GitHub repository.
4. Confirm the build settings (Vercel auto-detects Astro):
   - **Framework Preset:** `Astro`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Do **not** enable Vercel Web Analytics or Vercel Speed Insights (keeps the site 100% script-free and cookie-free).
6. Click **Deploy**.

### Step B — Add `edithsi.com` and `www.edithsi.com` Domains
1. In your Vercel project dashboard, go to **Settings → Domains**.
2. Enter `edithsi.com` and click **Add**.
3. Choose the option to **Add `www.edithsi.com` and redirect it to `edithsi.com`** (with `edithsi.com` set as the **Primary** domain, 308 Permanent Redirect — this is also enforced in [`vercel.json`](vercel.json)).
4. At your domain registrar's DNS settings, add the exact DNS records shown by Vercel:
   - **Apex domain (`@` / `edithsi.com`):** Type `A`, Name `@`, Value `76.76.21.21`
   - **Subdomain (`www` / `www.edithsi.com`):** Type `CNAME`, Name `www`, Value `cname.vercel-dns.com.`
5. Wait a few minutes for Vercel to verify DNS and automatically issue Let's Encrypt TLS certificates for both `edithsi.com` and `www.edithsi.com`.

---

## 3. Maintenance Tasks

### How to Edit Roles (`src/data/roles.json`)
1. Open [`src/data/roles.json`](src/data/roles.json).
2. Each role entry has:
   - `id`: Unique slug used in `/go/<id>/` (also update [`vercel.json`](vercel.json) `redirects` if you add or change a role `id` or `listingUrl`).
   - `field`: `'law' | 'medicine' | 'tech' | 'finance' | 'language' | 'general'`
   - `title`: Role title
   - `pay`: Posted pay range string (e.g. `"$70–150/h"` or `"rate set per project"`)
   - `maxPay` & `minPay`: Numeric values used for sorting by `"Highest pay"` (use `-1` for `"rate set per project"` so it always sorts last).
   - `whoItSuits`: Qualification summary
   - `audiences`: Array of audience slugs from `src/data/audiences.json` (e.g. `["office", "finance"]`).
   - `listingUrl`: Official Mercor public listing URL (without `?referralCode=`, which is appended automatically).
3. Update the matching localized role titles and descriptions under `rolesData` in `src/i18n/{en,fi,sv,de,fr,es}.json`.

### How to Edit Audience Groups (`src/data/audiences.json` & `src/data/audiencePages.ts`)
1. Open [`src/data/audiences.json`](src/data/audiences.json) to edit the 7 audience definitions (`software`, `medical`, `legal`, `finance`, `language`, `office`, `general`).
2. Open `src/i18n/{lang}.json` (`audiences` object) to update the localized labels, `"I work in:"` short choices, and descriptions.
3. Open [`src/data/audiencePages.ts`](src/data/audiencePages.ts) to edit the localized H1, paragraphs, `"Before you apply"` checklist, and 3 FAQ items for any `/for/<slug>/` page.
   - Note: Every published audience page must have at least **150 words** of unique, useful text (`countAudienceUniqueWords` enforces this automatically; any page below 150 words is automatically marked `"NEEDS CONTENT"` and `noindex`).

### How to Update `CHECKED_ON`
1. Open [`src/config.ts`](src/config.ts) and update `CHECKED_ON = "YYYY-MM-DD"`.
2. Run `npm run build` to regenerate all pages, sitemaps (`lastmod`), and Open Graph images with the new verification date.

### How to Add a New Language
1. Create `src/i18n/<code_iso>.json` copying the structure of [`src/i18n/en.json`](src/i18n/en.json).
2. Add the language code to `LANGUAGES` and `NON_DEFAULT_LANGUAGES` in [`src/i18n/index.ts`](src/i18n/index.ts), `locales` in [`astro.config.mjs`](astro.config.mjs), `ogLocaleMap` in [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro), `AUTHOR_JOB_TITLES` in [`src/utils/schema.ts`](src/utils/schema.ts), `AUTHOR_COPY` in [`src/components/AuthorBox.astro`](src/components/AuthorBox.astro), and each audience entry in [`src/data/audiencePages.ts`](src/data/audiencePages.ts).

### How to Build & Redeploy
- Build locally:
  ```bash
  npm run build
  ```
- Redeploy to production on Vercel:
  ```bash
  git add -A
  git commit -m "Update roles and CHECKED_ON date"
  git push origin main
  ```
  Vercel automatically builds and deploys every push to `main`.
