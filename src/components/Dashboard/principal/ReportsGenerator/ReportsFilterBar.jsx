import React from "react";
import { Filter } from "lucide-react";

const ReportsFilterBar = ({
  selectedFormat,
  setSelectedFormat,
  dateRange,
  setDateRange,
}) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm border border-slate-100">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="text-xs sm:text-sm font-semibold text-slate-600 mb-1.5 sm:mb-2 block">
              Report Format
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedFormat("PDF")}
                className={`flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  selectedFormat === "PDF"
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                PDF
              </button>
              <button
                onClick={() => setSelectedFormat("Excel")}
                className={`flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  selectedFormat === "Excel"
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Excel
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs sm:text-sm font-semibold text-slate-600 mb-1.5 sm:mb-2 block">
              Date Range
            </label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-slate-200 rounded-lg text-xs sm:text-sm font-medium bg-white hover:border-blue-300 focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="current-term">Current Term</option>
              <option value="last-month">Last Month</option>
              <option value="last-quarter">Last Quarter</option>
              <option value="academic-year">Academic Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 sm:gap-3">
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg">
            <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Apply Filters</span>
            <span className="sm:hidden">Filter</span>
            <span className="text-[8px] sm:text-[9px] opacity-80">
              (get in app)
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsFilterBar;
