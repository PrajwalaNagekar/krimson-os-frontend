import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LibrarianLayout from '../layouts/LibrarianLayout';
import LibraryDashboard from '../pages/dashboards/librarian/LibraryDashboard';
import IssueReturnManager from '../pages/dashboards/librarian/IssueReturnManager';
import ReservationRequestCenter from '../pages/dashboards/librarian/ReservationRequestCenter';
import LibraryReports from '../pages/dashboards/librarian/LibraryReports';
import ProfilePage from '../pages/common/ProfilePage';

const LibrarianRoutes = () => {
  return (
    <Routes>
      <Route element={<LibrarianLayout />}>
        <Route path="dashboard" element={<LibraryDashboard />} />
        <Route path="issue-return" element={<IssueReturnManager />} />
        <Route path="reservations" element={<ReservationRequestCenter />} />
        <Route path="reports" element={<LibraryReports />} />
        <Route path="profile" element={<ProfilePage roleOverride="Librarian" />} />
        
        {/* Default redirect */}
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
};

export default LibrarianRoutes;
