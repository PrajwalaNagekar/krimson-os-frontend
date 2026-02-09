import React from "react";
import SecurityHeader from "../../../components/dashboard/systemAdmin/SecurityAccessControl/SecurityHeader";
import SecurityStatusOverview from "../../../components/dashboard/systemAdmin/SecurityAccessControl/SecurityStatusOverview";
import SecurityMetricsCards from "../../../components/dashboard/systemAdmin/SecurityAccessControl/SecurityMetricsCards";
import ActiveSessionsTable from "../../../components/dashboard/systemAdmin/SecurityAccessControl/ActiveSessionsTable";
import RolePermissionsTable from "../../../components/dashboard/systemAdmin/SecurityAccessControl/RolePermissionsTable";
import TwoFactorAuthSettings from "../../../components/dashboard/systemAdmin/SecurityAccessControl/TwoFactorAuthSettings";
import { SYSTEM_ADMIN_DATA } from "../../../data/systemAdminData";

const SecurityAccessControl = () => {
  const {
    activeSessions,
    rolePermissions,
    twoFactorSettings,
    securityMetrics,
  } = SYSTEM_ADMIN_DATA.securityAccessControl;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <SecurityHeader />

        <SecurityStatusOverview securityMetrics={securityMetrics} />

        <SecurityMetricsCards
          activeSessions={activeSessions}
          twoFactorSettings={twoFactorSettings}
          securityMetrics={securityMetrics}
        />

        <ActiveSessionsTable activeSessions={activeSessions} />

        <RolePermissionsTable rolePermissions={rolePermissions} />

        <TwoFactorAuthSettings twoFactorSettings={twoFactorSettings} />
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }
      `}</style>
    </div>
  );
};

export default SecurityAccessControl;
