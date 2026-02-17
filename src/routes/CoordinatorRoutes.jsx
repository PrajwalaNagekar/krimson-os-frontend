import React from "react";
import { Routes, Route } from "react-router-dom";
import AcademicCoordinatorLayout from "../layouts/AcademicCoordinatorLayout";
import AcademicDashboard from "../pages/dashboards/coordinator/AcademicDashboard";
import CurriculumManagement from "../pages/dashboards/coordinator/CurriculumManagement";
import CurriculumPlanner from "../pages/dashboards/coordinator/CurriculumPlanner";
import TimetableConsole from "../pages/dashboards/coordinator/TimetableConsole";
import LessonApprovalCenter from "../pages/dashboards/coordinator/LessonApprovalCenter";
import AssessmentTracker from "../pages/dashboards/coordinator/AssessmentTracker";
import TeacherAssignment from "../pages/dashboards/coordinator/TeacherAssignment";
import TotalTeachers from "../pages/dashboards/coordinator/TotalTeachers";
import TotalAssignments from "../pages/dashboards/coordinator/TotalAssignments";
import UnassignedClasses from "../pages/dashboards/coordinator/UnassignedClasses";
import GradesCovered from "../pages/dashboards/coordinator/GradesCovered";
import ProfilePage from "../pages/common/ProfilePage";

const CoordinatorRoutes = () => {
  return (
    <Routes>
      <Route element={<AcademicCoordinatorLayout />}>
        <Route index element={<AcademicDashboard />} />
        <Route path="academic" element={<AcademicDashboard />} />
        <Route
          path="curriculum-management"
          element={<CurriculumManagement />}
        />
        <Route path="curriculum" element={<CurriculumPlanner />} />
        <Route path="timetable" element={<TimetableConsole />} />
        <Route path="approval" element={<LessonApprovalCenter />} />
        <Route path="assessment" element={<AssessmentTracker />} />
        <Route path="teacher-assignment" element={<TeacherAssignment />} />
        <Route
          path="teacher-assignment/total-teachers"
          element={<TotalTeachers />}
        />
        <Route
          path="teacher-assignment/total-assignments"
          element={<TotalAssignments />}
        />
        <Route
          path="teacher-assignment/unassigned-classes"
          element={<UnassignedClasses />}
        />
        <Route
          path="teacher-assignment/grades-covered"
          element={<GradesCovered />}
        />
        <Route
          path="profile"
          element={<ProfilePage roleOverride="Academic Coordinator" />}
        />
      </Route>
    </Routes>
  );
};

export default CoordinatorRoutes;
