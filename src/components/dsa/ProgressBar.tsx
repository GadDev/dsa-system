"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ProgressBarProps = {
  value: number; // 0–100
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md";
};

export function ProgressBar({
  value,
  className,
  showLabel = false,
  size = "md",
}: ProgressBarProps) {
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex-1 overflow-hidden rounded-full bg-[#1F2933]",
          size === "sm" ? "h-1" : "h-1.5",
        )}
      >
        <motion.div
          className={cn(
            "absolute inset-y-0 left-0 rounded-full",
            clampedValue === 100 ? "bg-emerald-500" : "bg-indigo-500",
          )}
          initial={{ width: 0 }}
          animate={{ width: `${clampedValue}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
      {showLabel && (
        <span className="min-w-[2.5rem] text-right text-xs font-medium tabular-nums text-[#9AA4AF]">
          {clampedValue}%
        </span>
      )}
    </div>
  );
}
