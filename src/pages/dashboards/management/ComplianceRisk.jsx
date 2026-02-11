import React from "react";
import ComplianceHeader from "../../../components/dashboard/management/ComplianceRisk/ComplianceHeader";
import ComplianceStats from "../../../components/dashboard/management/ComplianceRisk/ComplianceStats";
import RiskIndexAssessment from "../../../components/dashboard/management/ComplianceRisk/RiskIndexAssessment";
import ComplianceChecklist from "../../../components/dashboard/management/ComplianceRisk/ComplianceChecklist";
import DocumentExpiryAlerts from "../../../components/dashboard/management/ComplianceRisk/DocumentExpiryAlerts";
import BackupLogs from "../../../components/dashboard/management/ComplianceRisk/BackupLogs";
import AuditReadinessIndex from "../../../components/dashboard/management/ComplianceRisk/AuditReadinessIndex";

/**
 * Screen 6: Compliance & Risk Dashboard
 * Purpose: Ensure regulatory compliance and identify risk exposures
 * Features:
 * - Compliance Checklist (PEI, SSG, MOE status)
 * - Document Expiry Alerts (teacher certifications)
 * - Security & Data Backup Logs
 * - Risk Index: Red (Critical), Amber (Moderate), Green (Safe)
 * - Downloadable Compliance Summary Report
 * Integration: Compliance Database + Backup System API
 * Output: "Audit Readiness Index" report generated quarterly
 */

const ComplianceRisk = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <ComplianceHeader />

        {/* Stats Overview */}
        <ComplianceStats />

        {/* Risk Index Overview */}
        <RiskIndexAssessment />

        {/* Compliance Checklist */}
        <ComplianceChecklist />

        {/* Document Expiry Alerts */}
        <DocumentExpiryAlerts />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Security & Data Backup Logs */}
          <BackupLogs />

          {/* Audit Readiness Index */}
          <AuditReadinessIndex />
        </div>
      </div>
    </div>
  );
};

export default ComplianceRisk;
