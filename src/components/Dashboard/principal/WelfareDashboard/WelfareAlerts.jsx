import React from "react";
import { AlertTriangle } from "lucide-react";

// Alert Card
const AlertCard = ({ title, description, priority, grade, actionLabel }) => (
  <div
    className={`p-4 border-l-4 rounded-xl ${
      priority === "Critical"
        ? "border-red-600 bg-red-50"
        : priority === "High"
          ? "border-orange-600 bg-orange-50"
          : "border-blue-600 bg-blue-50"
    }`}
  >
    <div className="flex items-start justify-between mb-2">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle
            className={`w-4 h-4 ${
              priority === "Critical"
                ? "text-red-600"
                : priority === "High"
                  ? "text-orange-600"
                  : "text-blue-600"
            }`}
          />
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
              priority === "Critical"
                ? "bg-red-200 text-red-800"
                : priority === "High"
                  ? "bg-orange-200 text-orange-800"
                  : "bg-blue-200 text-blue-800"
            }`}
          >
            {priority}
          </span>
        </div>
        <h4 className="font-bold text-slate-800">{title}</h4>
        <p className="text-sm text-slate-600 mt-1">{description}</p>
        {grade && <p className="text-xs text-slate-500 mt-1">Grade {grade}</p>}
      </div>
    </div>
    <div className="flex gap-2 mt-3">
      <button className="flex-1 px-3 py-2 bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 rounded-lg text-xs font-bold transition-colors">
        View Details
        <span className="text-[8px] opacity-70 ml-1">(get in app)</span>
      </button>
      <button
        className={`flex-1 px-3 py-2 text-white rounded-lg text-xs font-bold transition-colors ${
          priority === "Critical"
            ? "bg-red-600 hover:bg-red-700"
            : priority === "High"
              ? "bg-orange-600 hover:bg-orange-700"
              : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {actionLabel}
        <span className="text-[8px] opacity-80 ml-1">(get in app)</span>
      </button>
    </div>
  </div>
);

const WelfareAlerts = ({ alerts }) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-bold text-base sm:text-lg text-slate-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
              <span className="text-sm sm:text-base">
                Pending Interventions
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Requiring immediate attention
            </p>
          </div>
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-red-100 text-red-700 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap">
            {alerts.filter((a) => a.priority === "Critical").length} Critical
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {alerts.map((alert, idx) => (
          <AlertCard key={idx} {...alert} />
        ))}
      </div>
    </div>
  );
};

export default WelfareAlerts;
