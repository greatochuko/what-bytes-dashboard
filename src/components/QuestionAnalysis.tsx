"use client";

import { useStatsContext } from "@/context/statsContext";
import { PieChart } from "@mui/x-charts";
import React from "react";

export default function QuestionAnalysis() {
  const { stats, totalQuestions } = useStatsContext();

  const currentScoreStat = stats.find((stat) => stat.name === "currentScore");
  const correctQuestions = currentScoreStat
    ? Number(currentScoreStat.value)
    : 0;

  return (
    <div className="flex flex-col gap-4 rounded-md border p-6 py-8 pb-0">
      <div className="flex justify-between font-semibold">
        <h3>Question Analysis</h3>
        <p className="text-blue-800">
          {correctQuestions}/{totalQuestions}
        </p>
      </div>
      <p className="text-zinc-700">
        <span className="font-semibold">
          You score {correctQuestions} question correct out of {totalQuestions}.
        </span>{" "}
        However it still needs some improvements
      </p>
      <div className="relative w-full">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: totalQuestions - correctQuestions },
                { id: 1, value: correctQuestions },
              ],
              innerRadius: "70%",
              cx: 132,
            },
          ]}
          // width={280}
          height={280}
          colors={["#b4d7ff", "#0077ff"]}
          className="w-full"
        />
        <span className="absolute top-1/2 left-[140px] -translate-1/2 text-2xl">
          🎯
        </span>
      </div>
    </div>
  );
}
