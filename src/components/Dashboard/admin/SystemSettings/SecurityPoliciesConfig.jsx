import React from "react";
import { Shield, Clock, Key, Lock, CheckCircle2 } from "lucide-react";

/**
 * @component SecurityPoliciesConfig
 * @description Component for configuring security policies.
 * @param {Object} policies - The security policies data.
 */
const SecurityPoliciesConfig = ({ policies }) => {
  if (!policies) return null;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <Shield size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-800">
              Security Policies
            </h3>
            <p className="text-slate-500 text-xs mt-0.5">System protection</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div>
            <p className="font-bold text-slate-700 text-sm flex items-center gap-2">
              <Shield size={16} className="text-green-500" />
              Two-Factor Auth
            </p>
            <p className="text-xs text-slate-500 mt-1">Admin only</p>
          </div>
          <CheckCircle2 size={20} className="text-green-500" />
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div>
            <p className="font-bold text-slate-700 text-sm flex items-center gap-2">
              <Clock size={16} className="text-blue-500" />
              Session Timeout
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {policies.sessionTimeout} minutes
            </p>
          </div>
          <CheckCircle2 size={20} className="text-green-500" />
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div>
            <p className="font-bold text-slate-700 text-sm flex items-center gap-2">
              <Key size={16} className="text-purple-500" />
              Password Expiry
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {policies.passwordExpiry} days
            </p>
          </div>
          <CheckCircle2 size={20} className="text-green-500" />
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div>
            <p className="font-bold text-slate-700 text-sm flex items-center gap-2">
              <Lock size={16} className="text-red-500" />
              Max Login Attempts
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {policies.loginAttempts} attempts
            </p>
          </div>
          <CheckCircle2 size={20} className="text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default SecurityPoliciesConfig;
