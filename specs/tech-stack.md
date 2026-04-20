# Tech Stack

## Language & Runtime

- **TypeScript 5.x** — strict mode, compiled and type-checked via Next.js's built-in TypeScript integration
- **React 19** — component model; used server-side and client-side via Next.js App Router
- **Node.js** — runtime via Next.js dev server and production server

## Framework

- **Next.js 16 (App Router)** — handles routing, rendering, and build pipeline
  - Routes defined via the filesystem under `src/app/` (page, layout, dynamic segments)
  - Dynamic route: `src/app/day/[dayId]/page.tsx`
  - No custom API routes in MVP — all data is static and client-managed
  - No server components doing data fetching; pages are thin wrappers over client components

## Frontend

- **TailwindCSS 4.x** — utility-first styling; configured via PostCSS (`postcss.config.mjs`)
  - Custom design tokens (colors, spacing) defined in `src/app/globals.css`
  - Dark background palette: `#0B0F14` base, `#11161C` surface, `#1F2933` borders
- **clsx + tailwind-merge** — conditional class composition via `cn()` helper in `src/lib/utils.ts`
- **lucide-react** — icon library
- **Framer Motion 12.x** — animation layer for transitions and micro-interactions
- **Mermaid 11.x** — renders algorithm diagrams from markdown-style definitions inside `MermaidDiagram.tsx`

## State Management & Persistence

- **Zustand 5.x** — global client state
  - Single store: `src/store/useProgressStore.ts`
  - Tracks completed problems and per-problem notes
  - Wrapped with the `persist` middleware — state serialized to `localStorage` automatically
  - No backend, no sync, no auth in MVP

## Data Layer

- **Static TypeScript files** — all application data lives in `src/data/`
  - `roadmap.ts` — 30-day plan with patterns and problems
  - `lessons.ts` — pattern explanations and diagrams
  - `studyResources.ts` — supplementary resources
  - No database, no ORM, no API calls

## Tooling

- **Biome 2.x** — linter and formatter (replaces ESLint + Prettier)
  - Run with `npm run lint` (check) and `npm run format` (write)
  - Configured in `biome.json` with Next.js and React domain rules enabled
- **Next.js build** — `npm run build` (production bundle), `npm run dev` (watch mode with HMR)
- No test runner currently configured

## Gaps / Future Considerations

- No tests — Vitest or Playwright would be the natural addition for a teaching codebase
- No CI pipeline defined — GitHub Actions with `npm run lint` and `npm run build` is the obvious next step
- `localStorage` persistence means no cross-device sync — a Zustand adapter for a remote store (e.g., Supabase) is the upgrade path
- No authentication — Clerk is the planned addition for v2
- Mermaid is initialized client-side only; the `MermaidDiagram` component requires a `"use client"` boundary
