import React from "react";
import {
  UserPlus,
  Shield,
  Key,
  Lock,
  AlertTriangle,
  ShieldAlert,
  Clock,
} from "lucide-react";

const ActivityLogs = ({ logs }) => {
  // Fallback data if logs are missing or empty, to match original UI hardcoded data if needed
  // But we prefer passing data from parent.
  // We will assume parent passes the CORRECT data structure.
  // The original hardcoded data had: action, user, target, time, type, icon.
  // adminData.activityLogs has: action, userName, description, timestamp, category...
  // We need to map `adminData` format to the UI expectation or update UI to use `adminData` keys.

  // Let's adapt the UI to `adminData` keys.
  // adminData keys: id, userName, action, description, timestamp, status, category

  const getIconForCategory = (category) => {
    switch (category) {
      case "Authentication":
        return Key;
      case "Role Management":
        return Shield;
      case "Account Management":
        return UserPlus;
      case "Security":
        return ShieldAlert;
      default:
        return Activity;
    }
  };

  const getIconForAction = (action) => {
    if (action.includes("Login")) return Lock;
    if (action.includes("Role")) return Shield;
    if (action.includes("Password")) return Key;
    if (action.includes("Suspended")) return AlertTriangle;
    return UserPlus;
  };

  const getTypeColor = (status) => {
    switch (status) {
      case "Success":
        return "success";
      case "Failed":
        return "danger";
      case "Warning":
        return "warning";
      default:
        return "info";
    }
  };

  // Helper for original hardcoded data if we want to stick to that for now?
  // User said "static data store in src/data/adminData.js".
  // So we SHOULD use the props.logs which comes from adminData.

  return (
    <div className="p-6">
      <div className="space-y-4">
        {/* Activity Timeline */}
        <div className="relative">
          {logs &&
            logs.map((log, idx) => {
              const Icon = getIconForAction(log.action);
              const type = getTypeColor(log.status);

              return (
                <div key={idx} className="relative pl-8 pb-8 last:pb-0">
                  {/* Timeline Line */}
                  {idx !== logs.length - 1 && (
                    <div className="absolute left-2.5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-200 to-transparent" />
                  )}

                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 top-1 w-5 h-5 rounded-full flex items-center justify-center shadow-md ${
                      type === "success"
                        ? "bg-gradient-to-br from-green-400 to-emerald-500"
                        : type === "danger"
                          ? "bg-gradient-to-br from-pink-400 to-rose-500"
                          : type === "warning"
                            ? "bg-gradient-to-br from-amber-400 to-orange-500"
                            : "bg-gradient-to-br from-cyan-400 to-blue-500"
                    }`}
                  >
                    <Icon size={10} className="text-white" />
                  </div>

                  {/* Log Content */}
                  <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-4 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-sm mb-1">
                          {log.action}
                        </h4>
                        <p className="text-xs text-slate-500 mb-2">
                          <span className="font-semibold text-slate-600">
                            By: {log.userName || log.user}
                          </span>{" "}
                          • {log.description || log.target}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Clock size={12} />
                          {log.timestamp || log.time}
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${
                          type === "success"
                            ? "bg-green-50 text-green-600 border border-green-200"
                            : type === "danger"
                              ? "bg-red-50 text-red-600 border border-red-200"
                              : type === "warning"
                                ? "bg-amber-50 text-amber-600 border border-amber-200"
                                : "bg-cyan-50 text-cyan-600 border border-cyan-200"
                        }`}
                      >
                        {log.status || log.type}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;
