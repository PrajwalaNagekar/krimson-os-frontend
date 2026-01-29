import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SystemAdminLayout from '../layouts/SystemAdminLayout';
import SystemHealthMonitoring from '../pages/dashboards/systemAdmin/SystemHealthMonitoring';
import SecurityAccessControl from '../pages/dashboards/systemAdmin/SecurityAccessControl';
import BackupRecoveryCenter from '../pages/dashboards/systemAdmin/BackupRecoveryCenter';
import AuditMaintenanceLog from '../pages/dashboards/systemAdmin/AuditMaintenanceLog';
import ProfilePage from '../pages/common/ProfilePage';

const SystemAdminRoutes = () => {
  return (
    <Routes>
      <Route element={<SystemAdminLayout />}>
        <Route path="health" element={<SystemHealthMonitoring />} />
        <Route path="security" element={<SecurityAccessControl />} />
        <Route path="backup" element={<BackupRecoveryCenter />} />
        <Route path="audit" element={<AuditMaintenanceLog />} />
        <Route path="profile" element={<ProfilePage roleOverride="IT/System Admin" />} />
        
        {/* Default redirect */}
        <Route path="*" element={<Navigate to="health" replace />} />
      </Route>
    </Routes>
  );
};

export default SystemAdminRoutes;
