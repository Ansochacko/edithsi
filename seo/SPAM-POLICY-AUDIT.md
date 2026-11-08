# Edithsi — Google May 2026 Spam Policies & Content Quality Audit (`seo/SPAM-POLICY-AUDIT.md`)

**Audit Date:** `2026-11-05`  
**Site:** Edithsi (`https://edithsi.com`)  
**Operator:** Independent contractor based in Helsinki, Finland (always first-person singular `"I"`, never `"we"`; not affiliated with Mercor or any platform reviewed)  
**Policy Reference:** Google Search Spam Policies (including the **May 2026 Spam Policy Updates**, which explicitly extend Google's core spam enforcement, scaled content abuse rules, and structured-data guardrails to **Google AI Overviews** and **Google AI Mode**).  
**Total Indexable Canonical URLs Audited:** `174` static HTML pages (`29` canonical routes × `6` languages: `en`, `fi`, `sv`, `de`, `fr`, `es`) + `9` non-indexed `/go/<role>/` referral redirect routes (`noindex, nofollow`) + `/404` (`noindex`).

---

## 1. Google May 2026 Spam Policy Guardrail Verification Matrix

| Google May 2026 Spam Policy Guardrail | Implementation & Verification on `https://edithsi.com` | Audit Status |
| :--- | :--- | :---: |
| **Zero Scaled Content Abuse / Doorway Pages** | I generate zero city×profession matrix pages (e.g., no `/helsinki-lawyer-ai-jobs/`, `/tampere-lawyer-ai-jobs/`) and zero near-duplicate keyword-variation pages. Every query in `/seo/query-map.csv` (`240` queries across `6` languages) maps to **one** canonical page. | **PASS (0 violations)** |
| **Zero Keyword Stuffing, Hidden Text, or Cloaking** | Verified via DOM & CSS inspection across all `174` indexable pages. All content is visible, human-readable first-person prose (`"I"`). Server responses to `Googlebot`, `Google-Extended`, `OAI-SearchBot`, `PerplexityBot`, and human browsers are 100% identical. | **PASS (0 violations)** |
| **Zero Fabricated Reviews, Testimonials, or Stats** | Zero invented user quotes, fake `AggregateRating` / `Review` stars, fabricated contractor earnings claims, or fake media badges. All hourly rates cite `src/data/roles.json`, `src/data/platforms.json`, and `src/data/pay-index/2026-11.json` (`checkedOn: 2026-11-05`). | **PASS (0 violations)** |
| **Zero Income Promises or Get-Rich-Quick Claims** | Every page and role card states the posted USD rate range alongside an explicit warning that work volume and weekly hours are **never guaranteed** (`not guaranteed` / `ei taattu` / `ej garanterat` / `nicht garantiert` / `non garanti` / `no garantizado`). Risky queries (`"easy money online"`, `"guaranteed AI income"`) are explicitly marked `EXCLUDE` in `/seo/query-map.csv`. | **PASS (0 violations)** |
| **Zero Mercor or Third-Party Trademark Misuse** | The brand name **Edithsi** (`https://edithsi.com`) is a standalone independent identity with zero trademark confusion, zero comic/movie acronym references, and an explicit non-affiliation disclaimer in the header/footer of every page (`"I am an independent contractor in Helsinki, not affiliated with Mercor or any platform reviewed"`). | **PASS (0 violations)** |
| **Zero `JobPosting` Schema Misuse** | Because Edithsi is an independent informational guide and pay index—not the direct employer of record—zero `JobPosting` JSON-LD schemas are emitted on any page. Only accurate `Organization`, `Person`, `WebSite`, `WebPage`, `Dataset`, `Article`, `FAQPage`, and `BreadcrumbList` schemas are used. | **PASS (0 violations)** |
| **Affiliate & Referral Link Transparency (`rel="sponsored"`)** | Every outbound Mercor referral link routes through `/go/<role>/` with `rel="sponsored noopener noreferrer"`, visible localized ad disclosures (`AD` / `MAINOS` / `REKLAM` / `WERBUNG` / `PUBLICITÉ` / `PUBLICIDAD`), and a dedicated `/disclosure/` page in all 6 languages. | **PASS (0 violations)** |
| **Site Reputation Abuse & Link Spam Compliance** | Zero third-party hosted parasite content, zero paid links, and zero link exchanges (`seo/OUTREACH.md`). | **PASS (0 violations)** |

---

## 2. Table of Consolidated, Merged & Noindexed Routes (Preventing Cannibalization & Thin Pages)

To guarantee that every search query in `/seo/query-map.csv` resolves to **one** authoritative canonical URL—and to eliminate duplicate or thin pages that could trigger Google's May 2026 Scaled Content Abuse or Doorway filters in Search, AI Overviews, and AI Mode—I executed the following architectural consolidations:

| Legacy / Potential Duplicate Source | Consolidated Canonical Destination (`en` + `/{lang}/...`) | Consolidation & Spam-Compliance Rationale |
| :--- | :--- | :--- |
| Legacy standalone `/seo/articles/{lang}/is-mercor-legit-review.md` drafts | `/platforms/mercor/` (`/{lang}/platforms/mercor/`) | Consolidated standalone Mercor review articles into the canonical `/platforms/mercor/` review template so `"is Mercor legit"`, `"Mercor review"`, and `"Mercor hourly pay"` map to a single authoritative URL per language. |
| Legacy standalone `/seo/articles/{lang}/mercor-vs-outlier-vs-micro1.md` & `/open-ai-training-pools-ledger.md` drafts | `/compare/` (`/{lang}/compare/`) & `/pay-index/` (`/{lang}/pay-index/`) | Merged multi-platform comparison drafts into the canonical 6-platform comparison matrix (`/compare/`) and the monthly open-data **Edithsi AI Work Pay Index** (`/pay-index/`), preventing overlapping comparison pages. |
| Legacy standalone `/seo/articles/{lang}/mercor-ai-interview-guide.md` drafts | `/guides/ai-interview-preparation/` (`/{lang}/guides/ai-interview-preparation/`) | Consolidated platform interview tips into one comprehensive, cross-platform AI video interview preparation guide covering Mercor, micro1, and rubric assessments. |
| Legacy standalone `/seo/articles/{lang}/ai-training-taxes-finland-guide.md` drafts + `toiminimi` / `ennakkovero` / `YEL 2026` query variants | `/guides/taxes-toiminimi-yel-finland/` (`/{lang}/guides/taxes-toiminimi-yel-finland/`) | Consolidated all Finnish and European contractor tax, VAT (`Vero.fi`), prepayment tax (`ennakkovero`), and `YEL 2026` (`ETK.fi`) queries into a single comprehensive guide per language rather than spinning up thin sub-topic pages. |
| Legacy standalone `/seo/articles/{lang}/ai-training-unemployment-benefits-finland.md` drafts | `/guides/unemployment-benefits-ai-work/` (`/{lang}/guides/unemployment-benefits-ai-work/`) | Consolidated Kela, unemployment fund (*työttömyyskassa* / *A-kassa*), and irregular side-income (*soviteltu päiväraha*) queries into one canonical guide per language. |
| Legacy standalone `/seo/articles/{lang}/how-to-spot-fake-ai-job-scams.md` drafts | `/guides/avoid-ai-job-scams/` (`/{lang}/guides/avoid-ai-job-scams/`) | Consolidated Telegram/WhatsApp advance-fee scam warnings and domain verification checklists into one canonical consumer-protection guide per language. |
| Legacy standalone `/seo/articles/{lang}/ai-training-glossary-rlhf-evals-rubrics.md` drafts | `/glossary/` (`/{lang}/glossary/`) | Consolidated RLHF, rubric evaluation, SFT, and red-teaming definitions into the canonical `/glossary/` route per language. |
| Two separate legal roles (`Legal Expert (licensed lawyer)` `$100–150/h` & `Legal Expert` `$60–150/h`) | `/for/legal/` (`/{lang}/for/legal/`) | Merged both legal pools into a single Legal Audience Hub (`/for/legal/`) so lawyers and LL.M. (*OTM*) graduates can compare bar-licensed vs. general legal requirements side by side without doorway splitting. |
| Broad remote-work queries (`"remote jobs Finland"`, `"side jobs from home"`, `"etätyö kotoa"`, `"sivutyö kotoa"`, `"extrajobb hemifrån"`, `"Nebenjob von zu Hause"`) | `/guides/remote-side-jobs-from-home/` (`/{lang}/guides/remote-side-jobs-from-home/`) | Mapped **all** broad work-from-home and side-job query variations in each language to ONE honest guide (`/guides/remote-side-jobs-from-home/`) that transparently explains vetting difficulty and non-guaranteed hours. |
| PhD, postdoc, and university student AI work queries | `/guides/ai-training-for-phds-and-students/` (`/{lang}/guides/ai-training-for-phds-and-students/`) | Consolidated graduate-researcher and student queries (comparing Mercor domain pools and Handshake AI fellowships) into one dedicated academic guide per language. |
| Outbound referral redirect routes (`/go/legal-licensed/`, `/go/legal-general/`, `/go/medical-expert/`, `/go/software-engineering/`, `/go/office-productivity/`, `/go/finance-expert/`, `/go/language-audio/`, `/go/generalist-expert/`, `/go/general-referral/`) | `noindex, nofollow` + `Disallow: /go/` in `public/robots.txt` + excluded from `/sitemap.xml` | `/go/<role>/` routes exist strictly for transparent first-party referral redirection (`?referralCode=02e0c12a-d634-4738-9686-04f28f31f52b`) and cookieless click attribution (`?src=`). Carrying `<meta name="robots" content="noindex, nofollow" />` and `Disallow: /go/` ensures search engines and AI crawlers never index thin redirect pages or pass unvetted PageRank through affiliate hops. |

---

## 3. Complete Inventory of Canonical Indexable Routes (`29` Routes × `6` Languages = `174` Pages)

Every single page below returns HTTP `200`, includes a self-referencing `<link rel="canonical">`, full 6-language + `x-default` `<link rel="alternate" hreflang="...">` tags, and valid JSON-LD `@graph`:

1. **7 Core & Discovery Pages (× 6 languages = `42` pages):**
   - `/` (Homepage Hub)
   - `/roles/` (Open Roles Directory)
   - `/compare/` (6-Platform Comparison Matrix: Mercor, micro1, Outlier, Alignerr, Handshake AI, Mindrift)
   - `/pay-index/` (Monthly Edithsi AI Work Pay Index + `Dataset` schema + `CC BY 4.0` CSV download)
   - `/how-it-works/` (Process & Honest FAQ)
   - `/glossary/` (AI Training, RLHF & Rubric Evaluation Glossary)
   - `/about/` (First-Person Operator Background & Editorial Methodology)
2. **3 Legal & Transparency Pages (× 6 languages = `18` pages):**
   - `/disclosure/` (Referral & Advertising Disclosure)
   - `/privacy/` (Zero-Cookie Privacy Notice)
   - `/legal/` (Legal Notice & Operator Information)
3. **7 Profession Audience Hubs (`/for/<slug>/` × 6 languages = `42` pages):**
   - `/for/legal/` (Lawyers & Legal Experts — `$100–150/h` & `$60–150/h`)
   - `/for/medical/` (Doctors, Nurses & Clinical Experts — `$60–180/h`)
   - `/for/software/` (Software Engineers — `$70–150/h`)
   - `/for/language/` (Language, Translation & Audio Experts — `$35–50/h`)
   - `/for/finance/` (Finance, Accounting & Audit Experts — `rate set per project`)
   - `/for/office/` (Office & Productivity Software Specialists — `$60–70/h`)
   - `/for/general/` (Generalist Experts — `$40–70/h`)
4. **6 Platform Review Pages (`/platforms/<slug>/` × 6 languages = `36` pages):**
   - `/platforms/mercor/`, `/platforms/micro1/`, `/platforms/outlier/`, `/platforms/alignerr/`, `/platforms/handshake-ai/`, `/platforms/mindrift/`
5. **6 Answer-First Editorial Guides (`/guides/<slug>/` × 6 languages = `36` pages):**
   - `/guides/taxes-toiminimi-yel-finland/`
   - `/guides/unemployment-benefits-ai-work/`
   - `/guides/avoid-ai-job-scams/`
   - `/guides/ai-interview-preparation/`
   - `/guides/remote-side-jobs-from-home/`
   - `/guides/ai-training-for-phds-and-students/`
