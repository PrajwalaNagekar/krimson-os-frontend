import React from "react";
import { Activity } from "lucide-react";

const CloudServiceLogs = ({ logs }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Activity className="text-blue-500" size={24} />
              Cloud Service Logs
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Recent activity stream
            </p>
          </div>
        </div>

        <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
          {logs.map((log, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  log.status === "success" ? "bg-green-500" : "bg-blue-500"
                }`}
              ></div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 font-medium">
                  {log.event}
                </p>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {log.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudServiceLogs;
