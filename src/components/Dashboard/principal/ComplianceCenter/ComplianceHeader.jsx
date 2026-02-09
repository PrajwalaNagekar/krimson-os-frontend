import React from "react";
import { Download, FileCheck } from "lucide-react";

const ComplianceHeader = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-2xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-64 sm:w-72 h-64 sm:h-72 bg-white/20 rounded-full blur-3xl -mr-16 sm:-mr-20 -mt-16 sm:-mt-20"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-56 h-48 sm:h-56 bg-pink-500/30 rounded-full blur-3xl -ml-12 sm:-ml-16 -mb-12 sm:-mb-16"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 md:mb-2 tracking-tight">
              Compliance & Audit Center
            </h1>
            <p className="text-xs sm:text-sm md:text-lg text-white/90 font-medium">
              Inspection readiness • Regulatory compliance tracking
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 border border-white/30">
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">All Checklists</span>
              <span className="sm:hidden">Download</span>
              <span className="text-[8px] sm:text-[9px] opacity-70 ml-0.5 sm:ml-1">
                (get in app)
              </span>
            </button>
            <button className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 bg-white text-cyan-600 hover:bg-white/90 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 shadow-lg">
              <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Generate Report</span>
              <span className="sm:hidden">Report</span>
              <span className="text-[8px] sm:text-[9px] opacity-70 ml-0.5 sm:ml-1">
                (get in app)
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceHeader;
