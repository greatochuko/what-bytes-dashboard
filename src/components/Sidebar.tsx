"use client";

import { AwardIcon, ChartNoAxesColumnIcon, FileIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sidebarLinks = [
  { href: "#", text: "Dashboard", Icon: ChartNoAxesColumnIcon },
  { href: "/", text: "Skill Test", Icon: AwardIcon },
  { href: "#", text: "Internship", Icon: FileIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <section className="flex w-56 flex-col gap-2 border-r border-zinc-200 pt-11 pr-2">
      {sidebarLinks.map((link) => (
        <Link
          href={link.href}
          key={link.text}
          className={`flex items-center gap-4 rounded-r-full p-4 font-medium duration-200 ${pathname === link.href ? "bg-blue-50 text-blue-800" : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-800"}`}
        >
          <link.Icon className="h-5 w-5" />
          {link.text}
        </Link>
      ))}
    </section>
  );
}
