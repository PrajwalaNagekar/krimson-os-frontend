import React from "react";
import { TrendingUp } from "lucide-react";

const StatCard = ({ title, value, subtext, icon: Icon, gradient, trend }) => (
  <div className="group bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
    {/* Gradient Background on Hover */}
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
    ></div>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
            {title}
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
            {value}
          </h3>
        </div>
        <div
          className={`p-3 md:p-4 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}
        >
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
      </div>
      {subtext && (
        <div className="flex items-center gap-2 mt-3">
          {trend && (
            <span
              className={`flex items-center gap-1 text-xs font-bold ${
                trend === "up" ? "text-green-600" : "text-red-600"
              }`}
            >
              <TrendingUp
                className={`w-3 h-3 ${trend === "down" ? "rotate-180" : ""}`}
              />
            </span>
          )}
          <p className="text-xs md:text-sm text-slate-600">{subtext}</p>
        </div>
      )}
      <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
    </div>
  </div>
);

export default StatCard;
