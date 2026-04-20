"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { roadmap } from "@/data/roadmap";
import { useProgressStore } from "@/store/useProgressStore";
import { ProblemItem } from "@/components/dsa/ProblemItem";
import { ProgressBar } from "@/components/dsa/ProgressBar";
import { Badge } from "@/components/dsa/Badge";
import { cn, getWeekColor } from "@/lib/utils";

type Props = {
  params: Promise<{ dayId: string }>;
};

export default function DayPage({ params }: Props) {
  const { dayId } = use(params);
  const dayNum = Number(dayId);

  const day = roadmap.find((d) => d.day === dayNum);
  if (!day) notFound();

  const { getDayProgress, isDayComplete, completedProblems } =
    useProgressStore();
  const problemIds = day.problems.map((p) => p.id);
  const progress = getDayProgress(problemIds);
  const isComplete = isDayComplete(problemIds);

  const prevDay = dayNum > 1 ? dayNum - 1 : null;
  const nextDay = dayNum < 30 ? dayNum + 1 : null;

  return (
    <div className="mx-auto max-w-2xl px-6 py-10 space-y-8">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-sm text-[#9AA4AF] hover:text-[#E6EDF3] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Roadmap
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.05 }}
        className="space-y-3"
      >
        <div className="flex items-center gap-2">
          <Badge className={cn("text-xs", getWeekColor(day.week))}>
            Week {day.week}
          </Badge>
          <span className="text-xs text-[#5A6470]">Day {day.day} of 30</span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#E6EDF3]">
              {day.pattern}
            </h1>
            <p className="mt-1.5 text-sm leading-relaxed text-[#9AA4AF]">
              {day.patternDescription}
            </p>
          </div>
          {isComplete && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex-shrink-0"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Progress */}
        <div className="rounded-xl border border-[#1F2933] bg-[#11161C] p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#9AA4AF]">
              Day Progress
            </span>
            <span
              className={cn(
                "text-xs font-semibold tabular-nums",
                isComplete ? "text-emerald-400" : "text-[#9AA4AF]",
              )}
            >
              {progress}%
            </span>
          </div>
          <ProgressBar value={progress} />
          <p className="mt-2 text-xs text-[#5A6470]">
            {problemIds.filter((id) => completedProblems[id]).length} of{" "}
            {day.problems.length} problems solved
          </p>
        </div>
      </motion.div>

      {/* Pattern card */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.1 }}
        className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4"
      >
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="h-4 w-4 text-indigo-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Pattern Focus
          </span>
        </div>
        <p className="text-sm text-[#E6EDF3] font-medium">{day.pattern}</p>
        <p className="mt-1 text-sm text-[#9AA4AF]">{day.patternDescription}</p>
      </motion.div>

      {/* Problems */}
      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-[#9AA4AF] uppercase tracking-wider">
          Problems
        </h2>
        <div className="space-y-2">
          {day.problems.map((problem, i) => (
            <ProblemItem key={problem.id} problem={problem} index={i} />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.2 }}
        className="flex items-center justify-between pt-2 border-t border-[#1F2933]"
      >
        {prevDay ? (
          <Link
            href={`/day/${prevDay}`}
            className="flex items-center gap-1.5 rounded-lg border border-[#1F2933] bg-[#11161C] px-4 py-2 text-sm text-[#9AA4AF] hover:border-[#2D3A47] hover:text-[#E6EDF3] transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Day {prevDay}
          </Link>
        ) : (
          <div />
        )}
        {nextDay && (
          <Link
            href={`/day/${nextDay}`}
            className="flex items-center gap-1.5 rounded-lg border border-[#1F2933] bg-[#11161C] px-4 py-2 text-sm text-[#9AA4AF] hover:border-[#2D3A47] hover:text-[#E6EDF3] transition-all"
          >
            Day {nextDay}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </motion.div>
    </div>
  );
}
