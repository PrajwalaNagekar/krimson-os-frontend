import React from "react";
import { Clock, CheckCircle, Calendar, Archive, Shield } from "lucide-react";

const BackupOverviewStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {/* Last Backup */}
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl w-fit mb-4">
            <Clock className="text-white" size={24} />
          </div>
          <h3 className="text-slate-500 text-sm font-semibold mb-1">
            Last Backup
          </h3>
          <p className="text-lg font-bold text-slate-800 mb-2">
            {stats.lastBackup}
          </p>
          <div className="flex items-center gap-1 text-xs">
            <CheckCircle size={14} className="text-green-500" />
            <span className="text-green-600 font-bold">
              {stats.lastBackupStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Next Scheduled */}
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 opacity-10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl w-fit mb-4">
            <Calendar className="text-white" size={24} />
          </div>
          <h3 className="text-slate-500 text-sm font-semibold mb-1">
            Next Scheduled
          </h3>
          <p className="text-lg font-bold text-slate-800 mb-2">
            {stats.nextScheduled}
          </p>
          <p className="text-xs text-slate-500">Automated Daily Cycle</p>
        </div>
      </div>

      {/* Total Backups */}
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 opacity-10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl w-fit mb-4">
            <Archive className="text-white" size={24} />
          </div>
          <h3 className="text-slate-500 text-sm font-semibold mb-1">
            Total Backups
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {stats.totalBackups}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {stats.totalSize} total size
          </p>
        </div>
      </div>

      {/* Data Integrity */}
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-400 to-cyan-400 opacity-10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="p-3 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl w-fit mb-4">
            <Shield className="text-white" size={24} />
          </div>
          <h3 className="text-slate-500 text-sm font-semibold mb-1">
            Data Integrity
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
            {stats.integrityScore}
          </p>
          <p className="text-xs text-slate-500 mt-1">Verified via Checksum</p>
        </div>
      </div>
    </div>
  );
};

export default BackupOverviewStats;
