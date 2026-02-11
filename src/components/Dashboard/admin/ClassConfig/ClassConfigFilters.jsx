import React from "react";
import { Search } from "lucide-react";

const ClassConfigFilters = ({ filters, setFilters, showFilters }) => {
  if (!showFilters) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md animate-slideDown">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Filter by Status
          </label>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="locked">Locked</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Search Section
          </label>
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
              placeholder="e.g. 5A"
              className="w-full border border-slate-200 bg-slate-50 rounded-xl pl-12 pr-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>
        </div>
        <div className="flex items-end">
          <button
            onClick={() =>
              setFilters({ status: "all", teacher: "all", search: "" })
            }
            className="bg-white border-2 border-slate-200 text-slate-600 px-4 py-3 rounded-xl text-sm font-bold hover:bg-slate-50 hover:text-slate-800 transition-colors w-full"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassConfigFilters;
