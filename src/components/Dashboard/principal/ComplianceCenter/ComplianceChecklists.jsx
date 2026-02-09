import React, { useState } from "react";
import { CheckSquare, Download } from "lucide-react";
import ChecklistItem from "./ChecklistItem";
import { complianceChecklists } from "../../../../data/principalData.jsx";

const ComplianceChecklists = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="lg:col-span-2 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-4 sm:p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-sm sm:text-base md:text-lg">
                Compliance Checklists
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Track and download inspection requirements
            </p>
          </div>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md whitespace-nowrap">
            <span className="flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Download All
              <span className="text-[8px] sm:text-[9px] opacity-80">
                (get in app)
              </span>
            </span>
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {["all", "PEI", "SSG", "EduTrust", "Safety"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="space-y-3 sm:space-y-4">
          {complianceChecklists
            .filter(
              (item) =>
                selectedCategory === "all" ||
                item.category === selectedCategory,
            )
            .map((item, idx) => (
              <ChecklistItem key={idx} {...item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ComplianceChecklists;
