import React, { useState } from "react";
import ComplianceHeader from "../../../components/dashboard/principal/ComplianceCenter/ComplianceHeader";
import AuditStatusDashboard from "../../../components/dashboard/principal/ComplianceCenter/AuditStatusDashboard";
import ComplianceChecklists from "../../../components/dashboard/principal/ComplianceCenter/ComplianceChecklists";
import DocumentUpload from "../../../components/dashboard/principal/ComplianceCenter/DocumentUpload";
import ComplianceStats from "../../../components/dashboard/principal/ComplianceCenter/ComplianceStats";
import OpenComplianceIssues from "../../../components/dashboard/principal/ComplianceCenter/OpenComplianceIssues";

const ComplianceCenter = () => {
  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      {/* Premium Header */}
      <ComplianceHeader />

      {/* Audit Status Dashboard with Traffic Lights */}
      <AuditStatusDashboard />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Compliance Checklists - Takes 2 columns */}
        <ComplianceChecklists />

        {/* Right Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* Document Upload */}
          <DocumentUpload />

          {/* Summary Stats */}
          <ComplianceStats />
        </div>
      </div>

      {/* Open Compliance Issues */}
      <OpenComplianceIssues />
    </div>
  );
};

export default ComplianceCenter;
