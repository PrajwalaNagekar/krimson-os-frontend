import React from "react";
import { Search, Download } from "lucide-react";

const LogFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
      <div className="relative w-full md:w-96">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search students, classes, or keywords..."
          className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
            selectedCategory === "All"
              ? "bg-slate-800 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          All
        </button>
        {categories.map((cat) => {
          const Icon = cat.IconComponent;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedCategory === cat.name
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-md`
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {selectedCategory === cat.name && Icon && <Icon size={14} />}
              {cat.name}
            </button>
          );
        })}
      </div>

      <button className="text-sm font-bold text-blue-600 flex items-center gap-2 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors ml-auto md:ml-0">
        <Download size={16} />
        Export Log
      </button>
    </div>
  );
};

export default LogFilters;
