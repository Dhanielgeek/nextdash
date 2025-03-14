// components/dashboard/BankAccounts.tsx
"use client";

import { FC } from "react";

interface BankAccountsProps {
  totalBalance: number;
  accountCount: number;
}

const BankAccounts: FC<BankAccountsProps> = ({
  totalBalance,
  accountCount,
}) => {
  const percentage = 75; // This would come from actual data

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="flex justify-end items-center mb-6">
        <button className="text-blue-500 font-medium flex items-center text-sm">
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
          <span className="mr-1">Add bank</span>
        </button>
      </div>

      <div className="flex items-center">
        <div className="relative h-24 w-24 mr-6">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#EBF5FF"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="10"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (251.2 * percentage) / 100}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
        </div>
        <div className=" flex justify-between items-center gap-2 flex-col ">
          <div className="font-semibold text-black">
            {accountCount} Bank Accounts
          </div>
          <div className="text-sm text-gray-500">
            <p>Total Current Balance</p>
            <div className="text-2xl font-bold text-gray-800">
              $
              {totalBalance.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccounts;
