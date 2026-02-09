import React from "react";

const CorrelationPoint = ({ attendance, academic, grade }) => (
  <div className="p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-all cursor-pointer">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs font-bold text-slate-700">Grade {grade}</span>
      <div className="flex gap-2">
        <span className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-semibold">
          📊 {academic}%
        </span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-xs text-slate-500">Attendance:</span>
      <div className="flex-1 bg-slate-200 rounded-full h-1.5">
        <div
          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full"
          style={{ width: `${attendance}%` }}
        ></div>
      </div>
      <span className="text-xs font-bold text-slate-700">{attendance}%</span>
    </div>
  </div>
);

export default CorrelationPoint;
