import React from "react";
import { LifeBuoy } from "lucide-react";

const HelpdeskHeader = ({ stats }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 p-8 md:p-10 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                Screen 15: Support & Operations
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                <LifeBuoy size={12} className="text-yellow-300" />
                24/7 Active
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
              Helpdesk & Ticket Resolution
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
              Comprehensive internal support system with SLA tracking,
              escalation management, and multi-category ticket resolution.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl flex items-center gap-4">
            <div>
              <h3 className="text-4xl font-extrabold text-white text-center drop-shadow-md">
                {stats.open}
              </h3>
              <p className="text-xs font-bold uppercase text-white/80 tracking-wide text-center">
                Open Tickets
              </p>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-xs font-medium text-white/90">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>{" "}
                {stats.criticalOpen} Critical
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-white/90">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>{" "}
                {stats.highOpen} High
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpdeskHeader;
