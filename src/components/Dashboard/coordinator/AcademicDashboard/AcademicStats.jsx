import React from "react";
import { ACADEMIC_DASHBOARD_DATA } from "../../../../data/coordinatorData";

const AcademicStats = () => {
  const { stats } = ACADEMIC_DASHBOARD_DATA;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 group hover:scale-105"
        >
          <div className="flex items-center justify-between mb-3">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform`}
            >
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${
                stat.change.startsWith("+")
                  ? "text-green-600 bg-green-50"
                  : stat.change === "Stable"
                    ? "text-blue-600 bg-blue-50"
                    : "text-red-600 bg-red-50"
              }`}
            >
              {stat.change}
            </span>
          </div>
          <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent mb-1">
            {stat.value}
          </p>
          <p className="text-sm text-gray-600 font-medium mb-2">{stat.label}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Target: {stat.target}</span>
            {stat.label !== "Academic Health" && (
              <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${stat.gradient}`}
                  style={{
                    width: `${parseInt(stat.value) || 80}%`,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcademicStats;
