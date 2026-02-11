import React from "react";
import { TrendingUp } from "lucide-react";

const CafeteriaStats = () => {
  return (
    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl group hover:scale-[1.02] transition-all relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all" />
      <div className="relative z-10 space-y-5">
        <div className="flex items-center justify-between">
          <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-sm">
            <TrendingUp size={20} className="text-white" />
          </div>
          <span className="text-[10px] font-bold text-emerald-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
            ON TRACK
          </span>
        </div>
        <div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
            84.2%
          </h3>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            Inventory Status
          </p>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          Current stock levels for selected meal categories are optimized for
          the upcoming period.
        </p>
        <button className="w-full py-3 bg-white border border-gray-100 hover:border-green-400 hover:text-green-600 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm">
          View Procurement Logs
        </button>
      </div>
    </div>
  );
};

export default CafeteriaStats;
