import React from "react";
import { Calendar, FileText } from "lucide-react";
import { getCategoryColor } from "../../../../data/ParentData";

const UpcomingPayments = ({ feeStatus }) => {
  return (
    <div className="mb-4 md:mb-6 relative z-10">
      <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
        <h3 className="font-bold text-slate-800 text-base md:text-lg mb-4 flex items-center gap-2">
          <Calendar size={20} className="text-cyan-500" />
          Upcoming Payments Breakdown
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {feeStatus.upcomingDues.map((due) => (
            <div
              key={due.id}
              className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-xl border border-slate-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getCategoryColor(due.category)} flex items-center justify-center`}
                >
                  <FileText size={16} className="text-white" />
                </div>
                <span className="text-xs font-bold text-slate-600">
                  {due.category}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-700 mb-2 line-clamp-2">
                {due.description}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-slate-800">
                  SGD {due.amount.toFixed(2)}
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-xs font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300">
                  Pay Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingPayments;
