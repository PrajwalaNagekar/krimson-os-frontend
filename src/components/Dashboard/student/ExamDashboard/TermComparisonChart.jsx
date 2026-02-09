import React from "react";
import { BarChart3, TrendingUp } from "lucide-react";

const TermComparisonChart = ({ performance }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-slate-100">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
          <BarChart3 className="text-purple-600" size={20} />
        </div>
        <h3 className="font-bold text-slate-800 text-lg">Term Comparison</h3>
      </div>

      {/* Simple Bar Chart */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
            <span>Term 1</span>
            <span className="text-purple-600">{performance.term1Avg}%</span>
          </div>
          <div className="w-full bg-slate-100 h-8 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-400 to-pink-400 h-full rounded-full flex items-center justify-end pr-3 text-white text-xs font-bold"
              style={{ width: `${performance.term1Avg}%` }}
            >
              {performance.term1Avg}%
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
            <span>Term 2</span>
            <span className="text-cyan-600">{performance.term2Avg}%</span>
          </div>
          <div className="w-full bg-slate-100 h-8 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full flex items-center justify-end pr-3 text-white text-xs font-bold"
              style={{ width: `${performance.term2Avg}%` }}
            >
              {performance.term2Avg}%
            </div>
          </div>
        </div>

        {/* Improvement Indicator */}
        <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
          <TrendingUp className="text-green-600" size={16} />
          <span className="text-xs font-bold text-green-700">
            +{performance.term2Avg - performance.term1Avg}% Improvement
          </span>
        </div>
      </div>
    </div>
  );
};

export default TermComparisonChart;
