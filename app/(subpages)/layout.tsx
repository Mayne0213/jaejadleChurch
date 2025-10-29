"use client";

import React from "react";
import SubNavbar from "@/app/components/SubNavbar";

export default function SubPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <SubNavbar />
      <div className="flex items-center justify-center">
        <div className="w-full max-w-[1400px] flex items-center justify-center m-[30px]">
          {children}
        </div>
      </div>
    </div>
  );
}

