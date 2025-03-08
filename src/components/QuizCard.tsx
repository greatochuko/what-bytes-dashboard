import Image from "next/image";
import React from "react";

export default function QuizCard() {
  return (
    <div className="flex flex-col items-start gap-4 rounded-md border p-4 py-6 sm:flex-row">
      <div className="flex items-start gap-4">
        <Image
          src={"/html_logo.png"}
          alt="html logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <div className="flex w-full flex-col gap-1">
          <h3 className="font-bold">Hyper Text Markup Language</h3>
          <p className="text-sm text-zinc-700">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
      </div>
      <button className="rounded-md border-2 border-black bg-blue-900 px-6 py-2 text-sm font-semibold text-white">
        Update
      </button>
    </div>
  );
}
