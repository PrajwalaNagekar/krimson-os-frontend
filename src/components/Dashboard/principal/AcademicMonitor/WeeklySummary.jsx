import React from "react";
import { Download } from "lucide-react";

const WeeklySummary = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-500 rounded-xl">
          <Download className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-blue-900 mb-2">
            Automated Weekly Summary
          </h4>
          <p className="text-sm text-blue-800 mb-3">
            Performance reports are automatically generated every Sunday at 6 PM
            and sent to the management dashboard. The latest report includes
            trends, outliers, and recommendations.
          </p>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition-colors flex items-center gap-2">
            View Last Report
            <span className="text-[9px] opacity-80">(get in app)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeeklySummary;
