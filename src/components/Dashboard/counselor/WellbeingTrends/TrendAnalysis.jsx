import React from "react";
import { TrendingUp, Activity, BrainCircuit, ExternalLink } from "lucide-react";

const iconMap = {
  TrendingUp: TrendingUp,
  Activity: Activity,
  BrainCircuit: BrainCircuit,
};

const TrendAnalysis = ({ trends }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
      <h3 className="font-bold text-slate-800 text-lg mb-6 flex items-center gap-2">
        <TrendingUp className="text-green-500" size={22} />
        Wellbeing Trend Analysis
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trends.map((trend, index) => {
          const Icon = iconMap[trend.icon] || TrendingUp;
          return (
            <div
              key={index}
              className={`p-5 ${trend.bg} rounded-2xl border ${trend.borderColor}`}
            >
              <div className="flex items-center justify-between mb-3">
                <Icon className={trend.iconColor} size={20} />
                <span
                  className={`text-xs font-bold ${trend.textColor} ${trend.badgeBg ? trend.badgeBg + " px-2 py-1 rounded" : ""}`}
                >
                  {trend.value}
                </span>
              </div>
              <div className="text-sm font-bold text-slate-700 mb-1">
                {trend.label}
              </div>
              <div className="text-xs text-slate-500 mb-2">{trend.subtext}</div>
              <div className="flex items-center gap-1 text-[10px] text-slate-400 italic">
                <span>Go to App</span>
                <ExternalLink size={10} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendAnalysis;
