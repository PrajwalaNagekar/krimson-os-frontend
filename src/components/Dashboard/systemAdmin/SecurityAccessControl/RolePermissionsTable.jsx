import React from "react";
import { FileText, Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";

const RolePermissionsTable = ({ rolePermissions }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <FileText className="text-blue-500" size={28} />
              Role-Based Permissions
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              View and edit log access by role
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gradient-to-r from-blue-50 to-purple-50 text-slate-600 text-xs uppercase font-bold">
              <tr>
                <th className="p-4 rounded-tl-xl">Role</th>
                <th className="p-4 text-center">View Logs</th>
                <th className="p-4 text-center">Edit Logs</th>
                <th className="p-4 text-center">Manage Users</th>
                <th className="p-4 text-center">System Settings</th>
                <th className="p-4 rounded-tr-xl text-center">
                  Security Config
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rolePermissions.map((role, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-4">
                    <span
                      className={`px-4 py-2 bg-gradient-to-r ${role.color} text-white rounded-xl text-sm font-bold`}
                    >
                      {role.role}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    {role.permissions.viewLogs ? (
                      <div className="flex justify-center">
                        <div className="p-2 bg-green-100 rounded-full">
                          <Eye className="text-green-600" size={18} />
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <div className="p-2 bg-red-100 rounded-full">
                          <EyeOff className="text-red-600" size={18} />
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {role.permissions.editLogs ? (
                      <CheckCircle
                        className="text-green-600 mx-auto"
                        size={20}
                      />
                    ) : (
                      <XCircle className="text-red-600 mx-auto" size={20} />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {role.permissions.manageUsers ? (
                      <CheckCircle
                        className="text-green-600 mx-auto"
                        size={20}
                      />
                    ) : (
                      <XCircle className="text-red-600 mx-auto" size={20} />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {role.permissions.systemSettings ? (
                      <CheckCircle
                        className="text-green-600 mx-auto"
                        size={20}
                      />
                    ) : (
                      <XCircle className="text-red-600 mx-auto" size={20} />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {role.permissions.securityConfig ? (
                      <CheckCircle
                        className="text-green-600 mx-auto"
                        size={20}
                      />
                    ) : (
                      <XCircle className="text-red-600 mx-auto" size={20} />
                    )}
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

export default RolePermissionsTable;
