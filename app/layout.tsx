import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import SidebarMobile from "@/components/sidebar-mobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ranzhop Control Panel",
    template: "%s | Ranzhop Control Panel",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex w-screen h-screen overflow-hidden relative">
            <Sidebar className="hidden md:block border-r-2" />
            <SidebarMobile className="absolute md:hidden h-full hidden w-full z-10" />
            <main className="w-full h-full">
              <Navbar className="border-b-2 flex items-center p-4 h-16" />
              <div className="w-full max-h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] overflow-auto">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
