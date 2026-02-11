import React from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { GRADEBOOK_DATA } from "../../../../data/teacherData";

const GradebookControls = ({
  searchQuery,
  setSearchQuery,
  showFilters,
  setShowFilters,
  filterMode,
  setFilterMode,
}) => {
  const { filterOptions } = GRADEBOOK_DATA;

  const getButtonClass = (optionId, color) => {
    let baseClass = "px-4 py-2 rounded-xl font-bold text-sm transition-all ";
    if (filterMode === optionId) {
      // Mapping dynamic colors
      if (color === "blue")
        return baseClass + "bg-blue-500 text-white shadow-md";
      if (color === "red") return baseClass + "bg-red-500 text-white shadow-md";
      if (color === "green")
        return baseClass + "bg-green-500 text-white shadow-md";
      if (color === "orange")
        return baseClass + "bg-orange-500 text-white shadow-md";
      return baseClass + "bg-blue-500 text-white shadow-md";
    }
    return (
      baseClass +
      "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
    );
  };

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
            placeholder="Search by name, roll number, or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-6 py-3 bg-slate-100 text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
        >
          <Filter size={18} />
          <span>Filters</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${showFilters ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mt-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100">
          <div className="flex flex-wrap gap-3">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setFilterMode(option.id)}
                className={getButtonClass(option.id, option.color)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GradebookControls;
