import React, { useState } from "react";
import { Activity, Sparkles } from "lucide-react";

const AttendanceMoodCorrelation = ({ attendanceCorrelation }) => {
  const [selectedMetric, setSelectedMetric] = useState("week");

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
          <Activity className="text-blue-500" size={22} />
          Attendance vs. Mood Correlation
        </h3>
        <div className="flex gap-2">
          {["week", "month"].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedMetric(period)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedMetric === period
                  ? "bg-blue-500 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {period === "week" ? "7 Days" : "30 Days"}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 flex items-end justify-between gap-2 px-2 mb-4">
        {attendanceCorrelation.map((day, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-3">
            <div className="w-full relative h-52 flex items-end justify-center">
              {/* Attendance Bar */}
              <div
                className="w-full bg-gradient-to-t from-blue-400 to-blue-200 rounded-t-xl hover:from-blue-500 hover:to-blue-300 transition-all cursor-pointer group relative"
                style={{ height: `${day.attendance}%` }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {day.attendance}%
                </div>
              </div>
              {/* Mood Line Point */}
              <div
                className="absolute w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-white shadow-lg hover:scale-150 transition-transform cursor-pointer"
                style={{ bottom: `${day.mood * 10}%` }}
              ></div>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase">
              {day.day}
            </span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-8 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-t from-blue-400 to-blue-200 rounded"></div>
          <span className="text-xs font-bold text-slate-600">Attendance %</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
          <span className="text-xs font-bold text-slate-600">Mood Score</span>
        </div>
      </div>

      {/* Insight */}
      <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
        <div className="flex items-start gap-3">
          <Sparkles size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-bold text-blue-700 mb-1">
              AI Insight
            </div>
            <div className="text-xs text-blue-600">
              Strong positive correlation detected. Students with 90%+
              attendance report 23% higher mood scores.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceMoodCorrelation;
