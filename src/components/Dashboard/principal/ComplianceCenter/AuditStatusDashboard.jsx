import React from "react";
import AuditStatusCard from "./AuditStatusCard";
import { complianceAuditStatuses } from "../../../../data/principalData.jsx";

const AuditStatusDashboard = () => {
  return (
    <div>
      <div className="mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-1 sm:mb-2">
          Audit Status Dashboard
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Real-time compliance tracking with traffic light indicators
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {complianceAuditStatuses.map((audit, idx) => (
          <AuditStatusCard key={idx} {...audit} />
        ))}
      </div>
    </div>
  );
};

export default AuditStatusDashboard;
