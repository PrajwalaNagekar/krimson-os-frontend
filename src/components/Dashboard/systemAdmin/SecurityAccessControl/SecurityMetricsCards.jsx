import React from "react";
import { Users, UserCheck, AlertTriangle, XCircle } from "lucide-react";

const SecurityMetricsCards = ({
  activeSessions,
  twoFactorSettings,
  securityMetrics,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl w-fit mb-4">
            <Users className="text-white" size={24} />
          </div>
          <h3 className="text-slate-500 text-sm font-semibold mb-1">
            Active Sessions
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {activeSessions.filter((s) => s.status === "Active").length}
          </p>
          <p className="text-xs text-slate-400 mt-2">Currently logged in</p>
        </div>
      </div>

      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 opacity-10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl w-fit mb-4">
            <UserCheck className="text-white" size={24} />
          </div>
          <h3 className="text-slate-500 text-sm font-semibold mb-1">
            2FA Enrolled
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {twoFactorSettings.enrolledUsers}/{twoFactorSettings.totalUsers}
          </p>
          <p className="text-xs text-slate-400 mt-2">
            {Math.round(
              (twoFactorSettings.enrolledUsers / twoFactorSettings.totalUsers) *
                100,
            )}
            % adoption rate
          </p>
        </div>
      </div>

      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 opacity-10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl w-fit mb-4">
            <AlertTriangle className="text-white" size={24} />
          </div>
          <h3 className="text-slate-500 text-sm font-semibold mb-1">
            Failed Logins
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {securityMetrics.failedLoginAttempts}
          </p>
          <p className="text-xs text-slate-400 mt-2">Last 24 hours</p>
        </div>
      </div>

      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-red-400 to-pink-400 opacity-10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl w-fit mb-4">
            <XCircle className="text-white" size={24} />
          </div>
          <h3 className="text-slate-500 text-sm font-semibold mb-1">
            Blocked IPs
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            {securityMetrics.blockedIPs}
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Security threats blocked
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityMetricsCards;
