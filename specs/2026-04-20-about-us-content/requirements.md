# Requirements: About Page — Content

## Scope

Implement a single static page at `/about` that gives the project and its author an identity. No data fetching, no database, no form — pure static content rendered by a React Server Component.

### Content sections (all three, in order)

| Section           | Description                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| Origin Story      | Why this project was built — the problem with random grinding and the case for pattern-first learning |
| How It Works      | A concise explanation of the 35-day structure, the pattern-per-day format, and what each day contains |
| About the Builder | A short personal note from the author, with a link to their GitHub profile                            |

### Page structure

Single scrolling page at `/about`. All three sections rendered top-to-bottom. Max width `max-w-2xl`, consistent with the day detail page. No tabs, no anchor-link nav, no sidebar.

### Navigation

An "About" link added to `Navbar.tsx` alongside the existing "Dashboard" link.

## Decisions

- **Static content only** — no data file, no CMS. All copy lives in `src/app/about/page.tsx`.
- **Server component** — no `"use client"` directive unless Framer Motion animations are added (in which case, extract animated wrappers into a thin client component).
- **Single route** — `GET /about` renders the full page; no child routes.
- **No new dependencies** — standard Next.js App Router conventions, TailwindCSS, lucide-react icon. Framer Motion is already installed.
- **GitHub link** — `https://github.com/GadDev` opens in a new tab with `rel="noopener noreferrer"`.

## Context

### Stack pointers

- Follow `src/app/day/[dayId]/page.tsx` for page layout conventions: `mx-auto max-w-2xl px-6 py-10 space-y-8`.
- Follow `dashboard/page.tsx` for Framer Motion fade-in on mount pattern.
- Follow `src/components/layout/Navbar.tsx` for adding a nav link — append to the `links` array, add the `Info` icon from `lucide-react`.
- Design tokens: background `#0B0F14`, surface cards `#11161C`, border `#1F2933`, text primary `#E6EDF3`, text secondary `#9AA4AF`, accent indigo `#6366F1`.

### GitHub link styling

Render the GitHub link as an inline anchor styled with `text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors`. Include the `Github` icon from `lucide-react` inline before the handle.

### Out of scope

- No contact form
- No map embed
- No authentication
- No analytics
