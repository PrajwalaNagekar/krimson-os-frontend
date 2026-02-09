import React from "react";
import { Server, Cpu, HardDrive, Users, TrendingUp } from "lucide-react";

const SystemOverviewCards = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {/* Server Uptime */}
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl shadow-lg">
              <Server className="text-white" size={24} />
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
              Online
            </div>
          </div>
          <h3 className="text-slate-500 text-sm font-semibold mb-1">
            Server Uptime
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {data.uptime}
          </p>
          <p className="text-xs text-slate-400 mt-2">Last 30 days</p>
        </div>
      </div>

      {/* CPU Usage */}
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg">
              <Cpu className="text-white" size={24} />
            </div>
            <div
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                data.cpuUsage > 80
                  ? "bg-red-100 text-red-700"
                  : data.cpuUsage > 60
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
              }`}
            >
              {data.cpuUsage > 80
                ? "High"
                : data.cpuUsage > 60
                  ? "Medium"
                  : "Normal"}
            </div>
          </div>
          <h3 className="text-slate-500 text-sm font-semibold mb-1">
            CPU Usage
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {Math.round(data.cpuUsage)}%
          </p>
          <p className="text-xs text-slate-400 mt-2">8 Cores Active</p>
        </div>
      </div>

      {/* Memory Usage */}
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl shadow-lg">
              <HardDrive className="text-white" size={24} />
            </div>
            <div
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                data.memoryUsage > 85
                  ? "bg-red-100 text-red-700"
                  : data.memoryUsage > 70
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
              }`}
            >
              {data.memoryUsage > 85
                ? "Critical"
                : data.memoryUsage > 70
                  ? "Warning"
                  : "Good"}
            </div>
          </div>
          <h3 className="text-slate-500 text-sm font-semibold mb-1">
            Memory Usage
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {Math.round(data.memoryUsage)}%
          </p>
          <p className="text-xs text-slate-400 mt-2">16GB / 24GB Used</p>
        </div>
      </div>

      {/* Active Sessions */}
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-pink-400 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-2xl shadow-lg">
              <Users className="text-white" size={24} />
            </div>
            <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
              <TrendingUp size={12} className="inline mr-1" />
              Active
            </div>
          </div>
          <h3 className="text-slate-500 text-sm font-semibold mb-1">
            Active Sessions
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
            {data.activeSessions}
          </p>
          <p className="text-xs text-slate-400 mt-2">Concurrent Users</p>
        </div>
      </div>
    </div>
  );
};

export default SystemOverviewCards;
