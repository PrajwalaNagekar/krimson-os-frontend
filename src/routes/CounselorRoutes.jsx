import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CounselorLayout from '../layouts/CounselorLayout';
import StudentBehaviorLog from '../pages/dashboards/counselor/StudentBehaviorLog';
import InterventionCaseDashboard from '../pages/dashboards/counselor/InterventionCaseDashboard';
import WellbeingTrends from '../pages/dashboards/counselor/WellbeingTrends';
import CollaborationHub from '../pages/dashboards/counselor/CollaborationHub';
import ProfilePage from '../pages/common/ProfilePage';

const CounselorRoutes = () => {
  return (
    <Routes>
      <Route element={<CounselorLayout />}>
        {/* Default redirect to behavior */}
        <Route index element={<Navigate to="behavior" replace />} />
        
        <Route path="behavior" element={<StudentBehaviorLog />} />
        <Route path="cases" element={<InterventionCaseDashboard />} />
        <Route path="wellbeing" element={<WellbeingTrends />} />
        <Route path="collaboration" element={<CollaborationHub />} />
        <Route path="profile" element={<ProfilePage roleOverride="Counselor" />} />
        
        {/* Fallback for unknown sub-routes */}
        <Route path="*" element={<Navigate to="behavior" replace />} />
      </Route>
    </Routes>
  );
};

export default CounselorRoutes;
