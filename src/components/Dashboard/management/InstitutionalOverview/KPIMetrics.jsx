import React from "react";
import { Users, GraduationCap, Calendar, Award } from "lucide-react";

const iconMap = {
  Users: Users,
  GraduationCap: GraduationCap,
  Calendar: Calendar,
  Award: Award,
};

const getStatusColor = (status) => {
  switch (status) {
    case "good":
      return "bg-green-500";
    case "warning":
      return "bg-yellow-500";
    case "critical":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const KPIMetrics = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((kpi, index) => {
        const Icon = iconMap[kpi.icon] || Users;
        return (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/20 group hover:scale-105"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              {/* Traffic Light Indicator */}
              <div
                className={`w-4 h-4 rounded-full ${getStatusColor(kpi.status)} shadow-lg animate-pulse`}
              ></div>
            </div>

            <p className="text-sm text-gray-600 font-medium mb-2">
              {kpi.label}
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                {kpi.current}
              </p>
              <span className="text-sm text-gray-500">/ {kpi.target}</span>
              <span className="text-xs text-gray-400">{kpi.unit}</span>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${kpi.gradient} transition-all`}
                style={{ width: `${Math.min(kpi.percentage, 100)}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span
                className={`font-semibold ${kpi.percentage >= 100 ? "text-green-600" : kpi.percentage >= 90 ? "text-yellow-600" : "text-red-600"}`}
              >
                {kpi.percentage.toFixed(1)}%
              </span>
              <span className="text-gray-500">{kpi.trend}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPIMetrics;
