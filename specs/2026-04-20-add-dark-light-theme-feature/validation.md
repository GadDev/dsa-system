# Validation: Dark / Light Theme Toggle

Implementation is complete and ready to merge when all of the following pass.

## Build & Type Checks

- [ ] `npm run build` exits 0 with no errors
- [ ] `npm run lint` exits 0 (Biome — no lint or format violations)

## Manual Checks — Toggle behaviour

- [ ] A toggle button (Sun / Moon icon) is visible in the Navbar on every page
- [ ] Clicking the toggle switches the theme immediately with no full page reload
- [ ] Clicking again switches back to the previous theme
- [ ] `aria-label="Toggle theme"` is present on the toggle button
- [ ] The active icon matches the current state: `Sun` shown when in dark mode, `Moon` shown in light mode

## Manual Checks — Persistence

- [ ] Switching to light mode, then refreshing the page, stays in light mode
- [ ] Switching to dark mode, then refreshing the page, stays in dark mode
- [ ] `localStorage` key `"dsa-theme"` contains the persisted value after a toggle
- [ ] Opening the app with no `localStorage` entry defaults to dark mode

## Manual Checks — Flash prevention

- [ ] Hard-refreshing on `/dashboard` in light mode does not flash dark before settling to light
- [ ] Hard-refreshing on `/day/1` in light mode does not flash dark before settling to light

## Manual Checks — Light theme visual correctness

All of the following must look correct in light mode (no dark backgrounds bleeding through):

- [ ] Dashboard — stats cards, week section headers, day cards
- [ ] Day detail page — header, progress bar, pattern lesson card (all tabs: explanation, code, reflection)
- [ ] Problem items — completed state (green tint), uncompleted state, notes textarea
- [ ] Mermaid diagrams — background and text colours update to light theme values
- [ ] Navbar — background, border, link colours, active link highlight
- [ ] Badge component — default and coloured variants

## Manual Checks — Dark theme unchanged

- [ ] All pages look identical to pre-feature state when in dark mode
- [ ] No regressions in dark mode colours, spacing, or animations

## Token migration completeness

- [ ] No remaining `bg-[#0B0F14]`, `bg-[#11161C]`, `bg-[#161D25]` hardcoded classes in any `src/` file
- [ ] No remaining `border-[#1F2933]` hardcoded classes in any `src/` file
- [ ] No remaining `text-[#E6EDF3]`, `text-[#9AA4AF]`, `text-[#5A6470]` hardcoded classes in any `src/` file
- [ ] `MermaidDiagram.tsx` reads colour values from CSS variables at render time, not hardcoded hex strings

## Definition of Done

Build passes, lint passes, all manual checks confirmed, no hardcoded hex colour classes remain in `src/`, and the branch is rebased cleanly onto `main`.
