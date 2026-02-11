import React, { useState } from "react";
import InstitutionalHeader from "../../../components/dashboard/management/InstitutionalOverview/InstitutionalHeader";
import RealTimeAlerts from "../../../components/dashboard/management/InstitutionalOverview/RealTimeAlerts";
import KPIMetrics from "../../../components/dashboard/management/InstitutionalOverview/KPIMetrics";
import FeeCollectionEfficiency from "../../../components/dashboard/management/InstitutionalOverview/FeeCollectionEfficiency";
import DepartmentPerformance from "../../../components/dashboard/management/InstitutionalOverview/DepartmentPerformance";
import GradeWiseSummary from "../../../components/dashboard/management/InstitutionalOverview/GradeWiseSummary";
import { INSTITUTIONAL_OVERVIEW_DATA } from "../../../data/managementData";

/**
 * Screen 1: Institutional Overview Dashboard
 * Purpose: Provide complete institutional performance summary for leadership
 * Key Widgets:
 * - Total Student Strength (Current/Target)
 * - Faculty Strength and Retention Rate
 * - Average Attendance (Term-to-Date)
 * - Academic Performance Index (Average %)
 * - Fee Collection Efficiency (Collected vs Expected)
 * - Real-Time Alerts: departments below target, compliance pending
 * Integration: Core Aggregation API + Academic, Finance, and HR Modules
 * Design: Executive analytics style with clean panels, infographics, and traffic-light KPIs
 */

const InstitutionalOverview = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("current"); // current, ytd, quarterly
  const data = INSTITUTIONAL_OVERVIEW_DATA;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <InstitutionalHeader />

        {/* Real-Time Alerts */}
        <RealTimeAlerts alerts={data.realTimeAlerts} />

        {/* Key Performance Indicators with Traffic Lights */}
        <KPIMetrics metrics={data.kpiMetrics} />

        {/* Fee Collection Efficiency */}
        <FeeCollectionEfficiency data={data.feeCollection} />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Department Performance */}
          <DepartmentPerformance departments={data.departmentPerformance} />

          {/* Grade-wise Summary */}
          <GradeWiseSummary summary={data.gradeWiseSummary} />
        </div>
      </div>
    </div>
  );
};

export default InstitutionalOverview;
