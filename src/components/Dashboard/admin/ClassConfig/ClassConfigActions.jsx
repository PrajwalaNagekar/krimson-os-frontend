import React from "react";
import { Plus, RefreshCw, Filter, Download } from "lucide-react";

const ClassConfigActions = ({ onToggleFilters, showFilters }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex flex-wrap gap-3 w-full md:w-auto">
        <button className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-blue-500/20">
          <div className="flex items-center gap-2">
            <Plus size={18} />
            Add Grade
          </div>
        </button>
        <button className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-indigo-500/20">
          <div className="flex items-center gap-2">
            <Plus size={18} />
            Add Section
          </div>
        </button>
        <button className="bg-white border-2 border-blue-100 text-blue-600 px-5 py-3 rounded-xl font-bold hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-0.5 text-sm">
          <div className="flex items-center gap-2">
            <RefreshCw size={18} />
            Auto-Assign Students
          </div>
        </button>
      </div>

      <div className="flex gap-3 w-full md:w-auto">
        <button
          onClick={onToggleFilters}
          className={`flex-1 md:flex-none px-5 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm ${
            showFilters
              ? "bg-slate-800 text-white"
              : "bg-slate-50 text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Filter size={18} />
          Filters
        </button>
        <button className="flex-1 md:flex-none bg-slate-50 text-slate-600 px-5 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all flex flex-col items-center justify-center gap-0.5 text-sm">
          <div className="flex items-center gap-2">
            <Download size={18} />
            Export
          </div>
        </button>
      </div>
    </div>
  );
};

export default ClassConfigActions;
