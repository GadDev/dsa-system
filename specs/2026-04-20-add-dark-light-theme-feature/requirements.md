# Requirements: Dark / Light Theme Toggle

## Scope

Add a persistent dark/light theme toggle to the application. The default theme is dark (current state). Users can switch to light mode and the preference is persisted in `localStorage`.

## Decisions

- **CSS custom properties drive theming** — all colour values are already defined as CSS variables in `:root` in `globals.css`. The light theme is implemented by overriding those variables under a `[data-theme="light"]` selector on `<html>`. No new Tailwind config, no runtime style injection, no CSS-in-JS.
- **Zustand with `persist`** — theme preference is stored via a new `useThemeStore` with the `persist` middleware, consistent with `useProgressStore`. Key: `"dsa-theme"`.
- **No flash of wrong theme** — a small inline `<script>` in `layout.tsx` reads `localStorage` before React hydrates and sets `data-theme` on `<html>` synchronously, preventing a dark→light flash on page load.
- **`data-theme` attribute on `<html>`** — not a class toggle, not `next-themes`. The attribute approach is explicit and CSS-only, consistent with how `color-scheme` is already set.
- **No new dependencies** — `next-themes` is intentionally avoided; the custom property approach is simpler and directly teachable. `lucide-react` is already installed for the `Sun` / `Moon` icons.
- **Hardcoded hex migration is required** — the theme toggle will have no effect until components stop using hardcoded `#0B0F14`, `#11161C`, etc. and instead use the Tailwind custom property classes (`bg-bg`, `bg-surface`, `border-border`, etc.) that resolve to the CSS variables.

## Context

### Current state

`globals.css` already defines all colour tokens as CSS custom properties in `:root`. However, most components reference colours directly as hardcoded Tailwind hex values (e.g. `bg-[#11161C]`, `text-[#E6EDF3]`). These bypass the CSS variable system entirely and will not respond to theme switching. The hex migration in Group 5 of the plan is what connects the component layer to the token layer.

### Stack pointers

- `globals.css` — add `[data-theme="light"]` block after the existing `:root` block. Update `html { color-scheme: dark; }` to `color-scheme: dark light`.
- `src/store/useThemeStore.ts` — follow the same structure as `useProgressStore.ts`: `create<T>()(persist(...))`.
- `src/components/layout/ThemeProvider.tsx` — `"use client"`, single `useEffect` that calls `document.documentElement.setAttribute("data-theme", theme)` on theme change.
- `src/app/layout.tsx` — add `ThemeProvider` wrapper; add an inline `<script>` tag before the body content to prevent flash:
  ```tsx
  <script
    dangerouslySetInnerHTML={{
      __html: `
    try {
      const t = JSON.parse(localStorage.getItem('dsa-theme') || '{}');
      if (t.state?.theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
    } catch {}
  `,
    }}
  />
  ```
- `Navbar.tsx` — the toggle button sits to the right of the nav links. `Sun` when dark (clicking switches to light), `Moon` when light (clicking switches to dark).

### Mermaid diagram theming

`MermaidDiagram.tsx` currently passes hardcoded hex values to Mermaid's theme config object. In light mode these will look wrong. The fix is to read the computed CSS variable values at render time:

```ts
const style = getComputedStyle(document.documentElement);
const bg = style.getPropertyValue("--surface").trim();
const text = style.getPropertyValue("--text-primary").trim();
```

Pass these into the Mermaid `themeVariables` instead of hardcoded strings.

### Out of scope

- System preference detection (`prefers-color-scheme`) — defer to a future iteration
- Separate theme for printed output
- Any theme beyond dark and light
