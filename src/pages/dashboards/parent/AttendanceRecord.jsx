import React, { useState } from "react";
import { PARENT_DATA } from "../../../data/ParentData";
import { STUDENT_DATA } from "../../../data/studentData"; // Import student data for DailyView
import AttendanceHeader from "../../../components/dashboard/parent/AttendanceRecord/AttendanceHeader";
import AttendanceStats from "../../../components/dashboard/parent/AttendanceRecord/AttendanceStats";
import AttendanceTrend from "../../../components/dashboard/parent/AttendanceRecord/AttendanceTrend";
import AbsenceLog from "../../../components/dashboard/parent/AttendanceRecord/AbsenceLog";
import TermSummary from "../../../components/dashboard/parent/AttendanceRecord/TermSummary";
import DailyView from "../../../components/dashboard/student/TimetableSchedule/DailyView"; // Reused component
import ClassDetailsModal from "../../../components/dashboard/student/TimetableSchedule/ClassDetailsModal"; // For DailyView interaction
import LeaveRequestForm from "../../../components/dashboard/student/AttendanceTracker/LeaveRequestForm"; // Reused component
import AttendanceCalendar from "../../../components/dashboard/parent/AttendanceRecord/AttendanceCalendar";
import AttendanceInsights from "../../../components/dashboard/parent/AttendanceRecord/AttendanceInsights";

const AttendanceRecord = () => {
  const [selectedMonth, setSelectedMonth] = useState(0); // 0 = Jan, 1 = Dec, etc.
  const [viewMode, setViewMode] = useState("monthly"); // "today", "monthly", "term"

  // State for DailyView interactions
  const [selectedClass, setSelectedClass] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use data from parentData.js
  const attendanceData = PARENT_DATA.attendanceRecord;
  // Destructure student data for DailyView
  const {
    timetable,
    classDetails,
    preparationChecklist,
    todayHomework,
    ccaBlocks,
  } = STUDENT_DATA;

  const handleDownloadReport = () => {
    console.log("Downloading attendance report");
    // API call will be added here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Header */}
      <AttendanceHeader
        handleDownloadReport={handleDownloadReport}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {/* View ContentSwitcher */}
      <div className="relative z-10 space-y-6">
        {/* TODAY UPDATE VIEW */}
        {viewMode === "today" && (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-10 h-1 bg-cyan-500 rounded-full"></span>
              Today's Schedule & Attendance
            </h3>
            <DailyView
              timetable={timetable}
              setSelectedClass={setSelectedClass}
              setIsModalOpen={setIsModalOpen}
              checklist={preparationChecklist}
              homeworkList={todayHomework}
              ccaBlocks={ccaBlocks}
            />
            {/* Modal must be here for it to work with DailyView */}
            <ClassDetailsModal
              isModalOpen={isModalOpen}
              selectedClass={selectedClass}
              setIsModalOpen={setIsModalOpen}
              classDetails={classDetails}
            />
          </div>
        )}

        {/* MONTHLY VIEW (Original Layout) */}
        {viewMode === "monthly" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Left Column - Stats and Trend */}
            <div className="lg:col-span-1 space-y-4 md:space-y-6">
              <AttendanceStats attendanceData={attendanceData} />
              <AbsenceLog absenceReasons={attendanceData.absenceReasons} />
            </div>

            {/* Right Column - Calendar and Absence Log */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <AttendanceCalendar calendarData={attendanceData.calendar} />

              {/* AI Insights Section */}
              <AttendanceInsights insights={attendanceData.aiInsights} />
            </div>
          </div>
        )}

        {/* TERM-WISE VIEW */}
        {viewMode === "term" && (
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/60">
              <h3 className="text-lg font-bold text-slate-700 mb-4">
                Term Performance Summary
              </h3>
              <TermSummary termData={attendanceData.term} />
            </div>

            {/* Reuse stats for context */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <AttendanceStats attendanceData={attendanceData} />
              <AttendanceTrend monthlyTrend={attendanceData.monthlyTrend} />
            </div>
          </div>
        )}

        {/* LEAVE REQUEST FORM */}
        {viewMode === "leave" && (
          <div className="animate-fade-in-up">
            <LeaveRequestForm note="💡 <strong>Note:</strong> Leave requests will be reviewed by the class teacher. You'll receive a notification once approved or rejected." />
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceRecord;
