import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressState = {
  completedProblems: Record<string, boolean>;
  problemNotes: Record<string, string>;
  toggleProblem: (problemId: string) => void;
  setNote: (problemId: string, note: string) => void;
  getNote: (problemId: string) => string;
  isDayComplete: (problemIds: string[]) => boolean;
  getDayProgress: (problemIds: string[]) => number;
  getTotalCompleted: () => number;
  reset: () => void;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedProblems: {},
      problemNotes: {},

      toggleProblem: (problemId) =>
        set((state) => ({
          completedProblems: {
            ...state.completedProblems,
            [problemId]: !state.completedProblems[problemId],
          },
        })),

      setNote: (problemId, note) =>
        set((state) => ({
          problemNotes: {
            ...state.problemNotes,
            [problemId]: note,
          },
        })),

      getNote: (problemId) => get().problemNotes[problemId] ?? "",

      isDayComplete: (problemIds) => {
        const { completedProblems } = get();
        return (
          problemIds.length > 0 &&
          problemIds.every((id) => completedProblems[id])
        );
      },

      getDayProgress: (problemIds) => {
        if (problemIds.length === 0) return 0;
        const { completedProblems } = get();
        const completed = problemIds.filter(
          (id) => completedProblems[id],
        ).length;
        return Math.round((completed / problemIds.length) * 100);
      },

      getTotalCompleted: () => {
        const { completedProblems } = get();
        return Object.values(completedProblems).filter(Boolean).length;
      },

      reset: () => set({ completedProblems: {}, problemNotes: {} }),
    }),
    {
      name: "dsa-progress",
    },
  ),
);
