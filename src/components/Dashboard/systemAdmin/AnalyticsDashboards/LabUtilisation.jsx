import React from "react";
import { Beaker, TrendingUp, Calendar, AlertCircle } from "lucide-react";

const LabUtilisation = ({ data }) => {
  const getUtilizationColor = (utilization) => {
    if (utilization >= 85) return "text-red-600";
    if (utilization >= 70) return "text-green-600";
    return "text-blue-600";
  };

  const getStatusColor = (status) => {
    if (status === "Overdue") return "bg-red-100 text-red-700";
    return "bg-green-100 text-green-700";
  };

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Beaker className="text-blue-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Total Labs
            </span>
          </div>
          <p className="text-5xl font-bold text-blue-600">{data.totalLabs}</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="text-green-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Average Usage
            </span>
          </div>
          <p className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {data.averageUsage}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Calendar className="text-purple-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Peak Hours
            </span>
          </div>
          <p className="text-2xl font-bold text-purple-600">{data.peakHours}</p>
        </div>
      </div>

      {/* Labs */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Lab Utilization
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.labs.map((lab, idx) => (
            <div
              key={idx}
              className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-slate-800">{lab.name}</h4>
                <span
                  className={`text-3xl font-bold ${getUtilizationColor(lab.utilization)}`}
                >
                  {lab.utilization}%
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Capacity</p>
                  <p className="text-xl font-bold text-slate-700">
                    {lab.capacity}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Bookings</p>
                  <p className="text-xl font-bold text-blue-600">
                    {lab.bookings}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance Schedule */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Maintenance Schedule
        </h3>
        <div className="space-y-4">
          {data.maintenanceSchedule.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <AlertCircle
                  className={
                    item.status === "Overdue"
                      ? "text-red-500"
                      : "text-green-500"
                  }
                  size={24}
                />
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    {item.lab}
                  </h4>
                  <p className="text-sm text-slate-600">
                    Next Maintenance: {item.nextMaintenance}
                  </p>
                </div>
              </div>
              <span
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${getStatusColor(item.status)}`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabUtilisation;
