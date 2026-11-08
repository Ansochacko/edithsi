# Design Fixes & Visual Alignment Log (Stitch Implementation)

**Target Project**: `projects/9297724413761610760` (*Pohjola Experts Nordic Directory / Edithsi*)  
**Audit Date**: 2026-11-08  
**Verification**: 0 Console Errors · 0 Blocked Resources · 0 CSP Violations · 0 Axe AA Violations · 90/90 QC Audit Passed

---

## 1. Google Stitch Design Assets Extracted
- Replaced repository root `DESIGN.md` with the full design system markdown from Stitch.
- Extracted and archived all 10 Stitch screen mockups and HTML references in `/design/stitch/`:
  - `home-light.png` & `home-light.html`
  - `home-dark.png` & `home-dark.html`
  - `home-mobile.png` & `home-mobile.html`
  - `roles-desktop.png` & `roles-desktop.html`
  - `roles-mobile.png` & `roles-mobile.html`
  - `compare-desktop.png` & `compare-desktop.html`
  - `compare-mobile.png` & `compare-mobile.html`
  - `pay-index-desktop.png` & `pay-index-desktop.html`
  - `how-it-works-faq-mobile.png` & `how-it-works-faq-mobile.html`
  - `legal-privacy-mobile.png` & `legal-privacy-mobile.html`

---

## 2. Design Tokens & Styling System
- **`src/styles/tokens.css`**:
  - Implemented exact color variables from Stitch:
    - Light: Deep Nordic Navy (`#003f94`), Cobalt (`#1c56b8`), Lingonberry Red (`#b02a3f`), Crisp Arctic Canvas (`#f9f9ff`), Dark Slate Ink (`#101c2d`), Hairline Borders (`#c3c6d5`).
    - Dark mode (`prefers-color-scheme: dark`): Slate Navy surfaces (`#101c2d`, `#162438`), Ice Blue accents (`#b0c6ff`), Crimson badges (`#ffb3b6`).
  - Strict radii scale: `radius-xs` (2px), `radius-sm` (4px), `radius-md` (8px). Zero bubbly pill shapes on tables or cards.
  - Type scales from broadsheet specs: `56px` display hero, `41.5px` headline-lg, `33.2px` headline-md, `26.5px` headline-sm, `21.25px` title-md, `14px` section-index with `0.08em` tracking.

- **`src/styles/stitch-components.css`**:
  - 12-column asymmetric broadsheet grid (`stitch-grid`) with left index rail (`stitch-rail`) spanning cols 1–3 and primary content (`stitch-main`) spanning cols 4–12.
  - Hero Data Panel (`INDEX LEDGER SPEC`) with tabular rate figures (`$35–180/h`, `~20 min`, `€0`).
  - Ruled ledger table (`roles-ledger-table` and `roles-ledger-row`) with 1px dividers, tabular rates, and official referral badges.
  - 4-column linear intake milestone grid (`STAGE 01` to `STAGE 04`).
  - Accessible accordion FAQ (`faq-accordion-item`).

---

## 3. Strict CSP & Zero Inline Scripts/Styles
- **`astro.config.mjs`**:
  - Configured `build: { format: 'directory', inlineStylesheets: 'never' }` and `vite: { build: { assetsInlineLimit: 0 } }` to ensure all stylesheets and scripts are emitted as separate files allowed by `'self'`.
- **`vercel.json`**:
  - Removed `'unsafe-inline'` from both `script-src` and `style-src`. Production CSP:
    ```
    default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'none'
    ```
- **Extracted Bundled Scripts**:
  - `src/scripts/language-suggestion.ts`: Cookie-less language recommendation bar.
  - `src/scripts/header-menus.ts`: Language selector modal and mobile navigation.
  - `src/scripts/roles-filter.ts`: Dynamic filtering and sorting with progressive enhancement.
- **Removed 10 Inline Styles**:
  - Replaced all `style="..."` attributes with semantic utility classes in `global.css` (`mb-space-4`, `mb-space-10`, `mt-space-8`, `min-h-120`).

---

## 4. Typography & Self-Hosting
- Self-hosted fonts in `public/fonts/`:
  - `Space Grotesk` (weights 400, 500, 600, 700) for headlines, section rails, and tabular rates.
  - `Source Serif 4` (weights 400, 400 italic, 600) for editorial text.
  - `Familjen Grotesk` fallback.
- Added full `@font-face` definitions for `Space Grotesk` to `src/styles/global.css`.
- Removed all external font links and CDN calls.

---

## 5. Visual Alignments by Page
1. **Home (`/` and `/{lang}/`)**:
   - Replaced old vertical stack with Stitch's 12-column asymmetric broadsheet layout.
   - Header with `Edithsi` title and `Nordic AI Work Registry` subtitle.
   - `AD` ribbon with 3px Lingonberry left border and clear disclosure.
   - Hero split into 5-col copy block + 4-col `INDEX LEDGER SPEC` rate box.
   - `02 // DISCIPLINE FILTER`: Interactive audience chips showing verified role counts.
   - `03 // TALENT POOLS`: Ruled row index with batch codes, localized role titles, and `$min–$max/h` pay.
   - `04 // HOW INTAKE OPERATES`: 4 linear milestone stages (Apply with CV, AI Interview, Get Verified, Receive Invites) localized across all 6 languages.
   - `05 // FIELD QUESTIONS`: Clean numbered accordion list.

2. **Open Roles Directory (`/roles/` and `/{lang}/roles/`)**:
   - Styled with `02 // TALENT DIRECTORY` index rail and `ARCHIVE REF: FI-MERC-ROLES` specification box.
   - Functional CSS-only sort radios ensuring sorting works with and without JavaScript.
   - Ruled cards matching Stitch tokens with 44px+ tap targets.

3. **Compare Platforms (`/compare/` and `/{lang}/compare/`)**:
   - Broadsheet comparison matrix with self-contained cells and disclosure note.
   - Side-by-side criteria: pay rates, payment rails, accepted fields, European eligibility, and screening steps.

4. **Pay Index (`/pay-index/` and `/{lang}/pay-index/`)**:
   - Compensation ledger with cohort specifications, sample date (`2026-11-05`), and downloadable CSV button.
   - Dataset schema for Google Dataset Search and Author Box linking to verified LinkedIn.

5. **How It Works & FAQ, Privacy, Legal, 404**:
   - Styled to match Stitch color tokens, typography, and card padding.

---

## 6. Verification Results
- **Automated Preview Server**: `scripts/verify_preview.mjs` executed across 9 representative viewport configurations.
  - Console errors: `0`
  - Blocked resources: `0`
  - CSP violations: `0`
  - Axe accessibility violations: `0` (WCAG 2.2 AA compliant)
- **Quality Control Audit**: `scripts/qc_audit.mjs` passed `90/90` checks (100%).
- **Referral Integrity**: Every outbound Mercor application link carries `?referralCode=02e0c12a-d634-4738-9686-04f28f31f52b` and `rel="sponsored noopener noreferrer"`.
