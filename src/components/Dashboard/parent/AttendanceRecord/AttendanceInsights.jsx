import React from "react";
import { Sparkles, TrendingUp, AlertCircle } from "lucide-react";

const AttendanceInsights = ({ insights }) => {
  if (!insights) return null;

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg shadow-purple-200">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-900/20 rounded-full blur-3xl -ml-10 -mb-10"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
            <Sparkles size={18} className="text-yellow-300" />
          </div>
          <h3 className="font-bold text-lg">AI Attendance Insights</h3>
          <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/30">
            Beta
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <div className="flex items-center gap-2 mb-1 text-indigo-100 text-xs font-semibold uppercase">
              <TrendingUp size={12} /> Pattern Analysis
            </div>
            <p className="text-sm font-medium leading-snug">
              Attendance has improved by{" "}
              <span className="text-green-300 font-bold">
                {insights.patternAnalysis.improvement}
              </span>{" "}
              compared to last term. {insights.patternAnalysis.trend}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <div className="flex items-center gap-2 mb-1 text-pink-100 text-xs font-semibold uppercase">
              <AlertCircle size={12} /> Prediction
            </div>
            <p className="text-sm font-medium leading-snug">
              Based on current trends, projected annual attendance is{" "}
              <span className="text-yellow-300 font-bold">
                {insights.prediction.projected}
              </span>
              . {insights.prediction.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceInsights;
