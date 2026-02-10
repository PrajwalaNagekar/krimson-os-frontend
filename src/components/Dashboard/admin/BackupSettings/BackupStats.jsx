import React from "react";
import {
  Database,
  CheckCircle,
  XCircle,
  HardDrive,
  BarChart3,
  Shield,
} from "lucide-react";

const BackupStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
            <Database size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">{stats.totalBackups}</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Total Backups
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform">
            <CheckCircle size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.successfulBackups}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Successful
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform">
            <XCircle size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.failedBackups}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Failed
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg group-hover:scale-110 transition-transform">
            <HardDrive size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">{stats.totalStorage}</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Total Storage
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-cyan-100 text-cyan-600 rounded-lg group-hover:scale-110 transition-transform">
            <BarChart3 size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.averageBackupSize}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Avg Size
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-500 text-white rounded-lg group-hover:scale-110 transition-transform">
            <Shield size={16} />
          </div>
        </div>
        <p className="text-lg font-bold text-green-800">
          {stats.lastBackupStatus}
        </p>
        <p className="text-xs text-green-600 font-medium uppercase tracking-wide">
          Last Backup
        </p>
      </div>
    </div>
  );
};

export default BackupStats;
