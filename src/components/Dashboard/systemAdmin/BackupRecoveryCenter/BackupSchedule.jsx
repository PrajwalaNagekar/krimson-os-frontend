import React from "react";
import { Zap, Settings, Upload, CheckCircle, RefreshCw } from "lucide-react";

const BackupSchedule = ({ schedule }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Automated Backup Schedule */}
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Zap className="text-cyan-500" size={24} />
                Automated Backup Schedule
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Scheduled backup configuration
              </p>
            </div>
            <div
              className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 ${
                schedule.automated.enabled
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${schedule.automated.enabled ? "bg-green-500" : "bg-red-500"} animate-pulse`}
              ></div>
              {schedule.automated.enabled ? "Active" : "Inactive"}
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Frequency
                </p>
                <p className="text-sm font-bold text-slate-800">
                  {schedule.automated.frequency}
                </p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Time
                </p>
                <p className="text-sm font-bold text-slate-800">
                  {schedule.automated.time}
                </p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Type
                </p>
                <p className="text-sm font-bold text-slate-800">
                  {schedule.automated.type}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Destination
                </p>
                <p className="text-sm font-bold text-slate-800">
                  {schedule.automated.destination}
                </p>
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold hover:shadow-lg transition-all duration-200 cursor-not-allowed opacity-75 flex flex-col items-center gap-0.5 leading-tight">
              <span className="flex items-center gap-2">
                <Settings size={18} />
                Configure Schedule
              </span>
              <span className="text-[9px] opacity-60 font-normal">
                get in app
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Manual Backup */}
      <div className="group relative bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 lg:p-8 text-white shadow-xl overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
              <Upload size={24} />
              Manual Backup Trigger
            </h3>
            <p className="text-white/80 text-sm">
              Initiate on-demand backup process
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-6 border border-white/20">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-white/70">
                  Last Manual Backup
                </span>
                <span className="text-sm font-bold">
                  {schedule.manual.lastTriggered}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-white/70">Triggered By</span>
                <span className="text-sm font-bold">
                  {schedule.manual.triggeredBy}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-white/70">Status</span>
                <span className="text-sm font-bold flex items-center gap-1">
                  <CheckCircle size={14} />
                  {schedule.manual.status}
                </span>
              </div>
            </div>
          </div>

          <button className="w-full px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-2xl font-bold transition-all duration-200 border border-white/30 cursor-not-allowed opacity-75 flex flex-col items-center gap-0.5 leading-tight">
            <span className="flex items-center gap-2">
              <RefreshCw size={18} />
              Trigger Manual Backup
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

export default BackupSchedule;
