import React from "react";
import { CheckCircle, Clock, TrendingUp } from "lucide-react";

const PunctualityStats = ({ onTime, late, percentage }) => {
  return (
    <>
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <TrendingUp className="text-blue-500" size={24} />
        Punctuality Stats
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl">
          <div className="p-2 bg-green-200 rounded-xl">
            <CheckCircle size={20} className="text-green-700" />
          </div>
          <div>
            <div className="text-2xl font-bold text-green-700">{onTime}</div>
            <div className="text-xs text-green-600 font-medium">On Time</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-2xl">
          <div className="p-2 bg-orange-200 rounded-xl">
            <Clock size={20} className="text-orange-700" />
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-700">{late}</div>
            <div className="text-xs text-orange-600 font-medium">Late</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl">
          <div className="p-2 bg-blue-200 rounded-xl">
            <TrendingUp size={20} className="text-blue-700" />
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-700">
              {percentage}%
            </div>
            <div className="text-xs text-blue-600 font-medium">
              Punctuality Rate
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PunctualityStats;
