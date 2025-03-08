"use client";

import { LineChart } from "@mui/x-charts";
import React from "react";

export default function ComparisonGraph() {
  return (
    <div className="flex flex-col gap-4 rounded-md border p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Comparison Graph</h3>
          <p className="text-zinc-700">
            <span className="font-semibold">You scored 30% percentile</span>{" "}
            which is lower than the average percentile 72% of all the engineers
            who took this assessment
          </p>
        </div>
        <div className="rounded-full border bg-zinc-100 p-3">📈</div>
      </div>
      <div className="w-full">
        <LineChart
          colors={["#6516db"]}
          xAxis={[
            {
              data: [
                0, 10, 20, 30, 30, 30, 40, 45, 50, 55, 60, 70, 80, 90, 100,
              ],
            },
          ]}
          series={[
            {
              data: [0, 2, 3, 4, 5, 8, 13, 15, 20, 16, 8, 3, 2, 4, 0],
            },
          ]}
          // width={500}
          height={320}
          className="w-full"
        />
      </div>
    </div>
  );
}
