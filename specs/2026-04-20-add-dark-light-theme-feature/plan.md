# Plan: Dark / Light Theme Toggle

---

## Group 1: Light theme tokens

1. Update `src/app/globals.css`:
   - Keep existing `:root` block as-is — it defines the dark theme
   - Add a `[data-theme="light"]` block with light-mode overrides for every custom property:
     - `--bg`: `#F8FAFC`
     - `--surface`: `#FFFFFF`
     - `--surface-hover`: `#F1F5F9`
     - `--border`: `#E2E8F0`
     - `--border-subtle`: `#F1F5F9`
     - `--text-primary`: `#0F172A`
     - `--text-secondary`: `#475569`
     - `--text-muted`: `#94A3B8`
     - `--primary`: `#6366F1` (unchanged)
     - `--primary-hover`: `#4F46E5`
     - `--primary-glow`: `rgba(99, 102, 241, 0.12)`
     - `--success`: `#16A34A`
     - `--success-glow`: `rgba(22, 163, 74, 0.10)`
     - `--warning`: `#D97706`
     - `--danger`: `#DC2626`
   - Update `html` rule: `color-scheme: dark light` (supports both)

---

## Group 2: Theme store

2. Create `src/store/useThemeStore.ts`:
   - Zustand store with `persist` middleware (key: `"dsa-theme"`)
   - State: `theme: "dark" | "light"`
   - Action: `toggleTheme()` — flips between dark and light
   - On mount, apply `document.documentElement.setAttribute("data-theme", theme)` — or default to dark if no persisted value

---

## Group 3: Theme provider

3. Create `src/components/layout/ThemeProvider.tsx`:
   - `"use client"` component
   - Reads `theme` from `useThemeStore` on mount
   - Calls `document.documentElement.setAttribute("data-theme", theme)` when theme changes (via `useEffect`)
   - Renders `{children}` with no visible wrapper
   - Prevents flash of wrong theme by setting the attribute synchronously via an inline `<script>` injected in `src/app/layout.tsx` before hydration

4. Update `src/app/layout.tsx`:
   - Wrap `<Navbar />` and `<main>` in `<ThemeProvider>`
   - Remove hardcoded `bg-[#0B0F14] text-[#E6EDF3]` from `<body>` — replace with `bg-bg text-text-primary` using the CSS custom property tokens

---

## Group 4: Toggle button

5. Update `src/components/layout/Navbar.tsx`:
   - Add a `ThemeToggle` button at the right end of the nav (after the links)
   - Import `Sun` and `Moon` from `lucide-react`
   - Render `<Sun />` when theme is `"dark"` (click switches to light), `<Moon />` when theme is `"light"` (click switches to dark)
   - Button styled consistently with existing nav links: `rounded-md px-2 py-1.5 text-[#9AA4AF] hover:bg-[surface-hover] hover:text-[text-primary] transition-colors`
   - Add `aria-label="Toggle theme"` for accessibility

---

## Group 5: Migrate hardcoded hex values

The following files contain hardcoded hex values that must be replaced with Tailwind CSS custom property classes (`bg-surface`, `text-text-primary`, `border-border`, etc.) so the light theme tokens take effect:

- `src/app/dashboard/page.tsx`
- `src/app/day/[dayId]/page.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/dsa/Badge.tsx`
- `src/components/dsa/DayCard.tsx`
- `src/components/dsa/ProblemItem.tsx`
- `src/components/dsa/ProgressBar.tsx`
- `src/components/dsa/PatternLessonCard.tsx`
- `src/components/dsa/MermaidDiagram.tsx` — update the Mermaid `theme` config to read CSS variable values at render time instead of hardcoded hex strings

Migration rule:
| Hardcoded value | Tailwind class |
|-----------------|----------------|
| `bg-[#0B0F14]` | `bg-bg` |
| `bg-[#11161C]` | `bg-surface` |
| `bg-[#161D25]` | `bg-surface-hover` |
| `border-[#1F2933]` | `border-border` |
| `text-[#E6EDF3]` | `text-text-primary` |
| `text-[#9AA4AF]` | `text-text-secondary` |
| `text-[#5A6470]` | `text-text-muted` |
