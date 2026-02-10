import React from "react";
import { UserPlus, Settings, FileText, ArrowUpRight } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
      <h2 className="text-xl font-bold text-slate-800 mb-6">Quick Actions</h2>
      <div className="space-y-3">
        {[
          {
            label: "Add Student",
            sub: "New enrollment",
            icon: UserPlus,
            color: "text-blue-600",
            bg: "bg-blue-50",
            gradient: "hover:from-blue-50 hover:to-blue-100",
          },
          {
            label: "New User",
            sub: "Staff access",
            icon: Settings,
            color: "text-purple-600",
            bg: "bg-purple-50",
            gradient: "hover:from-purple-50 hover:to-purple-100",
          },
          {
            label: "Reports",
            sub: "View analytics",
            icon: FileText,
            color: "text-pink-600",
            bg: "bg-pink-50",
            gradient: "hover:from-pink-50 hover:to-pink-100",
          },
        ].map((action, idx) => (
          <button
            key={idx}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border border-transparent hover:border-slate-200 transition-all duration-200 group ${action.bg} ${action.gradient}`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-xl bg-white shadow-sm ${action.color}`}
              >
                <action.icon size={20} />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-700">{action.label}</p>
                <p className="text-xs text-slate-500">{action.sub}</p>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
              <ArrowUpRight size={18} className="text-slate-400" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
