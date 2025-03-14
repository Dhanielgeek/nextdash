"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import {
  HomeIcon,
  CreditCardIcon,
  ClockIcon,
  BanknotesIcon,
  LinkIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../public/logofor.png";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  user: {
    name: string;
    email: string;
  };
}

const Sidebar: FC<SidebarProps> = ({ isOpen, toggleSidebar, user }) => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    // Get window width after component mounts
    setScreenWidth(window.innerWidth);

    // Optional: Listen for window resize events
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Backdrop overlay - only visible on mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Mobile toggle button - always hidden on desktop */}
      <button
        className="fixed top-1 left-[23rem] p-2 rounded-md bg-blue-600 text-white z-30 lg:hidden"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-10
        `}
        aria-hidden={!isOpen && screenWidth !== null && screenWidth < 1024} // ✅ Fixed
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="border-b w-full h-[10%]">
            <div className="flex items-center w-full h-full">
              <Image
                src={logo}
                className="w-full object-contain h-full"
                alt="logo"
              />
            </div>
          </div>

          {/* Search */}
          <div className="px-4 py-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <div className="absolute top-3 left-2 text-gray-400">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            <Link
              href="/"
              className="flex items-center font-medium px-4 py-2 text-white bg-blue-600 rounded-md"
            >
              <HomeIcon className="h-5 w-5 mr-3" />
              <span>Home</span>
            </Link>

            <Link
              href="/banks"
              className="flex items-center font-medium px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <CreditCardIcon className="h-5 w-5 mr-3 text-gray-400" />
              <span>My Banks</span>
            </Link>

            <Link
              href="/history"
              className="flex items-center font-medium px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <ClockIcon className="h-5 w-5 mr-3 text-gray-400" />
              <span>Transaction History</span>
            </Link>

            <Link
              href="/payment"
              className="flex items-center font-medium px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <BanknotesIcon className="h-5 w-5 mr-3 text-gray-400" />
              <span>Payment Transfer</span>
            </Link>

            <Link
              href="/connect"
              className="flex items-center font-medium px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <LinkIcon className="h-5 w-5 mr-3 text-gray-400" />
              <span>Connect Bank</span>
            </Link>
          </nav>

          {/* User Info */}
          <div className="p-4 border-t flex items-center">
            <div className="h-8 w-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 mr-3">
              {user.name.charAt(0)}
              {user.name.split(" ")[1]?.charAt(0)}
            </div>
            <div className="text-sm">
              <div className="font-medium">{user.name}</div>
              <div className="text-gray-500 text-xs">{user.email}</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
