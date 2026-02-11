import React from "react";
import FinancialHealthHeader from "../../../components/dashboard/management/FinancialHealth/FinancialHealthHeader";
import FinancialHealthStats from "../../../components/dashboard/management/FinancialHealth/FinancialHealthStats";
import TrusteeReportCard from "../../../components/dashboard/management/FinancialHealth/TrusteeReportCard";
import RevenueCollection from "../../../components/dashboard/management/FinancialHealth/RevenueCollection";
import OutstandingReceivables from "../../../components/dashboard/management/FinancialHealth/OutstandingReceivables";
import ExpenseBreakdown from "../../../components/dashboard/management/FinancialHealth/ExpenseBreakdown";
import SurplusDeficitAnalysis from "../../../components/dashboard/management/FinancialHealth/SurplusDeficitAnalysis";
import PaymentGatewaySettlement from "../../../components/dashboard/management/FinancialHealth/PaymentGatewaySettlement";
import { FINANCIAL_HEALTH_DATA } from "../../../data/managementData";

/**
 * Screen 4: Financial Health Snapshot
 * Purpose: Track revenue performance and financial stability indicators
 */

const FinancialHealth = () => {
  const {
    stats,
    revenueData,
    outstandingReceivables,
    expenseTracker,
    surplusDeficit,
    gatewaySettlement,
    trusteeReportSchedule,
  } = FINANCIAL_HEALTH_DATA;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <FinancialHealthHeader />

        {/* Stats Overview */}
        <FinancialHealthStats stats={stats} />

        {/* Trustee Report Automation */}
        <TrusteeReportCard schedule={trusteeReportSchedule} />

        {/* Revenue Collection */}
        <RevenueCollection data={revenueData} />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Outstanding Receivables */}
          <OutstandingReceivables data={outstandingReceivables} />

          {/* Expense Tracker */}
          <ExpenseBreakdown data={expenseTracker} />
        </div>

        {/* Surplus/Deficit Visualization */}
        <SurplusDeficitAnalysis data={surplusDeficit} />

        {/* Payment Gateway Settlement */}
        <PaymentGatewaySettlement data={gatewaySettlement} />
      </div>
    </div>
  );
};

export default FinancialHealth;
