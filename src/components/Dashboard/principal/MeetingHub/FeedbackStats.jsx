import React from "react";
import { TrendingUp } from "lucide-react";

const FeedbackStats = () => {
  return (
    <div className="border-t border-slate-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-5">
      <h4 className="font-bold text-sm sm:text-base text-slate-800 mb-3 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        Feedback Overview
      </h4>
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-bold text-blue-600">42</p>
          <p className="text-[10px] sm:text-xs text-slate-600">This Week</p>
        </div>
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-bold text-green-600">4.2</p>
          <p className="text-[10px] sm:text-xs text-slate-600">Avg Rating</p>
        </div>
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-bold text-yellow-600">87%</p>
          <p className="text-[10px] sm:text-xs text-slate-600">Resolved</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackStats;
