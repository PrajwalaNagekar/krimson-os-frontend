import React from "react";
import { Calendar } from "lucide-react";

const AttendanceTrends = ({ trends }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Calendar className="text-blue-500" size={24} />
          Attendance Trends
        </h2>
      </div>

      {/* Simple Bar Chart */}
      <div className="flex items-end justify-between gap-3 md:gap-4 h-48 mb-6">
        {trends.map((trend, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="relative w-full bg-slate-100 rounded-t-lg overflow-hidden"
              style={{ height: `${(trend.percentage / 100) * 160}px` }}
            >
              <div
                className="absolute bottom-0 w-full bg-gradient-to-t from-cyan-400 to-blue-400 rounded-t-lg transition-all duration-500"
                style={{ height: "100%" }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-white drop-shadow">
                  {trend.percentage}%
                </span>
              </div>
            </div>
            <span className="text-xs font-semibold text-slate-600">
              {trend.month}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default AttendanceTrends;
