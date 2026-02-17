import React, { useState } from "react";
import AcademicHeader from "../../../components/dashboard/coordinator/AcademicDashboard/AcademicHeader";
import AcademicStats from "../../../components/dashboard/coordinator/AcademicDashboard/AcademicStats";
import AssessmentTimeline from "../../../components/dashboard/coordinator/AcademicDashboard/AssessmentTimeline";
import AtRiskSummary from "../../../components/dashboard/coordinator/AcademicDashboard/AtRiskSummary";
import CurriculumProgress from "../../../components/dashboard/coordinator/AcademicDashboard/CurriculumProgress";

/**
 * Screen 1: Academic Dashboard
 * Purpose: Academic overview with key metrics and insights
 * Features:
 * - Curriculum coverage percentage
 * - Lesson compliance percentage
 * - Assessment timeline
 * - Outcome mastery percentage
 * - At-risk student summary
 * Integration: Analytics Engine + Student Management
 */

const AcademicDashboard = () => {
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <AcademicHeader />

        {/* Stats Overview */}
        <AcademicStats />

        {/* Assessment Timeline */}
        <AssessmentTimeline
          selectedGrade={selectedGrade}
          setSelectedGrade={setSelectedGrade}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Curriculum Progress */}
          <CurriculumProgress
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
          />

          {/* At-Risk Students */}
          <AtRiskSummary />
        </div>
      </div>
    </div>
  );
};

export default AcademicDashboard;
