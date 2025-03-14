"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import BankAccounts from "@/components/Bankacct";
import RecentTransactions from "@/components/tranactions";
import BankCard from "@/components/bankcard";
import BudgetSection from "@/components/budget";
import Spotify from "../../../public/Spotify_Primary_Logo_RGB_Green.png";
import figma from "../../../public/figma.png";
import otherguy from "../../../public/guyface.webp";
import otherperson from "../../../public/thisface.jpg";

const user = {
  name: "Adrian Hajdin",
  email: "adrian@jsmastery.pro",
};

const js = "/jsmastry.png";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log(isClient);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Mock Data
  const userData = {
    name: "Adrian",
    email: "adrian@jsmastery.pro",
  };

  const bankAccounts = {
    totalBalance: 2698.12,
    accountCount: 2,
  };

  const banks = [
    { id: "all", name: "All Banks", balance: 0 },
    { id: "chase", name: "Chase Bank", balance: 2588.12, type: "Savings" },
    { id: "boa", name: "Bank of America", balance: 0 },
    { id: "firstplaytpus", name: "First Playtpus Bank", balance: 0 },
  ];

  const transactions = [
    {
      id: "1",
      merchant: "Spotify",
      logo: <Image src={Spotify} alt="" />,
      amount: 15.0,
      status: "processing" as const,
      date: "Wed",
      time: "1:00pm",
      category: "Bills/Utilities",
      isIncome: false,
    },
    {
      id: "2",
      merchant: "Alexa Doe",
      logo: <Image src={otherguy} alt="" />,
      amount: 988.0,
      status: "success" as const,
      date: "Wed",
      time: "2:45pm",
      category: "Income",
      isIncome: true,
    },
    {
      id: "3",
      merchant: "Figma",
      logo: <Image src={figma} alt="" />,
      amount: 18.99,
      status: "processing" as const,
      date: "Tue",
      time: "10:10pm",
      category: "Income",
      isIncome: true,
    },
    {
      id: "4",
      merchant: "Fresh F&V",
      logo: "FF",
      amount: 58.0,
      status: "success" as const,
      date: "Tue",
      time: "12:45pm",
      category: "Subscription",
      isIncome: false,
    },
    {
      id: "5",
      merchant: "Sam Sulek",
      logo: <Image src={otherperson} alt="" />,
      amount: 40.2,
      status: "declined" as const,
      date: "Tue",
      time: "5:45pm",
      category: "Food",
      isIncome: false,
    },
  ];

  const budgets = [
    {
      id: "1",
      name: "Subscriptions",
      amount: 25,
      spent: 14,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      ),
    },
    {
      id: "2",
      name: "Food and booze",
      amount: 120,
      spent: 80,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      ),
    },
    {
      id: "3",
      name: "Savings",
      amount: 300,
      spent: 300,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      ),
    },
  ];

  const cardData = {
    cardNumber: "1234123412341234",
    holderName: "Adrian Hajdin",
    expiryDate: "06/25",
    cardType: "VISA",
    bankName: "JS Mastery Pro",
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} user={user} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="p-6 lg:p-8 max-md:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Section */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl text-black font-bold mb-1">
                Welcome, <span className="text-blue-600">{userData.name}</span>
              </h1>
              <p className="text-gray-600">
                Access & manage your account and transactions efficiently.
              </p>

              {/* Uncomment if needed */}
              <BankAccounts
                totalBalance={bankAccounts.totalBalance}
                accountCount={bankAccounts.accountCount}
              />
              <RecentTransactions transactions={transactions} banks={banks} />
            </div>

            {/* Right Section */}
            <div>
              {/* User Profile */}
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-white rounded-full p-3">
                    <Image
                      src={js}
                      alt="ad"
                      className="rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-lg font-bold text-black">
                    {userData.name} Hajdin
                  </div>
                  <div className="text-sm text-gray-600">{userData.email}</div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-black">My Banks</h3>
                  <button className="text-sm text-blue-600 flex items-center">
                    <span className="mr-1">Add bank</span>
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>

                {/* Uncomment if needed */}
                <BankCard {...cardData} />
              </div>

              {/* Uncomment if needed */}
              <BudgetSection budgets={budgets} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
