import React from "react";
import { Briefcase } from "lucide-react";
import DepartmentCard from "./DepartmentCard";

const DepartmentDirectory = ({ departments }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-500" />
              Department Directory & KPIs
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Overview of all departments with key performance indicators
            </p>
          </div>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-bold transition-colors">
            View Full Report
            <span className="text-[9px] opacity-80 ml-1">(get in app)</span>
          </button>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map((dept, idx) => (
            <DepartmentCard key={idx} {...dept} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentDirectory;
