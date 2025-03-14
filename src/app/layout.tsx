import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SidebarProvider from "@/context/sidebarContext";

const roboto = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatBytes Dashboard",
  description: "WhatBytes Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} flex min-h-dvh flex-col antialiased`}
      >
        <SidebarProvider>
          <Header />
          <main className="flex flex-1 gap-8">
            <Sidebar />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
