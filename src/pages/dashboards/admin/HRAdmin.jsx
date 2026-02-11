import React, { useState } from "react";
import { ADMIN_DATA } from "../../../data/adminData";
import HRHeader from "../../../components/dashboard/admin/HRAdmin/HRHeader";
import HRStats from "../../../components/dashboard/admin/HRAdmin/HRStats";
import HRActionToolbar from "../../../components/dashboard/admin/HRAdmin/HRActionToolbar";
import HRFilters from "../../../components/dashboard/admin/HRAdmin/HRFilters";
import StaffGrid from "../../../components/dashboard/admin/HRAdmin/StaffGrid";
import LeaveManagement from "../../../components/dashboard/admin/HRAdmin/LeaveManagement";

const HRAdmin = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  // Get data from centralized source
  const staffData = ADMIN_DATA.hrAdmin?.staffData || [];
  const leaveRequests = ADMIN_DATA.hrAdmin?.leaveRequests || [];

  // Quick Stats
  const stats = {
    totalStaff: staffData.length,
    activeToday: staffData.filter((s) => s.todayStatus === "Present").length,
    onLeave: staffData.filter((s) => s.status === "On Leave").length,
    pendingApprovals: leaveRequests.filter((r) => r.status === "Pending")
      .length,
    avgAttendance: "96.2%",
    biometricSync: "Synced 2 mins ago",
  };

  // Filter staff based on selected filters
  const filteredStaff = staffData.filter((staff) => {
    if (selectedFilter !== "all" && staff.status !== selectedFilter)
      return false;
    if (selectedDepartment !== "all" && staff.department !== selectedDepartment)
      return false;
    return true;
  });

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      {/* ========================================
          HEADER SECTION
          ======================================== */}
      <HRHeader totalStaff={stats.totalStaff} />

      {/* ========================================
          SUMMARY STATISTICS CARDS
          ======================================== */}
      <HRStats stats={stats} />

      {/* ========================================
          ACTION BUTTONS & FILTERS
          ======================================== */}
      <HRActionToolbar />

      {/* Filters Row */}
      <HRFilters
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />

      {/* ========================================
          STAFF DIRECTORY GRID
          ======================================== */}
      <StaffGrid filteredStaff={filteredStaff} />

      {/* ========================================
          LEAVE MANAGEMENT & APPROVAL WORKFLOW
          ======================================== */}
      <LeaveManagement
        leaveRequests={leaveRequests}
        pendingApprovals={stats.pendingApprovals}
      />
    </div>
  );
};

export default HRAdmin;
