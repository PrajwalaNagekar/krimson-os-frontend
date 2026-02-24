import React, { useState } from "react";
import { TEACHER_DATA } from "../../../../data/teacherData";
import SmartAbsenceViews from "../../../../components/dashboard/teacher/ClassManagement/AbsenceManagement/SmartAbsenceViews";
import ClassManagementHeader from "../../../../components/dashboard/teacher/ClassManagement/ClassManagementHeader";
import TabToggle from "../../../../components/dashboard/teacher/ClassManagement/TabToggle";

const AbsenceManagementPage = () => {
  const [activeTab, setActiveTab] = useState("absence");

  // Static data source - replace with API call
  const absenceData = TEACHER_DATA.classManagement.absenceManagement;
  const todayClasses = TEACHER_DATA.classManagement.todayClasses;

  return (
    <div className="space-y-5">
      {/* 1. Slim Header */}
      <ClassManagementHeader date={todayClasses?.date} />

      {/* 2. Tab Toggle */}
      <TabToggle activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 3. Absence Management Content */}
      <SmartAbsenceViews data={absenceData} />
    </div>
  );
};

export default AbsenceManagementPage;
