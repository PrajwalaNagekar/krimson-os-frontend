import React from "react";
import {
  Users,
  CheckCircle,
  XCircle,
  Clock,
  Activity,
  TrendingUp,
} from "lucide-react";

const AttendanceStats = ({ summary }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
            <Users size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {summary.totalStudents}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Total Students
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform">
            <CheckCircle size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">{summary.present}</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Present Today
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform">
            <XCircle size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">{summary.absent}</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Absent
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-amber-100 text-amber-600 rounded-lg group-hover:scale-110 transition-transform">
            <Clock size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">{summary.late}</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Late Arrivals
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-cyan-100 text-cyan-600 rounded-lg group-hover:scale-110 transition-transform">
            <Activity size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {summary.overallRate}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Overall Rate
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-500 text-white rounded-lg group-hover:scale-110 transition-transform">
            <TrendingUp size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-green-800">{summary.trend}</p>
        <p className="text-xs text-green-600 font-medium uppercase tracking-wide">
          vs Last Week
        </p>
      </div>
    </div>
  );
};

export default AttendanceStats;
