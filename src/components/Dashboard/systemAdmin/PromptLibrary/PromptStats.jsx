import React from "react";
import { FileText, Star, TrendingUp, Layers } from "lucide-react";

const PromptStats = ({ stats }) => {
  const statCards = [
    {
      icon: FileText,
      color: "text-purple-500",
      label: "Total Prompts",
      value: stats.totalPrompts,
    },
    {
      icon: Star,
      color: "text-yellow-500",
      label: "Active",
      value: stats.activePrompts,
    },
    {
      icon: Layers,
      color: "text-blue-500",
      label: "Categories",
      value: stats.categories,
    },
    {
      icon: TrendingUp,
      color: "text-green-500",
      label: "Avg Usage",
      value: stats.avgUsagePerPrompt,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((stat, index) => (
        <div
          key={index}
          className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-2">
            <stat.icon className={stat.color} size={20} />
            <span className="text-xs text-slate-500">{stat.label}</span>
          </div>
          <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default PromptStats;
