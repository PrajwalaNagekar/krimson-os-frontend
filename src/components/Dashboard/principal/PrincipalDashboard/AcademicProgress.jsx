import React from "react";
import { Activity, ChevronRight } from "lucide-react";
import AcademicProgressCard from "./AcademicProgressCard";

const AcademicProgress = ({ academicProgress }) => {
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" />
              Academic Progress Index by Grade
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Current term performance overview
            </p>
          </div>
          <button className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold text-xs transition-all hover:scale-105 shadow-md">
            View Details
            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            <span className="text-[8px] opacity-80">(get in app)</span>
          </button>
        </div>
      </div>

      <div className="p-5 md:p-6 space-y-3 max-h-[500px] overflow-y-auto">
        {academicProgress.map((grade, index) => (
          <AcademicProgressCard key={index} {...grade} />
        ))}
      </div>
    </div>
  );
};

export default AcademicProgress;
