import React from "react";
import { Users, TrendingUp, LogOut } from "lucide-react";

const TrackerStats = ({ students }) => {
  const stats = [
    {
      label: "Active Students",
      value: students.length,
      icon: Users,
      color: "blue",
    },
    {
      label: "Average Improvement",
      value: "+22%",
      icon: TrendingUp,
      color: "emerald",
    },
    {
      label: "Ready for Transition",
      value: students.filter((s) => s.status === "Ready to Exit").length,
      icon: LogOut,
      color: "purple",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4"
        >
          <div
            className={`w-12 h-12 bg-${stat.color}-50 text-${stat.color}-500 rounded-2xl flex items-center justify-center`}
          >
            <stat.icon size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackerStats;
