import React, { useState } from "react";
import AdmissionsHeader from "../../../components/dashboard/management/AdmissionsGrowth/AdmissionsHeader";
import AdmissionsStats from "../../../components/dashboard/management/AdmissionsGrowth/AdmissionsStats";
import ConversionFunnel from "../../../components/dashboard/management/AdmissionsGrowth/ConversionFunnel";
import RetentionRates from "../../../components/dashboard/management/AdmissionsGrowth/RetentionRates";
import CapacityUtilization from "../../../components/dashboard/management/AdmissionsGrowth/CapacityUtilization";
import Demographics from "../../../components/dashboard/management/AdmissionsGrowth/Demographics";
import PredictiveIntake from "../../../components/dashboard/management/AdmissionsGrowth/PredictiveIntake";
import { ADMISSIONS_GROWTH_DATA } from "../../../data/managementData";

/**
 * Screen 3: Admissions & Growth Analytics
 * Purpose: Visualize student intake, retention, and demographic distribution
 * Widgets:
 * - Admissions Conversion Funnel (Inquiry → Enrolled)
 * - Retention Rate (%) across grades
 * - Demographics by nationality, gender, and region
 * - Capacity Utilization (Seats filled vs available)
 * - Predictive intake trend for next academic year
 * Integration: Admissions Module + Student Database + Predictive Analytics Engine
 * Outcome: Data to support expansion planning and marketing decisions
 */

const AdmissionsGrowth = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const {
    stats,
    conversionFunnel,
    retentionRates,
    capacityUtilization,
    nationalityDemographics,
    genderDemographics,
    regionDemographics,
    predictiveIntake,
  } = ADMISSIONS_GROWTH_DATA;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <AdmissionsHeader />

        {/* Stats Overview */}
        <AdmissionsStats data={stats} />

        {/* Admissions Conversion Funnel */}
        <ConversionFunnel data={conversionFunnel} />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Retention Rate across Grades */}
          <RetentionRates data={retentionRates} />

          {/* Capacity Utilization */}
          <CapacityUtilization data={capacityUtilization} />
        </div>

        {/* Demographics */}
        <Demographics
          nationalityData={nationalityDemographics}
          genderData={genderDemographics}
          regionData={regionDemographics}
        />

        {/* Predictive Intake Trend */}
        <PredictiveIntake data={predictiveIntake} />
      </div>
    </div>
  );
};

export default AdmissionsGrowth;
