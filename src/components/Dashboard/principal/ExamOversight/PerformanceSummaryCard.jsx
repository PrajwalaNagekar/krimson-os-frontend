import React from "react";

const PerformanceSummaryCard = ({
  exam,
  grade,
  totalStudents,
  avgScore,
  passRate,
  status,
}) => (
  <div className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
    <div className="flex items-center justify-between mb-3">
      <div className="flex-1">
        <h4 className="font-bold text-slate-800 text-sm">{exam}</h4>
        <p className="text-xs text-slate-500">
          Grade {grade} • {totalStudents} students
        </p>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-xs font-bold ${
          status === "Published"
            ? "bg-green-100 text-green-700"
            : status === "Ready"
              ? "bg-blue-100 text-blue-700"
              : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {status}
      </span>
    </div>
    <div className="flex gap-4 text-sm">
      <div className="flex-1">
        <p className="text-xs text-slate-500 mb-1">Avg Score</p>
        <p className="text-lg font-bold text-slate-800">{avgScore}%</p>
      </div>
      <div className="flex-1">
        <p className="text-xs text-slate-500 mb-1">Pass Rate</p>
        <p className="text-lg font-bold text-green-600">{passRate}%</p>
      </div>
    </div>
  </div>
);

export default PerformanceSummaryCard;
