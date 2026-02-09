import React from "react";
import { Activity, Archive, LogOut } from "lucide-react";

const WithdrawalModeToggle = ({ viewMode, setViewMode }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 border border-slate-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* View Mode Toggle */}
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setViewMode("active")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${viewMode === "active" ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md" : "text-slate-600 hover:text-slate-800"}`}
          >
            <Activity className="w-4 h-4" />
            Active Requests
          </button>
          <button
            onClick={() => setViewMode("archived")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${viewMode === "archived" ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md" : "text-slate-600 hover:text-slate-800"}`}
          >
            <Archive className="w-4 h-4" />
            Archived
          </button>
        </div>

        {/* Action Button */}
        <button className="relative group/new flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all hover:scale-105">
          <LogOut className="w-4 h-4" />
          <span className="hidden md:inline">New Withdrawal Request</span>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/new:opacity-100 transition-opacity pointer-events-none z-10">
            get in app
          </span>
        </button>
      </div>
    </div>
  );
};

export default WithdrawalModeToggle;
