import React from "react";
import { FileText, AlertCircle, RefreshCw, Clock } from "lucide-react";

const StatsGrid = ({ stats }) => {
  return (
    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
            <FileText size={24} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase">
            Total Logs
          </span>
        </div>
        <h3 className="text-3xl font-bold text-slate-800 mb-1">
          {stats.totalLogs}
        </h3>
        <p className="text-xs text-slate-500">Recorded activities this year</p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-red-100 rounded-2xl text-red-600">
            <AlertCircle size={24} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase">
            Incidents
          </span>
        </div>
        <h3 className="text-3xl font-bold text-slate-800 mb-1">
          {stats.securityIncidents}
        </h3>
        <p className="text-xs text-slate-500">
          Security flags requiring attention
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-purple-100 rounded-2xl text-purple-600">
            <RefreshCw size={24} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase">
            Maintenance
          </span>
        </div>
        <h3 className="text-3xl font-bold text-slate-800 mb-1">
          {stats.maintenanceTasks}
        </h3>
        <p className="text-xs text-slate-500">Tasks completed this month</p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-green-100 rounded-2xl text-green-600">
            <Clock size={24} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase">
            Last Audit
          </span>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-1">
          {stats.lastAudit}
        </h3>
        <p className="text-xs text-slate-500">System scan completed</p>
      </div>
    </div>
  );
};

export default StatsGrid;
