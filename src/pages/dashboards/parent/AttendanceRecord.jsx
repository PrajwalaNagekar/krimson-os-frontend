import React, { useState } from "react";
import { Sparkles, BrainCircuit, TrendingUp, AlertCircle } from "lucide-react";
import { PARENT_DATA } from "../../../data/parentData";
import AttendanceHeader from "../../../components/dashboard/parent/AttendanceRecord/AttendanceHeader";
import AttendanceStats from "../../../components/dashboard/parent/AttendanceRecord/AttendanceStats";
import AttendanceTrend from "../../../components/dashboard/parent/AttendanceRecord/AttendanceTrend";
import UnifiedCalendar from "../../../components/common/UnifiedCalendar";
import AbsenceLog from "../../../components/dashboard/parent/AttendanceRecord/AbsenceLog";
import TermSummary from "../../../components/dashboard/parent/AttendanceRecord/TermSummary";

const AttendanceRecord = () => {
  const [selectedMonth, setSelectedMonth] = useState(0); // 0 = Jan, 1 = Dec, etc.

  // Use data from parentData.js
  const attendanceData = PARENT_DATA.attendanceRecord;

  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "bg-green-500 hover:bg-green-600 text-white";
      case "absent":
        return "bg-red-500 hover:bg-red-600 text-white";
      case "holiday":
        return "bg-purple-400 hover:bg-purple-500 text-white";
      case "weekend":
        return "bg-slate-200 hover:bg-slate-300 text-slate-500";
      default:
        return "bg-transparent";
    }
  };

  const getCellProps = (day, month, year) => {
    // Find status for this day from attendanceData.calendar
    // Note: The calendar data in parentData.js is a flat array for the demo.
    // We need to map the day to the index or Find the matching object.

    // Simplification for the mock data structure which is just an array of objects
    // In a real app, this would match exact dates.
    // For this refactor, we retain the visual logic. The mock data `calendar` array
    // roughly corresponds to days.

    const dayData = attendanceData.calendar.find((d) => d.day === day);

    if (dayData) {
      return {
        className: getStatusColor(dayData.status),
        title: `${dayData.day} - ${dayData.status}`,
      };
    }
    return {};
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
      <AttendanceHeader handleDownloadReport={handleDownloadReport} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
        {/* Left Column - Stats and Trend */}
        <div className="lg:col-span-1 space-y-4 md:space-y-6">
          <AttendanceStats attendanceData={attendanceData} />
          <AttendanceTrend monthlyTrend={attendanceData.monthlyTrend} />
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
                <div className="w-4 h-4 rounded bg-green-500"></div>
                Present
              </span>
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-red-500"></div>
                Absent
              </span>
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-purple-400"></div>
                Holiday
              </span>
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-slate-200"></div>
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
                <h3 className="font-bold text-lg">AI Attendance Insights</h3>
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
                    <span className="text-yellow-300 font-bold">96%</span>. Keep
                    it up!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <AbsenceLog absenceReasons={attendanceData.absenceReasons} />
          <TermSummary termData={attendanceData.term} />
        </div>
      </div>
    </div>
  );
};

export default AttendanceRecord;
