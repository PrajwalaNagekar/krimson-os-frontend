/**
 * @component CalendarStats
 * @description Statistics cards for academic calendar
 * @props {Object} stats - Calendar statistics data
 */
import React from "react";
import { Calendar, CheckCircle, Clock, CalendarDays } from "lucide-react";

const CalendarStats = ({ stats }) => {
  const statsData = [
    {
      label: "Total Events",
      value: stats?.totalEvents || 0,
      sub: "All scheduled",
      icon: Calendar,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "group-hover:border-blue-200",
    },
    {
      label: "Upcoming",
      value: stats?.upcomingEvents || 0,
      sub: "Next events",
      icon: Clock,
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "group-hover:border-purple-200",
    },
    {
      label: "This Month",
      value: stats?.thisMonth || 0,
      sub: "Current month",
      icon: CalendarDays,
      color: "text-cyan-500",
      bg: "bg-cyan-50",
      border: "group-hover:border-cyan-200",
    },
    {
      label: "Completed",
      value: stats?.completedEvents || 0,
      sub: "Past events",
      icon: CheckCircle,
      color: "text-green-500",
      bg: "bg-green-50",
      border: "group-hover:border-green-200",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, idx) => (
        <div
          key={idx}
          className={`bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group ${stat.border}`}
        >
          <div className="flex justify-between items-start mb-4">
            <div
              className={`p-3 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300`}
            >
              <stat.icon size={24} strokeWidth={2.5} />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1 tracking-tight">
              {stat.value}
            </h3>
            <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
            <p className="text-xs text-slate-400 mt-1">{stat.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarStats;
