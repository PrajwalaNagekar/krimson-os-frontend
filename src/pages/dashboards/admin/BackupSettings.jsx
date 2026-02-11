/**
 * @component BackupSettings
 * @description Data Backup & Recovery Settings - System data security management
 */
import React, { useState } from "react";
import { ADMIN_DATA } from "../../../data/adminData";
import BackupHeader from "../../../components/dashboard/admin/BackupSettings/BackupHeader";
import BackupStats from "../../../components/dashboard/admin/BackupSettings/BackupStats";
import AutoBackupSettings from "../../../components/dashboard/admin/BackupSettings/AutoBackupSettings";
import ManualBackupActions from "../../../components/dashboard/admin/BackupSettings/ManualBackupActions";
import RestorePointsList from "../../../components/dashboard/admin/BackupSettings/RestorePointsList";
import SecurityFooter from "../../../components/dashboard/admin/BackupSettings/SecurityFooter";

const BackupSettings = () => {
  const [selectedSchedule, setSelectedSchedule] = useState("daily");

  const { backupSettings } = ADMIN_DATA;
  const { config, stats, restorePoints, storageBreakdown } = backupSettings;

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      <BackupHeader />
      <BackupStats stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AutoBackupSettings
          backupConfig={config}
          selectedSchedule={selectedSchedule}
          setSelectedSchedule={setSelectedSchedule}
        />
        <ManualBackupActions
          backupConfig={config}
          storageBreakdown={storageBreakdown}
        />
      </div>

      <RestorePointsList restorePoints={restorePoints} />
      <SecurityFooter />
    </div>
  );
};

export default BackupSettings;
