# Anum Ahtesham — Portfolio Design System

A design system extracted from the personal portfolio site of **Anum Ahtesham**, a Full Stack & Agentic AI Developer. The aesthetic is best summed up as **"Black & Purple Premium"** — a dark, glassy, neon-purple identity built around a single accent hue, generous glow, and animated gradient text.

## Source materials

- **Codebase** — `portfolio-site/` (mounted via File System Access API)
  - Next.js 16 (App Router), React 19, TypeScript
  - Tailwind CSS v4, Framer Motion, Lucide React
  - Fonts: **Poppins** (display/headings), **Inter** (body) via `next/font`
  - Theme: light + dark, dark is the canonical/default
- **Live site:** referenced from metadata — `Anum Ahtesham | Full Stack & Agentic AI Developer`
- **Owner socials:** github.com/AnumAhte · linkedin.com/in/anum-ahtesham-7308a42b6

## What this represents

A single **product surface**: the personal portfolio one-pager. Sections in order:

1. **Hero** — name, animated typing role, CTAs, gradient avatar, mesh-gradient backdrop
2. **About** — bio, trait pills, stats grid, highlight cards
3. **Skills** — 6 categorised cards with animated progress bars + tech-cloud
4. **Projects** — 1 featured + 2 standard project cards
5. **Journey** — alternating timeline (2022 → present)
6. **Contact** — info cards + form
7. **Footer** — brand, quick links, socials

## Index

```
README.md                    ← you are here
SKILL.md                     ← Agent-Skills compatible entry point
colors_and_type.css          ← CSS variables + base/semantic type styles
fonts/                       ← Poppins + Inter (Google Fonts via @import)
assets/                      ← logos, illustrations, icon refs
preview/                     ← cards rendered in the Design System tab
ui_kits/portfolio/           ← high-fidelity React UI kit
  ├── README.md              ← kit-specific guide & differences from source
  ├── index.html             ← interactive click-thru recreation (open this!)
  ├── styles.css             ← all kit styles, dark+light themes, tokens
  ├── Primitives.jsx         ← Icon, Pill, GlassCard, GradientText, Orb, useInView
  ├── Navbar.jsx             ← scroll-aware pill nav, mobile drawer, theme toggle
  ├── Hero.jsx               ← name + animated typing role + avatar
  ├── About.jsx              ← bio, traits, stats, highlight cards
  ├── Skills.jsx             ← 6 categories with animated bars + tech cloud
  ├── Projects.jsx           ← featured + grid project cards
  ├── Journey.jsx            ← alternating timeline
  ├── Contact.jsx            ← info cards + working form
  └── Footer.jsx             ← brand, quick links, socials
```

---

## CONTENT FUNDAMENTALS

The brand voice is **first-person, confident, and shipping-pilled** — a developer talking to recruiters and collaborators with no corporate hedging.

### Voice & tone
- **First person, present tense.** "I build", "I specialize", "I bring the same energy". Direct address to the reader is rare; the writing centres the author.
- **Confident, not boastful.** Claims are quantified (`10+ projects`, `8+ tech stack`) or backed by named tech (`Next.js & FastAPI`, `RAG chatbots`). Never "world-class" / "best-in-class".
- **Builder energy.** Repeated motifs: *ship*, *build*, *iterate*, *ship fast / iterate intelligently*, *real-world*, *production*, *24/7*.
- **Plainspoken with the occasional flourish.** "20% code and 80% thinking clearly about the problem." "Talk to books. Get intelligent answers." Short declarative taglines are the punchiest moments.
- **Optimistic, never ironic.** No snark, no self-deprecation, no internet-cynic.

### Casing
- **Section titles** use Title Case with a coloured second word (e.g. `About **Me**`, `My **Skills**`, `Featured **Projects**`).
- **Section eyebrows** (`section-label`) are `UPPERCASE 0.16em tracked` — e.g. `GET TO KNOW ME`, `WHAT I WORK WITH`, `HOW I GOT HERE`.
- **Body** is sentence case. **Buttons** use Title Case: `View Projects`, `Hire Me`, `Send Message`.

### Tense & pronouns
- "I" / "my" throughout. The reader is rarely addressed directly except in CTAs (`Hire Me`, `Get in Touch`).
- Project descriptions are **third-person about the product** ("An advanced AI application that allows users to..."), but **first-person framing** introduces them.

### Punctuation & quirks
- **Em-dashes** are heavily used as a rhythmic device: `Frontend Developer — building...`, `from RAG chatbots to full-stack platforms`. Treat the em-dash as a brand glyph.
- **Pipe separators** appear after the typed role: `Frontend Developer |`.
- **Curly apostrophes** (`I'm`, `I've`) — escaped in JSX as `&apos;`/`&rsquo;`.
- **Bold inline emphasis** sparingly, on names or hard claims: `<strong>Anum Ahtesham</strong>`, `<strong>ship fast, iterate intelligently.</strong>`.
- **Italicised asides** for personal voice: `<em>actually work in the real world</em>`.

### Emoji
Used **deliberately, not decoratively**:
- ✦ as a quiet bullet in the hero trust list (`✦ Built real-world AI apps...`)
- 🇵🇰 attached to the location string
- 📘 🤖 🧠 as **project totems** — one emoji per project, rendered large at ~30px on a coloured backdrop, paired with a Lucide icon (so the glyph is a colour-decorated mark, not the only signifier)
- 🎯 ⚡ 🤝 🧠 🔄 🚀 prefixing each trait pill

Emoji are **never** used inline in body copy. They sit in pill chips, badges, or dedicated "totem" slots.

### Sample lines (use as voice references)
- Hero tagline: "I build real-world AI-powered web applications — from RAG chatbots to full-stack platforms."
- About lead: "A developer who sits at the crossroads of modern web engineering and artificial intelligence."
- Project tagline: "Talk to books. Get intelligent answers."
- Journey opener: "Began with the fundamentals — HTML, CSS, and JavaScript. Built static websites and got comfortable thinking like a developer."
- Contact lead: "Let's build something great"
- Footer credit: "Built with ♥ using Next.js, TypeScript & Framer Motion"

---

## VISUAL FOUNDATIONS

The visual system is **single-hue maximalism**: a true-black canvas drenched in violet/purple light, with glass surfaces floating over animated mesh gradients. Almost every accent is some shade of `#7c3aed → #a855f7 → #c084fc → #e879f9`.

### Colour
- **Primary accent:** `#a855f7` (purple-500/violet-500). Light mode shifts to `#7c3aed` (violet-600).
- **Gradient signature:** `linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)` for headings; an extended 7-stop animated version cycles for hero text.
- **Background — dark:** `#03030a` (near-black, slightly cool). Cards: `rgba(10, 8, 22, 0.80)` over a 5-blob radial mesh of purples.
- **Background — light:** `#f5f3ff` lavender-tinted white; cards `rgba(255, 255, 255, 0.88)`.
- **Text scale:** `--text-primary` (#f0eeff dark / #0d0b1a light), `--text-secondary`, `--text-muted` — three steps, no more.
- **Status / functional colours** appear only as **side-accents** in feature cards: `emerald-400` (success / available status dot), `fuchsia-400` (creative AI), `amber→orange` (featured badge), `red-400` (form errors). They live inside coloured pill chips, never as background.
- **No greys outside the purple-tinted neutral ramp.** True neutrals (zinc) appear only for the "Beginning" timeline node.

### Typography
- **Display / headings:** **Poppins** — weights 400/500/600/**700**/**800**/**900**. Negative letter-spacing (`-0.025em` to `-0.04em`), tight `line-height: 1.04–1.2`. Hero uses `clamp(3rem, 7vw, 5.5rem)` at 800.
- **Body:** **Inter** — base size **18px** (`1.125rem`), `line-height: 1.75`.
- **Eyebrow / section label:** Inter, 12px, weight 700, **0.16em tracking**, **uppercase**, accent-purple colour.
- **Numerals:** `tabular-nums` on stats so `10+` / `∞` align.
- **Gradient text** is a brand signature — second word of every section title is gradient-clipped + underlined with a 4-stop gradient bar (`section-title-line`).

### Spacing & layout
- **Sections:** `py-28` (112px top/bottom) is the canonical section rhythm. Hero is `min-h-screen`.
- **Container:** `max-w-7xl` (72rem) with `px-6 → 8 → 10` responsive padding.
- **Grid gaps:** 4 / 6 / 8 / 10 (1rem / 1.5 / 2 / 2.5).
- **Section dividers:** a horizontal hairline gradient strip (`transparent → purple/20 → purple/50 → purple/20 → transparent`), no thick rules.

### Backgrounds
- **Mesh gradients** on every section — 5–6 stacked `radial-gradient` blobs at offset positions, low opacity (0.16–0.30 in dark, 0.08–0.14 in light). The site is one continuous purple aurora.
- **Floating orbs** — `blur-3xl` violet/fuchsia circles animated with Framer Motion (8s loops, scale + translate).
- **Dot pattern** on the footer only: `radial-gradient(circle, rgba(168,85,247,0.14) 1px, transparent 1px)` at `28px 28px`.
- **No imagery, no photography, no hand-drawn illustrations.** Project "covers" are gradient blocks with a Lucide icon + emoji centred on top — pure abstraction.
- **No textures, no grain, no noise.**

### Animation
- Library: **Framer Motion**.
- **Easing:** `easeOut` for entries, `easeInOut` for loops, spring (`stiffness: 380, damping: 30`) for the active-nav-pill morph.
- **Entry pattern:** `opacity 0→1, y 30→0` over 0.6s, staggered with `staggerChildren: 0.1–0.18`.
- **Scroll-triggered:** `useInView({ once: true, margin: "-100px" })` — sections animate in once and stay.
- **Continuous loops:**
  - `gradient-x` — 8s linear position cycle on hero text + buttons.
  - `float` — 4.5s y-axis bob on featured glyphs.
  - `pulse-ring` — 2.8s expanding shadow ring on availability dots.
  - `blink` — 1s cursor blink on typing effect.
  - `neon-pulse` — 3.5s box-shadow swell on the featured project card.
  - `shine` — 0.65s diagonal sweep on hover (`shine-effect` class).
- **Hover** on cards: `y: -4 to -8px`, `scale: 1.02–1.04`, plus a stronger purple `box-shadow` glow. Buttons add `boxShadow: 0 0 24px rgba(168,85,247,0.55)`.
- **Press** (`whileTap`): `scale: 0.95–0.97`. No colour change on press.
- **Typing effect** — character-by-character with 80ms typing / 40ms deleting, 1.8s pause at full word.

### Borders, shadows, depth
- **Borders:** always semi-transparent purple — `rgba(139, 92, 246, 0.22)` (dark) / `rgba(124, 58, 237, 0.18)` (light). 1px hairlines.
- **Shadow stack:** three tiers (`--shadow`, `--shadow-lg`, `--shadow-xl`) plus accent glows. Glows always `rgba(168,85,247,*)`.
- **Glow signature:** the `glow-purple` class is `0 0 25px / 0 0 60px / 0 0 90px` — three concentric falloffs.

### Transparency & blur
- **Glassmorphism is the default surface.** `backdrop-filter: blur(24px) saturate(160%)` on `var(--bg-card)` (~80% opaque dark, 88% opaque light).
- Used on: nav pill, all cards, trait chips, tech cloud, contact info cards, mobile menu.
- **Solid (non-glass) surfaces are rare** — only the brand logo box and the gradient project visuals.

### Corner radii
- `rounded-xl` (12px) — buttons, inputs, small chips, icon tiles
- `rounded-2xl` (16px) — most cards
- `rounded-3xl` (24px) — featured project card, contact form panel
- `rounded-full` — availability dots, trait pills, tech-cloud chips, gradient orbs
- **Never sharp corners** anywhere except the section divider hairline.

### Cards
The canonical card recipe (`card-premium` / `glass`):
1. Background `var(--bg-card)` with backdrop-blur
2. 1px purple border
3. `rounded-2xl` (16px)
4. On hover: `translateY(-4px)`, accent border, layered purple shadow (`0 20px 48px rgba(168,85,247,0.20)`)
5. Optional `shine-effect` — diagonal white-translucent sweep across the surface

Featured cards add a **neon-pulse** outer glow that breathes on a 3.5s loop.

### Layout rules
- **Fixed nav** — pill-shaped, floats over content, gains a glass background only after `scrollY > 20`.
- **Single column on mobile**, multi-column at `md:` (≥768px) and `lg:` (≥1024px).
- The Hero alone breaks out of the global container so its orbs can bleed full-bleed.
- **No sidebars, no asymmetric layouts** — everything is centred-column.

### Iconography
See `## ICONOGRAPHY` below. Short version: **Lucide React**, `size 14–28`, `strokeWidth 2`, recoloured per context, often inside a small gradient or glass tile.

---

## ICONOGRAPHY

### Primary library: Lucide React (`lucide-react@1.7.0`)
The codebase uses Lucide for **every functional icon**. Icons identified in use:

`ArrowDown`, `ArrowUpRight`, `BookOpen`, `Bot`, `Brain`, `CheckCircle`, `CheckSquare`, `Code2`, `Coffee`, `Container`, `ExternalLink`, `Globe`, `Heart`, `Layers`, `Lightbulb`, `Mail`, `MapPin`, `Menu`, `MessageSquare`, `Moon`, `Palette`, `Rocket`, `Send`, `Server`, `Sparkles`, `Star`, `Sun`, `X`, `Zap`.

**Style:**
- Stroke icons (Lucide's default), 2px stroke
- Sizes 12 / 14 / 18 / 20 / 22 / 28 — context-sized, never larger
- Colour comes from currentColor; tinted via `text-purple-400`, `text-violet-400`, `text-fuchsia-400`, `text-emerald-400`, etc.
- Frequently wrapped in a `w-10 h-10 / w-11 h-11` glass or gradient tile (rounded-xl), e.g. skill category icons sit on `bg-gradient-to-br from-purple-500 to-violet-500`.

### Custom icons: brand SVGs
Two custom icons live in `src/components/Icons.tsx` (filled style, 24×24 viewBox):
- `GithubIcon` — the standard GitHub octocat path, fill currentColor
- `LinkedinIcon` — standard LinkedIn glyph, fill currentColor

These exist because they aren't in the installed Lucide version. **Filled, not stroked** — a deliberate visual contrast with the rest of the icon set.

### Logo / brand mark
The site has **no SVG logo file**. The brand mark is rendered live in markup:
- An 8×8 (32px) `rounded-xl` tile with `bg-gradient-to-br from-purple-500 to-violet-600` and a purple drop shadow
- The letters **AA** centred, white, font-black, tracking-tighter
- The wordmark beside it: gradient-clipped "Anum" + a muted "."

A standalone hero avatar repeats the same idea at 256×256 (`w-64 h-64`) — gradient circle, **AA** centred, white, 4xl font-bold.

`assets/logo-mark.svg` and `assets/avatar.svg` in this design system **recreate** these as standalone files.

### Other graphic elements
- **`public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`** — leftover Next.js boilerplate, not used in the live site. Skipped.
- **`favicon.ico`** — not in use beyond default; we use the AA gradient mark instead.

### Emoji
Used as **content tokens** (project totems, trait prefixes), never as functional icons. See `CONTENT FUNDAMENTALS → Emoji`.

### Substitutions in this design system
- **Lucide React** isn't directly usable in static HTML, so the UI kit + cards use **Lucide via CDN** (`https://unpkg.com/lucide@latest`) — same icon set, same stroke. **Flagged.**
- **Poppins + Inter** — sourced via Google Fonts `@import` rather than copying TTF files. Both fonts are exact matches to what `next/font` ships, no substitution needed. **Flagged** that fonts are CDN-imported rather than self-hosted; ship the TTFs into `fonts/` if you need offline use.

---

## What's flagged for the user

1. **Fonts** are loaded from Google Fonts via `@import`, not bundled as TTF files. Same families (Poppins + Inter) the live site uses, so no visual drift — but request bundled `.ttf`/`.woff2` files if you want offline.
2. **Lucide** is loaded from CDN in the previewable HTML files. The codebase uses `lucide-react`; the design system uses the vanilla `lucide` web build for static HTML compatibility.
3. **No real product imagery** exists — projects are represented by gradient + icon + emoji. The UI kit follows the same pattern.
