import React from "react";
import { Mail, Download } from "lucide-react";

const FinancialHealthHeader = () => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Financial Health Snapshot
          </h1>
          <p className="text-gray-600">
            Revenue performance and financial stability indicators.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Email Trustees</span>
            </div>
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialHealthHeader;
