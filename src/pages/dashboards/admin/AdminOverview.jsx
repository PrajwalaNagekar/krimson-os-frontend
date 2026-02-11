import React from "react";
import AdminHeader from "../../../components/dashboard/admin/AdminOverview/AdminHeader";
import AdminStatsGrid from "../../../components/dashboard/admin/AdminOverview/AdminStatsGrid";
import AttendanceSection from "../../../components/dashboard/admin/AdminOverview/AttendanceSection";
import AdmissionsFunnel from "../../../components/dashboard/admin/AdminOverview/AdmissionsFunnel";
import FinanceCard from "../../../components/dashboard/admin/AdminOverview/FinanceCard";
import QuickActions from "../../../components/dashboard/admin/AdminOverview/QuickActions";
import AdminAlerts from "../../../components/dashboard/admin/AdminOverview/AdminAlerts";

/**
 * @component AdminOverview
 * @description Admin Control Dashboard - Central operational hub for school system
 */
const AdminOverview = () => {
  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      {/* ========================================
          HEADER SECTION WITH SIDEBAR GRADIENT THEME
          ======================================== */}
      <AdminHeader />

      {/* ========================================
          STATS CARDS - PREMIUM & MODERN
          ======================================== */}
      <AdminStatsGrid />

      {/* ========================================
          MAIN CONTENT GRID
          Left: Attendance & Admissions (2/3 width on large screens)
          Right: Finance & Quick Actions (1/3 width)
          ======================================== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT COLUMN (2 spans) */}
        <div className="xl:col-span-2 space-y-6">
          {/* ATTENDANCE SECTION */}
          <AttendanceSection />

          {/* ADMISSIONS FUNNEL */}
          <AdmissionsFunnel />
        </div>

        {/* RIGHT COLUMN (1 span) */}
        <div className="space-y-6">
          {/* FINANCE CARD */}
          <FinanceCard />

          {/* QUICK ACTIONS */}
          <QuickActions />

          {/* ALERTS */}
          <AdminAlerts />
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
