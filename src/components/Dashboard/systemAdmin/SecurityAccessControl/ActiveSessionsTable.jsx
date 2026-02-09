import React from "react";
import { Activity, Clock, Lock, Unlock, Key, LogOut } from "lucide-react";

const ActiveSessionsTable = ({ activeSessions }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Activity className="text-cyan-500" size={28} />
              Active User Sessions
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Monitor and manage current user sessions
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gradient-to-r from-slate-50 to-blue-50 text-slate-600 text-xs uppercase font-bold">
              <tr>
                <th className="p-4 rounded-tl-xl">User Info</th>
                <th className="p-4">Role</th>
                <th className="p-4">Device & Location</th>
                <th className="p-4">Session</th>
                <th className="p-4">Status</th>
                <th className="p-4 rounded-tr-xl text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {activeSessions.map((session) => (
                <tr
                  key={session.id}
                  className="hover:bg-slate-50/50 transition-colors group/row"
                >
                  <td className="p-4">
                    <div>
                      <p className="font-bold text-slate-800">{session.name}</p>
                      <p className="text-xs text-slate-500">{session.email}</p>
                      <p className="text-xs text-slate-400 font-mono mt-1">
                        {session.id}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-xs font-bold">
                      {session.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="text-sm">
                      <p className="text-slate-700 font-medium">
                        {session.device}
                      </p>
                      <p className="text-xs text-slate-500">
                        {session.location}
                      </p>
                      <p className="text-xs text-slate-400 font-mono">
                        {session.ipAddress}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-sm">
                      <p className="text-slate-700 font-medium flex items-center gap-1">
                        <Clock size={12} className="text-slate-400" />
                        {session.sessionDuration}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {session.lastLogin}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        session.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {session.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      {session.status === "Active" ? (
                        <button
                          className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors cursor-not-allowed opacity-75 group/btn relative"
                          title="Revoke Access"
                        >
                          <Lock size={16} />
                          <span className="absolute hidden group-hover/btn:block bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap">
                            Get in App
                          </span>
                        </button>
                      ) : (
                        <button
                          className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors cursor-not-allowed opacity-75 group/btn relative"
                          title="Unlock User"
                        >
                          <Unlock size={16} />
                          <span className="absolute hidden group-hover/btn:block bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap">
                            Get in App
                          </span>
                        </button>
                      )}
                      <button
                        className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors cursor-not-allowed opacity-75 group/btn relative"
                        title="Reset Password"
                      >
                        <Key size={16} />
                        <span className="absolute hidden group-hover/btn:block bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap">
                          Get in App
                        </span>
                      </button>
                      <button
                        className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors cursor-not-allowed opacity-75 group/btn relative"
                        title="Force Logout"
                      >
                        <LogOut size={16} />
                        <span className="absolute hidden group-hover/btn:block bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap">
                          Get in App
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActiveSessionsTable;
