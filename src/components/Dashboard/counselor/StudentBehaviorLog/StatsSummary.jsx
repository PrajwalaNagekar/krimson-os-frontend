import React from "react";
import { Smile, Frown, FileText } from "lucide-react";

const iconMap = {
  Smile: Smile,
  Frown: Frown,
  FileText: FileText,
};

const gradientMap = {
  "Positive Merits": "from-green-500 to-green-600",
  "Incidents / Concerns": "from-red-500 to-red-600",
  "Parent Reports": "from-blue-500 to-blue-600",
};

const StatsSummary = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon] || FileText;
        const gradient = gradientMap[stat.title] || "from-gray-500 to-gray-600";

        return (
          <div
            key={index}
            className={`bg-gradient-to-br ${gradient} text-white p-4 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                <Icon size={24} />
              </div>
            </div>
            <div>
              <p className="text-3xl font-extrabold mb-1">{stat.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider opacity-90">
                {stat.title}
              </p>
              <p className="text-xs opacity-60 mt-2">get in app</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsSummary;
