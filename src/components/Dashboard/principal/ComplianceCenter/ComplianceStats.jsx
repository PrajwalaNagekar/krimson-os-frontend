import React from "react";
import { Target } from "lucide-react";

const ComplianceStats = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-cyan-100">
      <h3 className="font-bold text-sm sm:text-base text-cyan-900 mb-3 sm:mb-4 flex items-center gap-2">
        <Target className="w-4 h-4 sm:w-5 sm:h-5" />
        Overview
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm text-cyan-800">
            Total Checklists
          </span>
          <span className="text-base sm:text-lg font-bold text-cyan-900">
            24
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm text-cyan-800">Completed</span>
          <span className="text-base sm:text-lg font-bold text-green-600">
            18
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm text-cyan-800">Pending</span>
          <span className="text-base sm:text-lg font-bold text-yellow-600">
            4
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm text-cyan-800">Overdue</span>
          <span className="text-base sm:text-lg font-bold text-red-600">2</span>
        </div>
      </div>
    </div>
  );
};

export default ComplianceStats;
