import React from "react";
import { AlertCircle } from "lucide-react";
import ComplianceIssueCard from "./ComplianceIssueCard";
import { openComplianceIssues } from "../../../../data/principalData.jsx";

const OpenComplianceIssues = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-4 sm:p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              <span className="text-sm sm:text-base md:text-lg">
                Open Compliance Issues
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {
                openComplianceIssues.filter((i) => i.priority === "Critical")
                  .length
              }{" "}
              critical items requiring immediate attention
            </p>
          </div>
          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
            {openComplianceIssues.length} Issues
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
        {openComplianceIssues.map((issue, idx) => (
          <ComplianceIssueCard key={idx} {...issue} />
        ))}
      </div>
    </div>
  );
};

export default OpenComplianceIssues;
