import React from "react";
import { BarChart2, Target } from "lucide-react";

const AttendanceGraph = ({ selectedView, monthlyData, termData }) => {
  if (selectedView === "monthly") {
    return (
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
              <BarChart2 className="text-blue-500" size={24} />
              Monthly Attendance Trend
            </h3>
            <p className="text-sm text-slate-500">
              6-month attendance overview
            </p>
          </div>
        </div>

        <div className="h-64 flex items-end justify-between gap-4 px-4">
          {monthlyData.map((data, idx) => {
            const maxValue = 100;
            const height = (data.percentage / maxValue) * 100;

            return (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div className="w-full relative group cursor-pointer">
                  <div
                    className="w-full bg-slate-100 rounded-t-xl relative"
                    style={{ height: "200px" }}
                  >
                    <div
                      className={`absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-xl transition-all duration-500 group-hover:from-blue-700 group-hover:to-cyan-500 shadow-lg ${
                        data.percentage < 90 ? "from-orange-600 to-red-400" : ""
                      }`}
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {data.percentage}%
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-500 mt-3">
                  {data.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
            <Target className="text-purple-500" size={24} />
            Term-wise Attendance Summary
          </h3>
          <p className="text-sm text-slate-500">
            Academic year overview by term
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {termData.map((term, idx) => (
          <div
            key={idx}
            className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-all"
          >
            <h4 className="font-bold text-slate-800 mb-4">{term.term}</h4>

            {/* Percentage */}
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-slate-600">Average Attendance</span>
                <span className="font-bold text-blue-600">
                  {term.percentage}%
                </span>
              </div>
              <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all"
                  style={{ width: `${term.percentage}%` }}
                ></div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Students</span>
                <span className="font-bold text-slate-800">
                  {term.students}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Total Days</span>
                <span className="font-bold text-slate-800">
                  {term.totalDays}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceGraph;
