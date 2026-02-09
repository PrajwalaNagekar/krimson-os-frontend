import React from "react";
import { TrendingUp, AlertTriangle, BarChart3, PieChart } from "lucide-react";

const KPITracker = ({ kpiData }) => {
  return (
    <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center">
          <TrendingUp className="text-white" size={20} />
        </div>
        <h3 className="font-bold text-xl text-slate-800">KPI Tracker</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {kpiData.map((kpi, idx) => (
          <div
            key={idx}
            className="group relative bg-gradient-to-br from-slate-50 to-white p-5 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-12 h-12 ${
                  kpi.status === "good" ? "bg-green-50" : "bg-amber-50"
                } rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <kpi.icon
                  className={
                    kpi.status === "good" ? "text-green-600" : "text-amber-600"
                  }
                  size={20}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">
                  {kpi.label}
                </p>
                <p className="text-2xl font-bold text-slate-800">{kpi.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span
                    className={`text-xs font-medium ${
                      kpi.status === "good"
                        ? "text-green-600"
                        : "text-amber-600"
                    }`}
                  >
                    Target: {kpi.target}
                  </span>
                  {kpi.status === "warning" && (
                    <AlertTriangle size={12} className="text-amber-500" />
                  )}
                </div>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="mt-3 w-full bg-slate-200 rounded-full h-2">
              <div
                className={`h-full rounded-full ${
                  kpi.status === "good"
                    ? "bg-gradient-to-r from-green-400 to-green-600"
                    : "bg-gradient-to-r from-amber-400 to-amber-600"
                }`}
                style={{ width: kpi.status === "good" ? "85%" : "70%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button className="flex-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group">
          <BarChart3 size={18} />
          <span>View Detailed Analytics</span>
          <p className="text-xs opacity-80 ml-auto">(get in app)</p>
        </button>
        <button className="flex-1 bg-white border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
          <PieChart size={18} />
          <span>Export Report</span>
          <p className="text-xs opacity-60 ml-auto">(get in app)</p>
        </button>
      </div>
    </div>
  );
};

export default KPITracker;
