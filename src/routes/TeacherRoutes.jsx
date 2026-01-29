import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeacherLayout from "../layouts/TeacherLayout";
import TeacherHomeDashboard from "../pages/dashboards/teacher/HomeDashboard";
import ClassManagement from "../pages/dashboards/teacher/ClassManagement";
import LessonPlanning from "../pages/dashboards/teacher/LessonPlanning";
import AttendanceLog from "../pages/dashboards/teacher/AttendanceLog";
import AssignmentManager from "../pages/dashboards/teacher/AssignmentManager";
import Gradebook from "../pages/dashboards/teacher/Gradebook";
import CommunicationHubTeacher from "../pages/dashboards/teacher/CommunicationHub";
import AcademicCalendar from "../pages/dashboards/teacher/AcademicCalendar";
import StudentInsights from "../pages/dashboards/teacher/StudentInsights";
import TestManager from "../pages/dashboards/teacher/TestManager";
import ReportsAnalytics from "../pages/dashboards/teacher/ReportsAnalytics";
import ResourceLibrary from "../pages/dashboards/teacher/ResourceLibrary";
import ReflectionJournal from "../pages/dashboards/teacher/ReflectionJournal";
import AttendanceSummary from "../pages/dashboards/teacher/AttendanceSummary";

import Support from "../pages/dashboards/teacher/Support";
import ProfilePage from '../pages/common/ProfilePage';

const TeacherRoutes = () => {
  return (
    <Routes>
        <Route element={<TeacherLayout />}>
           <Route index element={<TeacherHomeDashboard />} />
           <Route path="home" element={<TeacherHomeDashboard />} />
           <Route path="classes" element={<ClassManagement />} />
           <Route path="lessons" element={<LessonPlanning />} />
           <Route path="attendance" element={<AttendanceLog />} />
           <Route path="assignments" element={<AssignmentManager />} />
           <Route path="grades" element={<Gradebook />} />
           <Route path="communication" element={<CommunicationHubTeacher />} />
           <Route path="calendar" element={<AcademicCalendar />} />
           <Route path="insights" element={<StudentInsights />} />
           <Route path="tests" element={<TestManager />} />
           <Route path="reports" element={<ReportsAnalytics />} />
           <Route path="resources" element={<ResourceLibrary />} />
           <Route path="reflection" element={<ReflectionJournal />} />
           <Route path="attendance-summary" element={<AttendanceSummary />} />
           <Route path="profile" element={<ProfilePage roleOverride="Teacher" />} />
           <Route path="support" element={<Support />} />
           
           {/* Fallback */}
           <Route path="*" element={<TeacherHomeDashboard />} />
        </Route>
    </Routes>
  );
};

export default TeacherRoutes;
