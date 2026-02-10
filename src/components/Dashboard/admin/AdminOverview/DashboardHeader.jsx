import React from "react";
import { Calendar } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      {/* Background Gradient matching Sidebar (Cyan -> Blue -> Pink) */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />

      {/* Decorative Glass/Blur Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 p-8 md:p-10 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                System Overview
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/5 px-2 py-1 rounded-md">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Live Updates
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
              Admin Dashboard
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
              Snapshot of school operations, attendance, admissions, and
              financial health.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
            <div className="p-3 bg-white/20 rounded-xl">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-blue-50 font-medium uppercase tracking-wide">
                Today's Date
              </p>
              <p className="text-lg font-bold text-white leading-none">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
