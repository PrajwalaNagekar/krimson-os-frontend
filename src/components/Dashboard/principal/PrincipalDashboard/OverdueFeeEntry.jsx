import React from "react";

const OverdueFeeEntry = ({ studentName, grade, amount, days }) => (
  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-100 last:border-0">
    <div className="flex-1">
      <p className="font-semibold text-slate-800 text-sm">{studentName}</p>
      <p className="text-xs text-slate-500">
        Grade {grade} • {days} days overdue
      </p>
    </div>
    <div className="text-right">
      <p className="font-bold text-red-600">${amount}</p>
    </div>
  </div>
);

export default OverdueFeeEntry;
