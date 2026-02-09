import React from "react";
import { AlertTriangle } from "lucide-react";
import OutlierCard from "./OutlierCard";

const PerformanceOutliers = ({ outliers }) => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 bg-gradient-to-r from-orange-50 to-red-50 border-b border-orange-100">
          <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            Performance Outliers
          </h3>
          <p className="text-xs text-slate-600 mt-1">High and low performers</p>
        </div>

        <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
          {outliers.map((outlier, idx) => (
            <OutlierCard key={idx} {...outlier} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceOutliers;
