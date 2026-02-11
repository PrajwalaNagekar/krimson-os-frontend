import React from "react";
import { BarChart2 } from "lucide-react";

const ClassPerformanceOverview = ({ classPerformance }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
            <BarChart2 className="text-blue-500" size={24} />
            Class Performance Overview
          </h3>
          <p className="text-sm text-slate-500">
            Term average and attendance rates by class
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {classPerformance.map((classData, idx) => (
          <div
            key={idx}
            className="p-5 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-all"
          >
            <h4 className="font-bold text-slate-800 mb-4">{classData.class}</h4>

            {/* Term Average Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-slate-600">Term Average</span>
                <span className="font-bold text-blue-600">
                  {classData.termAvg}%
                </span>
              </div>
              <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all"
                  style={{ width: `${classData.termAvg}%` }}
                ></div>
              </div>
            </div>

            {/* Attendance Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-slate-600">Attendance</span>
                <span className="font-bold text-green-600">
                  {classData.attendance}%
                </span>
              </div>
              <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all"
                  style={{ width: `${classData.attendance}%` }}
                ></div>
              </div>
            </div>

            {/* Students Count */}
            <div className="flex items-center justify-between pt-3 border-t border-blue-100">
              <span className="text-xs text-slate-500">Students</span>
              <span className="font-bold text-slate-800">
                {classData.students}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassPerformanceOverview;
