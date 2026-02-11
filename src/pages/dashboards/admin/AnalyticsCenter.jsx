/**
 * @component AnalyticsCenter
 * @description Screen 13: Analytics & Insight Center - Real-time visual analytics for institutional health
 */
import React, { useState } from "react";
import { ADMIN_DATA } from "../../../data/adminData";
import AnalyticsHeader from "../../../components/dashboard/admin/AnalyticsCenter/AnalyticsHeader";
import AnalyticsWidgets from "../../../components/dashboard/admin/AnalyticsCenter/AnalyticsWidgets";
import AnalyticsFilters from "../../../components/dashboard/admin/AnalyticsCenter/AnalyticsFilters";
import AdmissionsFunnelChart from "../../../components/dashboard/admin/AnalyticsCenter/AdmissionsFunnelChart";
import FeeCollectionChart from "../../../components/dashboard/admin/AnalyticsCenter/FeeCollectionChart";
import StaffUtilizationChart from "../../../components/dashboard/admin/AnalyticsCenter/StaffUtilizationChart";
import CommunicationAnalyticsChart from "../../../components/dashboard/admin/AnalyticsCenter/CommunicationAnalyticsChart";

const AnalyticsCenter = () => {
  const { analytics } = ADMIN_DATA;
  const [selectedTerm, setSelectedTerm] = useState("All Terms");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      {/* ========================================
          HEADER SECTION - Admin Gradient Theme
          ======================================== */}
      <AnalyticsHeader />

      {/* ========================================
          FOUR KEY WIDGETS - With Hover Scale Effect
          ======================================== */}
      <AnalyticsWidgets analytics={analytics} />

      {/* ========================================
          DRILL-DOWN FILTERS
          ======================================== */}
      <AnalyticsFilters
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />

      {/* ========================================
          INTERACTIVE CHARTS SECTION
          ======================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Admissions Conversion Funnel */}
        <AdmissionsFunnelChart data={analytics.admissionsConversion} />

        {/* Chart 2: Fee Collection Trends */}
        <FeeCollectionChart data={analytics.feeCollection} />

        {/* Chart 3: Staff Utilization Dashboard */}
        <StaffUtilizationChart data={analytics.staffUtilization} />

        {/* Chart 4: Communication Analytics */}
        <CommunicationAnalyticsChart data={analytics.parentCommunication} />
      </div>
    </div>
  );
};

export default AnalyticsCenter;
