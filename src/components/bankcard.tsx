// components/dashboard/BankCard.tsx
import { FC } from "react";

interface BankCardProps {
  cardNumber: string;
  holderName: string;
  expiryDate: string;
  cardType: string;
  bankName: string;
}

const BankCard: FC<BankCardProps> = ({
  cardNumber,
  holderName,
  expiryDate,
  cardType,
  bankName,
}) => {
  return (
    <div className="w-full p-1">
      <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-500">
        {/* Card content */}
        <div className="absolute top-0 left-0 w-full h-full p-5 flex flex-col justify-between">
          {/* Card top section */}
          <div className="flex justify-between">
            <div className="font-bold text-white">{bankName}</div>
            <div className="text-white">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>

          {/* Card chip and type */}
          <div className="flex items-center">
            <div className="h-10 w-12 bg-yellow-200 rounded-md mr-2 flex items-center justify-center">
              {/* Card chip symbol */}
              <div className="h-6 w-8 bg-gray-300 rounded-sm"></div>
            </div>
            <div className="text-white font-medium">{cardType}</div>
          </div>

          {/* Card number */}
          <div className="text-white text-lg font-mono">
            {cardNumber.match(/.{1,4}/g)?.join(" ")}
          </div>

          {/* Card holder and expiry */}
          <div className="flex justify-between">
            <div className="text-white text-sm">
              <div className="opacity-70 mb-1">CARD HOLDER</div>
              <div>{holderName.toUpperCase()}</div>
            </div>
            <div className="text-white text-sm">
              <div className="opacity-70 mb-1">EXPIRES</div>
              <div>{expiryDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
