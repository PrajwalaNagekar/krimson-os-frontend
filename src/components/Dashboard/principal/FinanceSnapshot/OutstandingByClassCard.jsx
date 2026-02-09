import React from "react";

const OutstandingByClassCard = ({
  grade,
  amount,
  studentCount,
  percentage,
}) => (
  <div className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors">
    <div className="w-20 font-bold text-sm text-slate-700">Grade {grade}</div>
    <div className="flex-1">
      <div className="w-full bg-slate-200 rounded-full h-3 mb-1">
        <div
          className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-xs text-slate-500">{studentCount} students</p>
    </div>
    <div className="text-right">
      <p className="font-bold text-red-600">${amount.toLocaleString()}</p>
    </div>
  </div>
);

export default OutstandingByClassCard;
