import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between border-b border-zinc-200 p-5.5">
      <div className="flex items-center gap-2">
        <Image
          src={"/whatbytes_logo.png"}
          alt="logo"
          width={36}
          height={36}
          className="overflow-hidden object-contain"
        />
        <h1 className="text-[28px] font-semibold">WhatBytes</h1>
      </div>
      <div className="flex items-center gap-2 rounded-md border-2 border-zinc-200 p-1">
        <Image
          src={"/profile-picture.jpg"}
          alt="profile-picture"
          width={28}
          height={28}
          className="overflow-hidden rounded-full"
        />
        <p className="font-medium">Rahil Siddique</p>
      </div>
    </header>
  );
}
