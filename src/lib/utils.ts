import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDifficultyColor(difficulty: "easy" | "medium" | "hard") {
  switch (difficulty) {
    case "easy":
      return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
    case "medium":
      return "text-amber-400 bg-amber-400/10 border-amber-400/20";
    case "hard":
      return "text-red-400 bg-red-400/10 border-red-400/20";
  }
}

export function getWeekColor(week: number) {
  const colors = [
    "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
    "text-sky-400 bg-sky-400/10 border-sky-400/20",
    "text-violet-400 bg-violet-400/10 border-violet-400/20",
    "text-pink-400 bg-pink-400/10 border-pink-400/20",
    "text-orange-400 bg-orange-400/10 border-orange-400/20",
  ];
  return colors[(week - 1) % colors.length];
}
