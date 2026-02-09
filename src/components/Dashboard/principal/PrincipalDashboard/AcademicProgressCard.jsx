import React from "react";

const AcademicProgressCard = ({ grade, percentage, students, status }) => (
  <div className="flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all duration-200 group">
    <div className="flex items-center gap-4 flex-1">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold shadow-md">
        {grade}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-slate-800">Grade {grade}</span>
          <span className="text-sm font-bold text-slate-700">
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              percentage >= 85
                ? "bg-gradient-to-r from-green-400 to-green-500"
                : percentage >= 70
                  ? "bg-gradient-to-r from-blue-400 to-blue-500"
                  : "bg-gradient-to-r from-orange-400 to-red-500"
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-xs text-slate-500 mt-1">{students} students</p>
      </div>
    </div>
    <span
      className={`ml-3 px-3 py-1 rounded-full text-xs font-bold ${
        status === "excellent"
          ? "bg-green-100 text-green-700"
          : status === "good"
            ? "bg-blue-100 text-blue-700"
            : "bg-orange-100 text-orange-700"
      }`}
    >
      {status}
    </span>
  </div>
);

export default AcademicProgressCard;
