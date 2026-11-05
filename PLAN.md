# Edithsi — Architecture, Pages & Implementation Plan (`PLAN.md`)

## 1. Overview & Positioning
**Edithsi** (`https://edithsi.com`) is a production-ready, static multilingual reference website built with **Astro**, **TypeScript**, and **plain CSS** (`DESIGN.md` custom properties) hosted on **Vercel**.
- **Purpose:** Help credentialed professionals in Finland and Europe find remote AI-training work on Mercor's official listings, sorted by who they are (`"For you"` audience groups).
- **Independence & Disclosure:** Not affiliated with, endorsed, or sponsored by Mercor. Operated by a single Finland-based Mercor contractor (`"I"`, never `"we"`). Every page displays a localized advertising badge (`AD`, `MAINOS`, `REKLAM`, `WERBUNG`, `PUBLICITÉ`, `PUBLICIDAD`), and every `"Apply on Mercor"` link routes through a cookieless `/go/<role>?src=<page-or-audience>&referralCode=02e0c12a-d634-4738-9686-04f28f31f52b` redirect with `rel="sponsored noopener noreferrer"` and a localized `"referral link · ad"` label underneath.
- **No AI/Marvel Gimmicks:** Never market Edithsi as an AI or "super intelligence"; it is an honest human-written guide. Zero Marvel/EDITH references, imagery, or wording.

---

## 2. Folder & File Structure
```text
/
├── DESIGN.md                      # Design system tokens & rules
├── PLAN.md                        # Architecture & implementation plan
├── README.md                      # Vercel deployment, domain, & maintenance guide
├── astro.config.mjs               # Static output, site: https://edithsi.com, @astrojs/sitemap
├── vercel.json                    # Security headers, www->apex redirect, /go/<role> redirects, cleanUrls
├── package.json                   # Build & verification scripts
├── tsconfig.json                  # Strict TypeScript config
├── scripts/
│   └── indexnow.mjs               # Post-build IndexNow key & payload generator
├── seo/
│   ├── SETUP.md                   # GSC (DNS TXT), Bing + IndexNow, hello@edithsi.com ImprovMX/MX setup
│   ├── REPORT.md                  # Monthly organic & referral funnel report template
│   ├── OUTREACH.md                # Nordic & European union/university outreach plan
│   ├── ROADMAP.md                 # 12-month SEO roadmap
│   ├── SPAM-POLICY-AUDIT.md       # Google Spam Policy & doorway-page compliance audit
│   ├── keywords.csv               # ~240 multilingual keywords with volume="TBD"
│   ├── content-plan.csv           # Editorial calendar & content status
│   └── articles/                  # Long-form Markdown guides (EN/FI published; SV/DE/FR/ES gated)
├── public/
│   ├── favicon.svg                # Minimalist Nordic geometric "E" monogram
│   ├── robots.txt                 # Points to https://edithsi.com/sitemap-index.xml
│   ├── 7f9b2c4e8a1d6f3b5e0c9a8d2f4b7e1c.txt # IndexNow verification key file
│   └── fonts/                     # Self-hosted WOFF2: Familjen Grotesk & Source Serif 4
└── src/
    ├── config.ts                  # SITE_URL, REFERRAL_CODE, GENERAL_REFERRAL_URL, CHECKED_ON, OPERATOR
    ├── styles/
    │   └── global.css             # Plain CSS implementing DESIGN.md custom properties
    ├── data/
    │   ├── roles.json             # 8 verified Mercor roles with field, pay, audiences, listingUrl
    │   ├── audiences.json         # 7 audience groups (software, medical, legal, finance, language, office, general)
    │   └── audiencePages.ts       # Localized content (>200 words/page), checklists & FAQs for all 7 audiences x 6 languages
    ├── i18n/
    │   ├── index.ts               # Language helpers, route switchers, hreflang builders
    │   ├── en.json                # English UI & page strings
    │   ├── fi.json                # Idiomatic Finnish UI & page strings
    │   ├── sv.json                # Swedish UI & page strings (marked NEEDS NATIVE REVIEW)
    │   ├── de.json                # German UI & page strings (marked NEEDS NATIVE REVIEW)
    │   ├── fr.json                # French UI & page strings (marked NEEDS NATIVE REVIEW)
    │   └── es.json                # Spanish UI & page strings (marked NEEDS NATIVE REVIEW)
    ├── utils/
    │   ├── schema.ts              # JSON-LD generators (WebSite, Person, BreadcrumbList, FAQPage, Article)
    │   └── guides.ts              # Markdown article loader for /guides/
    ├── layouts/
    │   └── BaseLayout.astro       # Semantic HTML shell, preload WOFF2, SEO meta, JSON-LD, AdStamp, Header, Footer
    ├── components/
    │   ├── Header.astro           # Brand, nav links, "For you" dropdown (7 audiences), language menu
    │   ├── AdStamp.astro          # Localized advertising stamp under header on every page
    │   ├── LanguageSuggestion.astro # Dismissible non-redirecting browser language suggestion bar
    │   ├── Breadcrumbs.astro      # Accessible breadcrumb navigation + BreadcrumbList schema
    │   ├── RoleCard.astro         # Role card with /go/<role>?src=... Apply button & "referral link · ad"
    │   ├── RoleFilter.astro       # Progressive-enhancement audience filter (?for=<slug>) & Sort control (Group, Highest pay, A-Z)
    │   ├── FaqList.astro          # 8 verified FAQ items with FAQPage schema
    │   ├── AuthorBox.astro        # First-person operator card
    │   ├── Footer.astro           # Trademark disclaimer, all 7 audience links, Privacy, Legal, operator details
    │   └── views/
    │       ├── HomeView.astro     # Hero, "I work in:" 7 audience cards, featured roles, how it works, FAQ preview
    │       ├── RolesView.astro    # Grouped by audience by default, highest pay first, "Also open to you: Generalist"
    │       ├── AudienceView.astro # /for/<slug>/ template: H1, 3 paragraphs, ruled role index, checklist, 3 FAQs, Generalist
    │       ├── HowItWorksView.astro # 4-step guide, honest realities, 8 FAQ items
    │       ├── PrivacyView.astro  # GDPR summary (Vercel Inc. logs, zero cookies/analytics, hello@edithsi.com)
    │       └── LegalView.astro    # Operator disclosure, independence, referral disclosure
    └── pages/
        ├── 404.astro              # Custom 404 page linking to all audience hubs and main pages
        ├── index.astro            # EN Home (/)
        ├── roles.astro            # EN Open roles (/roles/)
        ├── how-it-works.astro     # EN How it works & honest FAQ (/how-it-works/)
        ├── privacy.astro          # EN Privacy (/privacy/)
        ├── legal.astro            # EN Legal notice (/legal/)
        ├── for/
        │   └── [slug].astro       # EN 7 Audience pages (/for/software/, /for/medical/, etc.)
        ├── [lang]/
        │   ├── index.astro        # Localized Home (/fi/, /sv/, /de/, /fr/, /es/)
        │   ├── roles.astro        # Localized Open roles (/{lang}/roles/)
        │   ├── how-it-works.astro # Localized How it works & FAQ (/{lang}/how-it-works/)
        │   ├── privacy.astro      # Localized Privacy (/{lang}/privacy/)
        │   ├── legal.astro        # Localized Legal notice (/{lang}/legal/)
        │   └── for/
        │       └── [slug].astro   # Localized 7 Audience pages (/{lang}/for/<slug>/)
        ├── go/
        │   └── [role].astro       # Static fallback redirect pages for /go/<role>
        ├── og/
        │   └── [id].png.ts        # Build-time typographic Open Graph PNG generator
        ├── rss.xml.ts             # RSS 2.0 feed for audience hubs & guides
        └── sitemap.xml.ts         # Direct XML sitemap alongside @astrojs/sitemap
```

---

## 3. Page Matrix (6 Languages × 12 Core Routes = 72 Localized Pages + 404 + Redirects)
| Page Type | English (`en`) | Localized (`fi`, `sv`, `de`, `fr`, `es`) |
| :--- | :--- | :--- |
| **Home** | `/` | `/{lang}/` |
| **Open Roles** | `/roles/` | `/{lang}/roles/` |
| **For Software & IT** | `/for/software/` | `/{lang}/for/software/` |
| **For Medical & Health** | `/for/medical/` | `/{lang}/for/medical/` |
| **For Law** | `/for/legal/` | `/{lang}/for/legal/` |
| **For Finance & Business** | `/for/finance/` | `/{lang}/for/finance/` |
| **For Languages & Translation** | `/for/language/` | `/{lang}/for/language/` |
| **For Office & Productivity** | `/for/office/` | `/{lang}/for/office/` |
| **For Anyone (Generalist)** | `/for/general/` | `/{lang}/for/general/` |
| **How It Works & Honest FAQ** | `/how-it-works/` | `/{lang}/how-it-works/` |
| **Privacy Policy** | `/privacy/` | `/{lang}/privacy/` |
| **Legal Notice** | `/legal/` | `/{lang}/legal/` |
| **Custom 404** | `/404.html` | `/404.html` |
