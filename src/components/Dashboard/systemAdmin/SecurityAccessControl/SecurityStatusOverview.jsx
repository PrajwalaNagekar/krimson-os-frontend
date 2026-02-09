import React from "react";
import { Shield, CheckCircle, Lock, Globe, Settings } from "lucide-react";

const SecurityStatusOverview = ({ securityMetrics }) => {
  return (
    <div className="group relative bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 lg:p-8 text-white shadow-xl overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-3">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl">
              <Shield size={28} />
            </div>
            Security Status Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30 hover:bg-white/30 transition-colors">
              <CheckCircle className="text-white" size={18} />
              <div>
                <p className="text-xs text-white/80 font-medium">MFA Status</p>
                <p className="text-sm font-bold text-white drop-shadow-md">
                  {securityMetrics.mfaStatus}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30 hover:bg-white/30 transition-colors">
              <Lock className="text-white" size={18} />
              <div>
                <p className="text-xs text-white/80 font-medium">Encryption</p>
                <p className="text-sm font-bold text-white drop-shadow-md">
                  {securityMetrics.encryption}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30 hover:bg-white/30 transition-colors">
              <Globe className="text-white" size={18} />
              <div>
                <p className="text-xs text-white/80 font-medium">
                  SSO Provider
                </p>
                <p className="text-sm font-bold text-white drop-shadow-md">
                  {securityMetrics.ssoProvider}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-2xl text-sm font-bold flex flex-col items-center leading-tight gap-0.5 backdrop-blur-md transition-all duration-200 border border-white/30 hover:border-white/40 cursor-not-allowed opacity-75">
          <span className="flex items-center gap-2">
            <Settings size={18} />
            Configure Policy
          </span>
          <span className="text-[9px] opacity-60 font-normal">get in app</span>
        </button>
      </div>
    </div>
  );
};

export default SecurityStatusOverview;
