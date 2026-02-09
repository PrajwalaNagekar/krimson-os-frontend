import React from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

const EmergencyRecovery = () => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-red-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-red-400 to-pink-400 opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <AlertCircle className="text-red-500" size={24} />
              Disaster Recovery
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Emergency system rollback capability
            </p>
          </div>
        </div>

        <div className="p-4 bg-red-50 rounded-2xl border border-red-100 mb-4">
          <p className="text-sm text-red-800">
            <span className="font-bold">⚠️ Warning:</span> Rollback will restore
            the system to a previous stable state. This action is logged and
            requires administrative approval. All recent changes will be
            reverted.
          </p>
        </div>

        <button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl font-bold hover:shadow-lg transition-all duration-200 cursor-not-allowed opacity-75 flex flex-col items-center gap-0.5 leading-tight">
          <span className="flex items-center gap-2">
            <RefreshCw size={18} />
            Initiate Emergency Rollback
          </span>
          <span className="text-[9px] opacity-60 font-normal">get in app</span>
        </button>
      </div>
    </div>
  );
};

export default EmergencyRecovery;
