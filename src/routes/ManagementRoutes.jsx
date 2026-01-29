import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ManagementLayout from '../layouts/ManagementLayout';
import InstitutionalOverview from '../pages/dashboards/management/InstitutionalOverview';
import AcademicOutcomes from '../pages/dashboards/management/AcademicOutcomes';
import AdmissionsGrowth from '../pages/dashboards/management/AdmissionsGrowth';
import FinancialHealth from '../pages/dashboards/management/FinancialHealth';
import OperationalEfficiency from '../pages/dashboards/management/OperationalEfficiency';
import ComplianceRisk from '../pages/dashboards/management/ComplianceRisk';
import StrategicPlanning from '../pages/dashboards/management/StrategicPlanning';
import ProfilePage from '../pages/common/ProfilePage';

const ManagementRoutes = () => {
  return (
    <Routes>
      <Route element={<ManagementLayout />}>
        <Route path="overview" element={<InstitutionalOverview />} />
        <Route path="academics" element={<AcademicOutcomes />} />
        <Route path="admissions" element={<AdmissionsGrowth />} />
        <Route path="finance" element={<FinancialHealth />} />
        <Route path="operations" element={<OperationalEfficiency />} />
        <Route path="compliance" element={<ComplianceRisk />} />
        <Route path="strategy" element={<StrategicPlanning />} />
        <Route path="profile" element={<ProfilePage roleOverride="Management" />} />
        
        {/* Default redirect to overview */}
        <Route path="*" element={<Navigate to="overview" replace />} />
      </Route>
    </Routes>
  );
};

export default ManagementRoutes;
