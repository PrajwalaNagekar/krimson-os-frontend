import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import ClassManagementHeader from "../../../components/dashboard/teacher/ClassManagement/ClassManagementHeader";
import ClassList from "../../../components/dashboard/teacher/ClassManagement/ClassList";
import SubstitutionPlanner from "../../../components/dashboard/teacher/ClassManagement/SubstitutionPlanner";
import HomeworkLoadBalancer from "../../../components/dashboard/teacher/ClassManagement/HomeworkLoadBalancer";
import TimetableModal from "../../../components/dashboard/teacher/ClassManagement/TimetableModal";

const ClassManagement = () => {
  const { classes, lessons, classManagement } = TEACHER_DATA;
  const [activeTab, setActiveTab] = useState("classes"); // classes, substitution, homework
  const [showTimetable, setShowTimetable] = useState(false);

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    console.log("Class Management loaded - Ready for API integration");
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <ClassManagementHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        classesCount={classes.length}
      />

      {/* Tab Content Rendering */}
      {activeTab === "classes" && (
        <ClassList
          classes={classes}
          substitutionAlerts={classManagement.substitutionAlerts}
          setShowTimetable={setShowTimetable}
        />
      )}

      {activeTab === "substitution" && (
        <SubstitutionPlanner
          substituteTeachers={classManagement.substituteTeachers}
        />
      )}

      {activeTab === "homework" && (
        <HomeworkLoadBalancer
          initialLoad={classManagement.homeworkLoad}
          aiBalancingInsights={classManagement.aiBalancingInsights}
          policyConstraints={classManagement.policyConstraints}
        />
      )}

      {/* Timetable Modal */}
      <TimetableModal
        showTimetable={showTimetable}
        setShowTimetable={setShowTimetable}
        lessons={lessons}
      />
    </div>
  );
};

export default ClassManagement;
