import React from "react";
import { Server } from "lucide-react";

/**
 * @component SystemHealthCard
 * @description Component for displaying system health status.
 */
const SystemHealthCard = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-6 rounded-3xl text-white shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
      <div className="relative z-10">
        <Server size={32} className="mb-3 text-cyan-200" />
        <h3 className="font-bold text-lg mb-2">System Health</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-cyan-100">Database</span>
            <span className="font-bold">PostgreSQL 14</span>
          </div>
          <div className="flex justify-between">
            <span className="text-cyan-100">Last Backup</span>
            <span className="font-bold">2 hrs ago</span>
          </div>
          <div className="flex justify-between">
            <span className="text-cyan-100">Server Status</span>
            <span className="font-bold flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Online
            </span>
          </div>
        </div>
        <button className="w-full mt-4 py-2.5 bg-white text-cyan-600 font-bold rounded-xl hover:bg-cyan-50 transition-colors shadow-lg text-sm">
          Run Diagnostics
        </button>
      </div>
    </div>
  );
};

export default SystemHealthCard;
