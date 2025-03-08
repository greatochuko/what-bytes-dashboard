"use client";

import { useSidebarContext } from "@/context/sidebarContext";
import {
  AwardIcon,
  ChartNoAxesColumnIcon,
  FileIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sidebarLinks = [
  { href: "#", text: "Dashboard", Icon: ChartNoAxesColumnIcon },
  { href: "/", text: "Skill Test", Icon: AwardIcon },
  { href: "#", text: "Internship", Icon: FileIcon },
];

export default function Sidebar() {
  const { open, toggleSidebar } = useSidebarContext();

  const pathname = usePathname();

  return (
    <>
      <div
        onClick={toggleSidebar}
        className={`fixed top-0 left-0 z-10 h-full w-full bg-black/50 duration-200 ${open ? "" : "invisible opacity-0"}`}
      ></div>
      <section
        className={`fixed top-0 z-10 flex h-dvh w-68 flex-col gap-2 border-r bg-white pt-11 pr-2 duration-200 sm:static sm:h-auto sm:translate-x-0 ${open ? "" : "-translate-x-full"}`}
      >
        {sidebarLinks.map((link) => (
          <Link
            href={link.href}
            key={link.text}
            className={`flex items-center gap-4 rounded-r-full p-4 font-medium duration-200 ${pathname === link.href ? "bg-blue-50 text-blue-900" : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"}`}
          >
            <link.Icon className="h-5 w-5" />
            {link.text}
          </Link>
        ))}
        <button
          onClick={toggleSidebar}
          className="absolute top-2 right-2 p-2 text-neutral-600 hover:text-neutral-800 sm:hidden"
        >
          <XIcon className="h-5 w-5" />
        </button>
      </section>
    </>
  );
}
