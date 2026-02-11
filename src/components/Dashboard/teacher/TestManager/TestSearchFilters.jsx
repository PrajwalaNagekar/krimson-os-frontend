import React from "react";
import { Search } from "lucide-react";

const TestSearchFilters = ({
  searchQuery,
  setSearchQuery,
  filterType,
  setFilterType,
}) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search tests by title or class..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap gap-2">
          {[
            { value: "all", label: "All Types" },
            { value: "exam", label: "Exams" },
            { value: "test", label: "Tests" },
            { value: "quiz", label: "Quizzes" },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setFilterType(filter.value)}
              className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                filterType === filter.value
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestSearchFilters;
