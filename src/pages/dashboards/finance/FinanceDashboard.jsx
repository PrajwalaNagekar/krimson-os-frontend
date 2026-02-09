import React, { useState } from "react";

import { FINANCE_DATA } from "../../../data/financeData";
import {
  PeriodSelector,
  StatsOverview,
  OutstandingBalanceByGrade,
  RefundsSummary,
  QuickActions,
  RecentTransactions,
  Header,
} from "../../../components/dashboard/finance/FinanceDashboard";

const FinanceDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month"); // month, term, year

  const {
    feesCollected,
    outstandingByGrade,
    refundsData,
    recentTransactions,
    stats: statsConfig,
  } = FINANCE_DATA.financeDashboard;

  const stats = statsConfig.map((stat) => {
    let amount = stat.amount;
    let count = stat.count;

    if (stat.type === "collected") {
      amount = feesCollected[selectedPeriod].amount;
      count = `${feesCollected[selectedPeriod].count} students`;
    }

    return {
      ...stat,
      amount,
      count,
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Header />

        {/* Period Selector */}
        <PeriodSelector
          selectedPeriod={selectedPeriod}
          onPeriodChange={setSelectedPeriod}
        />

        {/* Stats Overview */}
        <StatsOverview stats={stats} />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* OutstandingBalance by Grade */}
          <OutstandingBalanceByGrade data={outstandingByGrade} />

          {/* Refunds & Adjustments + Quick Links */}
          <div className="space-y-6">
            <RefundsSummary data={refundsData} />
            <QuickActions />
          </div>
        </div>

        {/* Recent Transactions Feed */}
        <RecentTransactions transactions={recentTransactions} />
      </div>
    </div>
  );
};

export default FinanceDashboard;
