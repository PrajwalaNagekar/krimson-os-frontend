import React from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import UnifiedCalendar from "../../../components/common/UnifiedCalendar";
import {
  AttendanceSummaryCard,
  WeeklyTrendGraph,
  AttendanceWarning,
  LeaveRequestForm,
  AttendanceTrends,
  PunctualityStats,
  AttendanceHeader,
  AttendanceLegend,
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

  // Custom cell props for attendance visualization
  const getCellProps = (day, month, year) => {
    const currentYear = new Date().getFullYear();
    const currentMonthIndex = new Date().getMonth();
    const currentDate = new Date(year, month, day);
    const dayOfWeek = currentDate.getDay();

    // Check if it's a weekend (Saturday=6 or Sunday=0)
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    // Only apply attendance colors for the current month
    if (year === currentYear && month === currentMonthIndex) {
      const presentDays = attendance.heatmap.present || [];
      const absentDays = attendance.heatmap.absent || [];
      const leaveDays = attendance.heatmap.leave || [];
      const holidayDays = attendance.heatmap.holidays || [];

      // Priority order: holidays > leave > absent > present > weekend
      if (holidayDays.includes(day)) {
        return {
          className: "bg-gradient-to-br from-blue-400 to-blue-500 text-white",
        };
      } else if (leaveDays.includes(day)) {
        return {
          className:
            "bg-gradient-to-br from-orange-400 to-orange-500 text-white",
        };
      } else if (absentDays.includes(day)) {
        return {
          className: "bg-gradient-to-br from-red-400 to-rose-500 text-white",
        };
      } else if (presentDays.includes(day)) {
        return {
          className:
            "bg-gradient-to-br from-green-400 to-emerald-500 text-white",
        };
      } else if (isWeekend) {
        return {
          className: "bg-gradient-to-br from-gray-300 to-gray-400 text-white",
        };
      }
    }

    return {};
  };

  const [activeTab, setActiveTab] = React.useState("monthly");

  return (
    <div className="space-y-8">
      {/* Page Header with Tabs */}
      <AttendanceHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="transition-all duration-300">
        {activeTab === "monthly" && (
          <div className="space-y-8 animate-fadeIn">
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
                {/* Attendance Calendar Visualization */}
                <div className="h-[80%]">
                  <UnifiedCalendar
                    events={[]}
                    hideSidebar={true}
                    getCellProps={getCellProps}
                    className="p-0"
                  />
                </div>

                {/* Color Legend */}
                <AttendanceLegend />
              </div>
            </div>

            {/* Conditional Warning Banner */}
            <AttendanceWarning percentage={attendance.percentage} />
          </div>
        )}

        {activeTab === "trends" && (
          <div className="space-y-6 animate-fadeIn">
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
        )}

        {activeTab === "requests" && (
          <div className="animate-fadeIn">
            {/* LC — Form Builder: Leave Request Form */}
            <LeaveRequestForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceTracker;
