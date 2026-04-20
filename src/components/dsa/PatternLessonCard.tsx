"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  Lightbulb,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { type ReactNode, useEffect, useMemo, useState } from "react";
import type { PatternLesson } from "@/data/lessons";
import { roadmap } from "@/data/roadmap";
import type { DayStudyResource } from "@/data/studyResources";
import { MermaidDiagram } from "./MermaidDiagram";

type PracticeTab = "starter" | "tests" | "reflection";

type Props = {
  currentDay: number;
  lesson: PatternLesson;
  resource?: DayStudyResource | null;
  patternLabel: string;
};

const KEYWORD_REGEX =
  /^(?:function|return|const|let|var|if|else|for|while|switch|case|break|continue|new|true|false|null|undefined)$/;
const TOKEN_REGEX =
  /(\/\/.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:function|return|const|let|var|if|else|for|while|switch|case|break|continue|new|true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b|[()[\]{}.,:])/g;

function getPatternBadges(patternLabel: string): string[] {
  const badgeMap: Array<[string, string[]]> = [
    ["HashMap", ["HashMap"]],
    ["Running Minimum", ["Array Scan"]],
    ["Two Pointers on Sorted Array", ["Two Pointers", "Sorted Array"]],
    ["Two Pointers", ["Two Pointers"]],
    ["Sort + Two Pointers", ["Sorting", "Two Pointers"]],
    ["Kadane's Algorithm", ["Kadane"]],
    ["Sliding Window + Set", ["Sliding Window", "Set"]],
    ["Dynamic Sliding Window", ["Sliding Window"]],
    ["Sliding Window + Frequency Map", ["Sliding Window", "Freq Map"]],
    ["Fixed Window + Frequency Match", ["Sliding Window", "Freq Map"]],
    ["Prefix Sum + HashMap", ["Prefix Sum", "HashMap"]],
    ["Stack Evaluation", ["Stack"]],
    ["Monotonic Stack", ["Stack"]],
    ["Stack", ["Stack"]],
    ["Binary Search on Rotated Array", ["Binary Search"]],
    ["Binary Search on Rotation Pivot", ["Binary Search"]],
    ["Binary Search", ["Binary Search"]],
    ["DFS on Trees", ["DFS", "Trees"]],
    ["Recursive Tree Comparison", ["DFS", "Trees"]],
    ["BFS on Trees", ["BFS", "Trees"]],
    ["BST Validation", ["BST", "DFS"]],
    ["Graph Traversal", ["Graphs", "DFS/BFS"]],
    ["Graph Cycle Detection", ["Graphs", "DFS"]],
    ["Week 1 Review", ["HashMap", "Two Pointers"]],
    ["Week 2 Review", ["Kadane", "Sliding Window", "HashMap"]],
    ["Week 3 Review", ["Stack", "Binary Search"]],
    ["Week 4 Review", ["DFS", "BFS", "Graphs"]],
    [
      "Mixed Pattern Battle",
      ["HashMap", "Two Pointers", "Sliding Window", "DFS/BFS"],
    ],
    ["Mock Interview Workflow", ["Interview", "Pattern Choice"]],
    ["Weakness Repair", ["Review", "Deliberate Practice"]],
    ["Speed Mode", ["Speed", "Pattern Choice"]],
    ["Pattern Variations", ["Variation", "Adaptation"]],
    ["Pattern Recognition Drill", ["Recognition", "Pattern Choice"]],
    ["Final Boss", ["Mastery", "Mixed"]],
  ];

  return (
    badgeMap.find(([label]) => label === patternLabel)?.[1] ?? [patternLabel]
  );
}

function getReflectionPrompts(patternLabel: string): string[] | null {
  const promptMap: Record<string, string[]> = {
    "Week 1 Review": [
      "Which problem instantly made you think 'HashMap' and why?",
      "Which two-pointer move still feels easy to get wrong?",
      "Can you explain one week-one solution without mentioning code at all?",
    ],
    "Week 2 Review": [
      "Which week-two problem was really sliding window, and which one only looked like it?",
      "When do you know a window should grow, and when must it shrink?",
      "Where did prefix sum feel more natural than sliding window?",
    ],
    "Week 3 Review": [
      "What clue tells you a stack fits better than a queue or array scan?",
      "What clue tells you binary search can safely remove half the search space?",
      "Which week-three pattern still needs more repetition before it feels automatic?",
    ],
    "Week 4 Review": [
      "How do you decide between DFS and BFS before writing any code?",
      "Which graph problem felt like traversal, and which one felt like cycle detection?",
      "What tree or graph mistake do you want to stop repeating next week?",
    ],
  };

  return promptMap[patternLabel] ?? null;
}

function renderToken(token: string, key: string) {
  let className = "text-[#D8DEE9]";

  if (token.startsWith("//")) {
    className = "text-[#6B7280] italic";
  } else if (/^["'`]/.test(token)) {
    className = "text-[#A3E635]";
  } else if (KEYWORD_REGEX.test(token)) {
    className = "text-[#7DD3FC]";
  } else if (/^\d/.test(token)) {
    className = "text-[#FBBF24]";
  } else if (/^[()[\]{}.,:]$/.test(token)) {
    className = "text-[#94A3B8]";
  }

  return (
    <span key={key} className={className}>
      {token}
    </span>
  );
}

function renderHighlightedLine(line: string, lineIndex: number): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let tokenIndex = 0;

  for (const match of line.matchAll(TOKEN_REGEX)) {
    const token = match[0];
    const start = match.index ?? 0;

    if (start > lastIndex) {
      nodes.push(
        <span
          key={`plain-${lineIndex}-${lastIndex}`}
          className="text-[#D8DEE9]"
        >
          {line.slice(lastIndex, start)}
        </span>,
      );
    }

    nodes.push(renderToken(token, `token-${lineIndex}-${tokenIndex}`));
    lastIndex = start + token.length;
    tokenIndex += 1;
  }

  if (lastIndex < line.length) {
    nodes.push(
      <span key={`plain-tail-${lineIndex}`} className="text-[#D8DEE9]">
        {line.slice(lastIndex)}
      </span>,
    );
  }

  return nodes.length > 0 ? nodes : <span className="text-[#D8DEE9]"> </span>;
}

function HighlightedCode({ code }: { code: string }) {
  const lines = code.split("\n");

  return (
    <div className="space-y-1 font-mono text-sm leading-relaxed">
      {lines.map((line, index) => (
        <div
          key={`${index + 1}-${line}`}
          className="grid grid-cols-[2rem_1fr] gap-3"
        >
          <span className="select-none text-right text-xs text-[#5A6470]">
            {index + 1}
          </span>
          <code className="whitespace-pre-wrap break-words">
            {renderHighlightedLine(line, index)}
          </code>
        </div>
      ))}
    </div>
  );
}

export function PatternLessonCard({
  currentDay,
  lesson,
  resource,
  patternLabel,
}: Props) {
  const [diagramOpen, setDiagramOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<PracticeTab>("starter");
  const [activeBadge, setActiveBadge] = useState<string | null>(null);
  const [copiedTab, setCopiedTab] = useState<PracticeTab | null>(null);
  const patternBadges = getPatternBadges(patternLabel);
  const reflectionPrompts = getReflectionPrompts(patternLabel);
  const hasReflectionTab = Boolean(reflectionPrompts?.length);
  const tabBadgeLabel =
    activeTab === "starter"
      ? "JS"
      : activeTab === "tests"
        ? "Test Data"
        : "Reflection";
  const relatedDays = useMemo(() => {
    if (!activeBadge) return [];

    return roadmap.filter(
      (day) =>
        day.day !== currentDay &&
        getPatternBadges(day.pattern).includes(activeBadge),
    );
  }, [activeBadge, currentDay]);

  useEffect(() => {
    if (!hasReflectionTab && activeTab === "reflection") {
      setActiveTab("starter");
    }
  }, [activeTab, hasReflectionTab]);

  useEffect(() => {
    if (copiedTab === null) return;

    const timeoutId = window.setTimeout(() => {
      setCopiedTab(null);
    }, 1600);

    return () => window.clearTimeout(timeoutId);
  }, [copiedTab]);

  async function handleCopy(tab: Exclude<PracticeTab, "reflection">) {
    if (!resource) return;

    const text = tab === "starter" ? resource.starterCode : resource.testCases;
    await navigator.clipboard.writeText(text);
    setCopiedTab(tab);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.13 }}
      className="space-y-3"
    >
      {resource && (
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm">✅</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Pattern Checklist
            </span>
            {patternBadges.map((badge) => (
              <button
                key={badge}
                type="button"
                onClick={() =>
                  setActiveBadge((currentBadge) =>
                    currentBadge === badge ? null : badge,
                  )
                }
                className={
                  activeBadge === badge
                    ? "rounded-full border border-cyan-300/40 bg-cyan-300/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cyan-100"
                    : "rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cyan-200 hover:border-cyan-300/40 hover:text-cyan-100"
                }
              >
                {badge}
              </button>
            ))}
          </div>
          <ul className="space-y-2">
            {resource.patternChecklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed text-[#C7EEF5]"
              >
                <span className="mt-0.5 text-cyan-300">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {activeBadge && (
            <div className="rounded-lg border border-cyan-400/20 bg-[#0D1117] p-3 space-y-2">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  Related Days for {activeBadge}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveBadge(null)}
                  className="text-[10px] font-semibold uppercase tracking-wide text-[#7AAAB3] hover:text-[#C7EEF5]"
                >
                  Clear
                </button>
              </div>
              {relatedDays.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {relatedDays.map((day) => (
                    <Link
                      key={day.day}
                      href={`/day/${day.day}`}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100 hover:border-cyan-300/40 hover:bg-cyan-400/15"
                    >
                      Day {day.day}: {day.pattern}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#9AC8CF]">
                  No other day uses this exact badge yet.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Beginner-friendly explanation */}
      <div className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{lesson.emoji}</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            New to DSA? Start here 🧠
          </span>
        </div>
        <p className="text-sm leading-relaxed text-[#E6EDF3]">
          {lesson.beginnerExplanation}
        </p>

        {/* Aha moment */}
        <div className="flex items-start gap-2 rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2">
          <Zap className="h-3.5 w-3.5 text-amber-400 mt-0.5 shrink-0" />
          <p className="text-xs font-medium text-amber-300">{lesson.ahaText}</p>
        </div>
      </div>

      {/* Mental model steps */}
      <div className="rounded-xl border border-[#1F2933] bg-[#11161C] p-4 space-y-2">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="h-4 w-4 text-indigo-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            How to think about it
          </span>
        </div>
        <ol className="space-y-2">
          {lesson.steps.map((step, i) => (
            <li key={step} className="flex items-start gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-[10px] font-bold text-indigo-400">
                {i + 1}
              </span>
              <span className="text-sm text-[#9AA4AF] leading-relaxed">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm">🚧</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-300">
            Common Mistake
          </span>
        </div>
        <p className="text-sm leading-relaxed text-[#F5D0D6]">
          {lesson.commonMistake}
        </p>
      </div>

      {lesson.practiceHints && lesson.practiceHints.length > 0 && (
        <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm">🔍</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">
              Problem Hints
            </span>
          </div>
          <div className="space-y-2">
            {lesson.practiceHints.map((h) => (
              <div
                key={h.title}
                className="rounded-lg border border-violet-400/15 bg-[#0D1117] p-3 space-y-1"
              >
                <p className="text-xs font-semibold text-violet-200">
                  {h.title}
                </p>
                <p className="text-sm leading-relaxed text-[#9AA4AF]">
                  {h.hint}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Practice Kit — commented out until the embedded code editor (Phase 2) is implemented
      {resource && (
        <div className="rounded-xl border border-[#1F2933] bg-[#11161C] p-4 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm">📚</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-300">
              Practice Kit
            </span>
          </div>
          <div className="inline-flex rounded-lg border border-[#1F2933] bg-[#0D1117] p-1">
            <button
              type="button"
              onClick={() => setActiveTab("starter")}
              className={
                activeTab === "starter"
                  ? "rounded-md bg-sky-500/15 px-3 py-1.5 text-xs font-semibold text-sky-300"
                  : "rounded-md px-3 py-1.5 text-xs font-semibold text-[#9AA4AF] hover:text-[#E6EDF3]"
              }
            >
              Starter Code
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("tests")}
              className={
                activeTab === "tests"
                  ? "rounded-md bg-sky-500/15 px-3 py-1.5 text-xs font-semibold text-sky-300"
                  : "rounded-md px-3 py-1.5 text-xs font-semibold text-[#9AA4AF] hover:text-[#E6EDF3]"
              }
            >
              Test Cases
            </button>
            {hasReflectionTab && (
              <button
                type="button"
                onClick={() => setActiveTab("reflection")}
                className={
                  activeTab === "reflection"
                    ? "rounded-md bg-sky-500/15 px-3 py-1.5 text-xs font-semibold text-sky-300"
                    : "rounded-md px-3 py-1.5 text-xs font-semibold text-[#9AA4AF] hover:text-[#E6EDF3]"
                }
              >
                Reflection Prompts
              </button>
            )}
          </div>

          <div className="rounded-lg border border-[#1F2933] bg-[#0D1117] p-4 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-sky-200">
                {tabBadgeLabel}
              </span>
              {activeTab !== "reflection" && (
                <button
                  type="button"
                  onClick={() => handleCopy(activeTab)}
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#23303C] bg-[#11161C] px-2.5 py-1.5 text-xs font-semibold text-[#9AA4AF] hover:border-[#314152] hover:text-[#E6EDF3]"
                >
                  {copiedTab === activeTab ? (
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  {copiedTab === activeTab ? "Copied" : "Copy"}
                </button>
              )}
            </div>

            <div className="overflow-x-auto">
              {activeTab === "reflection" && reflectionPrompts ? (
                <ol className="space-y-3">
                  {reflectionPrompts.map((prompt, index) => (
                    <li
                      key={prompt}
                      className="flex items-start gap-3 text-sm text-[#D8DEE9]"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-[10px] font-bold text-sky-300">
                        {index + 1}
                      </span>
                      <span className="leading-relaxed">{prompt}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <HighlightedCode
                  code={
                    activeTab === "starter"
                      ? resource.starterCode
                      : resource.testCases
                  }
                />
              )}
            </div>
          </div>
        </div>
      )}
      */}

      {/* Diagram toggle */}
      <button
        type="button"
        onClick={() => setDiagramOpen((v) => !v)}
        className="w-full flex items-center justify-between rounded-xl border border-[#1F2933] bg-[#11161C] px-4 py-3 text-sm text-[#9AA4AF] hover:border-[#2D3A47] hover:text-[#E6EDF3] transition-all"
      >
        <span className="font-medium">🗺️ Show the pattern map</span>
        {diagramOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      <AnimatePresence>
        {diagramOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="rounded-xl border border-[#1F2933] bg-[#0D1117] p-4">
              <MermaidDiagram chart={lesson.diagram} />

              <div className="mt-4 border-t border-[#1F2933] pt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🧪</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Example Walkthrough
                  </span>
                </div>
                <p className="text-sm font-medium text-[#E6EDF3]">
                  {lesson.exampleWalkthrough.title}
                </p>
                <ol className="space-y-2">
                  {lesson.exampleWalkthrough.steps.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#9AA4AF]"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-[10px] font-bold text-emerald-300">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
                  {lesson.exampleWalkthrough.result}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
