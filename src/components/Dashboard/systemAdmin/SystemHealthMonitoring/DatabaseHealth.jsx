import React from "react";
import { Database } from "lucide-react";

const DatabaseHealth = ({ diskUsage, staticMetrics }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-green-400 to-cyan-400 opacity-5 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Database className="text-green-500" size={24} />
              Database Status
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Connection health monitoring
            </p>
          </div>
          <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Healthy
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-green-50 to-cyan-50 rounded-2xl">
            <p className="text-xs text-slate-500 mb-1">Connections</p>
            <p className="text-2xl font-bold text-slate-800">
              {staticMetrics.connections}
            </p>
          </div>
          <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
            <p className="text-xs text-slate-500 mb-1">Query Time</p>
            <p className="text-2xl font-bold text-slate-800">
              {staticMetrics.queryTime}
            </p>
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
            <p className="text-xs text-slate-500 mb-1">Cache Hit Rate</p>
            <p className="text-2xl font-bold text-slate-800">
              {staticMetrics.cacheHitRate}
            </p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
            <p className="text-xs text-slate-500 mb-1">Disk Usage</p>
            <p className="text-2xl font-bold text-slate-800">{diskUsage}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseHealth;
