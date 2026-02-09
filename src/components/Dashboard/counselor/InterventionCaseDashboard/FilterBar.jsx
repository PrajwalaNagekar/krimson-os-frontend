import React from "react";
import { Filter } from "lucide-react";

const FilterBar = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-slate-200 flex flex-wrap gap-3 items-center">
      <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
        <Filter size={16} />
        Filter:
      </div>
      {["All", "Initial", "Ongoing", "Resolved"].map((status) => (
        <button
          key={status}
          onClick={() => setFilterStatus(status)}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
            filterStatus === status
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-105"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105"
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
