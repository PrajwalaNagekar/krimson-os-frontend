import React from "react";
import { TrendingUp, AlertTriangle } from "lucide-react";

const WellbeingInsight = ({ moodTrends }) => {
  return (
    <div className="bg-slate-900 text-white rounded-[3rem] p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] -mr-20 -mt-20"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
              <TrendingUp size={24} className="text-indigo-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">AI Analysis</h2>
              <p className="text-indigo-200/80 text-xs font-bold uppercase tracking-widest">
                Kabir Singh
              </p>
            </div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm mb-6">
            <h4 className="flex items-center gap-2 font-bold text-orange-300 mb-2">
              <AlertTriangle size={18} /> Correlation Detected
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Consistent "Academic Pressure" logs correlate with Physics
              assessment schedules. Recommended remedial support.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-indigo-500 hover:bg-indigo-400 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
              Intervention
            </button>
            <button className="flex-1 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
              Counselor
            </button>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex items-end justify-between gap-1">
          {moodTrends.map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 w-full group"
            >
              <div
                className={`w-full rounded-t-xl transition-all duration-500 relative ${
                  t.mood >= 4
                    ? "bg-emerald-400 h-32 opacity-80 group-hover:opacity-100"
                    : t.mood === 3
                      ? "bg-blue-400 h-20 opacity-60 group-hover:opacity-80"
                      : "bg-orange-400 h-12 opacity-80 group-hover:opacity-100"
                }`}
              ></div>
              <span className="text-[10px] font-bold text-slate-500">
                {t.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellbeingInsight;
