import React from "react";
import { Settings, Activity, Calendar, Lock, Cloud } from "lucide-react";

const AutoBackupSettings = ({
  backupConfig,
  selectedSchedule,
  setSelectedSchedule,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
          <Settings size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800">
            Automated Backup Configuration
          </h3>
          <p className="text-sm text-slate-500">
            Schedule and manage automatic backups
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Status */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-green-800">
              Auto-Backup Status
            </span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5">
              <Activity size={12} className="animate-pulse" />
              Enabled
            </span>
          </div>
          <p className="text-xs text-green-700">
            System is automatically backed up{" "}
            {backupConfig.schedule.toLowerCase()}
          </p>
        </div>

        {/* Schedule Selection */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Backup Schedule
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setSelectedSchedule("daily")}
              className={`p-3 rounded-xl border-2 transition-all ${
                selectedSchedule === "daily"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
              }`}
            >
              <Calendar size={20} className="mx-auto mb-1" />
              <p className="text-xs font-bold">Daily</p>
            </button>
            <button
              onClick={() => setSelectedSchedule("weekly")}
              className={`p-3 rounded-xl border-2 transition-all ${
                selectedSchedule === "weekly"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
              }`}
            >
              <Calendar size={20} className="mx-auto mb-1" />
              <p className="text-xs font-bold">Weekly</p>
            </button>
          </div>
        </div>

        {/* Backup Details */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <p className="text-slate-500 mb-1">Last Backup</p>
            <p className="font-bold text-slate-800">
              {backupConfig.lastBackup}
            </p>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <p className="text-slate-500 mb-1">Next Backup</p>
            <p className="font-bold text-blue-600">{backupConfig.nextBackup}</p>
          </div>
        </div>

        {/* Security Info */}
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Lock size={16} className="text-purple-600" />
            <p className="text-sm font-bold text-purple-800">
              Encryption: {backupConfig.encryption}
            </p>
          </div>
          <p className="text-xs text-purple-700">
            All backups are encrypted with military-grade AES-256 encryption
          </p>
        </div>

        {/* Storage Location */}
        <div className="bg-cyan-50 p-4 rounded-xl border border-cyan-200">
          <div className="flex items-center gap-2 mb-2">
            <Cloud size={16} className="text-cyan-600" />
            <p className="text-sm font-bold text-cyan-800">Storage Location</p>
          </div>
          <p className="text-xs text-cyan-700">{backupConfig.backupLocation}</p>
        </div>

        {/* Settings Button */}
        <button className="w-full py-3 bg-gradient-to-r from-slate-50 to-slate-100 hover:from-blue-50 hover:to-indigo-50 text-slate-600 hover:text-blue-600 font-bold rounded-xl text-sm transition-all flex flex-col items-center gap-0.5 shadow-sm border border-slate-200 hover:border-blue-200">
          <div className="flex items-center gap-2">
            <Settings size={18} />
            Configure Settings
          </div>
        </button>
      </div>
    </div>
  );
};

export default AutoBackupSettings;
