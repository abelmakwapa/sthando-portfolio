# Sthando Abel Makwapa — Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Fumadocs.
Dark, glassmorphic tech-finance theme with a drone/HUD "reticle" motif tying
the visual language back to the HarvestFlow hackathon origin story.

## 1. Setup

```bash
# 1. Install dependencies (this also runs the fumadocs-mdx postinstall step,
#    which generates the typed .source folder used by lib/source.ts)
npm install

# 2. Add your real CV PDF (see public/cv/README.txt)
#    -> public/cv/Sthando-Abel-Makwapa-CV.pdf

# 3. Run the dev server
npm run dev
```

Open http://localhost:3000 for the portfolio, and
http://localhost:3000/docs/harvestflow for the Fumadocs-powered case study.

### A note on two components

The brief referenced two "provided" components — an Interactive Dots
Background and a `hero-ascii-one.tsx` futuristic hero — but their source
wasn't included in the prompt I received, so I built original
implementations matching the described behavior (a performant,
mouse-reactive canvas dot grid; a HUD/cyber-frame hero with corner
brackets and coordinate/status readouts) and branded them for Sthando.

If you have the original files, drop them in at the same paths and keep
the same export names so nothing else breaks:

- `components/interactive-dots-background.tsx` → exports `InteractiveDotsBackground`
- `components/hero.tsx` → exports `Hero`

Everything else (`app/page.tsx`, `lib/data.ts`) only depends on those two
export names, not on the internals.

## 2. File structure

```
sthando-portfolio/
├─ app/
│  ├─ layout.tsx              # fonts, metadata, RootProvider (fumadocs)
│  ├─ page.tsx                # assembles all sections
│  ├─ globals.css             # design tokens, glass + reticle utilities
│  └─ docs/
│     ├─ layout.tsx           # fumadocs DocsLayout wrapper
│     └─ [[...slug]]/page.tsx # renders MDX docs (HarvestFlow case study)
├─ components/
│  ├─ ui/                     # shadcn primitives: button, card, badge, separator
│  ├─ interactive-dots-background.tsx   # Component 1
│  ├─ hero.tsx                          # Component 2 (adapted)
│  ├─ navbar.tsx
│  ├─ floating-cv-button.tsx
│  ├─ section-heading.tsx
│  └─ sections/
│     ├─ about.tsx
│     ├─ education.tsx
│     ├─ harvestflow.tsx      # flagship featured-project section
│     ├─ achievements.tsx
│     ├─ skills.tsx
│     └─ contact.tsx
├─ content/docs/
│  ├─ meta.json
│  └─ harvestflow.mdx         # the case study, written in MDX
├─ lib/
│  ├─ data.ts                 # single source of truth for all copy
│  ├─ source.ts                # fumadocs content loader
│  └─ utils.ts                # cn() helper
├─ public/cv/                 # put the real CV PDF here
├─ source.config.ts           # fumadocs-mdx collection definition
├─ mdx-components.tsx
├─ tailwind.config.ts
├─ components.json            # shadcn config
└─ next.config.mjs
```

## 3. Design system at a glance

- **Palette** — background `#05080F`, electric blue `#3D7FFF` / glow `#00D4FF`,
  amber accent `#E8B65C`, glass surfaces via `backdrop-filter: blur`.
- **Type** — Sora (display headings), Inter (body), JetBrains Mono (eyebrow
  labels, coordinates, stats — leaning into the terminal/HUD feel).
- **Signature motif** — `.reticle` corner brackets (see `globals.css`),
  used on the hero frame, the nav logo, and every card. It's a deliberate
  callback to the drone/targeting visual language of the Drones for Africa
  Hackathon, so the personal brand and the headline project read as one
  coherent idea rather than a generic "AI portfolio" look.
- Respects `prefers-reduced-motion` (dots background falls back to a
  static grid; global animation durations collapse to ~0).

## 4. Editing content

All personal copy — name, tagline, education, HarvestFlow details,
achievements, skills, contact info — lives in `lib/data.ts`. Update that
file rather than hunting through components.

To add another docs page (e.g. a second case study), add an `.mdx` file
under `content/docs/`, list it in `content/docs/meta.json`, and link to it
from `lib/data.ts` or the relevant section component.

## 5. Notes on Fumadocs

This project pins approximate, recent `fumadocs-core` / `fumadocs-ui` /
`fumadocs-mdx` versions in `package.json`. Fumadocs' APIs (loader config,
`.source` generation) have shifted across versions in the past — if
`npm install` resolves a newer release than expected and you hit a type
error in `lib/source.ts` or `source.config.ts`, check the current docs at
fumadocs.dev; the fix is almost always a small rename, not a structural
change.
