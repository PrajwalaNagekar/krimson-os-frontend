import React from "react";
import { Filter } from "lucide-react";

const AnalyticsFilters = ({
  selectedTerm,
  setSelectedTerm,
  selectedDepartment,
  setSelectedDepartment,
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-center bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
      <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
        <Filter size={18} className="text-slate-400" />
        Filter Analytics:
      </div>
      <select
        value={selectedTerm}
        onChange={(e) => setSelectedTerm(e.target.value)}
        className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
      >
        <option>All Terms</option>
        <option>Q1 2026</option>
        <option>Q2 2026</option>
        <option>Q3 2026</option>
        <option>Q4 2026</option>
      </select>
      <select
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(e.target.value)}
        className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
      >
        <option>All Departments</option>
        <option>Primary</option>
        <option>Secondary</option>
        <option>Senior</option>
        <option>Administration</option>
      </select>
    </div>
  );
};

export default AnalyticsFilters;
