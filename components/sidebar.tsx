import React from "react";
import UserInfo from "./sidebar/user-info";
import { NavMenu } from "./sidebar/nav-menu";
import { cn } from "@/lib/utils";

export default function Sidebar({ className }: { className?: string }) {
  return (
    <div id="sidebar" className={cn("flex flex-col space-y-4 flex-none w-64 p-4", className)}>
      <UserInfo />
      <NavMenu className="grow" />
    </div>
  );
}
