import React from "react";
import { ADMIN_DATA } from "../../../../data/adminData";

const AdminAlerts = () => {
  const { alerts } = ADMIN_DATA.ADMIN_OVERVIEW_DATA;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-slate-800">Alerts</h2>
        <span className="bg-red-50 text-red-600 px-2.5 py-1 rounded-lg text-xs font-bold">
          {alerts.filter((a) => a.severity === "high").length} Critical
        </span>
      </div>

      <div className="space-y-4">
        {alerts.slice(0, 3).map((alert, idx) => (
          <div
            key={idx}
            className="flex gap-3 items-start p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group"
          >
            <div
              className={`
                   w-2 h-2 rounded-full mt-2 flex-shrink-0
                   ${
                     alert.severity === "high"
                       ? "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                       : alert.severity === "medium"
                         ? "bg-amber-400"
                         : "bg-blue-400"
                   }
                `}
            />
            <div>
              <p className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 leading-snug">
                {alert.message}
              </p>
              <p className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-wide">
                {alert.timestamp} • {alert.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAlerts;
