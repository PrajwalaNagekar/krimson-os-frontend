import React from "react";
import { Play, Download, Upload, AlertCircle } from "lucide-react";

const ManualBackupActions = ({ backupConfig, storageBreakdown }) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
          <Play size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800">
            Manual Backup & Actions
          </h3>
          <p className="text-sm text-slate-500">Trigger backups on-demand</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Manual Backup Button */}
        <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-xl hover:shadow-lg transition-all flex flex-col items-center gap-1 shadow-md shadow-purple-500/20">
          <div className="flex items-center gap-2">
            <Play size={20} />
            <span>Trigger Manual Backup Now</span>
          </div>
          <span className="text-xs text-white/70">
            Creates full system backup immediately
          </span>
        </button>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="p-4 bg-green-50 hover:bg-green-100 text-green-600 rounded-xl font-bold text-sm transition-all border border-green-200 flex flex-col items-center gap-1">
            <Download size={20} />
            <span>Download Latest</span>
          </button>
          <button className="p-4 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl font-bold text-sm transition-all border border-blue-200 flex flex-col items-center gap-1">
            <Upload size={20} />
            <span>Restore Data</span>
          </button>
        </div>

        {/* Storage Breakdown */}
        <div>
          <h4 className="text-sm font-bold text-slate-700 mb-3">
            Storage Breakdown
          </h4>
          <div className="space-y-3">
            {storageBreakdown.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">
                    {item.category}
                  </span>
                  <span className="font-bold text-slate-600">{item.size}</span>
                </div>
                <div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  >
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <div className="flex items-start gap-2">
            <AlertCircle size={16} className="text-amber-600 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-amber-800 mb-1">
                Retention Policy
              </p>
              <p className="text-xs text-amber-700">
                Backups are retained for {backupConfig.retentionPeriod}. Older
                backups are automatically archived.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualBackupActions;
