import React, { useState } from "react";
import { FINANCE_DATA } from "../../../data/financeData";
import RefundsLedgerHeader from "../../../components/dashboard/finance/RefundsLedgerControl/RefundsLedgerHeader";
import RefundsStatsOverview from "../../../components/dashboard/finance/RefundsLedgerControl/RefundsStatsOverview";
import MonthlyReconciliationSummary from "../../../components/dashboard/finance/RefundsLedgerControl/MonthlyReconciliationSummary";
import RefundRequestsList from "../../../components/dashboard/finance/RefundsLedgerControl/RefundRequestsList";
import AdjustmentLogsTable from "../../../components/dashboard/finance/RefundsLedgerControl/AdjustmentLogsTable";

/**
 * Screen 5: Refunds, Adjustments & Ledger Control
 * Purpose: Maintain accuracy of fee corrections, refunds, and transfers
 * Features:
 * - Initiate refund requests with approval workflow (Admin → Finance Head)
 * - Adjustment logs (credit/debit notes)
 * - Linked to student ledger for audit traceability
 * - View monthly reconciliation reports
 * Integration: Finance Engine + Audit Log API
 * Outcome: Fully transparent transaction correction process
 */

const RefundsLedgerControl = () => {
  const [selectedTab, setSelectedTab] = useState("pending"); // pending, approved, rejected
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { stats, refundRequests, adjustmentLogs, reconciliationData } =
    FINANCE_DATA.refundsLedgerControl;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <RefundsLedgerHeader />

        {/* Stats Overview */}
        <RefundsStatsOverview stats={stats} />

        {/* Monthly Reconciliation Summary */}
        <MonthlyReconciliationSummary reconciliationData={reconciliationData} />

        {/* Refund Requests List */}
        <RefundRequestsList
          refundRequests={refundRequests}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        {/* Adjustment Logs (Credit/Debit Notes) */}
        <AdjustmentLogsTable
          adjustmentLogs={adjustmentLogs}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default RefundsLedgerControl;
