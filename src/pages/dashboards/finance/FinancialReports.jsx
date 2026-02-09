import React from "react";
import { FINANCE_DATA } from "../../../data/financeData";
import FinancialReportsHeader from "../../../components/dashboard/finance/FinancialReports/FinancialReportsHeader";
import StatsOverview from "../../../components/dashboard/finance/FinancialReports/StatsOverview";
import AvailableReports from "../../../components/dashboard/finance/FinancialReports/AvailableReports";
import CollectionSummary from "../../../components/dashboard/finance/FinancialReports/CollectionSummary";
import FeeDuesSummary from "../../../components/dashboard/finance/FinancialReports/FeeDuesSummary";
import GatewaySettlement from "../../../components/dashboard/finance/FinancialReports/GatewaySettlement";
import ScheduledReports from "../../../components/dashboard/finance/FinancialReports/ScheduledReports";

const FinancialReports = () => {
  const { financialReports } = FINANCE_DATA;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <FinancialReportsHeader />

        {/* Stats Overview */}
        <StatsOverview stats={financialReports.stats} />

        {/* Available Reports */}
        <AvailableReports reports={financialReports.availableReports} />

        {/* Collection Summary Chart */}
        <CollectionSummary
          monthlyCollection={financialReports.monthlyCollection}
          termCollection={financialReports.termCollection}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Fee Dues Summary */}
          <FeeDuesSummary feeDuesData={financialReports.feeDuesData} />

          {/* Gateway Settlement */}
          <GatewaySettlement gatewayData={financialReports.gatewayData} />
        </div>

        {/* Scheduled Reports */}
        <ScheduledReports reports={financialReports.scheduledReports} />
      </div>
    </div>
  );
};

export default FinancialReports;
