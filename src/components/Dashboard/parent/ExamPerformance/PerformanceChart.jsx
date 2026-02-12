import React from "react";
import { TrendingUp } from "lucide-react";

const PerformanceChart = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2">
            <TrendingUp className="text-blue-500" size={24} />
            Term Performance Analysis
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Subject-wise performance comparison
          </p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">
                {item.subject}
              </span>
              <span className="text-sm font-bold text-slate-800">
                {item.score}%
              </span>
            </div>
            <div className="relative h-8 bg-slate-100 rounded-full overflow-hidden">
              {/* Animated bar */}
              <div
                className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out flex items-center justify-end px-3 group-hover:shadow-lg`}
                style={{ width: `${item.score}%` }}
              >
                <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.score}/{item.maxScore}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-6 border-t border-slate-100">
        <div className="flex flex-wrap gap-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400"></div>
            <span className="text-slate-600">Excellent (&gt;90%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
            <span className="text-slate-600">Good (85-90%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-400"></div>
            <span className="text-slate-600">Needs Improvement (&lt;85%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
