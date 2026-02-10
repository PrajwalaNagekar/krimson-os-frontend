import React from "react";
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const PolicyStats = ({ stats }) => {
  const iconMap = {
    FileText,
    AlertTriangle,
    CheckCircle2,
    TrendingUp,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat) => {
        const IconComponent = iconMap[stat.icon];
        return (
          <div
            key={stat.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} text-white`}
              >
                <IconComponent size={24} />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-800 mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-gray-600 mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-gray-500">{stat.subtext}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PolicyStats;
