import React from "react";
import { TrendingUp, Download } from "lucide-react";

const AnnualSummary = () => {
  return (
    <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 via-pink-50 to-cyan-50 rounded-xl border border-purple-200 relative z-10">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
          <TrendingUp size={18} className="text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-slate-800 mb-1 text-sm md:text-base">
            Annual Summary
          </h4>
          <p className="text-xs md:text-sm text-slate-600 mb-3">
            Total paid in 2025:{" "}
            <span className="font-bold text-slate-800">SGD 1,700.00</span> •
            Ready for tax filing and reimbursement
          </p>
          <button className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 hover:gap-2 transition-all">
            Download Annual Statement <Download size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnualSummary;
