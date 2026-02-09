import React, { useState } from "react";
import { BarChart2, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import HeatmapCell from "./HeatmapCell";

const AttendanceHeatmap = ({ heatmapData }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  return (
    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-blue-500" />
              Attendance Heatmap
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              By grade and gender • Real-time tracking
            </p>
          </div>
          <div className="flex gap-2">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-blue-100 outline-none"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="term">This Term</option>
            </select>
            <button className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold text-slate-700 transition-colors">
              <Filter className="w-3 h-3" />
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-6 overflow-x-auto">
        <div className="min-w-[500px]">
          {/* Headers */}
          <div className="grid grid-cols-3 gap-3 mb-2">
            <div className="text-xs font-bold text-slate-500"></div>
            <div className="text-center text-xs font-bold text-blue-700">
              👨 Male
            </div>
            <div className="text-center text-xs font-bold text-pink-700">
              👩 Female
            </div>
          </div>

          {/* Heatmap Rows */}
          <div className="space-y-2">
            {heatmapData
              .slice(
                currentPage * itemsPerPage,
                (currentPage + 1) * itemsPerPage,
              )
              .map((data, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-3 items-center">
                  <div className="text-sm font-bold text-slate-700">
                    Grade {data.grade}
                  </div>
                  <HeatmapCell percentage={data.male} gender="Male" />
                  <HeatmapCell percentage={data.female} gender="Female" />
                </div>
              ))}
          </div>

          {/* Pagination Controls */}
          {heatmapData.length > itemsPerPage && (
            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                className="p-1 rounded-full hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <span className="text-xs font-semibold text-slate-600">
                Page {currentPage + 1} of{" "}
                {Math.ceil(heatmapData.length / itemsPerPage)}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((p) =>
                    Math.min(
                      Math.ceil(heatmapData.length / itemsPerPage) - 1,
                      p + 1,
                    ),
                  )
                }
                disabled={
                  currentPage >=
                  Math.ceil(heatmapData.length / itemsPerPage) - 1
                }
                className="p-1 rounded-full hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          )}

          {/* Legend */}
          <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-600 font-semibold">
              Attendance Rate:
            </span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-xs text-slate-600">&lt;80%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-xs text-slate-600">80-84%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-xs text-slate-600">85-89%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-xs text-slate-600">90-94%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-xs text-slate-600">≥95%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceHeatmap;
