import React from "react";
import {
  UserCheck,
  Users,
  Clock,
  Settings,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const PermissionsManage = ({ proxyData }) => {
  const permissions = [
    "View All Students",
    "Staff Management",
    "Approve Leaves",
    "View Financial Reports",
    "Academic Oversight",
    "Event Management",
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Proxy Access Assignment */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 md:p-8 rounded-3xl border-2 border-pink-200 shadow-md">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <UserCheck className="text-white" size={28} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-lg md:text-xl">
              Proxy Access Assignment
            </h3>
            <p className="text-slate-600">
              Delegate administrative access to Vice Principal
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-6 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                <Users className="text-purple-700" size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-lg">
                  {proxyData.assignedTo}
                </p>
                <p className="text-purple-600 font-bold text-sm bg-purple-50 px-2 py-0.5 rounded-lg inline-block">
                  {proxyData.role}
                </p>
              </div>
            </div>
            <div className="w-12 h-7 relative inline-flex items-center cursor-pointer">
              <div className="w-12 h-7 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
              <div className="absolute right-1 w-5 h-5 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>

          <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500 font-medium">Access Level</span>
              <span className="font-bold text-slate-700">
                {proxyData.accessLevel}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500 font-medium">Valid Until</span>
              <div className="flex items-center gap-1">
                <Clock className="text-amber-600" size={14} />
                <span className="font-bold text-amber-600">
                  {proxyData.validUntil}
                </span>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3.5 rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
          <Settings size={18} />
          <span>Modify Proxy Settings</span>
          <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-white">
            (get in app)
          </span>
        </button>

        <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
          <AlertCircle
            className="text-amber-600 flex-shrink-0 mt-0.5"
            size={18}
          />
          <p className="text-sm text-amber-800 font-medium">
            Proxy admin access allows full control over student and staff
            records. Please audit this access regularly.
          </p>
        </div>
      </div>

      {/* Role Capabilities (Generic) */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 relative overflow-hidden">
        <h2 className="text-lg font-bold text-slate-800 mb-4">
          Your Administrative Privileges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {permissions.map((perm, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-sm font-bold text-slate-700"
            >
              <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
              {perm}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PermissionsManage;
