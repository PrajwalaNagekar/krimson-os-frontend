import React from "react";
import { BarChart2, Filter } from "lucide-react";
import HeatmapCell from "./HeatmapCell";

const PerformanceHeatmap = ({ heatmapData, grades }) => {
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-blue-500" />
              School-wide Performance Heatmap
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Subject vs Grade Average Score
            </p>
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold text-slate-700 transition-colors">
            <Filter className="w-3 h-3" />
            Filter
          </button>
        </div>
      </div>

      <div className="p-5 md:p-6 overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Grade Headers */}
          <div className="grid grid-cols-9 gap-2 mb-2">
            <div className="text-xs font-bold text-slate-500"></div>
            {grades.map((grade) => (
              <div
                key={grade}
                className="text-center text-xs font-bold text-slate-700"
              >
                Grade {grade}
              </div>
            ))}
          </div>

          {/* Heatmap Rows */}
          <div className="space-y-2">
            {heatmapData.map((subject, idx) => (
              <div key={idx} className="grid grid-cols-9 gap-2 items-center">
                <div className="text-sm font-bold text-slate-700 pr-2">
                  {subject.subject}
                </div>
                {subject.grades.map((score, gIdx) => (
                  <HeatmapCell
                    key={gIdx}
                    subject={subject.subject}
                    grade={grades[gIdx]}
                    score={score}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-600 font-semibold">
              Score Range:
            </span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-xs text-slate-600">&lt;50%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-xs text-slate-600">50-64%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-xs text-slate-600">65-74%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-xs text-slate-600">75-84%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-xs text-slate-600">≥85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceHeatmap;
