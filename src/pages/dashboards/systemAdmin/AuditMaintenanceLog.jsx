import React, { useState } from "react";
import { SYSTEM_ADMIN_DATA } from "../../../data/systemAdminData";
import SystemVersionCard from "../../../components/dashboard/systemAdmin/AuditMaintenanceLog/SystemVersionCard";
import StatsGrid from "../../../components/dashboard/systemAdmin/AuditMaintenanceLog/StatsGrid";
import ActivityLog from "../../../components/dashboard/systemAdmin/AuditMaintenanceLog/ActivityLog";
import AuditSidebar from "../../../components/dashboard/systemAdmin/AuditMaintenanceLog/AuditSidebar";

const AuditMaintenanceLog = () => {
  // Use data from centralized data file
  const { auditLogData } = SYSTEM_ADMIN_DATA;
  const [systemInfo] = useState(auditLogData.systemInfo);
  const [stats] = useState(auditLogData.stats);
  const [logs] = useState(auditLogData.logs);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Audit & Maintenance Log
          </h1>
          <p className="text-slate-600">
            Track all maintenance activities, system updates, and security audit
            trails
          </p>
        </div>

        {/* System Version & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SystemVersionCard data={systemInfo} />
          <StatsGrid stats={stats} />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ActivityLog logs={logs} />
          <AuditSidebar />
        </div>
      </div>
    </div>
  );
};

export default AuditMaintenanceLog;
