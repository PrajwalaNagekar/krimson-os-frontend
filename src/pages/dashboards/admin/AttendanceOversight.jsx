/**
 * @component AttendanceOversight
 * @description Attendance Oversight Dashboard - Comprehensive Student & Staff Monitoring
 */
import React, { useState } from "react";
import { ADMIN_DATA } from "../../../data/adminData";
import AttendanceHeader from "../../../components/dashboard/admin/AttendanceOversight/AttendanceHeader";
import AttendanceStats from "../../../components/dashboard/admin/AttendanceOversight/AttendanceStats";
import AttendanceFilters from "../../../components/dashboard/admin/AttendanceOversight/AttendanceFilters";
import StudentAttendance from "../../../components/dashboard/admin/AttendanceOversight/StudentAttendance";
import StaffAttendance from "../../../components/dashboard/admin/AttendanceOversight/StaffAttendance";

const AttendanceOversight = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  const { attendance } = ADMIN_DATA;
  const studentAttendance = attendance.student;
  const staffAttendance = attendance.staff;

  const getRateColor = (rate) => {
    if (rate >= 95)
      return {
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
        icon: "text-green-500",
      };
    if (rate >= 85)
      return {
        bg: "bg-amber-50",
        text: "text-amber-700",
        border: "border-amber-200",
        icon: "text-amber-500",
      };
    return {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
      icon: "text-red-500",
    };
  };

  const getStatusBadge = (status) => {
    const badges = {
      Excellent: "bg-green-100 text-green-700 border-green-200",
      Good: "bg-blue-100 text-blue-700 border-blue-200",
      Alert: "bg-red-100 text-red-700 border-red-200",
    };
    return badges[status] || "bg-slate-100 text-slate-700 border-slate-200";
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      {/* ========================================
          HEADER SECTION
          ======================================== */}
      <AttendanceHeader />

      {/* ========================================
          SUMMARY STATISTICS CARDS
          ======================================== */}
      <AttendanceStats summary={studentAttendance.summary} />

      {/* ========================================
          ACTION BUTTONS & DATE SELECTOR
          ======================================== */}
      <AttendanceFilters
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      {/* ========================================
          TWO-COLUMN LAYOUT: STUDENTS & STAFF
          ======================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN: STUDENT ATTENDANCE */}
        <StudentAttendance
          studentAttendance={studentAttendance}
          getRateColor={getRateColor}
          getStatusBadge={getStatusBadge}
        />

        {/* RIGHT COLUMN: STAFF ATTENDANCE */}
        <StaffAttendance staffAttendance={staffAttendance} />
      </div>
    </div>
  );
};

export default AttendanceOversight;
