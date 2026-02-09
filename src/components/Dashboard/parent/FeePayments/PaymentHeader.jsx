import React from "react";
import { CreditCard } from "lucide-react";

const PaymentHeader = () => {
  return (
    <div className="mb-4 md:mb-6 relative z-10">
      <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
        <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
          <CreditCard size={24} className="md:hidden text-white" />
          <CreditCard size={28} className="hidden md:block text-white" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Fee Payment & Receipts
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">
            Manage tuition payments and view transaction history
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentHeader;
