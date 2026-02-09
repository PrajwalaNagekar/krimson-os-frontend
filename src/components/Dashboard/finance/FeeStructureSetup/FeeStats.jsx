import React from "react";
import { Settings, BookOpen, Award, DollarSign } from "lucide-react";

const iconMap = {
  Settings: Settings,
  BookOpen: BookOpen,
  Award: Award,
  DollarSign: DollarSign,
};

const FeeStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const IconComponent = iconMap[stat.iconName] || Settings;
        return (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 group hover:scale-105"
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded-full text-blue-600 bg-blue-50">
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FeeStats;
