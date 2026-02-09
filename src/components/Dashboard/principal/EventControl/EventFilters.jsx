import React from "react";
import { Filter } from "lucide-react";

const EventFilters = ({ activeFilter, setActiveFilter, categoryFilters }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="w-5 h-5 text-slate-500 flex-shrink-0" />
        <span className="text-sm font-semibold text-slate-600 flex-shrink-0">
          Filters:
        </span>
        {categoryFilters.map((filter, idx) => (
          <button
            key={idx}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all flex-shrink-0 ${
              activeFilter === filter
                ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventFilters;
