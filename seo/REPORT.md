# Edithsi — Monthly SEO & Generative Engine Optimization (GEO) Report Template (`seo/REPORT.md`)

**Reporting Month:** `YYYY-MM` (Baseline Reference: `2026-11-05`)  
**Site:** Edithsi (`https://edithsi.com`)  
**Operator:** Independent contractor in Helsinki, Finland (first-person `"I"`, never `"we"`; not affiliated with Mercor or any platform reviewed)  
**Data Sources:** Google Search Console (`edithsi.com`), Bing Webmaster Tools, Vercel Edge / Server Access Logs (zero-cookie first-party logs), `/seo/ai-visibility.csv` manual audits, and my Mercor Referral Dashboard (`referralCode=02e0c12a-d634-4738-9686-04f28f31f52b`).

> **Zero-Fabrication Rule:** I record only verified numbers exported from Google Search Console, Bing Webmaster Tools, server access logs, `/seo/ai-visibility.csv`, and my Mercor referral dashboard. Any metric not yet collected is marked `TBD`.

---

## 1. Executive Summary (SEO + GEO + Referral Funnel)

| Metric | Current Month (`YYYY-MM`) | Previous Month | MoM Change (`%`) | Cumulative Since Launch | 12-Month Target |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Total Indexed Canonical Pages (GSC + Bing)** | `TBD` | `TBD` | `TBD` | `150` (`25` per language × `6` languages) | `150–240` reviewed pages |
| **Google Search Impressions / Clicks** | `TBD` / `TBD` | `TBD` / `TBD` | `TBD` | `TBD` | `1,200,000` / `80,000` |
| **Bing Search Impressions / Clicks** | `TBD` / `TBD` | `TBD` / `TBD` | `TBD` | `TBD` | `300,000` / `20,000` |
| **AI Crawler Hits (Server Logs)** | `TBD` | `TBD` | `TBD` | `TBD` | Monthly growth across all 9 bots |
| **GEO Citation Share (`20` Test Queries)** | `TBD%` (`TBD/20`) | `TBD%` | `TBD` | `TBD` | `>= 50%` (`10+/20` queries cited) |
| **AI Answer Engine Referral Visits** | `TBD` | `TBD` | `TBD` | `TBD` | `5,000+` sessions/yr |
| **Outbound `/go/<role>/` Referral Clicks** | `TBD` | `TBD` | `TBD` | `TBD` | `8,000+` |
| **Verified Mercor Referral Sign-Ups** | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` |

---

## 2. Search Console Performance by Language (Google Search Console & Bing Webmaster Tools)

Filter Google Search Console (**Performance → Search results → Page**) and Bing Webmaster Tools (**Search Performance → Pages**) by language path prefix (`/` for `en`, `/fi/`, `/sv/`, `/de/`, `/fr/`, `/es/`):

| Language | Path Prefix | Indexed Pages (GSC / Bing) | GSC Impressions | GSC Clicks | GSC CTR (`%`) | GSC Avg. Position | Bing Impressions | Bing Clicks | Top Performing Canonical Page |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **English (`en`)** | `/` (root) | `25` / `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` (e.g., `/compare/` or `/pay-index/`) |
| **Finnish (`fi`)** | `/fi/` | `25` / `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` (e.g., `/fi/guides/taxes-toiminimi-yel-finland/`) |
| **Swedish (`sv`)** | `/sv/` | `25` / `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` (e.g., `/sv/for/language/`) |
| **German (`de`)** | `/de/` | `25` / `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` (e.g., `/de/platforms/mercor/`) |
| **French (`fr`)** | `/fr/` | `25` / `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` (e.g., `/fr/for/language/`) |
| **Spanish (`es`)** | `/es/` | `25` / `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` (e.g., `/es/for/language/`) |
| **Total / Weighted Avg.** | **All 6 Languages** | `150` / `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | — |

---

## 3. Server-Log AI Crawler Report Table

Because Edithsi is 100% cookieless and runs zero client-side analytics scripts, I measure AI search and model-training crawler activity directly from HTTP server access logs (`User-Agent` matching against the explicitly allowed bots in `public/robots.txt`):

| AI Crawler `User-Agent` | Operator / Ecosystem | Primary Role | `robots.txt` Policy | Monthly Requests / Hits (`YYYY-MM`) | Unique URLs Crawled | Top Crawled Path (`YYYY-MM`) | Status / Notes |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **`OAI-SearchBot`** | OpenAI (ChatGPT Search) | Real-time search indexing & citations | `Allow: /` (`Disallow: /go/`) | `TBD` | `TBD` | `TBD` (e.g., `/pay-index/`) | Primary indexer for ChatGPT Search citations |
| **`ChatGPT-User`** | OpenAI (ChatGPT live browse) | Live user-triggered page fetches | `Allow: /` (`Disallow: /go/`) | `TBD` | `TBD` | `TBD` | Triggered when a user asks ChatGPT about AI roles/rates |
| **`PerplexityBot`** | Perplexity AI | Real-time answer synthesis & citations | `Allow: /` (`Disallow: /go/`) | `TBD` | `TBD` | `TBD` | High-frequency crawler for comparison & pay tables |
| **`Claude-SearchBot`** | Anthropic (Claude Web Search) | Search indexing for Claude citations | `Allow: /` (`Disallow: /go/`) | `TBD` | `TBD` | `TBD` | Indexes canonical guides & platform reviews |
| **`Claude-User`** | Anthropic (Claude live fetch) | User-initiated page retrieval in Claude | `Allow: /` (`Disallow: /go/`) | `TBD` | `TBD` | `TBD` | Live citation fetches during Claude conversations |
| **`Google-Extended`** | Google (Gemini & AI Overviews) | Gemini grounding & AI Mode training | `Allow: /` (`Disallow: /go/`) | `TBD` | `TBD` | `TBD` | Essential for Gemini & Google AI Mode visibility |
| **`GPTBot`** | OpenAI | Foundation model training | `Allow: /` (`Disallow: /go/`) | `TBD` | `TBD` | `TBD` | Ensures long-term entity & brand knowledge in GPT models |
| **`ClaudeBot`** | Anthropic | Foundation model training | `Allow: /` (`Disallow: /go/`) | `TBD` | `TBD` | `TBD` | Ensures long-term entity knowledge in Claude models |
| **`Applebot`** | Apple (Siri / Apple Intelligence) | Search & Apple Intelligence grounding | `Allow: /` (`Disallow: /go/`) | `TBD` | `TBD` | `TBD` | Crawls structured JSON-LD & FAQ schemas |
| **Total AI Crawler Hits** | **All 9 Allowed Bots** | — | — | `TBD` | `TBD` | — | Confirm `0` hits on `/go/` redirect routes |

---

## 4. AI Referral Traffic Table ( Cookieless Server `Referer` Header + `/go/` Attribution)

Measured from server-side HTTP `Referer` headers on incoming page requests and outbound `/go/<role>/?src=...` redirect logs (without setting any cookies or tracking personal data):

| AI Referrer Domain (`HTTP Referer`) | AI Engine | Incoming Sessions (`YYYY-MM`) | Previous Month | MoM Change (`%`) | Top Landing Page on `edithsi.com` | Outbound `/go/<role>/` Clicks Triggered | Conversion Rate to `/go/` (`%`) |
| :--- | :--- | :---: | :---: | :---: | :--- | :---: | :---: |
| **`chatgpt.com`** (incl. `chat.openai.com`) | ChatGPT Search | `TBD` | `TBD` | `TBD` | `TBD` (e.g., `/compare/`, `/platforms/mercor/`) | `TBD` | `TBD%` |
| **`perplexity.ai`** | Perplexity | `TBD` | `TBD` | `TBD` | `TBD` (e.g., `/pay-index/`, `/for/legal/`) | `TBD` | `TBD%` |
| **`gemini.google.com`** | Google Gemini | `TBD` | `TBD` | `TBD` | `TBD` (e.g., `/fi/guides/taxes-toiminimi-yel-finland/`) | `TBD` | `TBD%` |
| **`claude.ai`** | Anthropic Claude | `TBD` | `TBD` | `TBD` | `TBD` (e.g., `/guides/ai-interview-preparation/`) | `TBD` | `TBD%` |
| **`copilot.microsoft.com`** | Microsoft Copilot | `TBD` | `TBD` | `TBD` | `TBD` (e.g., `/roles/`, `/pay-index/`) | `TBD` | `TBD%` |
| **Total AI Referral Traffic** | **All 5 AI Engines** | `TBD` | `TBD` | `TBD` | — | `TBD` | `TBD%` |

---

## 5. Monthly GEO Citation Summary (from `/seo/ai-visibility.csv`)

On the **5th of each month**, I manually test all **20 high-value queries** (`10` in English, `10` in Finnish) stored in `/seo/ai-visibility.csv` in a clean, logged-out/incognito session across **ChatGPT Search**, **Perplexity**, **Gemini**, **Claude**, and **Google AI Mode**:

| AI Engine | EN Queries Cited (`/10`) | FI Queries Cited (`/10`) | Total Queries Cited (`/20`) | Citation Share (`%`) | MoM Delta | Most Cited Edithsi Page | Primary Gap / Next Action |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- | :--- |
| **ChatGPT Search** (`chatgpt_cited`) | `TBD/10` | `TBD/10` | `TBD/20` | `TBD%` | `TBD` | `TBD` | Ensure Bing IndexNow ping runs after every Pay Index update |
| **Perplexity** (`perplexity_cited`) | `TBD/10` | `TBD/10` | `TBD/20` | `TBD%` | `TBD` | `TBD` | Keep Answer-First summary boxes (`50–70` words) above the fold |
| **Google Gemini** (`gemini_cited`) | `TBD/10` | `TBD/10` | `TBD/20` | `TBD%` | `TBD` | `TBD` | Verify `Dataset` and `FAQPage` JSON-LD validation in GSC |
| **Anthropic Claude** (`claude_cited`) | `TBD/10` | `TBD/10` | `TBD/20` | `TBD%` | `TBD` | `TBD` | Expand factual comparison tables on `/platforms/<slug>/` |
| **Google AI Mode** (`google_ai_mode_cited`) | `TBD/10` | `TBD/10` | `TBD/20` | `TBD%` | `TBD` | `TBD` | Strengthen Finnish authority backlinks (`OUTREACH.md`) |
| **Average Across All 5 Engines** | `TBD/10` | `TBD/10` | `TBD/20` | `TBD%` | `TBD` | — | Update `/seo/ai-visibility.csv` (`last_checked` column) |

---

## 6. Role-by-Role `/go/<role>/` Referral Funnel (`src/data/roles.json`)

Every Mercor role CTA on Edithsi routes through `/go/<role>/?src=<page-slug>&referralCode=02e0c12a-d634-4738-9686-04f28f31f52b` (carrying `<meta name="robots" content="noindex, nofollow" />` and `rel="sponsored noopener noreferrer"`):

| Role Slug (`/go/<role>/`) | Official Role Title | Field | Posted USD Rate (`2026-11-05`) | Listing Status | Monthly `/go/` Clicks | Top Source Page (`?src=`) | Verified Referral Sign-Ups | Completed Milestones |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- | :---: | :---: |
| `/go/legal-licensed/` | Legal Expert (licensed lawyer) | `law` | `$100–150/h` | Active | `TBD` | `TBD` (e.g., `/for/legal/`) | `TBD` | `TBD` |
| `/go/legal-general/` | Legal Expert | `law` | `$60–150/h` | Active | `TBD` | `TBD` (e.g., `/for/legal/`) | `TBD` | `TBD` |
| `/go/medical-expert/` | Medical Expert | `medicine` | `$60–180/h` | Active | `TBD` | `TBD` (e.g., `/for/medical/`) | `TBD` | `TBD` |
| `/go/software-engineering/` | Software Engineering Expert | `tech` | `$70–150/h` | Active | `TBD` | `TBD` (e.g., `/for/software/`) | `TBD` | `TBD` |
| `/go/office-productivity/` | Office & Productivity Software Expert | `tech` | `$60–70/h` | Active | `TBD` | `TBD` (e.g., `/for/office/`) | `TBD` | `TBD` |
| `/go/finance-expert/` | Finance Expert | `finance` | `rate set per project` | Active | `TBD` | `TBD` (e.g., `/for/finance/`) | `TBD` | `TBD` |
| `/go/language-audio/` | Language & Audio Expert | `language` | `$35–50/h` | Active | `TBD` | `TBD` (e.g., `/fi/for/language/`) | `TBD` | `TBD` |
| `/go/generalist-expert/` | Generalist Expert | `general` | `$40–70/h` | Active | `TBD` | `TBD` (e.g., `/for/general/`) | `TBD` | `TBD` |
| `/go/general-referral/` | General Mercor Pool (`t.mercor.com/Pq3VD`) | `all` | Varies by pool | Active | `TBD` | `TBD` (e.g., `/platforms/mercor/`) | `TBD` | `TBD` |
