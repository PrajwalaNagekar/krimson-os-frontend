import React from "react";
import { COMPLIANCE_DATA } from "../../../../data/registrarData";

const KpiCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {COMPLIANCE_DATA.stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="relative group bg-white rounded-2xl lg:rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 overflow-hidden"
          >
            {/* Gradient Background Blob */}
            <div
              className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
            ></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`w-3 h-3 rounded-full ${stat.status === "green" ? "bg-green-500" : stat.status === "orange" ? "bg-orange-500" : "bg-red-500"} animate-pulse`}
                ></div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-slate-500 font-semibold mb-2">
                {stat.label}
              </p>
              <p className="text-xs text-slate-400">{stat.change}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KpiCards;
