import React from "react";
import {
  Mail,
  CheckCircle,
  Lock,
  AlertTriangle,
  XCircle,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const UserAccounts = ({ users, getStatusColor, getStatusIcon, totalUsers }) => {
  // Helper functions internal to component if not passed, but we'll accept them or define them here.
  // Defining here to be safe and self-contained if we don't pass them.
  const getStatusColorLocal = (status) => {
    switch (status) {
      case "Active":
        return "text-green-600 bg-green-50 border-green-200";
      case "Suspended":
        return "text-red-600 bg-red-50 border-red-200";
      case "Pending":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  const getStatusIconLocal = (status) => {
    switch (status) {
      case "Active":
        return <CheckCircle size={14} />;
      case "Suspended":
        return <Lock size={14} />;
      case "Pending":
        return <AlertTriangle size={14} />;
      default:
        return <XCircle size={14} />;
    }
  };

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                User (Full Name)
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gradient-to-r hover:from-cyan-50/30 hover:via-blue-50/30 hover:to-transparent transition-all group"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">
                        {user.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm text-slate-600 flex items-center gap-1">
                    <Mail size={14} />
                    {user.email}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {user.roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border border-cyan-200"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 w-fit ${getStatusColorLocal(user.status)}`}
                  >
                    {getStatusIconLocal(user.status)}
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Mockup */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
        <p className="text-xs font-bold text-slate-500 uppercase">
          Showing {users.length} of {totalUsers} Users
        </p>
        <div className="flex gap-2">
          <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 disabled:opacity-50">
            <ChevronDown className="rotate-90" size={16} />
          </button>
          <button className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAccounts;
