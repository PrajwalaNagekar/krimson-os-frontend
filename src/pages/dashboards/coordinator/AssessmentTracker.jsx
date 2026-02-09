import React, { useState } from "react";
import AssessmentHeader from "../../../components/dashboard/coordinator/AssessmentTracker/AssessmentHeader";
import AssessmentStats from "../../../components/dashboard/coordinator/AssessmentTracker/AssessmentStats";
import UploadAlerts from "../../../components/dashboard/coordinator/AssessmentTracker/UploadAlerts";
import ExamCalendar from "../../../components/dashboard/coordinator/AssessmentTracker/ExamCalendar";
import TermAverages from "../../../components/dashboard/coordinator/AssessmentTracker/TermAverages";
import DepartmentPerformance from "../../../components/dashboard/coordinator/AssessmentTracker/DepartmentPerformance";

/**
 * Screen 4: Assessment Calendar & Performance Tracker
 * Purpose: Oversee assessment timelines and performance consistency
 * Features:
 * - Grade-level exam calendar view
 * - Assessment-to-outcome mapping (term averages)
 * - Department performance summaries
 * - Alerts for missing or delayed uploads
 * Integration: Exam Module + Analytics Engine
 */

const AssessmentTracker = () => {
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("january");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <AssessmentHeader />

        {/* Stats Overview */}
        <AssessmentStats />

        {/* Upload Alerts */}
        <UploadAlerts />

        {/* Grade-Level Exam Calendar */}
        <ExamCalendar
          selectedGrade={selectedGrade}
          setSelectedGrade={setSelectedGrade}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Assessment-to-Outcome Mapping */}
          <TermAverages />

          {/* Department Performance */}
          <DepartmentPerformance />
        </div>
      </div>
    </div>
  );
};

export default AssessmentTracker;
