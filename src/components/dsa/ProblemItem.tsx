"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Circle,
  ChevronDown,
  StickyNote,
} from "lucide-react";
import { useProgressStore } from "@/store/useProgressStore";
import { type Problem } from "@/data/roadmap";
import { Badge } from "./Badge";
import { cn, getDifficultyColor } from "@/lib/utils";

type ProblemItemProps = {
  problem: Problem;
  index: number;
};

export function ProblemItem({ problem, index }: ProblemItemProps) {
  const { completedProblems, toggleProblem, getNote, setNote } =
    useProgressStore();
  const [noteOpen, setNoteOpen] = useState(false);
  const [noteValue, setNoteValue] = useState(() => getNote(problem.id));
  const isCompleted = completedProblems[problem.id] ?? false;

  const handleNoteChange = (value: string) => {
    setNoteValue(value);
    setNote(problem.id, value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: index * 0.06 }}
      className={cn(
        "rounded-xl border transition-all duration-200",
        isCompleted
          ? "border-emerald-500/20 bg-emerald-500/5"
          : "border-[#1F2933] bg-[#11161C]",
      )}
    >
      <div className="flex items-center gap-3 p-4">
        {/* Checkbox */}
        <button
          type="button"
          onClick={() => toggleProblem(problem.id)}
          aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
          className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
        >
          <motion.div
            animate={{ scale: isCompleted ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.2 }}
          >
            {isCompleted ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            ) : (
              <Circle className="h-5 w-5 text-[#5A6470] hover:text-[#9AA4AF] transition-colors" />
            )}
          </motion.div>
        </button>

        {/* Problem info */}
        <div className="flex-1 min-w-0">
          <p
            className={cn(
              "text-sm font-medium transition-colors",
              isCompleted ? "text-[#5A6470] line-through" : "text-[#E6EDF3]",
            )}
          >
            {problem.title}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Badge
            className={cn(
              "text-[10px] capitalize",
              getDifficultyColor(problem.difficulty),
            )}
          >
            {problem.difficulty}
          </Badge>

          <button
            type="button"
            onClick={() => setNoteOpen((o) => !o)}
            className={cn(
              "rounded-md p-1 transition-colors",
              noteOpen || noteValue
                ? "text-indigo-400 hover:text-indigo-300"
                : "text-[#5A6470] hover:text-[#9AA4AF]",
            )}
            aria-label="Toggle notes"
          >
            <StickyNote className="h-3.5 w-3.5" />
          </button>

          <a
            href={problem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-1 text-[#5A6470] hover:text-[#9AA4AF] transition-colors"
            aria-label="Open on LeetCode"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Notes panel */}
      <AnimatePresence>
        {noteOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#1F2933] px-4 pb-4 pt-3">
              <textarea
                value={noteValue}
                onChange={(e) => handleNoteChange(e.target.value)}
                placeholder="Add your notes, approach, key insights…"
                rows={3}
                className={cn(
                  "w-full resize-none rounded-lg border border-[#1F2933] bg-[#0B0F14]",
                  "px-3 py-2 text-sm text-[#E6EDF3] placeholder-[#5A6470]",
                  "focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30",
                  "transition-colors",
                )}
              />
              {noteValue && (
                <p className="mt-1.5 text-xs text-[#5A6470]">Auto-saved</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
