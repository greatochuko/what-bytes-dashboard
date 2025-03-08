"use client";

import Image from "next/image";
import React from "react";
import ToggleSidebarButton from "./ToggleSidebarButton";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b px-2 py-4 sm:px-5.5 sm:py-5.5">
      <ToggleSidebarButton />
      <div className="flex items-center gap-2">
        <Image
          src={"/whatbytes_logo.png"}
          alt="logo"
          width={36}
          height={36}
          className="h-6 w-6 overflow-hidden object-contain sm:h-8 sm:w-8"
        />
        <h1 className="text-lg font-semibold sm:text-[28px]">WhatBytes</h1>
      </div>
      <div className="flex items-center gap-2 rounded-md border-2 p-1">
        <Image
          src={"/profile-picture.jpg"}
          alt="profile-picture"
          width={28}
          height={28}
          className="overflow-hidden rounded-full"
        />
        <p className="text-sm font-medium sm:text-base">Rahil Siddique</p>
      </div>
    </header>
  );
}
