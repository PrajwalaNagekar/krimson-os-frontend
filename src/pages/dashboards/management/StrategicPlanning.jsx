import React, { useState } from "react";
import PlanningHeader from "../../../components/dashboard/management/StrategicPlanning/PlanningHeader";
import StatsOverview from "../../../components/dashboard/management/StrategicPlanning/StatsOverview";
import AIInsights from "../../../components/dashboard/management/StrategicPlanning/AIInsights";
import AnnualTargets from "../../../components/dashboard/management/StrategicPlanning/AnnualTargets";
import TrendProjection from "../../../components/dashboard/management/StrategicPlanning/TrendProjection";
import InitiativeTracker from "../../../components/dashboard/management/StrategicPlanning/InitiativeTracker";

/**
 * Screen 7: Strategic Planning & Vision Alignment
 * Purpose: Link measurable school data to long-term strategic goals
 * Features:
 * - Annual Targets vs Actual (Enrollment, Results, Finance)
 * - 3-Year Trend Projection (Growth %)
 * - Initiative Tracker (New Campus, New Curriculum, etc.)
 * - AI-powered Insights and recommendations
 * - Export meeting reports in PDF format for board circulation
 * Integration: Analytics Engine + Strategic KPI Database
 * Outcome: Data-driven governance ensuring alignment with institutional mission
 */

const StrategicPlanning = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  // Helper functions
  const getStatusColor = (status) => {
    switch (status) {
      case "exceeded":
      case "completed":
        return "bg-green-100 text-green-700 border-green-200";
      case "on-track":
      case "in-progress":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "needs-attention":
      case "delayed":
        return "bg-red-100 text-red-700 border-red-200";
      case "pending":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const formatCurrency = (amount) => {
    return `₹${(amount / 100000).toFixed(1)}L`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <PlanningHeader />

        {/* Stats Overview */}
        <StatsOverview />

        {/* AI-Powered Insights */}
        <AIInsights getPriorityColor={getPriorityColor} />

        {/* Annual Targets vs Actual */}
        <AnnualTargets getStatusColor={getStatusColor} />

        {/* 3-Year Trend Projection */}
        <TrendProjection />

        {/* Initiative Tracker */}
        <InitiativeTracker
          getStatusColor={getStatusColor}
          formatCurrency={formatCurrency}
        />
      </div>
    </div>
  );
};

export default StrategicPlanning;
