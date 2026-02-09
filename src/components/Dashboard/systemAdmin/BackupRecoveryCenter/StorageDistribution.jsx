import React from "react";
import { Cloud, Server, CheckCircle } from "lucide-react";

const StorageDistribution = ({ cloudSummary, localSummary }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Cloud Backup Summary */}
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Cloud className="text-cyan-500" size={24} />
                Cloud Backup Summary
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                {cloudSummary.provider}
              </p>
            </div>
            <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {cloudSummary.syncStatus}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
              <p className="text-xs text-slate-500 mb-1">Region</p>
              <p className="text-sm font-bold text-slate-800">
                {cloudSummary.region}
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
              <p className="text-xs text-slate-500 mb-1">Total Size</p>
              <p className="text-sm font-bold text-slate-800">
                {cloudSummary.totalSize}
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <p className="text-xs text-slate-500 mb-1">Files Count</p>
              <p className="text-sm font-bold text-slate-800">
                {cloudSummary.filesCount}
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-pink-50 to-cyan-50 rounded-2xl">
              <p className="text-xs text-slate-500 mb-1">Bandwidth</p>
              <p className="text-sm font-bold text-slate-800">
                {cloudSummary.bandwidth}
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-slate-50 rounded-xl">
            <p className="text-xs text-slate-500">
              Last Sync:{" "}
              <span className="font-bold text-slate-700">
                {cloudSummary.lastSync}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Local Backup Summary */}
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-pink-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Server className="text-pink-500" size={24} />
                Local Backup Summary
              </h3>
              <p className="text-sm text-slate-500 mt-1 font-mono text-xs">
                {localSummary.path}
              </p>
            </div>
            <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center gap-2">
              <CheckCircle size={14} />
              {localSummary.status}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
              <p className="text-xs text-slate-500 mb-1">Total Size</p>
              <p className="text-sm font-bold text-slate-800">
                {localSummary.totalSize}
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
              <p className="text-xs text-slate-500 mb-1">Files Count</p>
              <p className="text-sm font-bold text-slate-800">
                {localSummary.filesCount}
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
              <p className="text-xs text-slate-500 mb-1">Disk Usage</p>
              <p className="text-sm font-bold text-slate-800">
                {localSummary.diskSpace}
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-pink-50 rounded-2xl">
              <p className="text-xs text-slate-500 mb-1">Last Backup</p>
              <p className="text-sm font-bold text-slate-800">
                {localSummary.lastBackup}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: "42%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageDistribution;
