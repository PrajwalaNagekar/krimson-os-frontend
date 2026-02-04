import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import OverallStats from "../../../components/dashboard/student/BehaviorLog/OverallStats";
import AchievementsLog from "../../../components/dashboard/student/BehaviorLog/AchievementsLog";
import ParticipationPoints from "../../../components/dashboard/student/BehaviorLog/ParticipationPoints";
import BehaviorWarnings from "../../../components/dashboard/student/BehaviorLog/BehaviorWarnings";
import AttendanceTrends from "../../../components/dashboard/student/AttendanceTracker/AttendanceTrends";
import PunctualityStats from "../../../components/dashboard/student/AttendanceTracker/PunctualityStats";
import EmotionalCheckIn from "../../../components/dashboard/student/BehaviorLog/EmotionalCheckIn";

/**
 * Student Behavior Log - Screen 11
 * Purpose: Feedback on punctuality, conduct, participation, and achievements
 * Future: Replace static data with Admin + Student Affairs APIs
 */
const BehaviorLog = () => {
  const { behavior } = STUDENT_DATA;

  // Use optional chaining or defaults to prevent errors if data is missing
  const attendanceTrends = behavior?.attendanceTrends || [];
  const punctuality = behavior?.punctuality || {
    onTime: 0,
    late: 0,
    percentage: 0,
  };
  const achievements = behavior?.achievements || [];
  const participation = behavior?.participationPoints || [];
  const warnings = behavior?.warnings || [];
  const emotionalCheckIns = behavior?.emotionalCheckIns || [];

  // Transform attendanceTrends for the component if needed
  // The AttendanceTrends component expects objects with { percentage, month }
  // Data in StudentData.js has { week, attendance } or { percentage, month } depending on which object we used.
  // The merged object I created in StudentData.js has { week, attendance }.
  // BUT the original BehaviorLog.jsx used `trend.percentage` and `trend.month`.
  // Let's check what AttendanceTrends.jsx expects: it uses `trend.percentage` and `trend.month`.
  // I must ensure the data passed to it matches.
  // The merged data in StudentData.js has { week, attendance } from the *second* block I merged.
  // Wait, the Original `BehaviorLog.jsx` (lines 106) used `behavior.attendanceTrends.map` accessing `trend.percentage` and `trend.month`.
  // The *first* behavior block in `StudentData.js` did NOT have `attendanceTrends`.
  // The *second* behavior block had `attendanceTrends` with `week` and `attendance`.
  // This implies the original code was broken or using a version of data I didn't verify fully.
  // Actually, let's look at the `view_file` of `StudentData.js` again.
  // Line 5664: `{ week: "Week 1", attendance: 90 }`.
  // Line 106 in BehaviorLog.jsx: `trend.percentage` and `trend.month`.
  // Mismatch! `trend.attendance` vs `trend.percentage`. `trend.week` vs `trend.month`.
  // I should probably map the data to match the component's expectation.

  const formattedTrends = attendanceTrends.map((t) => ({
    percentage: t.attendance || t.percentage || 0,
    month: t.week || t.month || "",
  }));

  return (
    <div className="space-y-6">
      {/* Header - Overall Stats */}
      <OverallStats
        totalPoints={behavior?.totalPoints || 0}
        rank={behavior?.rank || 0}
        percentile={behavior?.percentile || 0}
      />

      {/* Attendance Trend Chart */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
        <AttendanceTrends trends={formattedTrends} />

        <div className="pt-6 border-t border-slate-100 mt-6">
          <PunctualityStats
            onTime={punctuality.onTime}
            late={punctuality.late}
            percentage={punctuality.percentage}
          />
        </div>
      </div>

      {/* Positive Behavior Log - Achievements & Participation */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
        <AchievementsLog achievements={achievements} />

        <ParticipationPoints participationPoints={participation} />
      </div>

      {/* Warnings Section - Only show if warnings exist */}
      {warnings && warnings.length > 0 && (
        <BehaviorWarnings warnings={warnings} />
      )}

      {/* Emotional Check-in Section */}
      <EmotionalCheckIn emotionalCheckIns={emotionalCheckIns} />
    </div>
  );
};

export default BehaviorLog;
