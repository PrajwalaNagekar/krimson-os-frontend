import React from "react";
import { Link } from "react-router-dom";
import { DollarSign, ExternalLink } from "lucide-react";

const FeeStatusWidget = ({ fees }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all relative overflow-hidden">
      <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-red-50 rounded-bl-[100px] -mr-8 -mt-8"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-1">
              Fee Status
            </h3>
            <p className="text-xs text-slate-500">Next Due: {fees.dueDate}</p>
          </div>
          <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
            <DollarSign size={22} />
          </div>
        </div>

        <div className="mb-4">
          <div className="text-3xl font-extrabold text-slate-800 mb-2">
            {fees.amount}
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block text-xs font-bold text-red-600 bg-red-100 px-3 py-1 rounded-lg">
              {fees.status}
            </span>
            {fees.status === "Due" && (
              <span className="text-xs text-slate-500">• 5 days remaining</span>
            )}
          </div>
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
          Pay Now
        </button>
        <div className="flex justify-end mt-3"></div>
      </div>
    </div>
  );
};

export default FeeStatusWidget;
