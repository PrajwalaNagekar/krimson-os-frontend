import React, { useState } from "react";
import { SYSTEM_ADMIN_DATA } from "../../../data/systemAdminData";
import BackupOverviewStats from "../../../components/dashboard/systemAdmin/BackupRecoveryCenter/BackupOverviewStats";
import BackupSchedule from "../../../components/dashboard/systemAdmin/BackupRecoveryCenter/BackupSchedule";
import BackupHistoryTable from "../../../components/dashboard/systemAdmin/BackupRecoveryCenter/BackupHistoryTable";
import StorageDistribution from "../../../components/dashboard/systemAdmin/BackupRecoveryCenter/StorageDistribution";
import IntegrityLog from "../../../components/dashboard/systemAdmin/BackupRecoveryCenter/IntegrityLog";
import EmergencyRecovery from "../../../components/dashboard/systemAdmin/BackupRecoveryCenter/EmergencyRecovery";

const BackupRecoveryCenter = () => {
  // Use data from centralized data file
  const { backupRecoveryData } = SYSTEM_ADMIN_DATA;
  const [backupStats] = useState(backupRecoveryData.backupStats);
  const [backupSchedule] = useState(backupRecoveryData.backupSchedule);
  const [restorePoints] = useState(backupRecoveryData.restorePoints);
  const [cloudBackupSummary] = useState(backupRecoveryData.cloudBackupSummary);
  const [localBackupSummary] = useState(backupRecoveryData.localBackupSummary);
  const [integrityLog] = useState(backupRecoveryData.integrityLog);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Backup & Data Recovery Center
          </h1>
          <p className="text-slate-600">
            Ensure system resilience and data safety
          </p>
        </div>

        {/* Quick Stats */}
        <BackupOverviewStats stats={backupStats} />

        {/* Backup Scheduling */}
        <BackupSchedule schedule={backupSchedule} />

        {/* Restore Points */}
        <BackupHistoryTable restorePoints={restorePoints} />

        {/* Cloud & Local Backup Summary */}
        <StorageDistribution
          cloudSummary={cloudBackupSummary}
          localSummary={localBackupSummary}
        />

        {/* Data Integrity Verification Log */}
        <IntegrityLog logs={integrityLog} />

        {/* Emergency Recovery */}
        <EmergencyRecovery />

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
    </div>
  );
};

export default BackupRecoveryCenter;
