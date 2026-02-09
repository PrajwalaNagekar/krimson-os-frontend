import React from "react";

const CollectionMonthCard = ({ month, actual, target, percentComplete }) => {
  const isOverTarget = actual >= target;
  const barWidth = Math.min((actual / target) * 100, 100);

  return (
    <div className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-slate-700">{month}</span>
        <span
          className={`text-xs font-bold ${
            isOverTarget ? "text-green-600" : "text-orange-600"
          }`}
        >
          {percentComplete}%
        </span>
      </div>
      <div className="flex gap-2 text-xs mb-2">
        <div className="flex-1">
          <p className="text-slate-500">Target</p>
          <p className="font-bold text-slate-800">${target.toLocaleString()}</p>
        </div>
        <div className="flex-1">
          <p className="text-slate-500">Actual</p>
          <p
            className={`font-bold ${
              isOverTarget ? "text-green-600" : "text-orange-600"
            }`}
          >
            ${actual.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${
            isOverTarget ? "bg-green-500" : "bg-orange-500"
          }`}
          style={{ width: `${barWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CollectionMonthCard;
