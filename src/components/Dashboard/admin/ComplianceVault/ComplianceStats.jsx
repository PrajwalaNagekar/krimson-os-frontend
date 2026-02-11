import React from "react";
import {
  FolderOpen,
  CheckCircle,
  Clock,
  AlertCircle,
  Database,
  RefreshCcw,
} from "lucide-react";

const ComplianceStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-4 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-105 transition-all group text-white">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-white/20 text-white rounded-lg group-hover:scale-110 transition-transform backdrop-blur-sm shadow-inner">
            <FolderOpen size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-white">{stats.totalDocuments}</p>
        <p className="text-xs text-cyan-100 font-medium uppercase tracking-wide">
          Total Documents
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform">
            <CheckCircle size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.currentDocuments}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Current
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-amber-100 text-amber-600 rounded-lg group-hover:scale-110 transition-transform">
            <Clock size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.expiringDocuments}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Expiring Soon
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform">
            <AlertCircle size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.expiredDocuments}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Expired
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg group-hover:scale-110 transition-transform">
            <Database size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">{stats.totalStorage}</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Total Storage
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-500 text-white rounded-lg group-hover:scale-110 transition-transform">
            <RefreshCcw size={16} />
          </div>
        </div>
        <p className="text-sm font-bold text-green-800">{stats.lastBackup}</p>
        <p className="text-xs text-green-600 font-medium uppercase tracking-wide">
          Last Backup
        </p>
      </div>
    </div>
  );
};

export default ComplianceStats;
