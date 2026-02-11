import React from "react";
import { AlertTriangle } from "lucide-react";
import { TEACHER_DATA } from "../../../../data/teacherData";

const PerformanceAlertsWidget = () => {
  const { dashboard } = TEACHER_DATA;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow">
      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-base">
        <div className="p-2 bg-gradient-to-br from-pink-400 to-red-400 rounded-xl">
          <AlertTriangle className="text-white" size={18} />
        </div>
        Performance Alerts
      </h3>
      <div className="space-y-3">
        {dashboard.alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex gap-3 items-start p-3 bg-gradient-to-r from-pink-50 to-red-50 border border-pink-100 rounded-xl hover:shadow-md transition-all"
          >
            <div className="w-2 h-2 mt-2 bg-pink-500 rounded-full flex-shrink-0 animate-pulse"></div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-700 mb-1">
                {alert.type}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {alert.msg}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceAlertsWidget;
