import React from "react";
import { Shield, Bell, CheckCircle, TrendingUp } from "lucide-react";

const StatsOverview = ({ stats }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Shield":
        return <Shield size={24} className="opacity-90" />;
      case "Bell":
        return <Bell size={24} className="opacity-90" />;
      case "CheckCircle":
        return <CheckCircle size={24} className="opacity-90" />;
      case "TrendingUp":
        return <TrendingUp size={24} className="opacity-90" />;
      default:
        return <Shield size={24} className="opacity-90" />;
    }
  };

  const getGradient = (color) => {
    switch (color) {
      case "blue":
        return "from-blue-500 to-blue-600";
      case "orange":
        return "from-orange-500 to-orange-600";
      case "green":
        return "from-green-500 to-green-600";
      case "purple":
        return "from-purple-500 to-purple-600";
      default:
        return "from-blue-500 to-blue-600";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`bg-gradient-to-br ${getGradient(stat.color)} text-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
        >
          <div className="flex items-center justify-between mb-2">
            {getIcon(stat.icon)}
          </div>
          <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
          <p className="text-sm opacity-90 font-medium">{stat.label}</p>
          <p className="text-xs opacity-60 mt-2">{stat.subtext}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
