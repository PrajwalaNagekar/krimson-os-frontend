import React, { useState } from "react";

// Import components
import TimetableHeader from "../../../components/dashboard/coordinator/TimetableConsole/TimetableHeader";
import StatsOverview from "../../../components/dashboard/coordinator/TimetableConsole/StatsOverview";
import ConflictsWarnings from "../../../components/dashboard/coordinator/TimetableConsole/ConflictsWarnings";
import ViewModeFilter from "../../../components/dashboard/coordinator/TimetableConsole/ViewModeFilter";
import TimetableGrid from "../../../components/dashboard/coordinator/TimetableConsole/TimetableGrid";
import SubstituteManagement from "../../../components/dashboard/coordinator/TimetableConsole/SubstituteManagement";

// Import data
import { TIMETABLE_CONSOLE_DATA } from "../../../data/coordinatorData";

/**
 * Screen 2: Timetable & Faculty Allocation Console
 * Purpose: Design and manage timetable structures
 * Features:
 * - Weekly and term-wise timetable creation
 * - Auto-detect teacher conflicts or overload
 * - Substitute management for absent teachers
 * - Export timetable by class, teacher, or subject
 * Integration: Timetable API + HR Module
 */

const TimetableConsole = () => {
  const [viewMode, setViewMode] = useState("weekly"); // weekly or termwise
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedDay, setSelectedDay] = useState("monday");

  // Static data from external file - ready for API integration
  const {
    stats,
    weekDays,
    periods,
    timetableData,
    teacherIssues,
    substituteRequests,
  } = TIMETABLE_CONSOLE_DATA;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <TimetableHeader />

        {/* Stats Overview */}
        <StatsOverview stats={stats} />

        {/* Teacher Conflicts & Overload Alerts */}
        <ConflictsWarnings teacherIssues={teacherIssues} />

        {/* View Mode Toggle & Filters */}
        <ViewModeFilter
          viewMode={viewMode}
          setViewMode={setViewMode}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
        />

        {/* Weekly Timetable Grid */}
        <TimetableGrid
          timetableData={timetableData}
          weekDays={weekDays}
          periods={periods}
        />

        {/* Substitute Management */}
        <SubstituteManagement substituteRequests={substituteRequests} />
      </div>
    </div>
  );
};

export default TimetableConsole;
