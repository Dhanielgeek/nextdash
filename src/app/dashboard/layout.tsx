"use client";

import { FC, ReactNode, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Lora, Inter } from "next/font/google";

interface LayoutProps {
  children: ReactNode;
}

// Lora for serif styling
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Inter as a modern sans-serif fallback
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const Layout: FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Default to false

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const user = {
    name: "Adrian Hajdin",
    email: "adrian@jsmastery.pro",
  };

  return (
    <div
      className={`${lora.variable} ${inter.variable} flex h-screen bg-gray-50 overflow-hidden`}
    >
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} user={user} />

      <div className="flex-1 overflow-auto">
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
