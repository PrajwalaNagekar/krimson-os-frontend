import React, { useState } from "react";
import AssignmentsHeader from "../../../components/dashboard/student/AssignmentsCenter/AssignmentsHeader";
import AssignmentsView from "../../../components/dashboard/student/AssignmentsCenter/AssignmentsView";
import ProjectsView from "../../../components/dashboard/student/AssignmentsCenter/ProjectsView";
import QuizPlayerView from "../../../components/dashboard/student/AssignmentsCenter/QuizPlayerView";

const AssignmentsCenter = () => {
  // --- State Management ---
  const [viewMode, setViewMode] = useState("assignments"); // 'assignments', 'projects', or 'quizzes'

  return (
    <div className="space-y-8">
      {/* 
        Header Section:
        Contains Title, Description, and Main View Toggle 
      */}
      <AssignmentsHeader viewMode={viewMode} setViewMode={setViewMode} />

      {/* 
        Main Content Area:
        Conditionally renders Assignments List, Projects View, or Quiz Player
      */}
      {viewMode === "assignments" ? (
        <AssignmentsView />
      ) : viewMode === "projects" ? (
        <ProjectsView />
      ) : (
        <QuizPlayerView />
      )}
    </div>
  );
};

export default AssignmentsCenter;
