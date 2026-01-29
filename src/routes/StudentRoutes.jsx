import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentLayout from "../layouts/StudentLayout";
import HomeDashboard from "../pages/dashboards/student/HomeDashboard";
import TimetableSchedule from "../pages/dashboards/student/TimetableSchedule";
import AttendanceTracker from "../pages/dashboards/student/AttendanceTracker";
import AssignmentsCenter from "../pages/dashboards/student/AssignmentsCenter";
import LessonResources from "../pages/dashboards/student/LessonResources";
import LibraryAccount from "../pages/dashboards/student/LibraryAccount";
import ExamDashboard from "../pages/dashboards/student/ExamDashboard";
import GradesReport from "../pages/dashboards/student/GradesReport";
import CommunicationHub from "../pages/dashboards/student/CommunicationHub";
import PerformanceAnalytics from "../pages/dashboards/student/PerformanceAnalytics";
import MyProgress from "../pages/dashboards/student/MyProgress";

import BehaviorLog from "../pages/dashboards/student/BehaviorLog";
import ParentLinkDashboard from "../pages/dashboards/student/ParentLinkDashboard";
import CoCurricularActivities from "../pages/dashboards/student/CoCurricularActivities";
import Support from "../pages/dashboards/student/Support";
import ProfilePage from '../pages/common/ProfilePage';
import ProfileAndGoals from '../pages/dashboards/student/ProfileAndGoals';

const StudentRoutes = () => {
  return (
    <Routes>
        <Route element={<StudentLayout />}>
           <Route index element={<HomeDashboard />} />
           <Route path="timetable" element={<TimetableSchedule />} />
           <Route path="attendance" element={<AttendanceTracker />} />
           <Route path="assignments" element={<AssignmentsCenter />} />
           <Route path="resources" element={<LessonResources />} />
           <Route path="library-account" element={<LibraryAccount />} />
           <Route path="exams" element={<ExamDashboard />} />
           <Route path="grades" element={<GradesReport />} />
           <Route path="communication" element={<CommunicationHub />} />
           <Route path="analytics" element={<PerformanceAnalytics />} />
           <Route path="progress" element={<MyProgress />} />
         
           <Route path="behavior" element={<BehaviorLog />} />
           <Route path="profile" element={<ProfileAndGoals />} />
           <Route path="parentlink" element={<ParentLinkDashboard />} />
           <Route path="activities" element={<CoCurricularActivities />} />
           <Route path="support" element={<Support />} />
        </Route>
    </Routes>
  );
};

export default StudentRoutes;
