"use client";

import { useStatsContext } from "@/context/statsContext";
import React from "react";

export default function QuickStatistics() {
  const { stats } = useStatsContext();

  return (
    <div className="flex flex-col gap-4 rounded-md border p-4">
      <h3 className="font-semibold">Quick Statistics</h3>
      <div className="flex flex-col flex-wrap items-start gap-4 min-[480px]:flex-row">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="flex w-fit flex-1 items-center gap-2 whitespace-nowrap last:border-r-0 md:border-r"
          >
            <div className="flex aspect-square w-13 items-center justify-center rounded-full border bg-zinc-100">
              {stat.icon}
            </div>
            <div className="">
              <h4 className="text-[22px] font-bold">{stat.valueText}</h4>
              <p className="text-sm text-zinc-600 uppercase">
                {stat.quickStatText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
