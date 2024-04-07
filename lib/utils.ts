import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const handleSidebarMobileOpen = () => {
  const sidebar = document.getElementById("sidebarmobile");
  const sidebarMenu = document.getElementById("sidebarmenu");

  if (sidebar && sidebarMenu) {
    sidebar.classList.toggle("hidden");
    sidebar.classList.toggle("flex");
    setTimeout(() => {
      sidebarMenu.classList.toggle("p-4");
      sidebarMenu.classList.toggle("p-0");
    }, 100);
    setTimeout(() => {
      sidebarMenu.classList.toggle("w-64");
      sidebarMenu.classList.toggle("w-0");
    }, 200);
  }
};

export const handleSidebarMobileClose = () => {
  const sidebar = document.getElementById("sidebarmobile");
  const sidebarMenu = document.getElementById("sidebarmenu");

  if (sidebar && sidebarMenu) {
    sidebarMenu.classList.toggle("w-64");
    sidebarMenu.classList.toggle("w-0");
    setTimeout(() => {
      sidebarMenu.classList.toggle("p-4");
      sidebarMenu.classList.toggle("p-0");
    }, 100);
    setTimeout(() => {
      sidebar.classList.toggle("hidden");
      sidebar.classList.toggle("flex");
    }, 300);
  }
};
