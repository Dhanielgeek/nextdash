"use client";
import { FC, useState, ReactElement } from "react";

interface Transaction {
  id: string;
  merchant: string;
  logo: string | ReactElement;
  amount: number;
  status: "processing" | "success" | "declined";
  date: string;
  time: string;
  category: string;
  isIncome: boolean;
}

interface Bank {
  id: string;
  name: string;
  balance: number;
  type?: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
  banks: Bank[];
}

const RecentTransactions: FC<RecentTransactionsProps> = ({
  transactions,
  banks,
}) => {
  const [activeBank, setActiveBank] = useState("all");

  return (
    <div className="bg-white rounded-lg shadow-sm mb-6">
      <div className="p-6 pb-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-black font-bold max-md:text-lg">
            Recent transactions
          </h2>
          <button className="text-sm text-gray-600 px-3 py-2 border border-gray-500 font-medium rounded-md">
            View all
          </button>
        </div>

        {/* Bank Tabs */}
        <div className="flex overflow-x-auto pb-2">
          {banks.map((bank) => (
            <button
              key={bank.id}
              className={`whitespace-nowrap px-4 py-2 mr-2 text-sm ${
                activeBank === bank.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveBank(bank.id)}
            >
              {bank.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Bank Card (Only show if a specific bank is selected) */}
      {activeBank !== "all" && (
        <div className="p-6 border-t border-b">
          <div className="flex items-center bg-blue-50 py-2 rounded-md px-2">
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3">
              {banks.find((b) => b.id === activeBank)?.name.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-blue-900">
                {banks.find((b) => b.id === activeBank)?.name}
              </div>
              <div className="text-lg font-bold text-blue-500">
                $
                {banks
                  .find((b) => b.id === activeBank)
                  ?.balance.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
              </div>
            </div>
            <div className="ml-auto px-3 py-1 rounded-full bg-green-100 font-bold text-green-800 text-xs">
              {banks.find((b) => b.id === activeBank)?.type || "Savings"}
            </div>
          </div>
        </div>
      )}

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="">
            <tr className="text-left text-xs text-black bg-blue-100">
              <th className="px-6 py-3">Transaction</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-t">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full font-bold text-gray-700 bg-gray-100 flex items-center justify-center mr-3">
                      {/* This would be the merchant logo */}
                      {tx.logo}
                    </div>
                    <div className="font-medium text-black text-sm">
                      {tx.merchant}
                    </div>
                  </div>
                </td>
                <td
                  className={`px-6 py-4 font-medium text-sm ${
                    tx.isIncome ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.isIncome ? "+" : "-"}${Math.abs(tx.amount).toFixed(2)}
                </td>
                <td className="px-6 py-4 font-bold">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs ${
                      tx.status === "processing"
                        ? "bg-blue-100 text-blue-800"
                        : tx.status === "success"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    • {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {tx.date} {tx.time}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 font-bold py-0.5 rounded-full text-xs ${
                      tx.category === "Bills/Utilities"
                        ? "bg-purple-100 text-purple-800"
                        : tx.category === "Food"
                        ? "bg-red-100 text-red-800"
                        : tx.category === "Income"
                        ? "bg-green-100 text-green-800"
                        : tx.category === "Subscription"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {tx.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
