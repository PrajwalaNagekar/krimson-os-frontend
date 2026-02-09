import React from "react";
import { Smartphone, CheckCircle, Settings, UserCheck } from "lucide-react";

const TwoFactorAuthSettings = ({ twoFactorSettings }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-pink-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Smartphone className="text-pink-500" size={28} />
              Two-Factor Authentication Settings
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Manage 2FA policies and enrollment
            </p>
          </div>
          <div
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 ${
              twoFactorSettings.enabled
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${twoFactorSettings.enabled ? "bg-green-500" : "bg-red-500"} animate-pulse`}
            ></div>
            {twoFactorSettings.enabled ? "Enabled" : "Disabled"}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 2FA Method */}
          <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
            <p className="text-xs text-slate-500 uppercase font-bold mb-2">
              Authentication Method
            </p>
            <p className="text-lg font-bold text-slate-800">
              {twoFactorSettings.method}
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Primary & backup methods
            </p>
          </div>

          {/* Enrollment Stats */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
            <p className="text-xs text-slate-500 uppercase font-bold mb-2">
              User Enrollment
            </p>
            <p className="text-lg font-bold text-slate-800">
              {twoFactorSettings.enrolledUsers} / {twoFactorSettings.totalUsers}{" "}
              Users
            </p>
            <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${(twoFactorSettings.enrolledUsers / twoFactorSettings.totalUsers) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Mandatory Roles */}
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
            <p className="text-xs text-slate-500 uppercase font-bold mb-2">
              Mandatory for Roles
            </p>
            <div className="space-y-1 mt-2">
              {twoFactorSettings.mandatoryRoles.map((role, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span className="text-xs text-slate-700 font-medium">
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold hover:shadow-lg transition-all duration-200 cursor-not-allowed opacity-75 flex flex-col items-center gap-0.5 leading-tight">
            <span className="flex items-center gap-2">
              <Settings size={18} />
              Configure 2FA
            </span>
            <span className="text-[9px] opacity-60 font-normal">
              get in app
            </span>
          </button>
          <button className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-bold hover:shadow-lg transition-all duration-200 cursor-not-allowed opacity-75 flex flex-col items-center gap-0.5 leading-tight">
            <span className="flex items-center gap-2">
              <UserCheck size={18} />
              Enforce Policy
            </span>
            <span className="text-[9px] opacity-60 font-normal">
              get in app
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuthSettings;
