import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from "../layouts/AdminLayout";
import AdminOverview from "../pages/dashboards/admin/AdminOverview";
import AdmissionsConsole from "../pages/dashboards/admin/AdmissionsConsole";
import UserManagement from "../pages/dashboards/admin/UserManagement";
import ClassConfig from "../pages/dashboards/admin/ClassConfig";
import HRAdmin from "../pages/dashboards/admin/HRAdmin";
import FinanceControl from "../pages/dashboards/admin/FinanceControl";
import AttendanceOversight from "../pages/dashboards/admin/AttendanceOversight";
import NotificationCenter from "../pages/dashboards/admin/NotificationCenter";
import ComplianceVault from "../pages/dashboards/admin/ComplianceVault";
import AuditTrail from "../pages/dashboards/admin/AuditTrail";
import Infrastructure from "../pages/dashboards/admin/Infrastructure";
import BackupSettings from "../pages/dashboards/admin/BackupSettings";
import AnalyticsCenter from "../pages/dashboards/admin/AnalyticsCenter";
import SystemSettings from "../pages/dashboards/admin/SystemSettings";
import Helpdesk from "../pages/dashboards/admin/Helpdesk";

import ProfilePage from '../pages/common/ProfilePage';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<AdminOverview />} />
        <Route path="admissions" element={<AdmissionsConsole />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="classes" element={<ClassConfig />} />
        <Route path="profile" element={<ProfilePage roleOverride="Administrator" />} /> {/* Added route for profile page */}
        <Route path="hr" element={<HRAdmin />} />
        <Route path="finance" element={<FinanceControl />} />
        <Route path="attendance" element={<AttendanceOversight />} />
        <Route path="notifications" element={<NotificationCenter />} />
        <Route path="compliance" element={<ComplianceVault />} />
        <Route path="audit" element={<AuditTrail />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="backup" element={<BackupSettings />} />
        <Route path="analytics" element={<AnalyticsCenter />} />
        <Route path="settings" element={<SystemSettings />} />
        <Route path="helpdesk" element={<Helpdesk />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
