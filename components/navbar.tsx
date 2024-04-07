"use client";

import { cn, handleSidebarMobileOpen } from "@/lib/utils";
import { AlignLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Navbar({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <div className="flex items-center gap-4">
        <div
          id="sidebartrigger"
          onClick={handleSidebarMobileOpen}
          className="block md:hidden hover:bg-accent duration-150 p-2 rounded-sm cursor-pointer"
        >
          <AlignLeft />
        </div>

        <div id="brand" className="flex items-center">
          <a href="#" className="inline-block">
            <Image
              src={"/assets/img/ranzhop-light.png"}
              width={100}
              height={46}
              priority
              alt="ranzhop-dark-logo-brand"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
