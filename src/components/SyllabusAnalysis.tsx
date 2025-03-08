import React from "react";

const syllabusAnalysis = [
  {
    title: "HTML Tools, Forms, History",
    rating: 80,
    bgColor: "bg-blue-500",
    bgColor2: "bg-blue-100",
    textColor: "text-blue-500",
  },
  {
    title: "Tags & References in HTML",
    rating: 60,
    bgColor: "bg-amber-500",
    bgColor2: "bg-amber-100",
    textColor: "text-amber-500",
  },
  {
    title: "Tables & References in HTML",
    rating: 24,
    bgColor: "bg-rose-500",
    bgColor2: "bg-rose-100",
    textColor: "text-rose-500",
  },
  {
    title: "Tables & CSS Basics",
    rating: 96,
    bgColor: "bg-green-600",
    bgColor2: "bg-green-100",
    textColor: "text-green-600",
  },
];

export default function SyllabusAnalysis() {
  return (
    <div className="flex flex-col gap-8 rounded-md border p-6 py-8">
      <h3 className="font-semibold">Syllabus Wise Analysis</h3>

      {syllabusAnalysis.map((analysis) => (
        <div key={analysis.title} className="flex flex-col gap-2">
          <h5>{analysis.title}</h5>
          <div className={`flex items-center gap-8`}>
            <div
              className={`h-2 flex-1 overflow-hidden rounded-full ${analysis.bgColor2}`}
            >
              <div
                className={`h-full flex-1 rounded-full ${analysis.bgColor}`}
                style={{
                  width: `${analysis.rating}%`,
                }}
              ></div>
            </div>
            <p className={`font-medium ${analysis.textColor}`}>
              {analysis.rating}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
