"use client";

import React from "react";
import UserInfo from "./sidebar/user-info";
import { NavMenu } from "./sidebar/nav-menu";
import { cn, handleSidebarMobileClose } from "@/lib/utils";

export default function SidebarMobile({ className }: { className?: string }) {
  return (
    <div id="sidebarmobile" className={cn(className)}>
      <div
        id="sidebarmenu"
        className="flex flex-col space-y-4 duration-200 overflow-hidden w-0 h-full dark:bg-black bg-white p-0 flex-none"
      >
        <UserInfo />
        <NavMenu className="grow" />
      </div>
      <div
        id="blankspot"
        className="w-full flex-1 h-full bg-accent/20 blur-md"
        onClick={handleSidebarMobileClose}
      ></div>
    </div>
  );
}
