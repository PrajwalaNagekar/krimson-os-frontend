import React from "react";
import { Search, Filter, Download } from "lucide-react";

const AdmissionToolbar = ({
  filters,
  setFilters,
  showFilterMenu,
  setShowFilterMenu,
  resetFilters,
  grades,
  sources,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm z-20 relative">
      <div className="relative w-full md:w-96">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search by name, ID, or email..."
          className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 text-slate-700 font-medium placeholder:text-slate-400"
        />
      </div>
      <div className="flex gap-2 w-full md:w-auto relative">
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowFilterMenu(!showFilterMenu);
            }}
            className={`flex items-center gap-2 px-6 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold rounded-xl transition-colors text-sm ${showFilterMenu ? "ring-2 ring-blue-500/20 bg-blue-50 text-blue-600" : ""}`}
          >
            <Filter size={18} />
            <span>Filter</span>
            {(filters.grade !== "all" || filters.leadSource !== "all") && (
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            )}
          </button>

          {showFilterMenu && (
            <div
              className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-50 animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-sm font-bold text-slate-700">
                    Filter Options
                  </span>
                  <button
                    onClick={resetFilters}
                    className="text-xs text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Reset All
                  </button>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    Grade
                  </label>
                  <select
                    value={filters.grade}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        grade: e.target.value,
                      }))
                    }
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:border-blue-500"
                  >
                    <option value="all">All Grades</option>
                    {grades.map((g) => (
                      <option key={g} value={g}>
                        Grade {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    Lead Source
                  </label>
                  <select
                    value={filters.leadSource}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        leadSource: e.target.value,
                      }))
                    }
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:border-blue-500"
                  >
                    <option value="all">All Sources</option>
                    {sources.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setShowFilterMenu(false)}
                    className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg text-sm hover:shadow-lg transition-all"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <button className="flex-1 md:flex-none flex flex-col items-center justify-center gap-0.5 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 text-sm">
          <div className="flex items-center gap-2">
            <Download size={18} />
            <span>Export</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AdmissionToolbar;
