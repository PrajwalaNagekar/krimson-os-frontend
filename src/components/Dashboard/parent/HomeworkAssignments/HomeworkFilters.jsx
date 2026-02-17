import React from "react";
import { Search } from "lucide-react";

const HomeworkFilters = ({
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery,
  stats,
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg mb-6 border border-slate-100">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Filter Buttons */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
              activeFilter === "all"
                ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All ({stats.total})
          </button>
          <button
            onClick={() => setActiveFilter("pending")}
            className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
              activeFilter === "pending"
                ? "bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Pending ({stats.pending})
          </button>
          <button
            onClick={() => setActiveFilter("submitted")}
            className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
              activeFilter === "submitted"
                ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Submitted ({stats.submitted})
          </button>
          <button
            onClick={() => setActiveFilter("graded")}
            className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
              activeFilter === "graded"
                ? "bg-gradient-to-r from-green-400 to-emerald-400 text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Graded ({stats.graded})
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search assignments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeworkFilters;
