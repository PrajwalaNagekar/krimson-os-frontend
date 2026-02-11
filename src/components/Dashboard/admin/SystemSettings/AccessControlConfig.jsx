import React from "react";
import { Lock, UserCog, Key } from "lucide-react";

/**
 * @component AccessControlConfig
 * @description Component for managing access control and user roles.
 * @param {Object} permissions - The permissions and roles configuration data.
 */
const AccessControlConfig = ({ permissions }) => {
  if (!permissions || !permissions.roles) return null;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <Lock size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-800">Access Control</h3>
            <p className="text-slate-500 text-xs mt-0.5">Role permissions</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-3">
        {permissions.roles.map((role, idx) => (
          <div
            key={idx}
            className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-bold text-slate-800 text-sm">{role.name}</p>
                <p className="text-xs text-slate-500">{role.userCount} users</p>
              </div>
              <UserCog size={18} className="text-slate-400" />
            </div>
            <div className="flex gap-2 mt-3">
              {role.permissions.read && (
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-[10px] font-bold">
                  READ
                </span>
              )}
              {role.permissions.write && (
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-[10px] font-bold">
                  WRITE
                </span>
              )}
              {role.permissions.delete && (
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-md text-[10px] font-bold">
                  DELETE
                </span>
              )}
              {role.permissions.config && (
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md text-[10px] font-bold">
                  CONFIG
                </span>
              )}
            </div>
          </div>
        ))}

        <button className="w-full flex flex-col items-center gap-0.5 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg mt-4">
          <div className="flex items-center gap-2">
            <Key size={18} />
            <span>Modify Permissions</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AccessControlConfig;
