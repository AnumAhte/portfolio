# Anum Ahtesham Portfolio — UI Kit

A high-fidelity, click-thru recreation of the live portfolio site built as standalone React components.

## What's here

- **`index.html`** — the full assembled portfolio (Hero → About → Skills → Projects → Journey → Contact → Footer) with working dark/light toggle, smooth scroll, mobile menu, hover states, typing effect, and form submission flow.
- **Components** (in load order):
  - `Navbar.jsx` — fixed pill nav with theme toggle, scroll-aware blur, mobile drawer
  - `Hero.jsx` — name + animated typing role + orbs + CTA + avatar
  - `About.jsx` — bio, trait pills, 4 stats, 3 highlight cards
  - `Skills.jsx` — 6 skill categories with animated progress bars + tech cloud
  - `Projects.jsx` — 1 featured horizontal card + 2 standard project cards
  - `Journey.jsx` — alternating timeline (mobile collapses to single column)
  - `Contact.jsx` — info cards + submission form with success state
  - `Footer.jsx` — brand, quick links, socials
  - `Primitives.jsx` — shared `<Pill>`, `<GlassCard>`, `<GradientText>`, `<SectionLabel>`, `<Icon>` (lucide CDN wrapper), and the gradient orb

## Notes & differences from the codebase

- **Framer Motion → CSS animations.** The kit uses CSS keyframes + JS scroll observers instead of `framer-motion` to keep it dependency-light. Easings, durations, and entry patterns match the originals.
- **Lucide React → Lucide vanilla via CDN** (`unpkg.com/lucide@latest`). Same icon set, same stroke.
- **Fonts** loaded from Google Fonts CDN (Poppins + Inter). Same families as `next/font` in production.
- Form submission is mocked client-side — there's no `/api/contact` endpoint. It shows the success state after a 600ms delay.
- Project links go to the real URLs from the codebase.
- Component implementations are cosmetic-only — no real auth, networking, or persistence.
