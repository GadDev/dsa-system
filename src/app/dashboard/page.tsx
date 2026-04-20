"use client";

import { motion } from "framer-motion";
import { Flame, Target, TrendingUp, Trophy } from "lucide-react";
import { useMemo } from "react";
import { DayCard } from "@/components/dsa/DayCard";
import { ProgressBar } from "@/components/dsa/ProgressBar";
import { roadmap, totalDays, totalProblems, weekLabels } from "@/data/roadmap";
import { cn, getWeekColor } from "@/lib/utils";
import { useProgressStore } from "@/store/useProgressStore";

export default function DashboardPage() {
  const { getTotalCompleted, getDayProgress } = useProgressStore();
  const totalCompleted = getTotalCompleted();
  const overallProgress = Math.round((totalCompleted / totalProblems) * 100);

  // Group days by week
  const weeks = useMemo(() => {
    const map = new Map<number, typeof roadmap>();
    for (const day of roadmap) {
      let days = map.get(day.week);
      if (!days) {
        days = [];
        map.set(day.week, days);
      }
      days.push(day);
    }
    return Array.from(map.entries()).map(([week, days]) => ({ week, days }));
  }, []);

  // Find first incomplete day as "current"
  const currentDay = useMemo(() => {
    for (const day of roadmap) {
      const ids = day.problems.map((p) => p.id);
      const progress = getDayProgress(ids);
      if (progress < 100) return day.day;
    }
    return totalDays;
  }, [getDayProgress]);

  const stats = [
    {
      label: "Problems Solved",
      value: totalCompleted,
      suffix: `/ ${totalProblems}`,
      icon: Target,
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
    },
    {
      label: "Overall Progress",
      value: overallProgress,
      suffix: "%",
      icon: TrendingUp,
      color: "text-sky-400",
      bg: "bg-sky-400/10",
    },
    {
      label: "Current Day",
      value: currentDay,
      suffix: `/ ${totalDays}`,
      icon: Flame,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    },
    {
      label: "Days Complete",
      value: roadmap.filter(
        (d) => getDayProgress(d.problems.map((p) => p.id)) === 100,
      ).length,
      suffix: `/ ${totalDays}`,
      icon: Trophy,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 space-y-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold tracking-tight text-[#E6EDF3]">
          DSA Roadmap
        </h1>
        <p className="mt-1 text-sm text-[#9AA4AF]">
          {totalDays} days · 5 weeks · pattern-based mastery
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 gap-3 sm:grid-cols-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.08 }}
      >
        {stats.map(({ label, value, suffix, icon: Icon, color, bg }) => (
          <div
            key={label}
            className="rounded-xl border border-[#1F2933] bg-[#11161C] p-4"
          >
            <div
              className={cn(
                "mb-3 flex h-8 w-8 items-center justify-center rounded-lg",
                bg,
              )}
            >
              <Icon className={cn("h-4 w-4", color)} />
            </div>
            <p className="text-xl font-bold tabular-nums text-[#E6EDF3]">
              {value}
              <span className="ml-0.5 text-sm font-normal text-[#5A6470]">
                {suffix}
              </span>
            </p>
            <p className="mt-0.5 text-xs text-[#9AA4AF]">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* Overall progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="rounded-xl border border-[#1F2933] bg-[#11161C] p-5"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-[#E6EDF3]">
            Total Progress
          </span>
          <span className="text-sm font-semibold tabular-nums text-[#9AA4AF]">
            {totalCompleted} / {totalProblems} problems
          </span>
        </div>
        <ProgressBar value={overallProgress} showLabel size="md" />
      </motion.div>

      {/* Weeks */}
      <div className="space-y-8">
        {weeks.map(({ week, days }, wi) => (
          <motion.section
            key={week}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + wi * 0.06 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
                  getWeekColor(week),
                )}
              >
                Week {week}
              </div>
              <span className="text-sm font-medium text-[#9AA4AF]">
                {weekLabels[week]}
              </span>
              <div className="flex-1 border-t border-[#1F2933]" />
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {days.map((day, i) => (
                <DayCard
                  key={day.day}
                  day={day}
                  index={i}
                  isActive={day.day === currentDay}
                  isLocked={day.day >= 30}
                />
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
