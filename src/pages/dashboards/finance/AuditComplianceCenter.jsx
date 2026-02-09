import React, { useState } from "react";
import { FileText, AlertTriangle, XCircle } from "lucide-react";
import { FINANCE_DATA } from "../../../data/financeData";
import AuditHeader from "../../../components/dashboard/finance/AuditComplianceCenter/AuditHeader";
import AuditStats from "../../../components/dashboard/finance/AuditComplianceCenter/AuditStats";
import ComplianceStatus from "../../../components/dashboard/finance/AuditComplianceCenter/ComplianceStatus";
import DocumentRepository from "../../../components/dashboard/finance/AuditComplianceCenter/DocumentRepository";
import AuditRemarks from "../../../components/dashboard/finance/AuditComplianceCenter/AuditRemarks";
import DiscrepancyList from "../../../components/dashboard/finance/AuditComplianceCenter/DiscrepancyList";

const AuditComplianceCenter = () => {
  const [selectedTab, setSelectedTab] = useState("documents"); // documents, remarks, discrepancies

  const { auditCompliance } = FINANCE_DATA;
  const { stats, complianceStatus, documents, auditRemarks, discrepancies } =
    auditCompliance;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <AuditHeader />

        {/* Stats Overview */}
        <AuditStats stats={stats} />

        {/* Compliance Status Overview */}
        <ComplianceStatus status={complianceStatus} />

        {/* Tab Navigation */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20 flex gap-2">
          <button
            onClick={() => setSelectedTab("documents")}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === "documents" ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}
          >
            <div className="flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Documents ({documents.length})</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedTab("remarks")}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === "remarks" ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}
          >
            <div className="flex items-center justify-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Audit Remarks ({auditRemarks.length})</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedTab("discrepancies")}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === "discrepancies" ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}
          >
            <div className="flex items-center justify-center gap-2">
              <XCircle className="w-4 h-4" />
              <span>Discrepancies ({discrepancies.length})</span>
            </div>
          </button>
        </div>

        {/* Document Repository */}
        {selectedTab === "documents" && (
          <DocumentRepository documents={documents} />
        )}

        {/* Audit Remarks & Resolution */}
        {selectedTab === "remarks" && <AuditRemarks remarks={auditRemarks} />}

        {/* Auto-flagged Discrepancies */}
        {selectedTab === "discrepancies" && (
          <DiscrepancyList discrepancies={discrepancies} />
        )}
      </div>
    </div>
  );
};

export default AuditComplianceCenter;
