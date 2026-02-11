import React from "react";
import { Bell } from "lucide-react";

const SubstitutionAlerts = ({ alerts }) => {
  if (!alerts || alerts.length === 0) return null;

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 border-2 border-orange-200 p-4 md:p-6 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-start gap-4 flex-1">
            <div className="p-3 bg-orange-500 text-white rounded-xl shadow-md animate-pulse">
              <Bell size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-bold text-orange-900 text-lg">
                  Substitution Required
                </h4>
                {alert.urgent && (
                  <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-lg">
                    URGENT
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Class</p>
                  <p className="font-bold text-slate-800">{alert.grade}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Subject</p>
                  <p className="font-bold text-slate-800">{alert.subject}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Period</p>
                  <p className="font-bold text-slate-800">{alert.period}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Time</p>
                  <p className="font-bold text-slate-800">{alert.time}</p>
                </div>
              </div>
              <p className="text-xs text-orange-700 mt-2 font-medium">
                Reason: {alert.reason}
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-2 bg-orange-500 text-white text-xs font-bold rounded-xl hover:bg-orange-600 shadow-md transition-all">
              Accept
              <span className="block text-[10px] opacity-80">get in app</span>
            </button>
            <button className="flex-1 md:flex-none px-4 py-2 bg-white text-orange-600 border-2 border-orange-200 text-xs font-bold rounded-xl hover:bg-orange-50 transition-all">
              Decline
              <span className="block text-[10px] opacity-80">get in app</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubstitutionAlerts;
