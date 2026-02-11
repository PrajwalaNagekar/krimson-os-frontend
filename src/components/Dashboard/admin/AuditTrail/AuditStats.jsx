import React from "react";
import {
  Activity,
  Plus,
  Edit,
  Trash2,
  Lock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const AuditStats = ({ weeklySummary }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
            <Activity size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {weeklySummary.totalEvents}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Total Events
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform">
            <Plus size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {weeklySummary.createEvents}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Created
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
            <Edit size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {weeklySummary.editEvents}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Edited
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform">
            <Trash2 size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {weeklySummary.deleteEvents}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Deleted
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg group-hover:scale-110 transition-transform">
            <Lock size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {weeklySummary.pdpaRelevant}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          PDPA Events
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform">
            <AlertCircle size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {weeklySummary.criticalEvents}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Critical
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-500 text-white rounded-lg group-hover:scale-110 transition-transform">
            <CheckCircle size={16} />
          </div>
        </div>
        <p className="text-sm font-bold text-green-800">99.8%</p>
        <p className="text-xs text-green-600 font-medium uppercase tracking-wide">
          Integrity
        </p>
      </div>
    </div>
  );
};

export default AuditStats;
