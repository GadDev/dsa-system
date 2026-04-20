# Roadmap

Phases are intentionally scoped — each should be implementable in one focused session.

---

## Phase 1: Core MVP (Complete)

**Goal:** A working 35-day DSA practice system with routing, progress tracking, and pattern learning.

- [x] Scaffold Next.js 16 app with App Router, TypeScript strict mode, TailwindCSS 4, Biome
- [x] Define data model — `Problem`, `DayPlan` types in `src/data/roadmap.ts`
- [x] Populate full 35-day roadmap (5 weeks, pattern per day, 3 problems per day with difficulty + LeetCode links)
- [x] Root redirect `/` → `/dashboard`
- [x] Dashboard page with stats grid (problems solved, overall progress %, current day, days complete)
- [x] Week-grouped roadmap view with `DayCard` components and per-day progress indicators
- [x] Zustand store (`useProgressStore`) with `persist` middleware — state serialized to `localStorage`
- [x] `toggleProblem` and progress calculation (`getDayProgress`, `isDayComplete`, `getTotalCompleted`)
- [x] Day detail page (`/day/[dayId]`) with pattern header, description, problems list, prev/next navigation
- [x] `ProblemItem` component — checkbox toggle, difficulty badge, LeetCode link, inline notes textarea with auto-save
- [x] Per-problem notes stored in Zustand and persisted to `localStorage`
- [x] `PatternLessonCard` component — beginner explanation, aha moment, steps, common mistake, Mermaid diagram, walkthrough, practice hints, starter code, test cases, reflection tab
- [x] `MermaidDiagram` component — client-side Mermaid rendering
- [x] `ProgressBar`, `Badge` components
- [x] `Navbar` with sticky header and active link highlight
- [x] Framer Motion animations throughout (staggered cards, page transitions, list entries)
- [x] Populate `src/data/lessons.ts` — full `PatternLesson` entries for all 35 days
- [x] Populate `src/data/studyResources.ts` — per-day pattern checklist, starter code, test cases

---

## Phase 2: Embedded Code Editor + Test Runner

**Goal:** Let users write and run solutions directly in the app, against the predefined test cases that already exist in `studyResources.ts`. No context-switching to an external REPL.

### Approach A — Client-side execution (MVP, no backend)

JavaScript/TypeScript solutions are evaluated in the browser using `new Function()` or a sandboxed `iframe`. This works for all Week 1–4 problems, requires zero infrastructure, and keeps the app local-first.

- [ ] Upgrade `PatternLessonCard` starter code panel to a full Monaco Editor instance (`@monaco-editor/react`)
- [ ] Wire the existing `starterCode` and `testCases` from `studyResources.ts` into the editor
- [ ] Build a `runTests(code, testCases)` utility that executes user code against each case in a sandboxed `Function` constructor and captures pass/fail + actual vs. expected output
- [ ] Display test results inline — green/red per case, runtime display, error messages with line numbers
- [ ] Persist the user's last written code per problem in `useProgressStore` (alongside notes)
- [ ] Auto-mark problem as complete when all test cases pass

### Approach B — Judge0 backend (v2, see Phase 9)

For languages beyond JavaScript, time limits, and memory tracking, replace the client sandbox with calls to a Judge0 API. See Phase 9 for the full design.

### Week 5 link fixes (required before this ships)

Days 31–35 contain problems with `link: "/dashboard"` — these are open-ended drills with no external URL. They need in-app implementations:

- [ ] Day 31 "Pick Your Weakest Problem" → opens a modal letting the user pick any previously completed problem and resets its completion status for a redo session
- [ ] Day 31 "Redo It Without Notes" → same as above, but hides the lesson card and notes panel while solving
- [ ] Day 32 "Speed Run" problems → launches a timed mode (configurable timer, default 10 min) over a randomly selected problem from weeks 1–4
- [ ] Day 33 "Variation Drill" problems → presents the problem with a modified constraint appended to the description (e.g., "now solve it in O(1) space") — content authored in `studyResources.ts`
- [ ] Day 34 "Recognition Drill" problems → shows only the problem title and asks the user to name the pattern before revealing the solution tab
- [ ] Day 34 "Max Profit in Job Scheduling" → fix broken LeetCode link (currently points to a wrong path)

---

## Phase 3: Pattern Cheat Sheet Page

**Goal:** A single reference page listing all patterns with their trigger conditions and core rules — the "cheat sheet brain" from IDEAS.md.

- [ ] Define a `PatternSummary` type (trigger keywords, rule, example)
- [ ] Extract pattern summaries from existing `lessons.ts` data
- [ ] Build `/patterns` page with a searchable, filterable grid of pattern cards
- [ ] Each card: pattern name, trigger list, one-line rule, link to a representative day
- [ ] Add `/patterns` link to the `Navbar`

---

## Phase 4: Progress Reset & Data Hygiene

**Goal:** Let users start fresh without manual localStorage manipulation.

- [ ] Add a "Reset Progress" button on the dashboard (behind a confirmation dialog)
- [ ] Implement `reset()` action in `useProgressStore` — clears `completedProblems` and `problemNotes`
- [ ] Show a brief success toast or animation after reset
- [ ] Add a "Reset day" option on each day page (clears only that day's problems and notes)

---

## Phase 5: Statistics & Insights Page

**Goal:** Surface meaningful learning data beyond a raw completion count.

- [ ] Add `/stats` page
- [ ] Completion breakdown by difficulty (easy / medium / hard solved vs. total)
- [ ] Completion breakdown by week
- [ ] Pattern mastery score — % complete per pattern group
- [ ] Longest streak of consecutive completed days
- [ ] Most and least practiced pattern types
- [ ] Add `/stats` link to the `Navbar`

---

## Phase 6: Keyboard Navigation

**Goal:** Let power users operate the entire app without a mouse.

- [ ] `j` / `k` — navigate between problems on a day page
- [ ] `Space` or `Enter` — toggle the focused problem as complete
- [ ] `n` — open/close the notes panel for the focused problem
- [ ] `[` / `]` — navigate to previous / next day
- [ ] Keyboard shortcut legend (e.g., `?` to show a modal)

---

## Phase 7: Export Notes

**Goal:** Let users get their notes out of the app in a portable format.

- [ ] "Export notes" button on the dashboard or stats page
- [ ] Generate a Markdown file with all per-problem notes grouped by day and pattern
- [ ] Trigger a browser download (no server required)
- [ ] Optional: export as JSON for re-import later

---

## Phase 8: Pattern Recognition Quiz

**Goal:** Test pattern intuition, not just problem completion — the core differentiator from random grinding.

- [ ] Define a `QuizQuestion` type (problem description snippet, answer choices, correct pattern)
- [ ] Build a `/quiz` page with a simple multiple-choice flow
- [ ] On answer, show explanation of why that pattern fits
- [ ] Track quiz score in `useProgressStore` (separate from problem completion)
- [ ] Surface weak patterns based on quiz history

---

## Phase 9: Backend Code Execution — Judge0

**Goal:** Replace the client-side `Function` sandbox with a real code execution engine. This unlocks multi-language support, honest time/memory limits, and security.

### Why Judge0

Judge0 is an open-source code execution system (not a SaaS lock-in). It supports 60+ languages, runs each submission in an isolated container, enforces CPU time and memory limits, and returns stdout, stderr, and a status code. It can be self-hosted (Docker) or consumed via the Judge0 CE public API on RapidAPI.

### Architecture

```
Browser (Monaco editor)
  │
  ▼
Next.js API Route (/api/judge)
  │  — strips secrets, enforces rate limit, validates input
  ▼
Judge0 REST API
  │  POST /submissions?base64_encoded=true&wait=true
  ▼
Response: { status, stdout, stderr, time, memory }
  │
  ▼
Browser renders pass/fail per test case
```

The Next.js API route acts as a proxy — it holds the Judge0 API key server-side, prevents direct browser access, and can enforce per-user rate limits (e.g., 20 submissions/day without auth).

### Implementation tasks

- [ ] Provision Judge0 CE — either `docker compose up` locally or use RapidAPI free tier for MVP
- [ ] Create `src/app/api/judge/route.ts` — validates input, calls Judge0, returns normalized result
- [ ] Store `JUDGE0_API_URL` and `JUDGE0_API_KEY` in `.env.local` (never shipped to client)
- [ ] Update `runTests()` utility to call `/api/judge` instead of the `Function` sandbox when available; fall back to sandbox if the env var is absent (keeps local dev working without Docker)
- [ ] Extend `studyResources.ts` to include a `language_id` per day (63 = JavaScript, 71 = Python, 54 = C++)
- [ ] Display time and memory usage alongside test results

### Multi-language consideration

Adding Python and Java support becomes straightforward once Judge0 is in place. The editor language can be toggled per problem; the starter code adapts from a `starterCodeByLanguage` map in `studyResources.ts`.

---

## Phase 10: AI Features

**Goal:** Layer intelligence on top of the existing content without replacing the learning loop. AI augments the system — it does not become the system.

### 10a — "Explain Your Strategy Out Loud" (Day 35)

This is the highest-value AI feature in the app. Before a real interview, the hardest skill is not coding — it is articulating your thinking while you code. This feature trains exactly that.

**The problem with Day 35 linking to `/dashboard`:** The "Explain Your Strategy Out Loud" problem currently goes nowhere. It needs a purpose-built UI.

**Option A — AI Agent evaluation (recommended for v2)**

The user types (or pastes) their verbal walkthrough of a problem — e.g., "I noticed the array is sorted so I used two pointers, starting from both ends, moving the smaller one inward until they meet." An LLM agent scores the explanation against a rubric:

1. Did they name the correct pattern?
2. Did they state why that pattern fits (trigger condition)?
3. Did they describe their approach before writing code?
4. Did they mention time and space complexity?
5. Did they acknowledge edge cases?

The agent replies with structured feedback per criterion, not a grade. It points to gaps without lecturing.

- [ ] Build `ExplainModal` component — text input, submit button, streaming response display
- [ ] Create `src/app/api/ai/explain/route.ts` — calls OpenAI/Anthropic with a structured system prompt containing the evaluation rubric and the day's pattern context
- [ ] Pass the current day's `patternLabel`, `steps`, and `commonMistake` from `lessons.ts` as context in the prompt — no hallucination risk because the rubric is grounded in existing data
- [ ] Stream the response with `ReadableStream` — display feedback incrementally
- [ ] Store `OPENAI_API_KEY` (or `ANTHROPIC_API_KEY`) in `.env.local`

**Option B — RAG over `/data` folder (lower cost, fully local)**

Instead of calling an LLM, embed the content of `lessons.ts` into a local vector store (e.g., `vectra` or `chromadb`) at build time. When the user submits their explanation, retrieve the most relevant lesson chunks and run a lightweight similarity + keyword check against the rubric.

Tradeoffs:

- No API cost, works offline
- Less nuanced feedback (keyword matching vs. semantic understanding)
- Sufficient for checking "did they mention two pointers" but not for evaluating reasoning quality
- Reasonable starting point before adding an LLM

Recommendation: start with RAG for the pattern-identification check (fast, cheap, deterministic), add LLM for the qualitative reasoning feedback (one API call per submission).

- [ ] At build time, generate embeddings for all `PatternLesson` entries using a local model (`transformers.js`) and persist as a JSON index
- [ ] On submission, embed the user's explanation and cosine-similarity-search against the index
- [ ] Surface the top-matching pattern and flag if it does not match the current day's expected pattern

### 10b — Progressive Hint System

The user can request up to three hints per problem. Each hint reveals more without spoiling the solution. Hints are ordered: trigger condition → pattern name → first concrete step.

- [ ] Store hint levels in `studyResources.ts` per problem (three strings per problem)
- [ ] Add a "Get a hint" button on `ProblemItem` — first click shows hint 1, second shows hint 2, etc.
- [ ] For problems that don't have authored hints, call an AI route that generates progressive hints from the problem title and the day's pattern context
- [ ] Track hints-used in `useProgressStore` (problems solved without hints are flagged distinctly)

### 10c — Pattern Detection on Submitted Code

After the user runs their code and passes the tests, analyze the solution and identify which algorithmic pattern it actually uses — catching cases where the user solved it with brute force instead of the target pattern.

- [ ] Post the user's code + the expected pattern to an AI route
- [ ] If the patterns don't match, surface a nudge: "Your solution works, but it runs in O(n²). The target pattern (Sliding Window) solves this in O(n)."
- [ ] Link to the lesson card for the pattern they missed

### 10d — Weakness Detection

Use completion and hint data to surface patterns where the user is consistently slower, takes more hints, or fails more test runs.

- [ ] Compute a "struggle score" per pattern: (hints used + retries) / problems attempted
- [ ] Surface top 3 weak patterns on the dashboard stats card
- [ ] Suggest re-doing specific days based on the score

---

## Phase 11: Final Mixed Challenge (Day 35)

**Goal:** A proper capstone experience that mirrors the format of a real technical interview round, not just a list of five random hard problems.

### Structure

The Final Mixed Challenge is a **timed, pattern-blind gauntlet** — four problems drawn one at a time from different pattern groups, with a 45-minute total clock. The user does not know which pattern each problem tests until after they submit a solution.

```
Round structure:
  Problem 1 — Easy   (Week 1–2 pattern)
  Problem 2 — Medium (Week 2–3 pattern)
  Problem 3 — Medium (Week 3–4 pattern)
  Problem 4 — Hard   (Week 4–5 pattern, or mixed)
```

### Experience flow

1. User lands on a `/challenge` page — brief intro, one "Start 45:00" button
2. Timer starts. Problem 1 appears — description only, no pattern badge, no lesson card
3. User writes a solution in the embedded editor and runs tests
4. On pass (or on "skip"), the pattern reveal animates in — "That was Sliding Window. You solved it in 8:42."
5. Problem 2 appears automatically
6. After all four problems (or timer expires), a results screen shows: patterns hit, patterns missed, time per problem, hints used
7. The results screen links to the lesson card for each pattern that caused a slow solve or a miss

### Implementation tasks

- [ ] Define a `ChallengeRound` type: ordered list of `{ problem, expectedPattern, timeAllotted }`
- [ ] Author 3–4 fixed challenge sets in `src/data/challenges.ts` (curated, not random — quality over entropy)
- [ ] Build `/challenge` page with a countdown timer, sequential problem reveal, and results screen
- [ ] Reuse the Monaco editor and `runTests()` from Phase 2
- [ ] Pattern reveal animation using Framer Motion — badge drops in after submission
- [ ] Store challenge history in `useProgressStore` — date, time per problem, patterns identified correctly
- [ ] Surface "Challenge best time" on the dashboard stats grid

---

## Phase 12: CI & Quality

**Goal:** Make the codebase trustworthy and safe to contribute to.

- [ ] Add GitHub Actions workflow — runs `npm run lint` and `npm run build` on every push
- [ ] Add Vitest — unit tests for `useProgressStore` logic, `utils.ts` helpers
- [ ] Add at least one integration test per page route
- [ ] Enforce no-merge-to-main without green CI

---

## Gaps / Deferred

- **Authentication** — Clerk integration planned for v2 to enable cross-device sync
- **Backend / database** — `localStorage` is intentional for MVP; upgrade path is a Zustand remote adapter (e.g., Supabase)
- **Light mode** — design tokens are in place; toggling is a future polish item
- **AI hints** — progressive hint system ("give me a nudge") is the most impactful v3 feature; requires an API layer
- **Mobile layout** — functional but not optimized; a bottom navigation bar would improve the mobile UX significantly
