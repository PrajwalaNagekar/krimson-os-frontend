import React from "react";
import { Bell } from "lucide-react";
import AbsenteeismAlert from "./AbsenteeismAlert";

const AbsenteeismAlerts = ({ alerts }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
              <Bell className="w-5 h-5 text-red-500" />
              Chronic Absenteeism Alerts
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Requiring immediate intervention
            </p>
          </div>
          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
            {alerts.length} Active
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
        {alerts.map((alert, idx) => (
          <AbsenteeismAlert key={idx} {...alert} />
        ))}
      </div>
    </div>
  );
};

export default AbsenteeismAlerts;
