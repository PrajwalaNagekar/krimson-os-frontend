import React from "react";
import { Search, Filter, ChevronDown, X } from "lucide-react";

const ClassFilters = ({
  searchQuery,
  setSearchQuery,
  filterOpen,
  setFilterOpen,
  filters,
  handleFilterChange,
  resetFilters,
  activeFiltersCount,
  grades,
  subjects,
  sections,
}) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by class, subject, or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Filter Button */}
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
            activeFiltersCount > 0
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
              : "border-2 border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Filter size={18} />
          <span>Filters</span>
          {activeFiltersCount > 0 && (
            <span className="px-2 py-0.5 bg-white text-blue-600 rounded-full text-xs">
              {activeFiltersCount}
            </span>
          )}
          <ChevronDown
            size={18}
            className={`transition-transform ${filterOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="mt-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Grade Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">
                Grade
              </label>
              <select
                value={filters.grade}
                onChange={(e) => handleFilterChange("grade", e.target.value)}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none bg-white"
              >
                {grades.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">
                Subject
              </label>
              <select
                value={filters.subject}
                onChange={(e) => handleFilterChange("subject", e.target.value)}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none bg-white"
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            {/* Section Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">
                Section
              </label>
              <select
                value={filters.section}
                onChange={(e) => handleFilterChange("section", e.target.value)}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none bg-white"
              >
                {sections.map((section) => (
                  <option key={section} value={section}>
                    {section}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={resetFilters}
              className="flex items-center gap-2 px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all"
            >
              <X size={14} />
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassFilters;
