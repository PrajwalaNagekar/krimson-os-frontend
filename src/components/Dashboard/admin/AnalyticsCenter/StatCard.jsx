import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatCard = ({
  icon: Icon,
  iconColorClass, // e.g., "text-blue-600 bg-blue-50"
  trend, // "up" or "down"
  trendValue,
  value,
  label,
  subtext,
  footerText = "()",
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div
          className={`p-3 rounded-2xl group-hover:scale-110 transition-transform ${iconColorClass}`}
        >
          <Icon size={24} strokeWidth={2.5} />
        </div>
        <span
          className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${
            trend === "up"
              ? "text-green-600 bg-green-50"
              : "text-red-600 bg-red-50"
          }`}
        >
          {trend === "up" ? (
            <ArrowUpRight size={12} />
          ) : (
            <ArrowDownRight size={12} />
          )}
          {trendValue}
        </span>
      </div>
      <div>
        <h3 className="text-3xl font-extrabold text-slate-800 mb-1">{value}</h3>
        <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
          {label}
        </p>
        <p className="text-xs text-slate-400 mt-2">{subtext}</p>
        {footerText && (
          <p className="text-[10px] text-slate-400 mt-3">{footerText}</p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
