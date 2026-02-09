import React from "react";
import { TrendingUp, TrendingDown, AlertTriangle, Award } from "lucide-react";

const OutlierCard = ({
  subject,
  grade,
  change,
  avgScore,
  type,
  teacherName,
}) => (
  <div
    className={`p-4 rounded-xl border-l-4 hover:shadow-lg transition-all ${
      type === "low"
        ? "bg-red-50 border-red-500"
        : "bg-green-50 border-green-500"
    }`}
  >
    <div className="flex items-start justify-between mb-2">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          {type === "low" ? (
            <TrendingDown className="w-4 h-4 text-red-600" />
          ) : (
            <TrendingUp className="w-4 h-4 text-green-600" />
          )}
          <h4
            className={`font-bold text-sm ${type === "low" ? "text-red-800" : "text-green-800"}`}
          >
            Grade {grade} - {subject}
          </h4>
        </div>
        <p
          className={`text-xs ${type === "low" ? "text-red-700" : "text-green-700"} mb-1`}
        >
          {type === "low"
            ? `Average dropped by ${Math.abs(change)}% this term`
            : `Improved by ${change}% - Top performing`}
        </p>
        <p className="text-xs text-slate-600">
          Teacher: {teacherName} • Avg: {avgScore}%
        </p>
      </div>
      {type === "low" && (
        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
      )}
      {type === "high" && (
        <Award className="w-5 h-5 text-green-500 flex-shrink-0" />
      )}
    </div>
    {type === "low" && (
      <button className="mt-3 w-full px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        Request Review
        <span className="text-[8px] opacity-80">(get in app)</span>
      </button>
    )}
    {type === "high" && (
      <button className="mt-3 w-full px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        View Details
        <span className="text-[8px] opacity-80">(get in app)</span>
      </button>
    )}
  </div>
);

export default OutlierCard;
