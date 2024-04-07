"use client";

import { cn, handleSidebarMobileClose } from "@/lib/utils";
import { Box, LayoutDashboard, MessageSquare, ReceiptText, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMenu(props: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();
  const productUpdatePath = pathname.match(/\/products\/update\/(.*)/)?.[1];
  const navItems = {
    general: [
      {
        name: "Dashboard",
        href: ["/"],
        icon: LayoutDashboard,
      },
      {
        name: "Products",
        href: ["/products", "/products/create", `/products/update/${productUpdatePath}`],
        icon: Box,
      },
      {
        name: "Transactions",
        href: "#",
        icon: ReceiptText,
      },
    ],
    settings: [
      {
        name: "Settings",
        href: "#",
        icon: Settings,
      },
      {
        name: "Logs",
        href: "#",
        icon: MessageSquare,
      },
    ],
  };
  return (
    <section id="navmenu" {...props}>
      <div className="flex flex-col gap-4">
        <div id="itemgroup" className="space-y-2">
          <div id="heading" className="text-sm px-2 font-semibold text-muted-foreground">
            General
          </div>
          {navItems.general.map((item) => (
            <div id="item" key={item.name} onClick={handleSidebarMobileClose}>
              <Link
                href={item.href[0]}
                className={cn("flex items-center gap-2 hover:bg-accent px-2 py-1 rounded-sm", {
                  "bg-accent": item.href.includes(pathname),
                })}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
        <div id="itemgroup" className="space-y-2">
          <div id="heading" className="text-sm px-2 font-semibold text-muted-foreground">
            Settings
          </div>
          {navItems.settings.map((item) => (
            <div id="item" key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-2 hover:bg-accent px-2 py-1 rounded-sm"
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
