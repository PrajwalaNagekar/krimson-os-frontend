import React from "react";
import { Bell, AlertTriangle } from "lucide-react";

const InfrastructureAlerts = ({ alerts }) => {
  if (alerts.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 border border-red-200 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-red-100 text-red-600 rounded-2xl">
          <Bell size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-red-900">Active Alerts</h3>
          <p className="text-sm text-red-700">
            {alerts.length} items require attention
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {alerts.slice(0, 6).map((alert, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl border ${
              alert.severity === "critical"
                ? "bg-red-100 border-red-200"
                : "bg-amber-100 border-amber-200"
            }`}
          >
            <div className="flex items-start gap-3">
              <AlertTriangle
                size={18}
                className={
                  alert.severity === "critical"
                    ? "text-red-600"
                    : "text-amber-600"
                }
              />
              <div className="flex-1">
                <p
                  className={`font-bold text-sm ${alert.severity === "critical" ? "text-red-800" : "text-amber-800"}`}
                >
                  {alert.message}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  {alert.type === "shortage"
                    ? "Inventory Alert"
                    : "Maintenance Alert"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfrastructureAlerts;
