import React from "react";
import {
  Users,
  UserCheck,
  BookOpen,
  GraduationCap,
  MoreHorizontal,
} from "lucide-react";
import { ADMIN_DATA } from "../../../../data/adminData";

const AdminStatsGrid = () => {
  const { summary } = ADMIN_DATA.ADMIN_OVERVIEW_DATA;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          label: "Total Students",
          value: summary.totalStudents.toLocaleString(),
          sub: "Active enrollment",
          icon: Users,
          color: "text-blue-500",
          bg: "bg-blue-50",
          border: "group-hover:border-blue-200",
        },
        {
          label: "Total Staff",
          value: summary.totalStaff,
          sub: "Teaching & support",
          icon: UserCheck,
          color: "text-purple-500",
          bg: "bg-purple-50",
          border: "group-hover:border-purple-200",
        },
        {
          label: "Active Classes",
          value: summary.totalClasses,
          sub: "Current sections",
          icon: BookOpen,
          color: "text-cyan-500",
          bg: "bg-cyan-50",
          border: "group-hover:border-cyan-200",
        },
        {
          label: "Courses",
          value: summary.totalCourses,
          sub: "Programs offered",
          icon: GraduationCap,
          color: "text-pink-500",
          bg: "bg-pink-50",
          border: "group-hover:border-pink-200",
        },
      ].map((stat, idx) => (
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
            <div className="px-2 py-1 bg-slate-50 rounded-lg border border-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all">
              <MoreHorizontal size={16} className="text-slate-400" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1 tracking-tight">
              {stat.value}
            </h3>
            <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
            <p className="text-xs text-slate-400 mt-1">{stat.sub}</p>
            <p className="text-[10px] text-slate-400 mt-2">(get in app)</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminStatsGrid;
