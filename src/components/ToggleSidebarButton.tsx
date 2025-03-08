import React from "react";
import { MenuIcon } from "lucide-react";
import { useSidebarContext } from "@/context/sidebarContext";

export default function ToggleSidebarButton() {
  const { toggleSidebar } = useSidebarContext();

  return (
    <button
      onClick={toggleSidebar}
      className="rounded-md p-1 text-neutral-600 duration-200 hover:bg-zinc-100 hover:text-neutral-800 sm:hidden"
    >
      <MenuIcon />
    </button>
  );
}
