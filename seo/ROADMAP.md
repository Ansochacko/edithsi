# Edithsi — 12-Month SEO & Generative Engine Optimization (GEO) Roadmap (`seo/ROADMAP.md`)

**Site:** Edithsi (`https://edithsi.com`)  
**Operator:** Independent contractor based in Helsinki, Finland (always first-person singular `"I"`, never `"we"`; not affiliated with Mercor or any platform reviewed)  
**Baseline Launch Date:** `2026-11-05`  
**Ongoing Publishing Cadence:** **2 quality Answer-First guides/week + monthly Pay Index release on the 5th of each month**  
**12-Month Stretch Goal:** `100,000` cumulative organic search & AI answer engine visits across `en`, `fi`, `sv`, `de`, `fr`, and `es`

---

## 1. Strategic Overview: Answer-First Architecture & One-Canonical-URL Discipline

To rank in both traditional search (Google and Bing) and Generative AI engines (ChatGPT Search, Perplexity, Gemini, Claude, and Google AI Mode), **Edithsi** is built on three structural pillars:

1. **Strict One-Query-Cluster-to-One-Canonical-URL Mapping (`/seo/query-map.csv`):**
   - Every page in my `174`-page foundation (`29` canonical routes × `6` languages: `en`, `fi`, `sv`, `de`, `fr`, `es`) serves a distinct intent without doorway or city-level duplication.
   - All broad "remote jobs from home" / "sivutyö kotoa" variations in a language consolidate into a single honest guide (`/guides/remote-side-jobs-from-home/`).
2. **Answer-First Formatting for GEO Extraction:**
   - Every platform review (`/platforms/<slug>/`), profession hub (`/for/<slug>/`), and guide (`/guides/<slug>/`) opens with a `50–70`-word **Answer-First Key Facts Box** directly below the `<h1>`, followed by structured HTML comparison tables (`<table>`), explicit verification dates (`2026-11-05`), and JSON-LD `@graph` (`Dataset`, `FAQPage`, `Article`, `BreadcrumbList`).
3. **Ongoing Publishing Cadence:**
   - **Weekly:** I research, verify, and publish **2 quality Answer-First guides per week** (expanding deep-dive domain rubric walkthroughs and country-specific tax/contracting documentation).
   - **Monthly (5th of each month):** I verify all role listings across Mercor, micro1, Outlier, Alignerr, Handshake AI, and Mindrift, publish the updated **Edithsi AI Work Pay Index** (`src/data/pay-index/YYYY-MM.json` + `/data/ai-work-pay-index.csv`), ping IndexNow (`npm run indexnow -- --live`), and send my monthly press brief (`OUTREACH.md`).

---

## 2. Month-by-Month 12-Month Milestone Schedule (`Nov 2026 – Oct 2027`)

| Month | Calendar Period | Core SEO & GEO Deliverables | Monthly Pay Index & Outreach Actions (on the 5th) | Target Indexed Pages & Traffic / GEO KPIs |
| :--- | :--- | :--- | :--- | :--- |
| **Month 1** | `Nov 2026` | Verify GSC + Bing Webmaster Tools (`SETUP.md`); submit `/sitemap-index.xml` and `/sitemap.xml`; trigger `npm run indexnow -- --live`; establish baseline across all `20` test queries in `/seo/ai-visibility.csv`. | Release `2026-11` Pay Index baseline (`2026-11-05`); verify LinkedIn & GitHub `sameAs` descriptions (`OUTREACH.md`). | `150` canonical pages (`25 × 6` languages) submitted; first `1,500–3,000` impressions in GSC + Bing. |
| **Month 2** | `Dec 2026` | Publish **2 Answer-First guides/week** focusing on Finnish & English rubric evaluation examples (legal citation grading, clinical vignette safety, Python/TypeScript test-suite debugging). | **Dec 5:** Release `2026-12` Pay Index (`src/data/pay-index/2026-12.json` + CSV); pitch Finnish tech desks (*Tivi*, *Kauppalehti*, *Yle*). | `3,500–6,000` impressions; `300–600` clicks; first citations in Perplexity and ChatGPT Search (`>= 15%` share on `/seo/ai-visibility.csv`). |
| **Month 3** | `Jan 2027` | Complete Phase 1 Native Reviewer Audit (`Section 3`) for **Swedish (`sv`)** (`Skatteverket F-skatt`, `A-kassa`) and **German (`de`)** (`Finanzamt Freiberufler`, `UStG`); maintain **2 Answer-First guides/week**. | **Jan 5:** Release `2027-01` Pay Index (update 2027 YEL & tax brackets); send career newsletter pitches to `Juristiliitto`, `TEK`, `SKTL`, `Tieteentekijät`, `Suomen Ekonomit`, and `Lääkäriliitto`. | `3,000–5,000` monthly organic visits; Top 3 on `google.fi` for `onko mercor luotettava`, `tekoälyn kouluttaja palkka`, and `tekoälytyö verotus toiminimi yel`. |
| **Month 4** | `Feb 2027` | Publish **2 Answer-First guides/week** expanding platform-specific assessment walkthroughs (micro1 coding challenges, Alignerr audio rubrics, Handshake AI academic fellowships). | **Feb 5:** Release `2027-02` Pay Index; pitch Swedish tech media (*Breakit*, *Di Digital*) with Nordic hourly pay comparison data. | `5,500–8,000` monthly visits; `>= 25%` GEO citation share (`5+/20` queries in `/seo/ai-visibility.csv`). |
| **Month 5** | `Mar 2027` | Complete Phase 2 Native Reviewer Audit (`Section 3`) for **French (`fr`)** (`URSSAF micro-entrepreneur`, `France Travail`) and **Spanish (`es`)** (`Agencia Tributaria autónomo`, `RETA`, `SEPE`); maintain **2 Answer-First guides/week**. | **Mar 5:** Release `2027-03` Pay Index; run 90-day GSC + Bing striking-distance title/meta CTR optimization (`Positions 4–15`). | `8,500–11,500` monthly visits; strong impressions growth across `/sv/`, `/de/`, `/fr/`, and `/es/`. |
| **Month 6** | `Apr 2027` | Publish Q1/Q2 6-month historical rate trend tables on `/pay-index/` comparing posted USD rates across all 6 platforms; maintain **2 Answer-First guides/week**. | **Apr 5:** Release `2027-04` Pay Index; pitch 6-month longitudinal AI contractor pay brief to *HS Visio* and *Talouselämä*. | `12,000–15,000` monthly visits (`~35,000` cumulative); `>= 35%` GEO citation share (`7+/20` test queries). |
| **Month 7** | `May 2027` | Audit internal linking depth and `FAQPage` schema coverage across all 6 languages; publish **2 Answer-First guides/week** on tax-return filing season reminders for foreign USD income. | **May 5:** Release `2027-05` Pay Index; verify all `8` Mercor role URLs and `/go/<role>/` redirects. | `15,000–18,000` monthly visits; `15+` authoritative backlinks from Nordic unions, universities, and media. |
| **Month 8** | `Jun 2027` | Expand academic & summer research outreach (`/guides/ai-training-for-phds-and-students/`) ahead of university break; maintain **2 Answer-First guides/week**. | **Jun 5:** Release `2027-06` Pay Index; outreach to Nordic university career services (*Helsingin yliopisto*, *Aalto*, *Turun yliopisto*, *Åbo Akademi*, *Hanken*). | `17,500–21,000` monthly visits (`~70,000` cumulative). |
| **Month 9** | `Jul 2027` | Refresh all 6 platform reviews (`/platforms/mercor/`, `micro1`, `outlier`, `alignerr`, `handshake-ai`, `mindrift`) with mid-year payout and vetting policy updates; maintain **2 Answer-First guides/week**. | **Jul 5:** Release `2027-07` Pay Index; run quarterly spam-policy and zero-cannibalization audit (`/seo/query-map.csv`). | `20,000–23,000` monthly visits; `>= 45%` GEO citation share (`9+/20` test queries). |
| **Month 10** | `Aug 2027` | Publish **2 Answer-First guides/week** tailored to autumn academic & specialist onboarding across Europe; optimize top-converting `/for/<slug>/` audience pages. | **Aug 5:** Release `2027-08` Pay Index; review server-log AI crawler coverage (`OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`, `Google-Extended`). | `22,000–25,000` monthly visits. |
| **Month 11** | `Sep 2027` | Conduct full multilingual `hreflang`, accessibility (`WCAG 2.2 AA`), and Core Web Vitals (`0 KB` client JS) regression audit; maintain **2 Answer-First guides/week**. | **Sep 5:** Release `2027-09` Pay Index; autumn press pitch to Finnish & Nordic business/tech desks. | `24,000–27,000` monthly visits. |
| **Month 12** | `Oct 2027` | Publish the **Annual Edithsi AI Work Pay Index Report** (`12` consecutive monthly snapshots from `2026-11` to `2027-10` under `CC BY 4.0`); maintain **2 Answer-First guides/week**. | **Oct 5:** Release `2027-10` Pay Index & 12-Month Annual Benchmark Dataset. | **`100,000+` cumulative organic & AI referral visits**; `>= 50%` GEO citation share (`10+/20` queries); `8,000+` `/go/<role>/` clicks. |

---

## 3. Native Review Workflow for `sv`, `de`, `fr`, and `es`

To ensure every localized page reads naturally to credentialed specialists in Sweden, Germany/DACH, France, and Spain—and to prevent any machine-translation quality issues under Google's Spam Policies—I follow a strict **5-Step Native Review Workflow** for `sv`, `de`, `fr`, and `es`:

1. **Source Grounding in Verified Facts (`src/data/roles.json`, `src/data/platforms.json`, `src/data/pay-index/YYYY-MM.json`):**
   - Every localized page pulls hourly pay rates, verification dates (`2026-11-05`), and platform capabilities from the same single-source JSON data files so numbers never drift across languages.
2. **Specialist Native Reviewer Assignment:**
   - For each language (`sv`, `de`, `fr`, `es`), I commission a C2/native specialist familiar with local freelance administration:
     - **Swedish (`sv`):** Verify terminology for *enskild firma*, *F-skattsedel*, *Skatteverket*, *egenavgifter*, and *A-kassa*.
     - **German (`de`):** Verify terminology for *Freiberufler (§ 18 EStG)*, *Finanzamt*, *Umsatzsteuer-Voranmeldung (Drittland-Leistung)*, and *Agentur für Arbeit*.
     - **French (`fr`):** Verify terminology for *micro-entrepreneur (BNC)*, *URSSAF*, *impôt sur le revenu*, and *France Travail*.
     - **Spanish (`es`):** Verify terminology for *autónomo (RETA)*, *Agencia Tributaria (AEAT — Modelo 130 / 303)*, and *SEPE*.
3. **4-Point Editorial Verification Checklist:**
   - **First-Person Singular Voice:** Confirm the text uses first-person singular (`jag` / `ich` / `je` / `yo`), never first-person plural (`vi` / `wir` / `nous` / `nosotros`).
   - **Zero Income Promises:** Verify that every rate mention explicitly states that hours and projects are not guaranteed (`ej garanterat` / `nicht garantiert` / `non garanti` / `no garantizado`).
   - **Transparent Referral Disclosures:** Confirm localized ad stamps (`REKLAM`, `WERBUNG`, `PUBLICITÉ`, `PUBLICIDAD`) and `rel="sponsored noopener noreferrer"` on all `/go/<role>/` links.
   - **Answer-First Structure:** Confirm the `50–70`-word lead summary box directly answers the target query in natural local idiom.
4. **Update Verification Metadata & Rebuild:**
   - Record the review completion date and run `npm run build` to regenerate all static HTML routes and `/sitemap.xml`.
5. **IndexNow Submission:**
   - Run `npm run indexnow -- --live` to notify Bing, ChatGPT Search, and Perplexity of the updated localized pages.

---

## 4. Weekly & Monthly Publishing Routine Checklist

### Weekly Cadence (Every Tuesday & Thursday — 2 Answer-First Guides/Week)
- [ ] Check `/seo/query-map.csv` BEFORE drafting to ensure the topic maps to a single canonical URL and does not cannibalize an existing page.
- [ ] Write a `50–70`-word **Answer-First Key Takeaways** summary at the top of the guide citing concrete hourly rates (`src/data/roles.json`), verification date (`CHECKED_ON`), and official regulatory links (`Vero.fi`, `ETK.fi`, `Kela.fi`, etc.).
- [ ] Include at least one structured HTML `<table>` and `3–5` FAQ items (`FAQPage` JSON-LD).
- [ ] Run `npm run build` and `npm run indexnow -- --live`.

### Monthly Cadence (On the 5th of Every Month — Monthly Pay Index Release)
- [ ] Audit all 8 Mercor role URLs (`src/data/roles.json`) and all 6 platform career pages (`src/data/platforms.json`).
- [ ] Create `src/data/pay-index/YYYY-MM.json` and regenerate `public/data/edithsi-ai-work-pay-index-YYYY-MM.csv` + `public/data/edithsi-ai-work-pay-index-latest.csv` (`SETUP.md` Section 4).
- [ ] Update `CHECKED_ON` in `src/config.ts`, rebuild (`npm run build`), and ping IndexNow (`npm run indexnow -- --live`).
- [ ] Run the 20-query manual GEO check across ChatGPT, Perplexity, Gemini, Claude, and Google AI Mode (`/seo/ai-visibility.csv`) and fill out `/seo/REPORT.md`.
- [ ] Send the monthly **Edithsi AI Work Pay Index** press brief (`OUTREACH.md` Section 2).
