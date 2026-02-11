import React, { useState } from "react";
import EfficiencyHeader from "../../../components/dashboard/management/OperationalEfficiency/EfficiencyHeader";
import EfficiencyStats from "../../../components/dashboard/management/OperationalEfficiency/EfficiencyStats";
import TeacherStudentRatio from "../../../components/dashboard/management/OperationalEfficiency/TeacherStudentRatio";
import LessonPlanSubmission from "../../../components/dashboard/management/OperationalEfficiency/LessonPlanSubmission";
import FeedbackTime from "../../../components/dashboard/management/OperationalEfficiency/FeedbackTime";
import ParentCommunication from "../../../components/dashboard/management/OperationalEfficiency/ParentCommunication";
import ResourceUtilization from "../../../components/dashboard/management/OperationalEfficiency/ResourceUtilization";

/**
 * Screen 5: Operational Efficiency Monitor
 * Purpose: Evaluate school process efficiency and resource utilization
 * KPIs:
 * - Teacher-to-Student Ratio (target vs actual)
 * - Average Lesson Plan Submission Rate
 * - Assignment Feedback Time (avg days)
 * - Parent Communication Response Time
 * - Resource Utilization (Labs, Rooms, Equipment)
 * Integration: Lesson Plan API + HR Module + Resource Management Database
 * Outcome: Data-backed performance metrics for operational governance meetings
 */

const OperationalEfficiency = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <EfficiencyHeader />

        {/* Stats Overview */}
        <EfficiencyStats />

        {/* Teacher-to-Student Ratio */}
        <TeacherStudentRatio />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Lesson Plan Submission Rate */}
          <LessonPlanSubmission />

          {/* Assignment Feedback Time */}
          <FeedbackTime />
        </div>

        {/* Parent Communication Response Time */}
        <ParentCommunication />

        {/* Resource Utilization */}
        <ResourceUtilization />
      </div>
    </div>
  );
};

export default OperationalEfficiency;
