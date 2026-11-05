# Edithsi — Design System & Specification (`DESIGN.md`)

> Note: Canonical Nordic editorial design system for **Edithsi** (`https://edithsi.com`). Every token and layout rule below is implemented 1:1 in CSS custom properties in `src/styles/global.css`.

## 1. Aesthetic Direction & Editorial Persona
**Edithsi** is an independent, transparent 6-language reference guide that helps credentialed professionals in Finland and Europe find remote AI-training work on Mercor's official listings.
- **Tone:** Calm, factual, editorial, understated Nordic precision (inspired by Finnish public-interest publications and classic print typography).
- **Voice:** First-person singular ("I", never "we"), plain-spoken, honest about both posted pay ranges and limitations (no guaranteed work, contractor tax obligations, referral transparency).
- **Positioning:** Never market Edithsi as an AI or "super intelligence"; it is an honest human-written guide. No Marvel/EDITH references, imagery, or wording anywhere.
- **Strict Anti-Patterns (Banned):**
  - No gradients (`linear-gradient`, `radial-gradient`)
  - No glassmorphism (`backdrop-filter`, translucent blurred cards)
  - No emoji icons anywhere in the UI
  - No stock photography or decorative illustrations
  - No banned fonts (`Inter`, `Roboto`, `Poppins`, or system fallbacks posing as primary fonts)
  - No invented statistics, fake reviews, or testimonials
  - No Mercor logos, brand colors, or "Mercor" in the site title

---

## 2. Typography (Self-Hosted WOFF2 Only)
All fonts are self-hosted in `/public/fonts/` in WOFF2 format with `font-display: swap` and preloaded in `<head>`. Zero external font requests.

- **Display, Headings & UI (`--font-sans`):** `'Familjen Grotesk'`, crisp geometric-grotesque with distinct Nordic character.
  - Used for: Site masthead, headings (`h1`–`h3`), navigation, `"I work in:"` audience choices, filter pills, sort controls, metadata badges, rate callouts, buttons, and the localized advertising disclosure bar.
- **Editorial Body & Long-Form Prose (`--font-serif`):** `'Source Serif 4'`, high-legibility editorial serif designed for extended reading.
  - Used for: Lead paragraphs, audience page introductions, role descriptions ("who it suits"), "How it works" prose, honest FAQ answers, Privacy policy, and Legal notice text.
- **Monospace (`--font-mono`):** System monospace stack for dates (`2026-11-05`), codes, and domain verification (`@mercor.com`, `@mercor.expert`).

### Type Scale & Measure
- `--text-xs`: `0.75rem` (12px), line-height `1.4` — Ad stamps, referral micro-labels, uppercase metadata tags
- `--text-sm`: `0.875rem` (14px), line-height `1.5` — Secondary UI, footer text, table/card metadata
- `--text-base`: `1.0625rem` (17px), line-height `1.65` — Primary reading text (`Source Serif 4`)
- `--text-lg`: `1.25rem` (20px), line-height `1.5` — Lead paragraphs, card titles
- `--text-xl`: `1.5rem` (24px), line-height `1.3` — Section subheadings
- `--text-2xl`: `2rem` (32px), line-height `1.2` — Section headings (`h2`)
- `--text-3xl`: `clamp(2.125rem, 4vw, 3rem)`, line-height `1.12` — Page titles (`h1`)
- **Line Measure (`--measure`):** `64ch` maximum (strictly `< 70ch` across all viewports)
- **Heading Wrap:** `text-wrap: balance` on all headings (`h1`, `h2`, `h3`, `.card-title`)

---

## 3. Color Tokens (WCAG 2.2 AA+ Verified)
Solid, flat architectural surfaces inspired by Nordic paper, ink, slate, and forestry green/ochre accents.

### Light Mode (`:root`)
- `--bg-canvas`: `#FAF8F5` (Warm Nordic Birch Paper)
- `--bg-surface`: `#FFFFFF` (Crisp Card Surface)
- `--bg-subtle`: `#F1EDE6` (Muted Stone / Filter Bar / Disclosure Strip)
- `--text-primary`: `#14181D` (Deep Charcoal Ink — 16.8:1 on canvas)
- `--text-secondary`: `#3D4652` (Slate — 8.9:1 on canvas)
- `--text-muted`: `#55606E` (Muted Slate — 5.9:1 on canvas, passes AA for all text sizes)
- `--border-subtle`: `#DCD6CC` (Warm Hairline Rule)
- `--border-strong`: `#8C857B` (Interactive Border)
- `--accent-primary`: `#1B4332` (Nordic Pine — 10.6:1 contrast with white text)
- `--accent-hover`: `#0F291E` (Deep Forest)
- `--accent-subtle`: `#E6EFEA` (Soft Pine Tint for active pills/badges)
- `--accent-text`: `#133425` (High-contrast Pine Ink — 12.1:1 on `--accent-subtle`)
- `--warning-bg`: `#FBF3E4` (Amber Note Surface)
- `--warning-border`: `#C89D54` (Amber Hairline)
- `--warning-text`: `#4A3208` (Deep Ochre Ink — 10.4:1 contrast)
- `--focus-ring`: `#1D4ED8` (High-visibility Cobalt Focus Ring)

### Dark Mode (`@media (prefers-color-scheme: dark)` & `[data-theme="dark"]`)
- `--bg-canvas`: `#0F1419` (Nordic Night Slate)
- `--bg-surface`: `#171E26` (Elevated Slate Card)
- `--bg-subtle`: `#202934` (Subtle Panel Surface)
- `--text-primary`: `#F3F4F6` (Crisp Chalk — 16.1:1 on canvas)
- `--text-secondary`: `#CBD5E1` (Silver Slate — 11.4:1 on canvas)
- `--text-muted`: `#94A3B8` (Muted Silver — 6.4:1 on canvas, passes AA)
- `--border-subtle`: `#2D3846` (Dark Hairline Rule)
- `--border-strong`: `#64748B` (Interactive Border)
- `--accent-primary`: `#74C69D` (Lichen Mint — 9.3:1 contrast with `#0B1911` text)
- `--accent-hover`: `#95D5B2` (Bright Lichen)
- `--accent-subtle`: `#183227` (Deep Pine Badge Surface)
- `--accent-text`: `#A7F3D0` (Mint Ink — 10.2:1 on `--accent-subtle`)
- `--warning-bg`: `#282012` (Dark Amber Surface)
- `--warning-border`: `#A17C38` (Dark Amber Border)
- `--warning-text`: `#FDE68A` (Pale Amber Ink — 11.8:1 contrast)
- `--focus-ring`: `#60A5FA` (Bright Sky Focus Ring)

---

## 4. Spacing, Grid & Responsive Breakpoints
### 8px Spatial Scale
- `--space-1`: `0.25rem` (4px)
- `--space-2`: `0.5rem` (8px)
- `--space-3`: `0.75rem` (12px)
- `--space-4`: `1rem` (16px)
- `--space-5`: `1.25rem` (20px)
- `--space-6`: `1.5rem` (24px)
- `--space-8`: `2rem` (32px)
- `--space-10`: `2.5rem` (40px)
- `--space-12`: `3rem` (48px)
- `--space-16`: `4rem` (64px)
- `--space-20`: `5rem` (80px)

### Layout & Viewports
- **Container Max Width:** `1120px` (`--container-max`), with `1.25rem` (20px) horizontal padding at `390px` and `2rem` (32px) at `768px+`.
- **Target Verification Breakpoints:**
  - `390px` (Mobile portrait: single-column stack, full-width CTAs, accessible `"For you"` and language menus, wrapped filter pills)
  - `768px` (Tablet: 2-column role grid and audience grid, horizontal navigation bar)
  - `1024px` (Desktop: 2-column role grid with generous editorial margins, 2-column split hero/facts)
  - `1440px` (Wide desktop: centered `1120px` editorial grid with balanced whitespace)

---

## 5. Interactive & Accessibility Rules
- **Tap Targets:** Every interactive control (`a.btn`, `.audience-choice`, `button`, `"For you"` dropdown trigger, language switcher trigger, language links, filter links/buttons, sort controls, dismiss button) has `min-height: 44px` and `min-width: 44px`.
- **Equal Button Heights:** Primary and secondary buttons share explicit `min-height: 44px`, identical vertical padding, and `display: inline-flex; align-items: center; justify-content: center`.
- **Ad Stamp:** Placed directly beneath the site header on every page (`AD`, `MAINOS`, `REKLAM`, `WERBUNG`, `PUBLICITÉ`, `PUBLICIDAD`) alongside a clear one-line referral disclosure.
- **"I work in:" Choices:** Large, clearly clickable architectural cards right under the hero on Home (and as filter pills on Open Roles), showing each group's role count and linking directly to `/for/<slug>/`.
- **Role Cards & Ruled Index:** Structured flexbox column with `justify-content: space-between` so footers and "Apply on Mercor" buttons align along a strict horizontal baseline across rows. Every rate displays the posted range, the "not guaranteed" disclaimer, and the `CHECKED_ON` date (`2026-11-05`). Every Apply link routes via `/go/<role>?src=<page-or-audience>&referralCode=02e0c12a-d634-4738-9686-04f28f31f52b` in a new tab with `rel="sponsored noopener noreferrer"` and a localized `"referral link · ad"` label directly underneath.
