import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const AttendanceTrend = ({ monthlyTrend }) => {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white">
      <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-3 tracking-tight">
        <TrendingUp className="text-purple-600" size={24} />
        Attendance Trend
      </h2>

      <div className="space-y-6">
        {monthlyTrend.map((month, index) => (
          <div key={index} className="space-y-2 group">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <span className="text-slate-500 group-hover:text-purple-700 transition-colors">
                {month.month}
              </span>
              <div className="flex items-center gap-3">
                <span
                  className={`text-sm ${
                    month.percentage >= 85 ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {month.percentage}%
                </span>
                {month.percentage > monthlyTrend[index - 1]?.percentage &&
                index > 0 ? (
                  <TrendingUp size={16} className="text-emerald-600" />
                ) : index > 0 ? (
                  <TrendingDown size={16} className="text-red-600" />
                ) : null}
              </div>
            </div>
            <div className="relative pt-1">
              {/* Student bar */}
              <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden shadow-inner">
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out group-hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] ${
                    month.percentage >= 85
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                      : "bg-gradient-to-r from-red-500 to-rose-600"
                  }`}
                  style={{ width: `${month.percentage}%` }}
                ></div>
              </div>
              {/* Class average indicator */}
              <div
                className="absolute top-0 h-6 w-[2px] bg-purple-600 rounded-full z-10 shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                style={{ left: `${month.classAvg}%` }}
                title={`Class Avg: ${month.classAvg}%`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-indigo-500"></div>
          You
        </div>
        <div className="flex items-center gap-2">
          <div className="w-0.5 h-4 bg-purple-600"></div>
          Class Avg
        </div>
      </div>
    </div>
  );
};

export default AttendanceTrend;
