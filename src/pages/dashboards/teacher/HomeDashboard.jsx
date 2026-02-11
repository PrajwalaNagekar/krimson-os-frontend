import React, { useState, useEffect } from "react";
import DashboardHeader from "../../../components/dashboard/teacher/HomeDashboard/DashboardHeader";
import QuickStatsGrid from "../../../components/dashboard/teacher/HomeDashboard/QuickStatsGrid";
import ClassesTodayWidget from "../../../components/dashboard/teacher/HomeDashboard/ClassesTodayWidget";
import AssignmentsPendingWidget from "../../../components/dashboard/teacher/HomeDashboard/AssignmentsPendingWidget";
import PerformanceAlertsWidget from "../../../components/dashboard/teacher/HomeDashboard/PerformanceAlertsWidget";
import AttendanceToMarkWidget from "../../../components/dashboard/teacher/HomeDashboard/AttendanceToMarkWidget";
import QuickActionsBar from "../../../components/dashboard/teacher/HomeDashboard/QuickActionsBar";

const HomeDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Mock API call - to be replaced with actual API
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/dashboard')
    //   .then(res => res.json())
    //   .then(data => setDashboardData(data));
    console.log("Dashboard loaded - Ready for API integration");
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Crimson Header Band - Matching Teacher Sidebar */}
      <DashboardHeader currentTime={currentTime} />

      {/* Quick Stats Grid - Key Metrics */}
      <QuickStatsGrid />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Classes Today Widget - Takes 2 columns */}
        <ClassesTodayWidget />

        {/* Right Sidebar - Alerts & Actions */}
        <div className="space-y-6">
          {/* Assignments Pending Review */}
          <AssignmentsPendingWidget />

          {/* Performance Alerts */}
          <PerformanceAlertsWidget />
        </div>
      </div>

      {/* Attendance to Mark Section */}
      <AttendanceToMarkWidget />

      {/* Quick Actions Bar */}
      <QuickActionsBar />
    </div>
  );
};

export default HomeDashboard;
