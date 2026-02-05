import React, { useState } from "react";
import { Sparkles, BrainCircuit, TrendingUp, AlertCircle } from "lucide-react";
import { PARENT_DATA } from "../../../data/parentData";
import { STUDENT_DATA } from "../../../data/studentData"; // Import student data for DailyView
import AttendanceHeader from "../../../components/dashboard/parent/AttendanceRecord/AttendanceHeader";
import AttendanceStats from "../../../components/dashboard/parent/AttendanceRecord/AttendanceStats";
import AttendanceTrend from "../../../components/dashboard/parent/AttendanceRecord/AttendanceTrend";
import UnifiedCalendar from "../../../components/common/UnifiedCalendar";
import AbsenceLog from "../../../components/dashboard/parent/AttendanceRecord/AbsenceLog";
import TermSummary from "../../../components/dashboard/parent/AttendanceRecord/TermSummary";
import DailyView from "../../../components/dashboard/student/TimetableSchedule/DailyView"; // Reused component
import ClassDetailsModal from "../../../components/dashboard/student/TimetableSchedule/ClassDetailsModal"; // For DailyView interaction

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

  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "bg-[#2ECC71] hover:bg-[#27AE60] text-white";
      case "absent":
        return "bg-[#E74C3C] hover:bg-[#C0392B] text-white";
      case "absentWithReason":
        return "bg-[#F39C12] hover:bg-[#D35400] text-white";
      case "holiday":
        return "bg-[#3498DB] hover:bg-[#2980B9] text-white";
      case "weekend":
        return "bg-[#B0BEC5] hover:bg-[#90A4AE] text-white";
      default:
        return "bg-transparent";
    }
  };

  const getCellProps = (day, month, year) => {
    // 1. Determine if it's a weekend dynamically
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay(); // 0 = Sun, 6 = Sat
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    // 2. Find data in mock array
    const dayData = attendanceData.calendar.find((d) => d.day === day);

    // 3. Determine Final Status
    let status = null;

    if (isWeekend) {
      status = "weekend";
    } else if (dayData && dayData.status) {
      status = dayData.status;
    } else if (dayData && !dayData.status) {
      // If day exists in data but null status (shouldn't happen with new data, but safety)
      status = "present";
    } else {
      // If no data found for this day, assume present (or handle as future/null)
      // For this specific 'calendar' array approach, if day is not in array, it's irrelevant.
      // But unified calendar iterates 1..TotalDays.
      // So we should return a default "present" if no specific status is set.
      status = "present";
    }

    // 4. Return Props
    return {
      className: getStatusColor(status),
      title: `${day} - ${status}`,
    };
  };

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
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl border border-white/60 overflow-hidden">
                <UnifiedCalendar
                  events={[]} // No events for attendance view currently
                  hideSidebar={true}
                  getCellProps={getCellProps}
                  className="p-0"
                />
                {/* Add Legend manually since UnifiedCalendar doesn't expect it */}
                <div className="px-6 pb-6 pt-0 flex flex-wrap items-center gap-3 md:gap-4 text-xs font-medium">
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#2ECC71]"></div>
                    Present
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#E74C3C]"></div>
                    Absent
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#F39C12]"></div>
                    Absent (Leave)
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#3498DB]"></div>
                    Holiday
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#B0BEC5]"></div>
                    Weekend
                  </span>
                </div>
              </div>

              {/* AI Insights Section (Future Ready) */}
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg shadow-purple-200">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-900/20 rounded-full blur-3xl -ml-10 -mb-10"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                      <Sparkles size={18} className="text-yellow-300" />
                    </div>
                    <h3 className="font-bold text-lg">
                      AI Attendance Insights
                    </h3>
                    <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/30">
                      Beta
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                      <div className="flex items-center gap-2 mb-1 text-indigo-100 text-xs font-semibold uppercase">
                        <TrendingUp size={12} /> Pattern Analysis
                      </div>
                      <p className="text-sm font-medium leading-snug">
                        Attendance has improved by{" "}
                        <span className="text-green-300 font-bold">4.5%</span>{" "}
                        compared to last term. Consistent Thursdays observed.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                      <div className="flex items-center gap-2 mb-1 text-pink-100 text-xs font-semibold uppercase">
                        <AlertCircle size={12} /> Prediction
                      </div>
                      <p className="text-sm font-medium leading-snug">
                        Based on current trends, projected annual attendance is{" "}
                        <span className="text-yellow-300 font-bold">96%</span>.
                        Keep it up!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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

            {/* Could reuse stats here too for context */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <AttendanceStats attendanceData={attendanceData} />
              <AttendanceTrend monthlyTrend={attendanceData.monthlyTrend} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceRecord;
