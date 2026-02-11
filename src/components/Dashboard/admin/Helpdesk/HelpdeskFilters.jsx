import React from "react";
import { ADMIN_DATA } from "../../../../data/adminData";

const HelpdeskFilters = ({ categoryFilter, setCategoryFilter, stats }) => {
  const { categories } = ADMIN_DATA.helpdeskConfig;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setCategoryFilter(category)}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
              categoryFilter === category
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {category}
            {category !== "All" && (
              <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs">
                {category === "Technical" && stats.technical}
                {category === "Academic" && stats.academic}
                {category === "HR" && stats.hr}
                {category === "Finance" && stats.finance}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HelpdeskFilters;
