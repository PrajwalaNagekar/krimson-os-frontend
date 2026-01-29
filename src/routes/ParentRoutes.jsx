import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ParentLayout from "../layouts/ParentLayout";
import ParentHomeDashboard from "../pages/dashboards/parent/HomeDashboard";
import ParentChildrenOverview from "../pages/dashboards/parent/ChildrenOverview";
import ParentAttendanceRecord from "../pages/dashboards/parent/AttendanceRecord";
import ParentHomeworkAssignments from "../pages/dashboards/parent/HomeworkAssignments";
import ParentExamPerformance from "../pages/dashboards/parent/ExamPerformance";
import ParentReportCard from "../pages/dashboards/parent/ReportCard";
import ParentCommunicationHub from "../pages/dashboards/parent/CommunicationHub";
import ParentFeePayments from "../pages/dashboards/parent/FeePayments";
import ParentBehaviorReports from "../pages/dashboards/parent/BehaviorReports";
import ParentCalendarEvents from "../pages/dashboards/parent/CalendarEvents";
import ParentNoticesCirculars from "../pages/dashboards/parent/NoticesCirculars";
import ParentCoCurricularTracker from "../pages/dashboards/parent/CoCurricularTracker";
import ParentFeedbackSurvey from "../pages/dashboards/parent/FeedbackSurvey";
import ParentSupportCenter from "../pages/dashboards/parent/SupportCenter";
import ParentProfile from "../pages/dashboards/parent/ParentProfile";

const ParentRoutes = () => {
  return (
    <Routes>
        <Route element={<ParentLayout />}>
           <Route index element={<Navigate to="home" replace />} />
           <Route path="home" element={<ParentHomeDashboard />} />
           <Route path="children" element={<ParentChildrenOverview />} />
           <Route path="attendance" element={<ParentAttendanceRecord />} />
           <Route path="homework" element={<ParentHomeworkAssignments />} />
           <Route path="exams" element={<ParentExamPerformance />} />
           <Route path="reports" element={<ParentReportCard />} />
           <Route path="communication" element={<ParentCommunicationHub />} />
           <Route path="fees" element={<ParentFeePayments />} />
           <Route path="behavior" element={<ParentBehaviorReports />} />
           <Route path="calendar" element={<ParentCalendarEvents />} />
           <Route path="notices" element={<ParentNoticesCirculars />} />
           <Route path="cca" element={<ParentCoCurricularTracker />} />
           <Route path="feedback" element={<ParentFeedbackSurvey />} />
           <Route path="support" element={<ParentSupportCenter />} />
           <Route path="profile" element={<ParentProfile />} />
        </Route>
    </Routes>
  );
};

export default ParentRoutes;
