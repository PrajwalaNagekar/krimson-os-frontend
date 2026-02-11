import React from "react";
import { TrendingUp } from "lucide-react";

const AssignmentTrendChart = ({ assignmentTrend }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
            <TrendingUp className="text-purple-500" size={24} />
            Assignment Completion Trend
          </h3>
          <p className="text-sm text-slate-500">6-week completion rate trend</p>
        </div>
      </div>

      <div className="h-64 flex items-end justify-between gap-4 px-4">
        {assignmentTrend.map((data, idx) => {
          const maxValue = 100;
          const height = (data.completion / maxValue) * 100;

          return (
            <div key={idx} className="flex-1 flex flex-col items-center">
              <div className="w-full relative group cursor-pointer">
                <div
                  className="w-full bg-slate-100 rounded-t-xl relative"
                  style={{ height: "200px" }}
                >
                  <div
                    className="absolute bottom-0 w-full bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-xl transition-all duration-500 group-hover:from-purple-700 group-hover:to-pink-500 shadow-lg"
                    style={{ height: `${height}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {data.completion}%
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-500 mt-3">
                {data.week}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssignmentTrendChart;
