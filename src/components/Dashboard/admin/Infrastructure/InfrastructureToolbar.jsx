import React from "react";
import { Plus, Download, Search, Grid, List } from "lucide-react";

const InfrastructureToolbar = ({
  searchQuery,
  setSearchQuery,
  viewMode,
  setViewMode,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex flex-wrap gap-3 w-full md:w-auto">
        <button className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-blue-500/20">
          <div className="flex items-center gap-2">
            <Plus size={18} />
            Add Item
          </div>
        </button>
        <button className="bg-gradient-to-br from-green-500 to-emerald-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-green-500/20">
          <div className="flex items-center gap-2">
            <Download size={18} />
            Utilization Report
          </div>
        </button>
      </div>

      <div className="flex gap-3 w-full md:w-auto">
        <div className="relative flex-1 md:flex-none">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search inventory..."
            className="w-full md:w-64 pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-3 rounded-xl transition-all ${
              viewMode === "grid"
                ? "bg-blue-100 text-blue-600 border border-blue-200"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Grid size={18} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-3 rounded-xl transition-all ${
              viewMode === "list"
                ? "bg-blue-100 text-blue-600 border border-blue-200"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <List size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureToolbar;
