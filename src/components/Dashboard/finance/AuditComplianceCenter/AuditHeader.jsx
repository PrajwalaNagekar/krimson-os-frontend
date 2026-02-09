import React from "react";
import { Award, Download } from "lucide-react";

const AuditHeader = () => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Audit & Compliance Center
          </h1>
          <p className="text-gray-600">
            Provide financial documentation for audits and inspections.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Generate Certificate</span>
            </div>
            <div className="text-[10px] opacity-70">get in app</div>
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Audit Summary</span>
            </div>
            <div className="text-[10px] opacity-70">get in app</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuditHeader;
