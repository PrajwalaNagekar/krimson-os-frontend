import React from "react";
import { Heart, Smile, Frown, Award, TrendingDown } from "lucide-react";

const WelfareStats = ({ stats }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Frown":
        return Frown;
      case "Heart":
        return Heart;
      case "Smile":
        return Smile;
      case "Award":
        return Award;
      default:
        return Smile;
    }
  };

  const getGradient = (color) => {
    switch (color) {
      case "red":
        return "from-red-500 to-red-600";
      case "blue":
        return "from-blue-500 to-blue-600";
      case "green":
        return "from-green-500 to-emerald-600";
      case "yellow":
        return "from-yellow-500 to-orange-500";
      default:
        return "from-blue-500 to-blue-600";
    }
  };

  const getTextColor = (color) => {
    switch (color) {
      case "red":
        return "text-red-600";
      case "blue":
        return "text-blue-600";
      case "green":
        return "text-green-600";
      case "yellow":
        return "text-yellow-600";
      default:
        return "text-slate-800";
    }
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      {stats.map((stat, idx) => {
        const Icon = getIcon(stat.iconName);
        const gradient = getGradient(stat.color);
        const textColor = getTextColor(stat.color);

        return (
          <div
            key={idx}
            className="bg-white p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-2 sm:mb-3">
              <div>
                <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1 sm:mb-2">
                  {stat.label}
                </p>
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl font-bold ${textColor}`}
                >
                  {stat.value}
                </h3>
              </div>
              <div
                className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>
            {stat.trend ? (
              <p className="text-[10px] sm:text-xs text-slate-600 flex items-center gap-1">
                {stat.trendDir === "down" ? (
                  <TrendingDown className="w-3 h-3 text-green-600" />
                ) : null}
                <span className="hidden sm:inline">{stat.trend}</span>
                <span className="sm:hidden">↓15%</span>
              </p>
            ) : (
              <p className="text-[10px] sm:text-xs text-slate-600">
                {stat.subtext}
              </p>
            )}
            <p className="text-[8px] sm:text-[9px] text-slate-400 mt-1">
              (get in app)
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WelfareStats;
