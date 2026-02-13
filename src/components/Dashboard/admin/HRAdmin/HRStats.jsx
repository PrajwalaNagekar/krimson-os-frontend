import React from "react";
import {
  Users,
  CheckCircle,
  Coffee,
  ClipboardCheck,
  Activity,
  Fingerprint,
} from "lucide-react";

const HRStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
            <Users size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">
              {stats.totalStaff}
            </p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
              Total Staff
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-green-100 text-green-600 rounded-xl group-hover:scale-110 transition-transform">
            <CheckCircle size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">
              {stats.activeToday}
            </p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
              Present Today
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-100 text-amber-600 rounded-xl group-hover:scale-110 transition-transform">
            <Coffee size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">{stats.onLeave}</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
              On Leave
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
            <ClipboardCheck size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">
              {stats.pendingApprovals}
            </p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
              Pending Leaves
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-100 text-cyan-600 rounded-xl group-hover:scale-110 transition-transform">
            <Activity size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">
              {stats.avgAttendance}
            </p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
              Avg Attendance
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-100 text-indigo-600 rounded-xl group-hover:scale-110 transition-transform">
            <Fingerprint size={20} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">Synced</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
              Biometric
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRStats;
