import React, { useState } from "react";
import { ACADEMIC_OUTCOMES_DATA } from "../../../data/managementData";
import AcademicHeader from "../../../components/dashboard/management/AcademicOutcomes/AcademicHeader";
import StatsOverview from "../../../components/dashboard/management/AcademicOutcomes/StatsOverview";
import SubjectClusterPerformance from "../../../components/dashboard/management/AcademicOutcomes/SubjectClusterPerformance";
import PerformanceDistribution from "../../../components/dashboard/management/AcademicOutcomes/PerformanceDistribution";
import GradePassRates from "../../../components/dashboard/management/AcademicOutcomes/GradePassRates";
import YearOnYearImprovement from "../../../components/dashboard/management/AcademicOutcomes/YearOnYearImprovement";
import SubjectPerformanceTable from "../../../components/dashboard/management/AcademicOutcomes/SubjectPerformanceTable";

/**
 * Screen 2: Academic & Learning Outcomes Dashboard
 * Purpose: Present academic success trends and comparative results across terms
 * Refactored to use modular components and separated data.
 */

const AcademicOutcomes = () => {
  // retaining state for future potential filtering logic, though currently unused in simple display
  const [selectedTerm, setSelectedTerm] = useState("current");

  const {
    stats,
    subjectClusters,
    performanceDistribution,
    gradePassRates,
    yoyImprovement,
    subjectPerformance,
  } = ACADEMIC_OUTCOMES_DATA;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <AcademicHeader />

        {/* Stats Overview */}
        <StatsOverview stats={stats} />

        {/* Subject Cluster Performance */}
        <SubjectClusterPerformance clusters={subjectClusters} />

        {/* Student Performance Distribution */}
        <PerformanceDistribution distribution={performanceDistribution} />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Pass % by Grade Level */}
          <GradePassRates gradePassRates={gradePassRates} />

          {/* Year-on-Year Improvement */}
          <YearOnYearImprovement yoyImprovement={yoyImprovement} />
        </div>

        {/* Subject-wise Detailed Performance */}
        <SubjectPerformanceTable performance={subjectPerformance} />
      </div>
    </div>
  );
};

export default AcademicOutcomes;
