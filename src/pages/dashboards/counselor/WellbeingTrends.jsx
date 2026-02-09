import React from "react";
import { COUNSELOR_DATA } from "../../../data/counselorData";
import WellbeingHeader from "../../../components/dashboard/counselor/WellbeingTrends/WellbeingHeader";
import AIWellbeingIndex from "../../../components/dashboard/counselor/WellbeingTrends/AIWellbeingIndex";
import WellbeingStats from "../../../components/dashboard/counselor/WellbeingTrends/WellbeingStats";
import AttendanceMoodCorrelation from "../../../components/dashboard/counselor/WellbeingTrends/AttendanceMoodCorrelation";
import HighRiskStudentsAlert from "../../../components/dashboard/counselor/WellbeingTrends/HighRiskStudentsAlert";
import TrendAnalysis from "../../../components/dashboard/counselor/WellbeingTrends/TrendAnalysis";

/**
 * Wellbeing & Mental Health Trends - Screen 3
 * Purpose: Identify overall student wellness indicators
 * Features: Attendance-Mood Correlation, High-Risk Students, AI Wellbeing Index
 */
const WellbeingTrends = () => {
  const {
    wellbeing,
    wellbeingStats,
    highRiskStudentsList,
    wellbeingTrendAnalysis,
  } = COUNSELOR_DATA;

  return (
    <div className="space-y-6">
      {/* Header */}
      <WellbeingHeader />

      {/* AI Wellbeing Index - Premium Card */}
      <AIWellbeingIndex avgMoodIndex={wellbeing.avgMoodIndex} />

      {/* Quick Stats */}
      <WellbeingStats stats={wellbeingStats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance-to-Mood Correlation Chart */}
        <AttendanceMoodCorrelation
          attendanceCorrelation={wellbeing.attendanceCorrelation}
        />

        {/* High-Risk Students Alert */}
        <HighRiskStudentsAlert
          highRiskCount={wellbeing.highRiskStudents}
          students={highRiskStudentsList}
        />
      </div>

      {/* Trend Analysis */}
      <TrendAnalysis trends={wellbeingTrendAnalysis} />
    </div>
  );
};

export default WellbeingTrends;
