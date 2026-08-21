# DSA Trainer — Pattern-Based Mastery

A 35-day, pattern-based system for mastering Data Structures & Algorithms. Instead of grinding random problems, each day teaches **one recognizable pattern** — the mental model, the tell-tale signs that it applies, the common mistake that trips people up, and a small set of hand-picked LeetCode problems with hints that nudge without spoiling the solution.

**Live app:** [dsa-system.vercel.app](https://dsa-system.vercel.app/dashboard)

---

## Why this exists

Most DSA prep is either:
- a giant unordered list of LeetCode problems, or
- a pattern list with no guidance on *how to recognize* which pattern to reach for.

DSA Trainer tries to close that gap. Every day is built around a single pattern with an explicit **recognition checklist** ("Am I waiting for the next greater value?") so that, over time, you stop pattern-matching by memory and start pattern-matching by structure.

## How it's structured

```
5 weeks · 35 days · 137 problems
```

| Week | Focus |
|------|-------|
| 1 | Arrays & Two Pointers |
| 2 | Sliding Window & HashMap |
| 3 | Stack & Binary Search |
| 4 | Trees & Graphs |
| 5 | Mastery & Interview Prep (mock interviews, weakness repair, speed mode, pattern drills) |

Each week ends with a **review day** that mixes problems from that week's patterns before moving on.

## Anatomy of a day

Every day page (`/day/[n]`) follows the same teaching structure:

1. **Pattern Focus** — a one-line mental model for the technique (e.g. *"Keep unresolved indexes in stack order so a new greater value can answer old questions immediately."*)
2. **Pattern Checklist** — diagnostic questions to help you recognize when this pattern applies, before you've even started coding
3. **Beginner-friendly intuition** — an analogy that makes the pattern click (e.g. framing *Daily Temperatures* as a "waiting room" problem)
4. **How to think about it** — a numbered breakdown of the approach
5. **Common Mistake** — the most frequent way people get this pattern wrong
6. **Problems** — 2–4 LeetCode problems tagged by difficulty, each with a **hint** that points toward the technique without giving away the implementation
7. **Progress tracking** — mark problems solved and move to the next day

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- [Biome](https://biomejs.dev) for linting/formatting

## Project structure

```
dsa-system/
├── public/          # static assets
├── specs/           # pattern/day content specs
├── src/             # application source (App Router pages, components)
├── AGENTS.md         # agent-facing conventions for this repo
├── CLAUDE.md          # Claude Code project instructions
├── biome.json
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Getting started

Requires Node.js and a package manager of your choice (npm, pnpm, yarn, or bun).

```bash
git clone https://github.com/GadDev/dsa-system.git
cd dsa-system
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/dashboard`, the 35-day roadmap.

## Roadmap

- Days 1–29 are live (Weeks 1–4, plus the start of Week 5)
- Days 30–35 are marked "Coming soon": Mock Interview Workflow, Weakness Repair, Speed Mode, Pattern Variations, Pattern Recognition Drill, and a final "Final Boss" mixed-pattern day

## Contributing

Content contributions (new day patterns, better hints, corrected problem links) and code contributions (UI, progress-tracking features) are both welcome — open an issue or PR.

## License

See [LICENSE](./LICENSE) if present, or open an issue to clarify licensing intent for this repo.
