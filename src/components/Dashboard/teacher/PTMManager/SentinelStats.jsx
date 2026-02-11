import React from "react";
import { AlertCircle, MessageSquare, TrendingUp } from "lucide-react";

const SentinelStats = ({ onNudge }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-[3rem] p-10 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.1)] border border-indigo-50 relative overflow-hidden">
        {/* Subtle background decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-[40px] -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-50 rounded-full blur-[30px] -ml-8 -mb-8"></div>

        <div className="flex items-center gap-3 mb-8 relative z-10">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl shadow-lg">
            <AlertCircle size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">
              AI5 Sentinel
            </h3>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              Accountability Bot
            </p>
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          {/* Overdue Alert Card */}
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-3">
              <p className="text-[9px] font-bold text-red-500 uppercase tracking-widest bg-red-50 px-2 py-1 rounded-lg">
                Overdue Alert
              </p>
              <div className="relative">
                <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-20"></div>
                <span className="relative block w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            </div>
            <p className="text-sm font-bold text-slate-700 mb-4 leading-relaxed">
              <span className="text-indigo-600">Kabir Singh's</span> reading log
              is{" "}
              <span className="underline decoration-red-300 decoration-2 underline-offset-2">
                2 days overdue
              </span>
              .
            </p>
            <button
              onClick={onNudge}
              className="w-full py-3 bg-white border border-slate-200 text-indigo-600 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm flex items-center justify-center gap-2 group-hover:shadow-md"
            >
              <MessageSquare size={14} />
              Nudge Parent
            </button>
          </div>

          {/* Closure Rate Card */}
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem]">
            <div className="flex justify-between items-center mb-4">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                Closure Rate
              </p>
              <span className="text-emerald-500 text-[10px] font-bold bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1">
                <TrendingUp size={12} />
                +4%
              </span>
            </div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-4xl font-bold text-slate-800">92%</span>
              <span className="text-xs font-bold text-slate-400">
                Target: 95%
              </span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full w-[92%] bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full shadow-[0_2px_10px_rgba(16,185,129,0.3)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentinelStats;
