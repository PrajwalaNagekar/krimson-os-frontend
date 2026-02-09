import React from "react";
import { Users, TrendingUp, Target, AlertOctagon } from "lucide-react";

const iconMap = {
  Users: Users,
  TrendingUp: TrendingUp,
  Target: Target,
  AlertOctagon: AlertOctagon,
};

const WellbeingStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon] || Users;
        return (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.gradient} text-white p-4 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                <Icon size={20} />
              </div>
            </div>
            <div>
              <p className="text-3xl font-extrabold mb-1">{stat.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider opacity-90">
                {stat.label}
              </p>
              <p className="text-xs opacity-60 mt-2">get in app</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WellbeingStats;
