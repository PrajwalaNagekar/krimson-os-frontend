import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../../data/teacherData";
import ClassManagementHeader from "../../../../components/dashboard/teacher/ClassManagement/ClassManagementHeader";
import TabToggle from "../../../../components/dashboard/teacher/ClassManagement/TabToggle";
import DailySummary from "../../../../components/dashboard/teacher/ClassManagement/DailySummary";
import TodayClasses from "../../../../components/dashboard/teacher/ClassManagement/TodayClasses";
import MyClass from "../../../../components/dashboard/teacher/ClassManagement/MyClass";

/**
 * ClassManagement — Main Page
 *
 * Layout:
 *   1. Slim gradient header (date, no buttons)
 *   2. 3-button tab toggle (Today Class | My Class | Absence Management)
 *   3. Daily Summary cards (shown right after toggle, only on Today tab)
 *   4. Tab content area
 *
 * API-ready:
 *   Replace static TEACHER_DATA with useEffect + fetch calls.
 */
const ClassManagement = () => {
  const [activeTab, setActiveTab] = useState("today"); // today | myclass | absence

  // Static data — replace with API calls
  const { todayClasses, myClasses, absenceManagement } =
    TEACHER_DATA.classManagement;

  // TODO: API integration
  useEffect(() => {
    // fetchTodayClasses(date).then(setTodayClasses);
    // fetchMyClasses().then(setMyClasses);
    // fetchAbsences().then(setAbsenceData);
    console.log("ClassManagement loaded — ready for API integration");
  }, []);

  return (
    <div className="space-y-5">
      {/* 1. Slim Header */}
      <ClassManagementHeader date={todayClasses?.date} />

      {/* 2. Tab Toggle */}
      <TabToggle activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 3. Daily Summary — shown right after toggle, only for Today tab */}
      {activeTab === "today" && todayClasses?.summary && (
        <DailySummary summary={todayClasses.summary} />
      )}

      {/* 4. Tab Content */}
      <div>
        {activeTab === "today" && <TodayClasses data={todayClasses} />}
        {activeTab === "myclass" && <MyClass classes={myClasses} />}
      </div>
    </div>
  );
};

export default ClassManagement;
