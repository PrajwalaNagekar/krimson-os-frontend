import React from "react";
import { Info } from "lucide-react";

const TermSummary = ({ termData }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>

      <div className="flex items-start gap-4 relative z-10">
        <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg text-white">
          <Info size={24} />
        </div>
        <div className="flex-1 text-white">
          <h3 className="text-lg font-black tracking-tight mb-6">
            Term-Wise Summary
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center bg-white/10 rounded-2xl p-4 border border-white/5 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-2">
                Total Days
              </p>
              <p className="text-2xl font-black">{termData.totalDays}</p>
            </div>
            <div className="text-center bg-white/10 rounded-2xl p-4 border border-white/5 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-2">
                Present
              </p>
              <p className="text-2xl font-black">{termData.present}</p>
            </div>
            <div className="text-center bg-white/10 rounded-2xl p-4 border border-white/5 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-2">
                Percentage
              </p>
              <p
                className={`text-2xl font-black ${
                  termData.percentage >= 85
                    ? "text-emerald-300"
                    : "text-rose-300"
                }`}
              >
                {termData.percentage}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermSummary;
