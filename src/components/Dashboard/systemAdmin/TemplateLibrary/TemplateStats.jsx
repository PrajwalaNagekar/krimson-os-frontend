import React from "react";

const TemplateStats = ({ stats }) => {
  const statCards = [
    {
      label: "Total Templates",
      value: stats.totalTemplates,
      color: "from-cyan-500 to-blue-500",
    },
    {
      label: "Active",
      value: stats.activeTemplates,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Drafts",
      value: stats.draftTemplates,
      color: "from-slate-500 to-slate-600",
    },
    {
      label: "Categories",
      value: stats.categoriesCount,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Avg Usage",
      value: stats.avgUsagePerTemplate,
      color: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {statCards.map((stat, index) => (
        <div
          key={index}
          className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-shadow"
        >
          <p className="text-xs text-slate-500 mb-2">{stat.label}</p>
          <p
            className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
          >
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TemplateStats;
