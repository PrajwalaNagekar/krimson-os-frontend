import React from "react";
import {
  Monitor,
  AlertTriangle,
  Shield,
  UserCheck,
  ShieldAlert,
} from "lucide-react";

const SecurityEscalations = ({ stats, logs }) => {
  // Mapping helpers
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Monitor":
        return Monitor;
      case "AlertTriangle":
        return AlertTriangle;
      case "Shield":
        return Shield;
      case "UserCheck":
        return UserCheck;
      default:
        return Shield;
    }
  };

  return (
    <div className="p-6">
      <div className="space-y-6">
        {/* Security Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {stats &&
            stats.map((stat, idx) => {
              const Icon = getIcon(stat.icon);
              return (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white opacity-10 rounded-full blur-xl -translate-y-1/3 translate-x-1/4" />
                  <div className="relative z-10">
                    <Icon size={20} className="text-white mb-2" />
                    <p className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-white/90 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Security Audit Log */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <ShieldAlert size={20} className="text-cyan-600" />
            Security Audit Log
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                    IP Address
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                    Risk Level
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {logs &&
                  logs.map((log, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gradient-to-r hover:from-cyan-50/30 hover:via-blue-50/30 hover:to-transparent transition-all"
                    >
                      <td className="px-4 py-3">
                        <span className="text-sm font-bold text-slate-800">
                          {log.event}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm text-slate-600">
                          {log.user}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm text-slate-500 font-mono">
                          {log.ip}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs text-slate-500">
                          {log.time}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${log.riskColor} text-white shadow-sm`}
                        >
                          {log.risk}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityEscalations;
