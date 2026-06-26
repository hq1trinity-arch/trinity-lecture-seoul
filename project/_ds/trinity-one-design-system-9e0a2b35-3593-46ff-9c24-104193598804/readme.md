# TRINITY ONE — Design System

A brand-skinned **iOS / iPadOS 26 ("Liquid Glass")** design system for **TRINITY ONE**,
a private-wealth / strategy brand ("The Only Strategy for the 0.1%"). It pairs Apple's
system foundations — the full color, material, and Dynamic-Type token system — with the
TRINITY ONE identity: a **brown accent** that replaces the system blue tint, the
**triquetra wordmark**, and **Pretendard** as the UI typeface.

Consumers link a single file: **`styles.css`**.

## Sources
- **Figma:** "iOS and iPadOS 26 (Community)" — the Apple design kit, attached as the
  source of truth for tokens, materials, type scale and component structure. Tokens were
  materialized from its Figma Variables (Colors / Kit / Liquid Glass collections, all
  light / dark / increase-contrast modes) into `tokens/figma/fig-tokens.css`.
- **Brand:** TRINITY ONE logo (`assets/trinity-one-logo-*.png`) and the Pretendard
  typeface family (`assets/fonts/`), both supplied by the user.

---

## CONTENT FUNDAMENTALS — voice & copy
TRINITY ONE speaks like a **discreet private bank**, not a retail fintech.

- **Tone:** calm, precise, understated confidence. Never hype, never emoji.
- **Person:** address the member as **"you"** / by first name ("Welcome back, Ha-eun").
  The firm refers to itself as **"your strategist"** / "your advisor", rarely "we".
- **Casing:** **Title Case** for the wordmark (TRINITY ONE, always caps), **sentence case**
  for UI labels and body ("Book a review", "Message advisor"). Section headers in lists
  use iOS UPPERCASE ("SECURITY", "ADVISORY").
- **Numbers:** money is exact and tabular ("$48,234,901"), performance as signed percent
  with a triangle ("▲ 14.2%"). Always pair a figure with context ("+$5.9M this year").
- **Vocabulary:** mandate, allocation, holdings, vintage, capital call, redemption,
  strategist, private. Avoid "invest now", "deals", "crypto", exclamation marks.
- **Microcopy examples:** "Tap to unlock with Face ID" · "Your dedicated strategist
  reviews every mandate change." · "Required for transfers over $1M."
- **Disclaimers** are quiet footnotes in Footnote/Caption type: "Past performance is not
  indicative of future results."

---

## VISUAL FOUNDATIONS
- **Color:** the iOS system palette (labels, fills, backgrounds, 12 accents) is intact in
  `tokens/figma/fig-tokens.css`. The brand layer (`tokens/brand.css`) overrides the
  semantic **`--tint`** to TRINITY brown (`#7A5C3A`; soft `#AC7F5E` in dark) so every
  control that would be iOS-blue is brown. Warm "paper" neutrals (`--trinity-paper`,
  `--trinity-ink`, `--trinity-wash`) are reserved for premium marketing / login surfaces.
  Reference **semantic aliases** (`--surface-card`, `--text-secondary`, `--tint`) not raw
  tokens.
- **Type:** Pretendard across the board, on the iOS Dynamic-Type scale (Large Title 34 →
  Caption2 11), weights 100–900. Composite classes `.t-large-title … .t-caption2` and
  `--text-*` tokens in `tokens/typography.css`. The serif wordmark lives only in the logo
  asset; `--font-serif-display` is a system-serif fallback for rare display moments.
- **Backgrounds:** mostly flat system grays (`--backgrounds-grouped-primary`). The only
  gradients are the warm radial **login / hero** wash and chart accents — never decorative
  gradients on content. No textures, no illustrations.
- **Materials / Liquid Glass:** translucent blurred chrome (`--material-*-blur/-fill`) on
  nav bars, tab bars, sheets, banners; the floating tab bar and glass buttons use
  `--glass-fill/-stroke/-blur`. Approximated with `backdrop-filter` (real Liquid Glass is
  a render-time effect). Kit values (depth/frost/opacity/refraction) are preserved as
  tokens for reference.
- **Corners:** continuous-style radii — controls 10, grouped cards 14, cards/popovers
  20–26, sheets 34/58, capsules for floating/toolbar contexts (`--radius-*`).
- **Cards:** flat inset grouped cards by default (no border, no shadow — the iOS Settings
  look); `elevated` adds `--shadow-card`; `glass` is the translucent panel.
- **Borders:** hairlines (`0.5px`) in `--separator` / `--separators-opaque`; list
  separators inset to align under the text, not the icon.
- **Shadows:** restrained. `--shadow-card` for floats, `--shadow-glass` (layered 40/80
  blur) for Liquid-Glass elements, `--shadow-popover` for menus.
- **Motion:** spring-like `--ease-standard` (cubic-bezier(.32,.72,0,1)); buttons scale to
  0.97 on press, icon buttons to 0.9; toggles/segments cross-fade. Fast 0.18s / medium
  0.32s. No bounces on content, no infinite decorative loops.
- **Hit targets:** 44pt minimum; controls 30/38/50pt by size.
- **Imagery vibe:** warm, restrained, gold-brown; avoid cool blues and busy photography.

---

## ICONOGRAPHY
- The Apple kit uses **SF Symbols**, which are proprietary and ship as instances (no vector
  data in the file), plus raster **app-icon tiles** (Mail, Weather, …) that are images, not
  UI glyphs.
- **Substitution (flagged):** UI components and the UI kit use **Lucide** via CDN
  (`unpkg.com/lucide`) — the closest freely-available match to SF Symbols' rounded,
  ~1.75px-stroke style. Render with `<i data-lucide="name">` then `lucide.createIcons()`.
  Components stay icon-agnostic: pass any glyph node into `icon` / `leading` props.
- Functional affordances drawn inline as geometric SVG (the list-row chevron) are fine;
  brand iconography is never hand-drawn.
- **Emoji:** not used. **Unicode** is used sparingly for finance marks (▲ ▼ − ✕).
- If you need exact SF Symbols, supply the licensed font/assets and swap the Lucide layer.

---

## INDEX (manifest)
**Root**
- `styles.css` — global entry (import list only).
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill wrapper.

**Tokens** (`tokens/`)
- `figma/fig-tokens.css` — iOS 26 Figma Variables (all modes).
- `fonts.css` — Pretendard `@font-face`. · `typography.css` — type scale + `.t-*` classes.
- `brand.css` — TRINITY brand layer (brown tint, paper neutrals).
- `elevation.css` — radii, spacing, shadows, materials, motion.
- `semantic.css` — friendly aliases (reference these) + body defaults.

**Components** (`window.DesignSystem_9e0a2b` — actual namespace shown by `check_design_system`)
- core/ — `Button`, `IconButton`, `Badge`, `Avatar`, `Card`
- forms/ — `TextField`, `SearchField`, `Segmented`, `Toggle`, `Slider`, `Stepper`, `SelectMenu`, `Checkbox`, `Radio`
- navigation/ — `NavBar`, `TabBar`, `Toolbar` (+`ToolbarSpacer`), `Sidebar`, `ListGroup`, `ListRow`
- feedback/ — `Alert`, `ActionSheet`, `ActivityView`, `NotificationBanner`, `NotificationStack`, `EmptyState`, `ProgressBar`, `Spinner`
- overlays/ — `Menu`, `ContextMenuPreview`, `Sheet`, `Popover`, `Tooltip`
- indicators/ — `PageControl`, `ProgressRing`
- pickers/ — `WheelPicker`, `DatePicker`, `ColorPicker`
- system/ — `StatusBar`, `Keyboard`, `Widget`, `Window`, `MenuBar`, `LockScreen`

**UI kits** (`ui_kits/`)
- `trinity-app/` — clickable iOS private-wealth app (login → portfolio → holding →
  documents → profile). See its `README.md`.
- `trinity-web/` — responsive marketing landing page (private-bank tone, brown + serif,
  desktop + mobile). See its `README.md`.

**Guidelines** (`guidelines/foundations/`) — specimen cards for the Design System tab
(Colors, Type, Materials, Spacing, Brand).

**Assets** (`assets/`) — `trinity-one-logo-horizontal.png`, `…-stacked.png`, `fonts/`.

---

## CAVEATS
- **Fonts:** SF Pro / SF Mono are not bundled (proprietary). Pretendard is the deliberate
  substitute used everywhere; `--font-mono` / `--font-serif-display` fall back to system
  stacks. Supply SF/serif files to swap.
- **Liquid Glass** is approximated with `backdrop-filter`; the kit's depth/refraction
  values are kept as tokens but not literally rendered.
- This system covers a deep **iOS / iPadOS / macOS primitive set** (45 components across
  core, forms, navigation, feedback, overlays, indicators, pickers and system/desktop
  surfaces) distilled from a 360+-family kit — not every variant in the file. Still available
  to add on request: numeric/symbol keyboard planes, sheet detents, tab-bar-with-search,
  large/lock-screen widgets, and the full app-icon set.
