/**
 * @component ReflectionJournal
 * @description Teacher Dashboard - Feedback & Reflection Journal
 */
import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import ReflectionHeader from "../../../components/dashboard/teacher/ReflectionJournal/ReflectionHeader";
import AnalyticsSummary from "../../../components/dashboard/teacher/ReflectionJournal/AnalyticsSummary";
import QuickStats from "../../../components/dashboard/teacher/ReflectionJournal/QuickStats";
import RecentReflections from "../../../components/dashboard/teacher/ReflectionJournal/RecentReflections";
import WeeklyReportModal from "../../../components/dashboard/teacher/ReflectionJournal/WeeklyReportModal";
import ReflectionDetailModal from "../../../components/dashboard/teacher/ReflectionJournal/ReflectionDetailModal";

const ReflectionJournal = ({ data = TEACHER_DATA.reflectionJournal }) => {
  // Use data from props or fallback to imported mock data
  const { reflections, analytics, weeklyReport } = data;

  const [selectedReflection, setSelectedReflection] = useState(null);
  const [showNewEntry, setShowNewEntry] = useState(false);
  const [showWeeklyReport, setShowWeeklyReport] = useState(false);

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    console.log("Reflection Journal loaded - Ready for API integration");
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <ReflectionHeader
        onShowWeeklyReport={() => setShowWeeklyReport(true)}
        onShowNewEntry={() => setShowNewEntry(!showNewEntry)}
      />

      {/* Auto-Suggested Analytics */}
      <AnalyticsSummary analytics={analytics} />

      {/* Quick Stats */}
      <QuickStats
        reflections={reflections}
        feedbackScore={analytics.studentFeedbackScore}
      />

      {/* Recent Reflections */}
      <RecentReflections
        reflections={reflections}
        onSelectReflection={setSelectedReflection}
      />

      {/* Weekly Report Modal */}
      <WeeklyReportModal
        showModal={showWeeklyReport}
        onClose={() => setShowWeeklyReport(false)}
        report={weeklyReport}
      />

      {/* Reflection Detail Modal */}
      <ReflectionDetailModal
        reflection={selectedReflection}
        onClose={() => setSelectedReflection(null)}
      />
    </div>
  );
};

export default ReflectionJournal;
