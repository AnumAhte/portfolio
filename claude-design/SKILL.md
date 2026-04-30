---
name: anum-portfolio-design
description: Use this skill to generate well-branded interfaces and assets for Anum Ahtesham's portfolio brand — full-stack + agentic AI developer aesthetic. Dark, glass, purple/violet/fuchsia gradients, Poppins type, lucide icons. Use for production code, prototypes, mocks, slides, or throwaway design experiments.
user-invocable: true
---

Read the `README.md` file in this skill first — it contains the brand voice, content fundamentals, visual foundations, iconography rules, and a manifest of every other file.

Key files to explore:
- `colors_and_type.css` — drop-in CSS variables for color, type, spacing, radii, shadows, plus semantic element styles
- `ui_kits/portfolio/` — pixel-faithful React/JSX recreation of the live portfolio. `index.html` shows the assembled product; individual `.jsx` files (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Journey`, `Contact`, `Footer`, `Primitives`) are the building blocks
- `preview/` — small specimen cards (color swatches, type scale, components, brand mark) — handy as visual reference
- `assets/` — logos, mark, illustrations

If creating visual artifacts (slides, mocks, throwaway prototypes, marketing graphics, etc), copy the assets you need out of this skill folder and produce static HTML files for the user to view.

If working on production code, copy the relevant tokens / components and read the rules in README.md to become an expert in designing with this brand. The CSS variables in `colors_and_type.css` are the source of truth — do NOT invent new colors. Stick to the purple/violet/fuchsia gradient system on a near-black canvas, with glass cards (`rgba(20,20,22,.6)` + `backdrop-filter: blur(12px)` + 1px purple-tinted border + 24px radius). Section labels are tiny uppercase eyebrows in `--accent`; section titles end with a gradient-filled noun followed by an animated underline.

Voice: warm, confident, action-oriented, first-person. Em dashes are signature. Bold key phrases. Two short trust lines with a `✦` bullet. No corporate jargon — "Ship fast, iterate intelligently."

Iconography: lucide-react (kebab-case names, 2px stroke, 14–28px). Custom GitHub/LinkedIn glyphs are filled-style and live in `Icons.tsx` of the source repo. Emoji is allowed in trait pills, project cards, and the location field — used as accent, never as primary content.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few clarifying questions (audience, format, length, dark/light), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
