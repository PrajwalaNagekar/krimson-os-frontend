import React from "react";
import {
  Search,
  Filter,
  ChevronDown,
  FileText,
  CheckSquare,
  FileCheck,
  Target,
} from "lucide-react";

const AssignmentFilters = ({
  searchQuery,
  setSearchQuery,
  showFilters,
  setShowFilters,
  templates,
}) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "FileText":
        return <FileText size={20} />;
      case "CheckSquare":
        return <CheckSquare size={20} />;
      case "FileCheck":
        return <FileCheck size={20} />;
      case "Target":
        return <Target size={20} />;
      default:
        return <FileText size={20} />;
    }
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search assignments by title, class, or subject..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
          />
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-6 py-3 bg-slate-100 text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
        >
          <Filter size={18} />
          <span>Templates</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${showFilters ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {showFilters && (
        <div className="mt-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100">
          <h3 className="font-bold text-slate-800 mb-3 text-sm">
            Assignment Templates
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {templates.map((template) => (
              <button
                key={template.id}
                className="p-4 bg-white border-2 border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
                    {getIcon(template.iconName)}
                  </div>
                </div>
                <p className="text-xs font-bold text-slate-700 mb-1">
                  {template.name}
                </p>
                <p className="text-[10px] text-slate-500">{template.type}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentFilters;
