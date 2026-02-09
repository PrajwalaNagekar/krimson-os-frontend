import React from "react";
import { AlertCircle } from "lucide-react";
import SubstitutionRequestCard from "./SubstitutionRequestCard";

const SubstitutionRequests = ({ requests }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              Pending Approvals
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Substitution and duty requests
            </p>
          </div>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
            {requests.length} Pending
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
        {requests.map((request, idx) => (
          <SubstitutionRequestCard key={idx} {...request} />
        ))}
      </div>
    </div>
  );
};

export default SubstitutionRequests;
