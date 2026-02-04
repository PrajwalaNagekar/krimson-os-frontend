import React from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import {
  AttendanceSummaryCard,
  MonthlyHeatmap,
  WeeklyTrendGraph,
  AttendanceWarning,
  LeaveRequestForm,
  AttendanceTrends,
  PunctualityStats,
} from "../../../components/dashboard/student/AttendanceTracker";

/**
 * AttendanceTracker Page
 *
 * Layout: LF — Analytics
 * Data Control: Mixed
 * AI: AI3 Monitor
 * Purpose: Attendance trends and summaries
 *
 * This component orchestrates the attendance tracking interface,
 * delegating rendering to specialized subcomponents.
 */
const AttendanceTracker = () => {
  const { attendance, attendanceContext, behavior } = STUDENT_DATA;
  const { currentMonth, daysInMonth, heatmapStart } = attendanceContext;

  // Download handler for attendance certificate
  const handleDownload = () => {
    alert("Downloading Attendance Certificate...");
    // AI3 Monitor: Track certificate download events
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">
          Attendance Trends and Summaries
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          Track your attendance patterns, view monthly heatmaps, and monitor
          weekly trends
        </p>
      </div>

      {/* LF — Analytics Layout: Left (Summary) + Right (Analytics) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section: Summary Card (Fixed Width) */}
        <AttendanceSummaryCard
          percentage={attendance.percentage}
          totalDays={attendance.totalDays}
          presentDays={attendance.presentDays}
          onDownload={handleDownload}
        />

        {/* Right Section: Analytics (Flexible Width) */}
        <div className="md:col-span-2 space-y-6">
          {/* Monthly Heatmap Visualization */}
          <MonthlyHeatmap
            currentMonth={currentMonth}
            daysInMonth={daysInMonth}
            heatmapStart={heatmapStart}
            presentDays={attendance.heatmap.present}
            absentDays={attendance.heatmap.absent}
          />
        </div>
      </div>

      {/* Full Width Graphs Section */}
      <div className="space-y-6">
        {/* Weekly Trend Graph */}
        <WeeklyTrendGraph chartData={attendance.weeklyAttendance || []} />

        {/* Attendance Trends Chart */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <AttendanceTrends trends={behavior.attendanceTrends} />
        </div>

        {/* Punctuality Stats */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <PunctualityStats
            onTime={behavior.punctuality.onTime}
            late={behavior.punctuality.late}
            percentage={behavior.punctuality.percentage}
          />
        </div>
      </div>

      {/* Conditional Warning Banner (Full Width) */}
      {/* AI3 Monitor: Alert system for low attendance */}
      <AttendanceWarning percentage={attendance.percentage} />

      {/* LC — Form Builder: Leave Request Form (Full Width) */}
      <LeaveRequestForm />
    </div>
  );
};

export default AttendanceTracker;
