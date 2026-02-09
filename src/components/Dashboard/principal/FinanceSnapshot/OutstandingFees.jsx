import React from "react";
import { PieChart, AlertOctagon } from "lucide-react";
import OutstandingByClassCard from "./OutstandingByClassCard";
import DefaulterCard from "./DefaulterCard";

const OutstandingFees = ({ outstandingByClass, topDefaulters }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Outstanding by Class */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-red-50 to-orange-50">
          <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-red-500" />
            Outstanding Fees by Grade
          </h3>
          <p className="text-sm text-slate-600 mt-1">Class-wise breakdown</p>
        </div>

        <div className="p-5 space-y-3">
          {outstandingByClass.map((data, idx) => (
            <OutstandingByClassCard key={idx} {...data} />
          ))}
        </div>
      </div>

      {/* Top Defaulters */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                <AlertOctagon className="w-5 h-5 text-red-500" />
                Top Defaulters
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Requiring immediate attention
              </p>
            </div>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
              {topDefaulters.length} Active
            </span>
          </div>
        </div>

        <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
          {topDefaulters.slice(0, 3).map((defaulter, idx) => (
            <DefaulterCard key={idx} {...defaulter} />
          ))}
          <button className="w-full px-4 py-2 border-2 border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-sm font-bold transition-colors">
            View All Defaulters ({topDefaulters.length})
            <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutstandingFees;
