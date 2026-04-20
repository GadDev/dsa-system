"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Lock } from "lucide-react";
import { useProgressStore } from "@/store/useProgressStore";
import { type DayPlan } from "@/data/roadmap";
import { ProgressBar } from "./ProgressBar";
import { Badge } from "./Badge";
import { cn, getDifficultyColor, getWeekColor } from "@/lib/utils";

type DayCardProps = {
  day: DayPlan;
  index: number;
  isActive?: boolean;
};

export function DayCard({ day, index, isActive = false }: DayCardProps) {
  const { isDayComplete, getDayProgress } = useProgressStore();
  const problemIds = day.problems.map((p) => p.id);
  const isComplete = isDayComplete(problemIds);
  const progress = getDayProgress(problemIds);

  const StatusIcon = isComplete ? CheckCircle2 : Circle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
    >
      <Link href={`/day/${day.day}`} className="group block">
        <div
          className={cn(
            "relative rounded-xl border p-4 transition-all duration-200",
            "hover:shadow-lg hover:shadow-black/20",
            isActive
              ? "border-indigo-500/40 bg-indigo-500/5 hover:border-indigo-500/60"
              : isComplete
                ? "border-emerald-500/20 bg-[#11161C] hover:border-emerald-500/30"
                : "border-[#1F2933] bg-[#11161C] hover:border-[#2D3A47]",
          )}
        >
          {/* Active indicator */}
          {isActive && (
            <span className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          )}

          <div className="flex items-start justify-between gap-3">
            {/* Left */}
            <div className="flex items-start gap-3 min-w-0">
              <div className="mt-0.5 flex-shrink-0">
                <StatusIcon
                  className={cn(
                    "h-4 w-4 transition-colors",
                    isComplete ? "text-emerald-500" : "text-[#5A6470]",
                  )}
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-medium text-[#5A6470]">
                    Day {day.day}
                  </span>
                  {isActive && (
                    <span className="rounded-full bg-indigo-500/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-400">
                      Today
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    "mt-0.5 text-sm font-semibold leading-tight truncate transition-colors",
                    "text-[#E6EDF3] group-hover:text-white",
                  )}
                >
                  {day.pattern}
                </p>
                <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                  <Badge className={cn("text-[10px]", getWeekColor(day.week))}>
                    Week {day.week}
                  </Badge>
                  <span className="text-xs text-[#5A6470]">
                    {day.problems.length} problems
                  </span>
                </div>
              </div>
            </div>

            {/* Right — difficulty pills */}
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              {day.problems.slice(0, 2).map((p) => (
                <Badge
                  key={p.id}
                  className={cn(
                    "text-[10px] capitalize",
                    getDifficultyColor(p.difficulty),
                  )}
                >
                  {p.difficulty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          {progress > 0 && !isComplete && (
            <div className="mt-3">
              <ProgressBar value={progress} size="sm" />
            </div>
          )}
          {isComplete && (
            <div className="mt-3">
              <ProgressBar value={100} size="sm" />
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
