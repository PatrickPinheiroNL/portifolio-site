# patrick.dev — Portfolio

Personal portfolio of **Patrick Freitas Pinheiro** — Computer Science student,
frontend developer, specializing in Java backend engineering.

Built with **React + TypeScript + Tailwind CSS**, bundled by Vite.

---

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server at http://localhost:5173
```

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Dev server with hot module replacement        |
| `npm run build`     | Type-check (`tsc -b`) then build to `dist/`   |
| `npm run preview`   | Serve the production build locally            |
| `npm run typecheck` | Type-check only, no emit                      |

---

## Project structure

```
src/
├── App.tsx                 # Page composition (section order)
├── main.tsx                # React entry point
├── index.css               # Tailwind layers + design primitives
│
├── components/
│   ├── layout/             # Header, Footer
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/           # One file per page section
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Journey.tsx
│   │   ├── Contact.tsx
│   │   └── ContactForm.tsx
│   └── ui/                 # Reusable presentational pieces
│       ├── CodeWindow.tsx
│       ├── Container.tsx
│       ├── Icons.tsx
│       ├── Logo.tsx
│       ├── SectionHeading.tsx
│       ├── StatusChip.tsx
│       └── TechBadge.tsx
│
├── data/                   # All editable content lives here
│   ├── profile.ts          # Name, links, email, nav, hero cards
│   ├── about.ts            # Bio paragraphs + stat cards
│   ├── skills.ts           # Skill tabs and badge groups
│   ├── projects.ts         # Project cards
│   └── journey.ts          # Timeline steps
│
├── hooks/
│   ├── useActiveSection.ts # Scroll-spy for the nav
│   └── useScrolled.ts      # Header background on scroll
│
├── lib/
│   ├── tone.ts             # Badge / accent color maps
│   └── utils.ts            # `cn` class-name helper
│
└── types/
    └── index.ts            # Shared domain types
```

### Editing content

Content is fully separated from presentation. To change anything on the page,
edit the matching file in `src/data/` — no component changes required.

- **Name, email, social links, footer year** → `src/data/profile.ts`
- **Bio and the four stat cards** → `src/data/about.ts`
- **Skill tabs and badges** → `src/data/skills.ts`
- **Project cards** → `src/data/projects.ts`
- **Timeline** → `src/data/journey.ts`

Badge colors come from the `TechTone` union in `src/types/index.ts` and are
mapped in `src/lib/tone.ts`.

---

## Notes

- **Project links** — every `repoUrl` / `demoUrl` in `src/data/projects.ts`
  currently points to the GitHub profile so nothing 404s. Replace them with the
  individual repositories once those are public.
- **Contact form** — validates client-side and then opens the visitor's email
  client pre-filled (`mailto:`), which keeps the site fully static. To switch to
  a real endpoint, replace `handleSubmit` in
  `src/components/sections/ContactForm.tsx` with a `fetch` POST.

---

## Accessibility & quality

- Single `<h1>`, ordered heading outline, landmark elements, skip-to-content link
- Full keyboard navigation with visible focus rings (`.focus-ring`)
- ARIA tabs for the skills switcher, labelled form fields with error messaging
- Honors `prefers-reduced-motion`
- No horizontal overflow from 320px upward

---

## Deploy

The build output is a static `dist/` folder — deploy it to Vercel, Netlify,
GitHub Pages or any static host.

```bash
npm run build
```
