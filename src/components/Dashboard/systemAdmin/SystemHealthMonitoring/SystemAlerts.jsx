import React from "react";
import { AlertTriangle, Clock, CheckCircle } from "lucide-react";

const SystemAlerts = ({ alerts }) => {
  return (
    <div className="lg:col-span-2 group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-red-400 to-pink-400 opacity-5 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <AlertTriangle className="text-red-500" size={24} />
              Error & Downtime Alerts
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Real-time system notifications
            </p>
          </div>
          <div className="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-bold">
            {alerts.length} Active
          </div>
        </div>

        <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
          {alerts.length > 0 ? (
            alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-2xl border-l-4 transition-all duration-300 hover:shadow-md ${
                  alert.type === "error"
                    ? "bg-red-50/50 border-red-500"
                    : "bg-yellow-50/50 border-yellow-500"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div
                      className={`p-2 rounded-lg mt-1 ${
                        alert.type === "error" ? "bg-red-100" : "bg-yellow-100"
                      }`}
                    >
                      <AlertTriangle
                        size={18}
                        className={
                          alert.type === "error"
                            ? "text-red-600"
                            : "text-yellow-600"
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-semibold text-sm mb-1 ${
                          alert.type === "error"
                            ? "text-red-800"
                            : "text-yellow-800"
                        }`}
                      >
                        {alert.msg}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {alert.time}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full font-bold ${
                            alert.severity === "high"
                              ? "bg-red-200 text-red-700"
                              : "bg-yellow-200 text-yellow-700"
                          }`}
                        >
                          {alert.severity.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-xs font-bold hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap cursor-not-allowed opacity-75 flex flex-col items-center leading-tight">
                    <span>Resolve</span>
                    <span className="text-[9px] opacity-60 font-normal">
                      get in app
                    </span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <CheckCircle className="mx-auto mb-3 text-green-500" size={48} />
              <p className="font-bold text-slate-700 mb-1">
                All Systems Operational
              </p>
              <p className="text-sm text-slate-500">
                No active alerts or errors detected
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SystemAlerts;
