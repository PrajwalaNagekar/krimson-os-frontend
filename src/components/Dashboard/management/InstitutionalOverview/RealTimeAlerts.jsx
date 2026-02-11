import React from "react";
import { Bell, AlertTriangle } from "lucide-react";

const getSeverityColor = (severity) => {
  switch (severity) {
    case "high":
      return "border-red-200 bg-red-50";
    case "medium":
      return "border-yellow-200 bg-yellow-50";
    case "low":
      return "border-blue-200 bg-blue-50";
    default:
      return "border-gray-200 bg-gray-50";
  }
};

const RealTimeAlerts = ({ alerts }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl">
          <Bell className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Real-Time Alerts</h2>
          <p className="text-xs text-gray-600">
            Critical notifications requiring immediate attention
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-2xl border-2 ${getSeverityColor(alert.severity)} transition-all hover:shadow-md`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <AlertTriangle
                  className={`w-5 h-5 ${alert.severity === "high" ? "text-red-600" : "text-yellow-600"}`}
                />
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${alert.severity === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}
                >
                  {alert.type}
                </span>
              </div>
              <span className="text-xs text-gray-500">{alert.timestamp}</span>
            </div>
            <p className="font-bold text-gray-800 text-sm mb-1">
              {alert.message}
            </p>
            <p className="text-xs text-gray-600 mb-2">{alert.department}</p>
            <p className="text-xs text-blue-600 font-semibold">
              → {alert.actionRequired}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeAlerts;
