import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const MetricCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  gradient,
  trend,
  percentage,
}) => (
  <div className="group bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
    ></div>

    <div className="relative z-10">
      <div className="flex items-start justify-between mb-3">
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

      {percentage && (
        <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
          <div
            className={`h-2 rounded-full ${
              percentage >= 90
                ? "bg-green-500"
                : percentage >= 75
                  ? "bg-blue-500"
                  : "bg-orange-500"
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      )}

      {subtitle && (
        <div className="flex items-center gap-2">
          {trend && (
            <span
              className={`flex items-center gap-1 text-xs font-bold ${
                trend === "up" ? "text-green-600" : "text-red-600"
              }`}
            >
              {trend === "up" ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
            </span>
          )}
          <p className="text-xs md:text-sm text-slate-600">{subtitle}</p>
        </div>
      )}
      <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
    </div>
  </div>
);

const TeacherStats = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {metrics.map((metric, idx) => (
        <MetricCard key={idx} {...metric} />
      ))}
    </div>
  );
};

export default TeacherStats;
