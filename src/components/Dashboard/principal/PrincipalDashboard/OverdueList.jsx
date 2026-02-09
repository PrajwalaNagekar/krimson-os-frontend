import React from "react";
import { AlertCircle } from "lucide-react";
import OverdueFeeEntry from "./OverdueFeeEntry";

const OverdueList = ({ overdueStudents }) => {
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              Top Overdue Payments
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Students with pending fee payments
            </p>
          </div>
          <button className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-xs transition-all shadow-sm border border-slate-200 flex items-center gap-1">
            View All
            <span className="text-[8px] opacity-70">(get in app)</span>
          </button>
        </div>
      </div>

      <div className="p-5">
        {overdueStudents.map((student, index) => (
          <OverdueFeeEntry key={index} {...student} />
        ))}
      </div>
    </div>
  );
};

export default OverdueList;
