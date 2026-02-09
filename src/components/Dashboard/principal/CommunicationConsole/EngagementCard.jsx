import React from "react";

const EngagementCard = ({ audience, readPercentage, totalSent, totalRead }) => {
  const getColor = (pct) => {
    if (pct >= 80) return "bg-green-500";
    if (pct >= 60) return "bg-blue-500";
    if (pct >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-slate-800 text-sm">{audience}</span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getColor(readPercentage)}`}
        >
          {readPercentage}%
        </span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
        <div
          className={`h-2 rounded-full ${getColor(readPercentage)}`}
          style={{ width: `${readPercentage}%` }}
        ></div>
      </div>
      <p className="text-xs text-slate-600">
        {totalRead} of {totalSent} read
      </p>
    </div>
  );
};

export default EngagementCard;
