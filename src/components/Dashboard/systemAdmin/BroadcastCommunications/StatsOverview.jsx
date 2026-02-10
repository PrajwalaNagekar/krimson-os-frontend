import React from "react";
import { Send, Clock, FileEdit, Users, CheckCircle, Mail } from "lucide-react";

const StatsOverview = ({ stats }) => {
  const statCards = [
    {
      icon: Send,
      color: "text-cyan-500",
      label: "Total",
      value: stats.totalBroadcasts,
      description: "Broadcasts",
    },
    {
      icon: Users,
      color: "text-blue-500",
      label: "Active",
      value: stats.activeRecipients,
      description: "Recipients",
    },
    {
      icon: CheckCircle,
      color: "text-green-500",
      label: "Rate",
      value: stats.deliveryRate,
      description: "Delivery",
    },
    {
      icon: Mail,
      color: "text-purple-500",
      label: "Avg",
      value: stats.avgOpenRate,
      description: "Open Rate",
    },
    {
      icon: Clock,
      color: "text-pink-500",
      label: "Queue",
      value: stats.scheduledMessages,
      description: "Scheduled",
    },
    {
      icon: FileEdit,
      color: "text-slate-500",
      label: "Pending",
      value: stats.draftMessages,
      description: "Drafts",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
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
          <p className="text-xs text-slate-600 mt-1">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
