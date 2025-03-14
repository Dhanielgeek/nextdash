"use client";

import { FC, ReactNode, useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { Lora, Inter } from "next/font/google";

interface LayoutProps {
  children: ReactNode;
}

// Lora for serif styling
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Supports different font weights
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
  // Initialize sidebar as closed on mobile, will be controlled by media query
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when resizing to desktop to avoid issues
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
        {/* Main content area */}
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
