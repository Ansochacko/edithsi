---
name: Nordic Field Guide
colors:
  surface: '#f8f9ff'
  surface-dim: '#cedbf0'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9fe'
  surface-container-highest: '#d6e3f9'
  on-surface: '#0f1c2c'
  on-surface-variant: '#434652'
  inverse-surface: '#243141'
  inverse-on-surface: '#eaf1ff'
  outline: '#737784'
  outline-variant: '#c3c6d5'
  surface-tint: '#225abc'
  primary: '#003f94'
  on-primary: '#ffffff'
  primary-container: '#1c56b8'
  on-primary-container: '#c2d2ff'
  inverse-primary: '#b0c6ff'
  secondary: '#b02a3f'
  on-secondary: '#ffffff'
  secondary-container: '#ff6475'
  on-secondary-container: '#68001a'
  tertiary: '#742e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#993f00'
  on-tertiary-container: '#ffc6ac'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b0c6ff'
  on-primary-fixed: '#001945'
  on-primary-fixed-variant: '#00429b'
  secondary-fixed: '#ffdada'
  secondary-fixed-dim: '#ffb3b6'
  on-secondary-fixed: '#40000d'
  on-secondary-fixed-variant: '#8f0c2a'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb692'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#793000'
  background: '#f8f9ff'
  on-background: '#0f1c2c'
  surface-variant: '#d6e3f9'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: 0em
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.005em
  label-numeric:
    fontFamily: Space Grotesk
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-caption:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-counter:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system draws direct inspiration from mid-century Finnish editorial design, official state registers, and functional Nordic field guides. It prioritizes clarity, civic utility, and uncompromising legibility over synthetic ornamentation. The interface acts as a transparent, authoritative medium—calm, precise, restrained, and completely devoid of performative trends.

Key visual attributes:
- **Nordic Editorial Precision**: Information hierarchy is established through disciplined typographic scales, crisp hairlines, and deliberate whitespace rather than drop shadows or saturated background fields.
- **Flat Architectural Surfaces**: Zero gradients, zero blurs, and zero ambient drop shadows. Surfaces sit flat against one another, separated cleanly by single-pixel hairline dividers.
- **Structured Cadence**: Prominent structural markers such as two-digit index counters (`01`, `02`, `03`) introduce editorial rhythm across section headers, step indicators, and data ledgers.
- **Target Audience & Tone**: Tailored for specialized professionals, researchers, civil planners, and industry analysts requiring dense, high-accuracy information delivered with institutional composure.

## Colors

The palette balances cool, atmospheric Nordic greys with utilitarian functional inks. Accents are applied sparingly to preserve their signaling power.

### Light Mode (Default)
- **Background (`#F3F5F7`)**: A cool, pale slate-tinted field canvas resembling archival bond paper.
- **Surface (`#FFFFFF`)**: Pure white editorial cards, tabular sheets, and reading panes.
- **Body Text (`#0E1A2B`)**: Deep midnight ink, yielding high-contrast legibility without the harshness of pure black.
- **Muted Text (`#5A6779`)**: Balanced slate grey for subheaders, secondary labels, metadata, and structural indices.
- **Hairline Rules (`#D5DDE7`)**: Architectural 1px grid boundaries, table borders, and structural separators.
- **Primary Accent / Finnish Blue (`#1C56B8`)**: Interactive affordances, links, primary buttons, highlighted financial metrics, and active states.
- **Secondary Accent / Lingonberry Red (`#A8233A`)**: System warnings, strict notices, sponsored indicators, and ad boundary stamps.

### Dark Mode
- **Background (`#0B1220`)**: Deep Nordic night sky; minimal light emission.
- **Surface (`#121B2C`)**: Controlled low-glare midnight slate container.
- **Body Text (`#E8EEF7`)**: Softened ice white for sustained reading comfort.
- **Muted Text (`#9FB0C6`)**: Cool silver-slate for passive hierarchy.
- **Hairline Rules (`#24324A`)**: Low-contrast boundary lines maintaining separation without visual vibration.
- **Primary Accent (`#6B9CF0`)**: Calibrated pastel blue preserving accessible contrast against dark surfaces.
- **Secondary Accent / Lingonberry (`#F0788C`)**: Soft berry tint for urgent alerts and markers.

## Typography

Typographic hierarchy enforces a deliberate editorial distinction between interface mechanics and long-form analytical prose.

- **Headlines, Controls & UI Markers**: Set in **Space Grotesk**. Its sharp geometric structure anchors navigation, data metrics, filters, and structural headers with crisp Scandinavian minimalism.
- **Narrative & Long-Form Reading**: Set in **Source Serif 4**. Used for investigative articles, executive summaries, legal texts, and comprehensive expert reviews. The generous line heights (`body-lg` at 30px) ensure sustained reading without eye fatigue.
- **Numerical Rigor**: All tabular rates, compensation metrics, dates, and accounting tables must enforce OpenType tabular figures (`font-variant-numeric: tabular-nums; lining-nums;`) to maintain strict vertical column alignment across rows.
- **Index Numbering**: Structural headers use uppercase zero-padded serial digits (`01`, `02`, `03`) set in `label-counter` with extended letter spacing to punctuate structural transitions.

## Layout & Spacing

Layouts follow a disciplined 12-column grid system reminiscent of a printed broadsheet or journal ledger:

- **Desktop (>= 1024px)**: 12-column symmetrical grid, maximum content width of 1280px, 48px outer canvas margin (`margin`), and 24px column gutters (`gutter`).
- **Tablet (768px - 1023px)**: 8-column layout with 24px margins and 16px gutters. Reading columns collapse to a 6-column span with a 2-column sidebar for annotations.
- **Mobile (< 768px)**: 4-column layout with 20px margins (`margin-mobile`) and 16px gutters (`gutter-mobile`). Grid sections stack into a vertical sequence.
- **Editorial Cadence**: Whitespace is rhythmic and modular. Use `space-md` (16px) for intra-component relationships, `space-lg` (24px) for card body padding, and `space-xl` (40px) for macro section offsets.
- **Alignment Rule**: Text baselines align rigorously with structural hairlines. No floating detached components; all cards, sheets, and headers align to the column boundaries.

## Elevation & Depth

This design system avoids spatial illusions. Depth is achieved purely through planographic layering and crisp boundary delineation:

- **Zero Shadows**: No `box-shadow` or ambient drop shadows exist in the design system. Elevation is expressed strictly through planar contrast.
- **Planar Hierarchy**:
  - *Base Layer (Canvas)*: Set in background color (`#F3F5F7` light, `#0B1220` dark).
  - *Content Layer (Surfaces)*: Discrete panels, tables, and article sheets set in pure surface (`#FFFFFF` light, `#121B2C` dark).
  - *Overlay Layer (Dialogs & Drawers)*: Positioned flat above the surface with a continuous 1px hairline border and backed by an opaque scrim (`rgba(14, 26, 43, 0.4)` light mode).
- **Hairline Boundaries**: Every structural division—whether card borders, header rules, table lines, or toolbar delimiters—uses a uniform 1px solid hairline (`#D5DDE7` light, `#24324A` dark).
- **Interaction Feedback**: Hover and focus states do not lift or expand elements. State transitions trigger hairline color shifts (to `#1C56B8`) or crisp 1px inset outlines.

## Shapes

Shapes are architectural, deliberate, and restrained:

- **Subtle Corner Radii**: UI components utilize a controlled, soft corner radius (4px to 6px; Level 1). This softens hard digital corners while preserving structural rectangular geometry.
- **Strict Square Geometry for Rules**: Dividing rules and hairline strokes are drawn with crisp, square caps (`stroke-linecap: square;`).
- **Asymmetric Ad Stamp / Lingonberry Boundary**: Sponsored disclosures, formal administrative warnings, and ad panels feature an asymmetric 3px solid Lingonberry left border (`border-left: 3px solid #A8233A` in light, `#F0788C` in dark), while remaining borders stay 1px hairline rules.
- **Tags & Indicators**: Badges retain square or 4px radii; pill-shaped capsules (`rounded-full`) are excluded to avoid informal or juvenile visual associations.

## Components

### Buttons
- **Primary**: Solid Finnish Blue background (`#1C56B8`), pure white typography, 4px border radius, zero shadow. Padding: 10px 18px (`space-sm` + 2px top/bottom, `space-md` + 2px left/right). Typography: `Space Grotesk` 14px, weight 600.
- **Secondary / Outline**: Transparent background, 1px solid hairline rule (`#D5DDE7`), midnight ink text (`#0E1A2B`). Hover shifts the hairline border to Finnish Blue.
- **Tertiary / Text**: Text-only with an underline offset of 4px. Underline transitions to Finnish Blue on hover.

### Cards & Panels
- Flat white surface (`#FFFFFF`), 1px solid hairline rule border (`#D5DDE7`), 4px border radius. Padding: 24px (`space-lg`).
- Editorial article cards feature an optional counter prefix (`01`, `02`) placed top-left in `label-counter` with muted slate color (`#5A6779`).

### Ad & Sponsored Units
- Bounded card with an asymmetric 3px left rule in Lingonberry Red (`#A8233A`), remaining sides bounded by 1px hairline rules.
- Header contains an uppercase tag `SPONSORED` or `NOTICE` set in `label-caption` (12px, weight 700) using Lingonberry Red.

### Data Tables & Ledgers
- Flat rows separated strictly by 1px hairline horizontal rules. No alternating zebra stripes.
- Headers: Uppercase `Space Grotesk` (12px, weight 600, letter spacing `0.05em`) in muted slate.
- Numeric Columns: Set right-aligned using tabular figures (`label-numeric`). Compensation and rates rendered in Finnish Blue (`#1C56B8`).

### Form Inputs & Selects
- 1px hairline border (`#D5DDE7`), background `#FFFFFF`, 4px radius, 12px 16px internal padding.
- Text: Midnight ink (`#0E1A2B`), 15px.
- Focus: Crisp 1px outline in Finnish Blue (`#1C56B8`) with zero glow or blur.
- Field labels: Upper/lower sentence case in `Space Grotesk` (13px, weight 500, `#0E1A2B`).

### Checkboxes & Radios
- Checkboxes: 16x16px square with 2px radius, 1px hairline border. Checked state fills with Finnish Blue displaying a sharp white tick.
- Radios: 16x16px circle, 1px hairline border. Checked state contains a 6px solid Finnish Blue inner dot.

### Section Headers with Asymmetric Indexing
- Section headers precede the title with an index block: e.g., `01 / REGULATORY AUDIT`.
- Numbering (`01-05`) sits in `label-counter` font alongside a hairline horizontal divider extending across the remaining grid width.