import React, { useState } from "react";
import { Target } from "lucide-react";

const DepartmentRadar = () => {
  const [selectedDept, setSelectedDept] = useState("all");

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-500" />
              Department Performance Radar
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Comparative multi-dimensional analysis
            </p>
          </div>
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none"
          >
            <option value="all">All Departments</option>
            <option value="science">Science</option>
            <option value="math">Mathematics</option>
            <option value="english">English</option>
          </select>
        </div>
      </div>

      <div className="p-6">
        <div className="h-64 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center">
          <Target className="w-16 h-16 text-slate-300 mb-3" />
          <p className="text-slate-400 font-semibold mb-1">
            Radar Chart Visualization
          </p>
          <p className="text-xs text-slate-400">
            Performance across: Lesson Plans • Feedback • Engagement • Results
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Current Quarter</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Previous Quarter</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span>School Average</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentRadar;
