import React from "react";
import { AlertCircle } from "lucide-react";

const AbsenteeismAlert = ({
  studentName,
  grade,
  rollNumber,
  daysAbsent,
  lastPresent,
  severity,
}) => (
  <div
    className={`p-4 rounded-xl border-l-4 hover:shadow-md transition-all ${
      severity === "critical"
        ? "bg-red-50 border-red-500"
        : severity === "high"
          ? "bg-orange-50 border-orange-500"
          : "bg-yellow-50 border-yellow-500"
    }`}
  >
    <div className="flex items-start gap-3">
      <div
        className={`p-2 rounded-lg flex-shrink-0 ${
          severity === "critical"
            ? "bg-red-100"
            : severity === "high"
              ? "bg-orange-100"
              : "bg-yellow-100"
        }`}
      >
        <AlertCircle
          className={`w-4 h-4 ${
            severity === "critical"
              ? "text-red-600"
              : severity === "high"
                ? "text-orange-600"
                : "text-yellow-600"
          }`}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-bold text-slate-800 text-sm">{studentName}</h4>
          <span
            className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
              severity === "critical"
                ? "bg-red-200 text-red-800"
                : severity === "high"
                  ? "bg-orange-200 text-orange-800"
                  : "bg-yellow-200 text-yellow-800"
            }`}
          >
            {severity}
          </span>
        </div>
        <p className="text-xs text-slate-600 mb-2">
          Grade {grade} • Roll #{rollNumber} • Absent {daysAbsent} consecutive
          days
        </p>
        <p className="text-xs text-slate-500">Last present: {lastPresent}</p>
        <div className="flex gap-2 mt-3">
          <button
            className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              severity === "critical"
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-slate-600 hover:bg-slate-700 text-white"
            }`}
          >
            <span className="flex items-center justify-center gap-1">
              Flag for Review
              <span className="text-[8px] opacity-80">(get in app)</span>
            </span>
          </button>
          <button className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 rounded-lg text-xs font-bold text-slate-700 transition-colors">
            Contact Parent
            <span className="text-[8px] opacity-70 ml-1">(get in app)</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default AbsenteeismAlert;
