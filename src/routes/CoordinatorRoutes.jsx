import React from "react";
import { Routes, Route } from "react-router-dom";
import AcademicCoordinatorLayout from "../layouts/AcademicCoordinatorLayout";
import AcademicDashboard from "../pages/dashboards/coordinator/AcademicDashboard";
import CurriculumManagement from "../pages/dashboards/coordinator/CurriculumManagement";
import CurriculumPlanner from "../pages/dashboards/coordinator/CurriculumPlanner";
import TimetableConsole from "../pages/dashboards/coordinator/TimetableConsole";
import LessonApprovalCenter from "../pages/dashboards/coordinator/LessonApprovalCenter";
import AssessmentTracker from "../pages/dashboards/coordinator/AssessmentTracker";
import AcademicYear from "../pages/dashboards/coordinator/AcademicYear";
import {
  CreateAcademicYear,
  ActivateYear,
  LockYear,
} from "../pages/dashboards/coordinator/AcademicYear";
import TeacherAssignment from "../pages/dashboards/coordinator/TeacherMapping/TeacherAssignment";

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
        <Route path="academic-year" element={<AcademicYear />} />
        <Route path="academic-year/create" element={<CreateAcademicYear />} />
        <Route path="academic-year/activate" element={<ActivateYear />} />
        <Route path="academic-year/lock" element={<LockYear />} />
        <Route path="timetable" element={<TimetableConsole />} />
        <Route path="approval" element={<LessonApprovalCenter />} />
        <Route path="assessment" element={<AssessmentTracker />} />
        <Route path="teacher-assignment" element={<TeacherAssignment />} />

        <Route
          path="profile"
          element={<ProfilePage roleOverride="Academic Coordinator" />}
        />
      </Route>
    </Routes>
  );
};

export default CoordinatorRoutes;
