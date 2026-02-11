import React from "react";
import { Sparkles } from "lucide-react";

const AIBalancerSidebar = ({ aiBalancingInsights, policyConstraints }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
        <Sparkles className="absolute -right-4 -top-4 w-24 h-24 opacity-20 rotate-12 group-hover:scale-125 transition-transform duration-700" />
        <h4 className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-6">
          AI1 Balancing Intelligence
        </h4>
        <div className="space-y-5">
          {aiBalancingInsights.map((tip, idx) => (
            <div
              key={idx}
              className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10"
            >
              <p className="text-[9px] font-bold text-blue-300 uppercase mb-1">
                {tip.type}
              </p>
              <p className="text-xs font-medium leading-relaxed">{tip.msg}</p>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 py-3 bg-white text-blue-600 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
          Generate Rebalance Plan
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 block ml-1">
          Policy Constraints
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600 font-medium">
              Daily Max
            </span>
            <span className="text-xs font-bold text-slate-800">
              {policyConstraints.dailyMax}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600 font-medium">
              Grade Guideline
            </span>
            <span className="text-xs font-bold text-slate-800">
              {policyConstraints.gradeGuideline}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600 font-medium">
              Weekend Policy
            </span>
            <span className="text-xs font-bold text-emerald-500">
              {policyConstraints.weekendPolicy}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBalancerSidebar;
