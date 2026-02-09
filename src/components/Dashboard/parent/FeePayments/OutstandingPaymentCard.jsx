import React from "react";
import { DollarSign, ArrowRight, CreditCard, Shield } from "lucide-react";

const OutstandingPaymentCard = ({ feeStatus }) => {
  return (
    <div className="lg:col-span-2 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
      <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-pink-500/30 rounded-full blur-3xl -ml-10 -mb-10"></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <div>
            <p className="text-white/80 text-xs md:text-sm mb-1 font-medium flex items-center gap-2">
              <DollarSign size={16} className="md:w-5 md:h-5" />
              Total Outstanding
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              SGD {feeStatus.totalOutstanding.toFixed(2)}
            </h1>
            <p className="text-white/70 text-xs md:text-sm font-medium">
              Due:{" "}
              {new Date(feeStatus.dueDate).toLocaleDateString("en-SG", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-3 md:px-4 py-2 rounded-xl text-center">
            <p className="text-xl md:text-2xl font-bold">
              {feeStatus.daysLeft}
            </p>
            <p className="text-[10px] md:text-xs text-white/80 font-medium">
              days left
            </p>
          </div>
        </div>

        <button className="w-full sm:w-auto bg-white text-blue-600 px-6 md:px-8 py-3 md:py-3.5 rounded-xl md:rounded-2xl font-bold text-sm md:text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
          <div className="flex items-center justify-center gap-2">
            <CreditCard size={18} className="md:w-5 md:h-5" />
            <span>Pay Now - 2 Click Payment</span>
            <ArrowRight size={18} className="md:w-5 md:h-5" />
          </div>
        </button>

        <div className="mt-4 flex items-center gap-2 text-white/80 text-xs">
          <Shield size={14} />
          <span>Secure payment via Stripe & Razorpay</span>
        </div>
      </div>

      <CreditCard className="absolute right-4 md:right-6 bottom-4 md:bottom-6 text-white/20 w-24 h-24 md:w-32 md:h-32 rotate-12" />
    </div>
  );
};

export default OutstandingPaymentCard;
