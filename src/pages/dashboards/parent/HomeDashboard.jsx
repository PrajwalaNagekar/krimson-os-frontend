import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { PARENT_DATA } from "../../../data/parentData";
import WelcomeBanner from "../../../components/dashboard/parent/ParentDashboard/WelcomeBanner";
import QuickActions from "../../../components/dashboard/parent/ParentDashboard/QuickActions";
import TodaySnapshotWidget from "../../../components/dashboard/parent/ParentDashboard/TodaySnapshotWidget";
import UpcomingActionsWidget from "../../../components/dashboard/parent/ParentDashboard/UpcomingActionsWidget";
import UpcomingExamsWidget from "../../../components/dashboard/parent/ParentDashboard/UpcomingExamsWidget";
import TeacherRemarksWidget from "../../../components/dashboard/parent/ParentDashboard/TeacherRemarksWidget";
//import AssignmentsWidget from "../../../components/dashboard/parent/ParentDashboard/AssignmentsWidget";
// import ConnectedAppsWidget from "../../../components/dashboard/parent/ParentDashboard/ConnectedAppsWidget";
import ChildSelectorWidget from "../../../components/dashboard/parent/ParentDashboard/ChildSelectorWidget";

/**
 * Parent Home Dashboard - Screen 1
 * Purpose: Single-view summary of child's academic, behavioral, and financial status
 * Features: Child Selector, Today's Snapshot, Upcoming Actions, Upcoming Exams, Teacher Remarks, Quick Links
 * Future: Replace static data with Student Database + Attendance API + Finance Module
 */
const HomeDashboard = () => {
  const { user: authUser } = useSelector((state) => state.auth);
  const { children, widgets, connectedApps } = PARENT_DATA;

  // Local state for child selection (defaults to first child if context is missing)
  const context = useOutletContext();
  const [selectedChildId, setSelectedChildId] = useState(
    context?.selectedChildIndex
      ? children[context.selectedChildIndex]?.id
      : children[0].id,
  );

  const activeChild =
    children.find((child) => child.id === selectedChildId) || children[0];

  // Fallback to static data if authUser is not available (dev mode/unauthenticated preview)
  const userName = authUser?.name || PARENT_DATA.user.name;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <WelcomeBanner userName={userName} studentName={activeChild.name} />

      {/* Child Selector - Top Bar */}
      <div className="flex justify-start overflow-x-auto no-scrollbar">
        <ChildSelectorWidget
          children={children}
          selectedChildId={selectedChildId}
          onSelect={setSelectedChildId}
          // API Ready: Pass a handler that could eventually trigger an API refresh
          // onSelect={(id) => { setSelectedChildId(id); fetchChildData(id); }}
        />
      </div>

      {/* Quick Action Links - Premium Cards */}
      <QuickActions />

      {/* Main Widgets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Snapshot (Replaces Attendance Widget) */}
        <TodaySnapshotWidget schedule={widgets.todaySchedule} />

        {/* Upcoming Actions (Replaces Fee Status) */}
        <UpcomingActionsWidget actions={widgets.upcomingActions} />

        {/* Upcoming Exams */}
        <UpcomingExamsWidget exams={widgets.exams} />
      </div>

      {/* Teacher Remarks & Upcoming Assignments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Teacher Remarks - Last 7 Days */}
        <TeacherRemarksWidget remarks={widgets.remarks} />

        {/* Upcoming Assignments */}
        {/* Now using assignments from widgets.assignments or fallback if empty/undefined */}
        {/* <AssignmentsWidget assignments={widgets.assignments || []} /> */}
      </div>

      {/* Connected Applications */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <ConnectedAppsWidget apps={connectedApps} />
      </div> */}
    </div>
  );
};

export default HomeDashboard;
