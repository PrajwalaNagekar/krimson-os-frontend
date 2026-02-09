import React, { useState } from "react";
import CurriculumHeader from "../../../components/dashboard/coordinator/CurriculumPlanner/CurriculumHeader";
import StatsOverview from "../../../components/dashboard/coordinator/CurriculumPlanner/StatsOverview";
import CurriculumFilters from "../../../components/dashboard/coordinator/CurriculumPlanner/CurriculumFilters";
import SyllabusProgressCards from "../../../components/dashboard/coordinator/CurriculumPlanner/SyllabusProgressCards";
import CurriculumHeatmap from "../../../components/dashboard/coordinator/CurriculumPlanner/CurriculumHeatmap";
import LessonCompletionTracker from "../../../components/dashboard/coordinator/CurriculumPlanner/LessonCompletionTracker";

/**
 * Screen 1: Curriculum Planner & Progress Map
 * Purpose: Define curriculum and monitor lesson coverage across grades
 * Features:
 * - View and Edit yearly syllabus per subject
 * - Lesson Completion Tracker (Planned vs Delivered)
 * - Auto-sync with Teacher Lesson Plan uploads
 * - Visual "Curriculum Heatmap" for progress monitoring
 * Integration: Curriculum API + Lesson Plan Engine
 */

const CurriculumPlanner = () => {
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <CurriculumHeader />

        {/* Stats Overview */}
        <StatsOverview />

        {/* Filters */}
        <CurriculumFilters
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
          selectedGrade={selectedGrade}
          setSelectedGrade={setSelectedGrade}
        />

        {/* Syllabus Progress Cards */}
        <SyllabusProgressCards />

        {/* Curriculum Heatmap */}
        <CurriculumHeatmap />

        {/* Lesson Completion Tracker */}
        <LessonCompletionTracker />
      </div>
    </div>
  );
};

export default CurriculumPlanner;
