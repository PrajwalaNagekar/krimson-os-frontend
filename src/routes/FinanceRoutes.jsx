import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import FinanceLayout from '../layouts/FinanceLayout';
import FinanceDashboard from '../pages/dashboards/finance/FinanceDashboard';
import FeeStructureSetup from '../pages/dashboards/finance/FeeStructureSetup';
import InvoicePaymentManagement from '../pages/dashboards/finance/InvoicePaymentManagement';
import FeeCollectionTracker from '../pages/dashboards/finance/FeeCollectionTracker';
import RefundsLedgerControl from '../pages/dashboards/finance/RefundsLedgerControl';
import FinancialReports from '../pages/dashboards/finance/FinancialReports';
import AuditComplianceCenter from '../pages/dashboards/finance/AuditComplianceCenter';
import ProfilePage from '../pages/common/ProfilePage';

const FinanceRoutes = () => {
  return (
    <Routes>
      <Route element={<FinanceLayout />}>
        <Route path="dashboard" element={<FinanceDashboard />} />
        <Route path="structure" element={<FeeStructureSetup />} />
        <Route path="invoices" element={<InvoicePaymentManagement />} />
        <Route path="defaulters" element={<FeeCollectionTracker />} />
        <Route path="refunds" element={<RefundsLedgerControl />} />
        <Route path="reports" element={<FinancialReports />} />
        <Route path="audit" element={<AuditComplianceCenter />} />
        <Route path="profile" element={<ProfilePage roleOverride="Finance" />} />
        <Route index element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
};

export default FinanceRoutes;
