import React from "react";
import { AlertCircle, BarChart3 } from "lucide-react";
import { COMPLIANCE_DATA } from "../../../../data/registrarData";

const ComplianceMetricsDashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Compliance Alert Card */}
      <div className="relative bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl lg:rounded-3xl p-8 text-white shadow-xl overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <AlertCircle className="w-8 h-8" />
            </div>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider">
              Monthly Status
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-2">Compliance Alert</h3>
          <p className="text-white/90 text-sm mb-6">
            2 reports require action for January 2026 audit cycle
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Completion Progress</span>
              <span className="font-bold">65%</span>
            </div>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="bg-white h-full rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Metrics */}
      <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border border-slate-100">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-blue-600" />
          Compliance Metrics
        </h3>
        <div className="space-y-4">
          {Object.entries(COMPLIANCE_DATA.complianceMetrics).map(
            ([key, value], index) => {
              const label = key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());
              const isGood = value >= 95;
              return (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">
                      {label}
                    </span>
                    <span
                      className={`text-sm font-bold ${isGood ? "text-green-600" : "text-orange-600"}`}
                    >
                      {value}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${isGood ? "bg-gradient-to-r from-green-500 to-emerald-500" : "bg-gradient-to-r from-orange-500 to-amber-500"}`}
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplianceMetricsDashboard;
