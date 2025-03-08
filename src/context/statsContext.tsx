"use client";

import {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import { useContext } from "react";

export type StatsType = {
  name: "rank" | "percentile" | "currentScore";
  text: string;
  quickStatText: string;
  value: string;
  valueText: string;
  icon: string;
  errorMessage: string;
};

const totalQuestions = 15;

const initialStats: StatsType[] = [
  {
    name: "rank",
    text: "Rank",
    quickStatText: "Your Rank",
    value: "1",
    valueText: "1",
    icon: "🏆",
    errorMessage: "required | should be a number",
  },
  {
    name: "percentile",
    text: "Percentile",
    quickStatText: "Percentile",
    value: "30",
    valueText: "30%",
    icon: "📝",
    errorMessage: "required | percentile 0-100",
  },
  {
    name: "currentScore",
    text: `Current Score (out of ${totalQuestions})`,
    quickStatText: "Current Answers",
    value: "10",
    valueText: `10/${totalQuestions}`,
    icon: "✅",
    errorMessage: "required | number 0-15",
  },
];

type StatsContextType = {
  stats: StatsType[];
  setStats: Dispatch<SetStateAction<StatsType[]>>;
  totalQuestions: number;
};

export const StatsContext = createContext<StatsContextType | null>(null);

export default function StatsProvider({ children }: { children: ReactNode }) {
  const [stats, setStats] = useState(initialStats);

  return (
    <StatsContext.Provider value={{ stats, setStats, totalQuestions }}>
      {children}
    </StatsContext.Provider>
  );
}

export const useStatsContext = () => {
  const context = useContext(StatsContext);
  if (!context) {
    throw new Error("useStatsContext must be used within a StatsProvider");
  }
  return context;
};
