// components/dashboard/BudgetSection.tsx
"use client";

import { FC } from "react";

interface Budget {
  id: string;
  name: string;
  amount: number;
  spent: number;
  icon: React.ReactNode;
}

interface BudgetSectionProps {
  budgets: Budget[];
}

const BudgetSection: FC<BudgetSectionProps> = ({ budgets }) => {
  // Define a mapping for colors based on budget categories
  const budgetColors: Record<
    string,
    { iconBg: string; text: string; bar: string; other: string }
  > = {
    Subscriptions: {
      iconBg: "bg-blue-200",
      text: "text-blue-600",
      bar: "bg-blue-500",
      other: "bg-blue-100",
    },
    "Food and booze": {
      iconBg: "bg-red-200",
      text: "text-red-600",
      bar: "bg-red-500",
      other: "bg-red-100",
    },
    Savings: {
      iconBg: "bg-green-200",
      text: "text-green-600",
      bar: "bg-green-500",
      other: "bg-green-100",
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-black">My budgets</h2>
          <button>
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {budgets.map((budget) => {
            const colors = budgetColors[budget.name] || {
              iconBg: "bg-gray-100",
              text: "text-gray-600",
              bar: "bg-gray-500",
            };

            return (
              <div
                key={budget.id}
                className={`flex items-center ${colors.other} ${colors.text} p-2 rounded-md shadow-sm`}
              >
                {/* Budget Icon with its own Background */}
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 ${colors.iconBg} ${colors.text}`}
                >
                  {budget.icon}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <div className="font-medium">{budget.name}</div>
                    <div className={`text-sm ${colors.text}`}>
                      ${(budget.amount - budget.spent).toFixed(2)} left
                    </div>
                  </div>
                  {/* Budget Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${colors.bar}`}
                      style={{
                        width: `${(budget.spent / budget.amount) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BudgetSection;
