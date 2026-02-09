import React from "react";
import { DollarSign } from "lucide-react";

const FeeOverview = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-green-500" />
          Fee Collection
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Collection Rate</span>
            <span className="text-2xl font-bold text-green-600">
              {data.rate}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-green-400 to-green-600"
              style={{ width: `${data.rate}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div className="text-center p-3 bg-green-50 rounded-xl">
            <p className="text-xs text-green-700 font-semibold mb-1">
              Collected
            </p>
            <p className="text-lg font-bold text-green-800">{data.collected}</p>
          </div>
          <div className="text-center p-3 bg-red-50 rounded-xl">
            <p className="text-xs text-red-700 font-semibold mb-1">Overdue</p>
            <p className="text-lg font-bold text-red-800">{data.overdue}</p>
          </div>
        </div>

        <button className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-md">
          View Finance Dashboard
          <span className="text-[9px] opacity-80">(get in app)</span>
        </button>
      </div>
    </div>
  );
};

export default FeeOverview;
