import React from "react";
import { Calendar, Users, Activity, Clock } from "lucide-react";

/**
 * @component SystemStatsCards
 * @description Display summary statistics cards for the System Settings page.
 * @param {Object} stats - The statistics data object.
 */
const SystemStatsCards = ({ stats }) => {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Academic Year Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
            <Calendar size={24} strokeWidth={2.5} />
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
            {stats.activeAcademicYear}
          </h3>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
            Active Academic Year
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Current session in progress
          </p>
        </div>
      </div>

      {/* Configured Users */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl group-hover:scale-110 transition-transform">
            <Users size={24} strokeWidth={2.5} />
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
            {stats.configuredUsers.toLocaleString()}
          </h3>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
            Configured Users
          </p>
          <p className="text-xs text-slate-400 mt-2">Across all roles</p>
        </div>
      </div>

      {/* System Uptime */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-2xl group-hover:scale-110 transition-transform">
            <Activity size={24} strokeWidth={2.5} />
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
            {stats.systemUptime}%
          </h3>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
            System Uptime
          </p>
          <p className="text-xs text-slate-400 mt-2">Last 30 days average</p>
        </div>
      </div>

      {/* Last Update */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-cyan-50 text-cyan-600 rounded-2xl group-hover:scale-110 transition-transform">
            <Clock size={24} strokeWidth={2.5} />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-slate-800 mb-1">
            {stats.lastUpdate}
          </h3>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
            Last Configuration
          </p>
          <p className="text-xs text-slate-400 mt-2">System settings updated</p>
        </div>
      </div>
    </div>
  );
};

export default SystemStatsCards;
