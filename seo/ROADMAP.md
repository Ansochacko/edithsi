# Edithsi — 12-Month SEO & Multilingual Growth Roadmap (`ROADMAP.md`)

**Site:** Edithsi (`https://edithsi.com`)  
**Operator:** Independent contractor in Helsinki, Finland (always first-person `"I"`, never `"we"`; not affiliated with Mercor)  
**Baseline Launch Date:** `2026-11-05`  
**12-Month Stretch Goal:** `100,000` cumulative organic search visits across `en`, `fi`, `sv`, `de`, `fr`, and `es`

---

## 1. Strategic Overview: How a Single-Operator Static Site Reaches 100,000 Organic Visits

Generic English keywords like `"ai training jobs"` face heavy competition from global job boards. However, **Edithsi** holds an asymmetric advantage in three areas:
1. **Nordic & European Jurisdiction Specificity:** Answering the exact tax, pension, and unemployment benefit questions that US platforms leave unanswered (`Vero.fi`, `YEL 2026`, `Kela/TYJ`, `Skatteverket`, `Finanzamt`, `URSSAF`, `Agencia Tributaria`).
2. **Credentialed Profession Hubs:** Targeting high-value, low-competition specialist queries (`$100–150/h` licensed lawyers, `$60–180/h` clinicians, `$70–150/h` software engineers, and `$35–50/h` Finnish/French/Spanish language experts).
3. **Radical First-Person Transparency & Speed:** Shipping a 100/100 Lighthouse static site with zero tracking cookies, explicit `AD / MAINOS` disclosures, and honest warnings that work is never guaranteed.

---

## 2. Milestone Schedule: Month 1, Month 3, Month 6, and Month 12

### Month 1 (`Nov–Dec 2026`): Foundation, Indexing & EN/FI Hub-and-Spoke Launch
- **Technical & Indexing Setup:**
  - Verify `edithsi.com` (and custom domain) in Google Search Console via Cloudflare DNS TXT record (`SETUP.md`).
  - Submit `/sitemap-index.xml` and `/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
  - Configure IndexNow key verification and run `npm run indexnow`.
  - Run Google Keyword Planner in Expert Mode to replace all 240 `TBD` search volume entries in `/seo/keywords.csv`.
- **Content Velocity (`58` Indexed Pages):**
  - **30 Core Static Pages:** Home, Open Roles (`/roles/`), How It Works & FAQ (`/how-it-works/`), Privacy, and Legal across all 6 languages (`en`, `fi`, `sv`, `de`, `fr`, `es`).
  - **12 EN + FI Profession Hubs (`PUBLISHED`):** All 6 profession hubs in English (`/ai-training-for-lawyers/`, etc.) and Finnish (`/fi/tekoalytyo-juristeille/`, etc.).
  - **16 EN + FI Editorial Spokes (`PUBLISHED`):** All 8 high-intent spokes in English and Finnish (Mercor review, AI interview guide, Mercor vs Outlier vs micro1, Finland tax/YEL guide, Kela/TYJ unemployment guide, scam prevention, RLHF glossary, and Open Pools Ledger).
- **Month 1 KPIs:**
  - `58` pages indexed in GSC and Bing with `0` `hreflang` or canonical errors.
  - `1,000–2,500` organic impressions; first `150–400` organic clicks (primarily Finnish long-tail queries: `mercor kokemuksia`, `tekoälyn kouluttaja`, `toiminimi verotus ulkomainen asiakas`).

---

### Month 3 (`Jan–Feb 2027`): Native Review Unlock (`SV` + `DE`) & Institutional Outreach
- **Content Velocity (`86` Indexed Pages):**
  - Commission native human review for **Swedish (`sv`)** and **German (`de`)** hubs (12 pages) and spokes (16 pages) following the strict native-reviewer workflow in Section 3 below.
  - Change frontmatter from `reviewStatus: "NEEDS NATIVE REVIEW"` / `draft: true` to `reviewStatus: "REVIEWED"` / `draft: false` only after native sign-off on Skatteverket/Försäkringskassan (`sv`) and Finanzamt/Bundesagentur für Arbeit (`de`) citations.
  - Update all role cards and Open Ledger tables with a fresh monthly `CHECKED_ON` verification pass against `work.mercor.com`.
- **Off-Page Outreach (`OUTREACH.md`):**
  - Send personalized first-person pitches for the non-commercial Finnish tax/YEL and scam-prevention guides to **SKTL**, **TEK**, **Juristiliitto**, **Tieteentekijät**, **Suomen Ekonomit**, and **Lääkäriliitto**, plus career services at **University of Helsinki**, **Aalto University**, **University of Turku**, and **Åbo Akademi**.
- **Month 3 KPIs:**
  - `86` indexed pages (`en`, `fi`, `sv`, `de` fully live).
  - `8,000–12,000` monthly organic visits (`~18,000` cumulative visits).
  - Top 3 rankings in Finland (`google.fi`) for `mercor kokemuksia`, `mercor suomi`, `suomen kielen asiantuntija etätyö`, and `tekoälyn kouluttaja`.
  - `5–10` authoritative `.fi` / `.se` / university or union resource backlinks.

---

### Month 6 (`May 2027`): Full 6-Language Coverage (`FR` + `ES`) & CTR Optimization Loop
- **Content Velocity (`114` Indexed Pages):**
  - Complete native human review and legal/tax verification for **French (`fr`)** (URSSAF / France Travail) and **Spanish (`es`)** (Agencia Tributaria / RETA / SEPE) hubs (12 pages) and spokes (16 pages).
  - Note: Because `Language & Audio Expert ($35–50/h)` explicitly lists **Finnish, French, and Spanish**, the `/fr/entrainement-ia-pour-linguistes/` and `/es/entrenamiento-ia-para-expertos-en-idiomas/` hubs are prioritized first (`priority=1`).
- **Linkable Asset Launch:**
  - Launch the anonymous, cookieless *"State of AI Training Work in Finland & the Nordics"* survey (`OUTREACH.md` Section 6) and publish the open-data report in English and Finnish.
- **Search Console Iteration Loop:**
  - Run the first full 90-day GSC query audit (Section 4) to rewrite `<title>` and `<meta name="description">` tags on pages ranking in positions `4–15` with below-average CTR.
- **Month 6 KPIs:**
  - All `114` pages (`30` core + `36` hubs + `48` spokes) live and indexed across all 6 languages.
  - `15,000–20,000` monthly organic visits (`~45,000` cumulative visits).
  - `15+` referring domains from Nordic/European universities, professional associations, and tech media.

---

### Month 12 (`Nov 2027`): Authority Compounding & 100,000 Cumulative Visits Stretch Target
- **Content & Freshness Maintenance:**
  - Execute 12 consecutive monthly `CHECKED_ON` audits of `src/data/roles.json` so pay ranges, active links, and closed pools are never stale.
  - Update tax spokes for `2027/2028` YEL thresholds (`ETK.fi`), Vero.fi foreign income instructions, URSSAF ceilings, and AEAT autónomo brackets.
  - Expand high-performing language hubs with concrete rubric walkthroughs (e.g., how legal citation checking or Finnish idiomatic fluency is graded).
- **Month 12 KPIs:**
  - **Cumulative Organic Visits:** `100,000+` across the 12-month period (`~22,000–28,000` monthly run rate by Month 12).
  - **Cumulative Outbound "Apply on Mercor" Clicks:** `8,000+` high-intent specialist clicks (`>= 8%` click-through from role hubs/directory).
  - **Technical Health:** `100%` Ahrefs Site Audit health score; `98–100` Lighthouse Performance, Accessibility, Best Practices, and SEO across all templates.

---

## 3. Native-Reviewer Workflow for `sv`, `de`, `fr`, and `es` Articles

To protect domain authority and comply with Google's Helpful Content and Scaled Content Abuse policies, **I never publish unreviewed machine-translated hubs or spokes.** All non-core articles in `/seo/articles/{sv,de,fr,es}/` are gated behind the following 5-step human workflow:

1. **Draft Stub Creation (`draft: true`):**
   - Stubs in `/seo/articles/{sv,de,fr,es}/` carry YAML frontmatter `reviewStatus: "NEEDS NATIVE REVIEW"` and `draft: true`. Our build pipeline excludes any file with `draft: true` from production output and `/sitemap.xml`.
2. **Hiring a Native Domain Reviewer:**
   - Recruit a native speaker of the target language (`sv`, `de`, `fr`, `es`) who has firsthand experience with local freelance/self-employment administration (e.g., a native Swedish translator familiar with *F-skatt*, or a German freelancer familiar with *Finanzamt Freiberufler* rules).
3. **4-Point Native Audit Checklist:**
   - **Terminology & Idiom:** Replace literal translations (e.g., ensure `"RLHF"`, `"rubric"`, `"independent contractor"`, and `"talent pool"` use natural local industry terms).
   - **Tax & Social Security Accuracy:** Verify every citation to `Skatteverket` / `Försäkringskassan` (`sv`), `Finanzamt` / `Bundesagentur für Arbeit` (`de`), `URSSAF` / `France Travail` (`fr`), or `Agencia Tributaria` / `SEPE` (`es`), and retain the explicit non-tax-advice disclaimer.
   - **Mandatory Facts & First-Person Voice:** Confirm the text uses first-person singular (`jag` / `ich` / `je` / `yo`), never first-person plural, preserves the exact USD hourly pay ranges from `src/data/roles.json` (`CHECKED_ON: 2026-11-05`), and states clearly that work is not guaranteed.
   - **Ad Disclosure Compliance:** Verify localized ad labels (`REKLAM`, `WERBUNG`, `PUBLICITÉ`, `PUBLICIDAD`) and `rel="sponsored noopener noreferrer"` on all Mercor referral links.
4. **Sign-Off in YAML Frontmatter:**
   - Once verified, update frontmatter to:
     ```yaml
     reviewStatus: "NATIVE_REVIEWED"
     reviewedBy: "[Native Reviewer Name / Initials]"
     reviewedOn: "YYYY-MM-DD"
     draft: false
     ```
5. **Deploy & IndexNow Ping:**
   - Build the static site (`npm run build`), verify `hreflang` reciprocity in `/sitemap.xml`, and run `npm run indexnow`.

---

## 4. Monthly Google Search Console (GSC) Iteration Loop

On the 1st of every month (while filling out `/seo/REPORT.md`), I execute this 60-minute optimization loop:

1. **Striking-Distance Keyword Upgrade (Positions `5–15`):**
   - Filter GSC Queries by `Position > 4` and `Position < 16`, sorted by Impressions descending.
   - Add a dedicated `<h2>` or FAQ item on the target page directly answering the exact phrasing of those queries using factual data.
2. **High-Impression / Low-CTR Title Testing (`Impressions > 500`, `CTR < 3.5%`):**
   - Test adding concrete factual anchors to the `<title>` and `<meta name="description">`:
     - Rate range + verification date: `($60–150/h · Checked 2026-11-05)`
     - Explicit non-affiliation + zero-cost clarity: `(Independent Guide · Free to Apply)`
3. **Query Cannibalization Check:**
   - If two pages compete for the same query (e.g., `/roles/` and `/open-ai-training-pools-ledger/`), differentiate their `<title>` intent (`Apply to 8 Open Pools` vs. `Historical Rate Ledger & Pool Status`) and strengthen internal anchor text pointing to the primary canonical target mapped in `/seo/keywords.csv`.
4. **Zero-Result / Spam Query Filtering:**
   - Check GSC queries for any impressions coming from get-rich-quick or guaranteed-income phrasing (`easy money`, `helppoa rahaa`). Ensure our copy reinforces upfront that tasks require rigorous vetting and hours are never guaranteed, keeping bounce/pogo-sticking rates low.
