import React from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import ExamHeader from "../../../components/dashboard/student/ExamDashboard/ExamHeader";
import UpcomingExams from "../../../components/dashboard/student/ExamDashboard/UpcomingExams";
import PerformanceOverview from "../../../components/dashboard/student/ExamDashboard/PerformanceOverview";
import TermComparisonChart from "../../../components/dashboard/student/ExamDashboard/TermComparisonChart";
import ExamRules from "../../../components/dashboard/student/ExamDashboard/ExamRules";

const ExamDashboard = () => {
  const { exams, examPerformance } = STUDENT_DATA;

  return (
    <div className="space-y-8">
      {/* Premium Gradient Header */}
      <ExamHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Exams Calendar */}
        <UpcomingExams exams={exams} />

        {/* Right Sidebar - Performance & Stats */}
        <div className="space-y-6">
          <PerformanceOverview performance={examPerformance} />
          <TermComparisonChart performance={examPerformance} />
          <ExamRules />
        </div>
      </div>
    </div>
  );
};

export default ExamDashboard;
