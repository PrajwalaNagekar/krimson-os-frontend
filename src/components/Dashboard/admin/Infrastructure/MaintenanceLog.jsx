import React from "react";
import { Wrench, Eye } from "lucide-react";

const MaintenanceLog = ({ maintenanceLog, monthlyCost, getStatusColor }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
      <div className="bg-gradient-to-r from-slate-50 via-amber-50 to-slate-50 px-8 py-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Wrench className="text-amber-500" size={24} />
              Maintenance Log & Cost Summary
            </h2>
            <p className="text-sm text-slate-500">
              Scheduled and completed maintenance activities
            </p>
          </div>
          <div className="flex gap-3">
            <div className="px-4 py-2 bg-white rounded-xl border border-amber-200 text-center">
              <p className="text-xs text-slate-500">This Month</p>
              <p className="text-lg font-bold text-amber-700">{monthlyCost}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-4">
        {maintenanceLog.map((log) => (
          <div
            key={log.id}
            className={`p-6 rounded-2xl border hover:shadow-lg transition-all ${
              log.status === "Overdue"
                ? "bg-red-50 border-red-200"
                : log.status === "Scheduled"
                  ? "bg-blue-50 border-blue-200"
                  : "bg-green-50 border-green-200"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-slate-800">
                    {log.item}
                  </h3>
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(log.status)}`}
                  >
                    {log.status}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                      log.priority === "Critical"
                        ? "bg-red-100 text-red-700 border-red-200"
                        : log.priority === "High"
                          ? "bg-amber-100 text-amber-700 border-amber-200"
                          : "bg-blue-100 text-blue-700 border-blue-200"
                    }`}
                  >
                    {log.priority}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3">{log.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
                  <div>
                    <p className="text-slate-500 font-medium mb-1">Type</p>
                    <p className="font-bold text-slate-700">{log.type}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-medium mb-1">
                      Scheduled Date
                    </p>
                    <p className="font-bold text-slate-700">
                      {log.scheduledDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-medium mb-1">
                      Completed Date
                    </p>
                    <p className="font-bold text-slate-700">
                      {log.completedDate || "Pending"}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-medium mb-1">
                      Technician
                    </p>
                    <p className="font-bold text-blue-600">{log.technician}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-medium mb-1">Cost</p>
                    <p className="text-lg font-bold text-green-600">
                      {log.cost}
                    </p>
                  </div>
                </div>
              </div>

              <button className="px-3 py-2 bg-white text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-50 transition-all border border-slate-200 flex flex-col items-center">
                <Eye size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceLog;
