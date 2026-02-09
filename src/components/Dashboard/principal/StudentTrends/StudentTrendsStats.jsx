import React from "react";
import {
  Users,
  Award,
  AlertCircle,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const StudentTrendsStats = ({ stats }) => {
  const getIcon = (label) => {
    switch (label) {
      case "Overall Attendance":
        return Users;
      case "Best Performing":
        return Award;
      case "Chronic Absences":
        return AlertCircle;
      case "Needs Attention":
        return TrendingDown;
      default:
        return Users;
    }
  };

  const getColor = (label) => {
    switch (label) {
      case "Overall Attendance":
        return "blue";
      case "Best Performing":
        return "green"; // emerald in original
      case "Chronic Absences":
        return "red";
      case "Needs Attention":
        return "orange";
      default:
        return "blue";
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, idx) => {
        const Icon = getIcon(stat.label);
        const color = getColor(stat.label); // simplified color logic

        return (
          <div
            key={idx}
            className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  {stat.label}
                </p>
                <h3
                  className={`text-2xl md:text-3xl font-bold ${
                    color === "red"
                      ? "text-red-600"
                      : color === "orange"
                        ? "text-orange-600"
                        : "text-slate-900"
                  }`}
                >
                  {stat.value}
                </h3>
              </div>
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${
                  color === "green"
                    ? "from-green-500 to-emerald-600"
                    : color === "red"
                      ? "from-red-500 to-red-600"
                      : color === "orange"
                        ? "from-orange-500 to-orange-600"
                        : "from-blue-500 to-blue-600"
                } shadow-lg`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
            </div>
            <p
              className={`text-xs ${
                stat.label === "Overall Attendance"
                  ? "text-green-600 font-bold flex items-center gap-1"
                  : "text-slate-600"
              }`}
            >
              {stat.label === "Overall Attendance" && (
                <TrendingUp className="w-3 h-3" />
              )}{" "}
              {stat.trend}
            </p>
            <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
          </div>
        );
      })}
    </div>
  );
};

export default StudentTrendsStats;
