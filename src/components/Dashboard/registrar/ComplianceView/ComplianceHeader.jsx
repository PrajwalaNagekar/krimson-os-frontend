import React from "react";
import { Shield } from "lucide-react";

const ComplianceHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-2">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-2">
          Compliance & Reporting Center
        </h1>
        <p className="text-slate-600 text-sm md:text-base font-medium">
          Ensure PEI and SSG compliance with accurate student data
        </p>
      </div>

      {/* Overall Compliance Indicator */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl px-6 py-4 shadow-lg">
        <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
          <Shield className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-semibold opacity-90">Overall Status</p>
          <p className="text-xl font-bold">COMPLIANT</p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceHeader;
