import React from "react";
import { AlertCircle, DollarSign, Activity } from "lucide-react";

const QuickAlerts = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
        <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-500" />
          Quick Alerts
        </h3>
      </div>

      <div className="p-4 space-y-3">
        <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertCircle className="w-4 h-4 text-red-600" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-red-700 text-sm block mb-1">
                Attendance Alert
              </span>
              <p className="text-slate-700 text-xs leading-relaxed">
                3 classes currently unmarked for today.
              </p>
              <button className="mt-2 text-xs font-bold text-red-700 hover:underline flex items-center gap-1">
                Mark Now{" "}
                <span className="text-[8px] opacity-70">(get in app)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <DollarSign className="w-4 h-4 text-orange-600" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-orange-700 text-sm block mb-1">
                Finance Alert
              </span>
              <p className="text-slate-700 text-xs leading-relaxed">
                2 significant fee anomalies detected in Grade 10.
              </p>
              <button className="mt-2 text-xs font-bold text-orange-700 hover:underline flex items-center gap-1">
                Investigate{" "}
                <span className="text-[8px] opacity-70">(get in app)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Activity className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-blue-700 text-sm block mb-1">
                System Update
              </span>
              <p className="text-slate-700 text-xs leading-relaxed">
                Report generation scheduled for 4 PM today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAlerts;
