import React from "react";
import {
  Users,
  CheckCircle,
  Lock,
  AlertTriangle,
  Activity,
} from "lucide-react";

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
      <div className="relative rounded-2xl p-4 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all group">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative z-10 flex items-center gap-3">
          <div className="p-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl group-hover:scale-110 transition-transform shadow-md">
            <Users size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-white drop-shadow-sm">
              {stats.totalUsers}
            </p>
            <p className="text-xs text-white/90 font-medium uppercase tracking-wide">
              Total Users
            </p>
          </div>
        </div>
      </div>

      <div className="relative rounded-2xl p-4 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all group">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative z-10 flex items-center gap-3">
          <div className="p-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl group-hover:scale-110 transition-transform shadow-md">
            <CheckCircle size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-white drop-shadow-sm">
              {stats.activeUsers}
            </p>
            <p className="text-xs text-white/90 font-medium uppercase tracking-wide">
              Active Users
            </p>
          </div>
        </div>
      </div>

      <div className="relative rounded-2xl p-4 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all group">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative z-10 flex items-center gap-3">
          <div className="p-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl group-hover:scale-110 transition-transform shadow-md">
            <Lock size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-white drop-shadow-sm">
              {stats.suspendedUsers}
            </p>
            <p className="text-xs text-white/90 font-medium uppercase tracking-wide">
              Suspended
            </p>
          </div>
        </div>
      </div>

      <div className="relative rounded-2xl p-4 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all group">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative z-10 flex items-center gap-3">
          <div className="p-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl group-hover:scale-110 transition-transform shadow-md">
            <AlertTriangle size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-white drop-shadow-sm">
              {stats.pendingUsers}
            </p>
            <p className="text-xs text-white/90 font-medium uppercase tracking-wide">
              Pending
            </p>
          </div>
        </div>
      </div>

      <div className="relative rounded-2xl p-4 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative z-10 flex items-center gap-3">
          <div className="p-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl group-hover:scale-110 transition-transform shadow-md">
            <Activity size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-white drop-shadow-sm">
              {stats.recentRoleChanges}
            </p>
            <p className="text-xs text-white/90 font-medium uppercase tracking-wide">
              Role Changes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
