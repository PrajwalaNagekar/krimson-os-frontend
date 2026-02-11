import React, { useState, useEffect } from "react";
import ReportsAnalyticsHeader from "../../../components/dashboard/teacher/ReportsAnalytics/ReportsAnalyticsHeader";
import BenchmarkComparison from "../../../components/dashboard/teacher/ReportsAnalytics/BenchmarkComparison";
import QuickStats from "../../../components/dashboard/teacher/ReportsAnalytics/QuickStats";
import ClassPerformanceOverview from "../../../components/dashboard/teacher/ReportsAnalytics/ClassPerformanceOverview";
import AssignmentTrendChart from "../../../components/dashboard/teacher/ReportsAnalytics/AssignmentTrendChart";
import StudentPerformanceLists from "../../../components/dashboard/teacher/ReportsAnalytics/StudentPerformanceLists";
import ExportOptions from "../../../components/dashboard/teacher/ReportsAnalytics/ExportOptions";

import { TEACHER_DATA } from "../../../data/teacherData";

const ReportsAnalytics = () => {
  const [classPerformance] = useState(
    TEACHER_DATA.reportsAnalytics.classPerformance,
  );
  const [assignmentTrend] = useState(
    TEACHER_DATA.reportsAnalytics.assignmentTrend,
  );
  const [topPerformers] = useState(TEACHER_DATA.reportsAnalytics.topPerformers);
  const [bottomPerformers] = useState(
    TEACHER_DATA.reportsAnalytics.bottomPerformers,
  );
  const [benchmark] = useState(TEACHER_DATA.reportsAnalytics.benchmark);

  const [selectedReport, setSelectedReport] = useState(null);
  const [selectedClass, setSelectedClass] = useState("all");

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/analytics')
    //   .then(res => res.json())
    //   .then(data => setAnalytics(data));
    console.log("Reports & Analytics loaded - Ready for API integration");
  }, []);

  // Calculate overall statistics
  const overallStats = {
    totalStudents: classPerformance.reduce((sum, c) => sum + c.students, 0),
    avgTermScore: (
      classPerformance.reduce((sum, c) => sum + c.termAvg, 0) /
      classPerformance.length
    ).toFixed(1),
    avgAttendance: (
      classPerformance.reduce((sum, c) => sum + c.attendance, 0) /
      classPerformance.length
    ).toFixed(1),
    avgCompletion: (
      classPerformance.reduce((sum, c) => sum + c.assignmentCompletion, 0) /
      classPerformance.length
    ).toFixed(1),
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <ReportsAnalyticsHeader
        studentCount={overallStats.totalStudents}
        classCount={classPerformance.length}
      />

      {/* Benchmark Comparison */}
      <BenchmarkComparison benchmark={benchmark} />

      {/* Quick Stats */}
      <QuickStats stats={overallStats} />

      {/* Class Performance Graphs */}
      <ClassPerformanceOverview classPerformance={classPerformance} />

      {/* Assignment Completion Trendline */}
      <AssignmentTrendChart assignmentTrend={assignmentTrend} />

      {/* Top and Bottom Performers */}
      <StudentPerformanceLists
        topPerformers={topPerformers}
        bottomPerformers={bottomPerformers}
      />

      {/* Export Options Card */}
      <ExportOptions />
    </div>
  );
};

export default ReportsAnalytics;
