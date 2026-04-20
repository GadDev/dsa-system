# Plan: About Page — Content

No data fetching required — all content is static. The page is a React Server Component.

---

## Group 1: Page Component

1. Create `src/app/about/page.tsx`:
   - Server component (no `"use client"` needed — no interactivity)
   - Export `metadata` with title `"About — DSA Trainer"`
   - Three sections rendered in order: Origin Story, How It Works, About the Builder
   - The "About the Builder" section links to `https://github.com/GadDev` via an `<a>` tag with `target="_blank" rel="noopener noreferrer"`
   - Wrap the page content in `<main className="mx-auto max-w-2xl px-6 py-10 space-y-12">` consistent with `/day/[dayId]`
   - Use Framer Motion for section fade-in on mount (follow the pattern in `dashboard/page.tsx`)

---

## Group 2: Navigation

2. Update `src/components/layout/Navbar.tsx`:
   - Add `{ href: "/about", label: "About", icon: Info }` to the `links` array
   - Import `Info` from `lucide-react`
   - The existing active-link highlight logic already handles the new route — no extra changes needed

---

## Group 3: Content

All copy lives directly in `src/app/about/page.tsx`. No separate data file needed — this is a one-off static page.

### Section 1 — Origin Story

Why this exists: the grind without a system. Most developers preparing for technical interviews spend weeks on LeetCode without ever developing pattern intuition. They recognise problems they've seen before, and blank on anything slightly novel. This project is the system that replaces random grinding with deliberate, pattern-first practice.

### Section 2 — How It Works

A brief explanation of the structure: 35 days, 5 weeks, one pattern per day, three problems per day (easy → medium → hard). Each day includes a beginner explanation, an aha moment, a step-by-step walkthrough, a Mermaid diagram, and a reflection prompt. Progress is tracked locally — no account needed.

### Section 3 — About the Builder

Built by [GadDev](https://github.com/GadDev). One sentence on background (developer, built this for their own interview prep). GitHub profile link rendered as a styled anchor that matches the app's indigo accent colour.
