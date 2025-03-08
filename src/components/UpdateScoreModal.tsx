"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type UpdateScoreModaslProps = {
  open: boolean;
  closeModal: () => void;
};

type ScoreType = {
  name: "rank" | "percentile" | "currentScore";
  text: string;
  value: string;
  errorMessage: string;
};

const initialScores: ScoreType[] = [
  {
    name: "rank",
    text: "Rank",
    value: "1",
    errorMessage: "required | should be a number",
  },
  {
    name: "percentile",
    text: "Percentile",
    value: "30",
    errorMessage: "required | percentile 0-100",
  },
  {
    name: "currentScore",
    text: "Current Score (out of 15)",
    value: "10",
    errorMessage: "required",
  },
];

export default function UpdateScoreModal({
  open,
  closeModal,
}: UpdateScoreModaslProps) {
  const [scores, setScores] = useState(initialScores);

  const hasError = (field: ScoreType["name"], value: string) => {
    switch (field) {
      case "currentScore":
        return !value;

      case "percentile":
        return !value;

      case "rank":
        return !value || Number(value) < 1;

      default:
        return false;
    }
  };

  const changeScore = (field: ScoreType["name"], value: string) => {
    const numberValue = Number(value);
    if (isNaN(numberValue)) return;

    setScores((curr) =>
      curr.map((score) => (score.name === field ? { ...score, value } : score)),
    );
  };

  const hasAnyError = scores.some((score) => hasError(score.name, score.value));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasAnyError) return;
  };

  return (
    <div
      onClick={closeModal}
      className={`fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black/50 duration-200 ${open ? "" : "invisible opacity-0"}`}
    >
      <div
        className="w-[90%] max-w-[34rem] rounded-md bg-white p-6 text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-8 flex items-center justify-between">
          <h4 className="text-lg font-semibold sm:text-xl">Update Scores</h4>
          <Image
            src={"/html_logo.png"}
            alt="html logo"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {scores.map((score, index) => (
            <div key={score.name} className="flex items-center justify-between">
              <label htmlFor={score.name} className="flex items-center gap-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-900 font-medium text-white">
                  {index + 1}
                </span>
                <p>
                  Update your{" "}
                  <span className="font-semibold">{score.text}</span>
                </p>
              </label>
              <div className="ml-auto w-44">
                <input
                  type="text"
                  name={score.name}
                  id={score.name}
                  value={score.value}
                  onChange={(e) => changeScore(score.name, e.target.value)}
                  className={`mb-0.5 w-full rounded-md border p-2 font-semibold ${hasError(score.name, score.value) ? "border-red-600" : "border-blue-500"}`}
                />
                {hasError(score.name, score.value) && (
                  <p className="text-xs text-red-600">{score.errorMessage}</p>
                )}
              </div>
            </div>
          ))}
          <div className="flex justify-end gap-4">
            <button
              onClick={closeModal}
              type="button"
              className="rounded-md border border-blue-900 p-3 font-semibold text-blue-900"
            >
              cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-md border-2 border-black bg-blue-900 px-6 py-2 text-sm font-semibold text-white"
            >
              save <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
