import React from "react";
import { BookOpen, Sparkles, Calendar } from "lucide-react";

const ClassManagementHeader = ({ date = "Monday, 23 February 2026" }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-2xl px-4 sm:px-7 py-4 sm:py-5 text-white shadow-xl relative overflow-hidden group">
      {/* Blobs */}
      <div className="absolute right-0 top-0 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl -mr-12 -mt-12 group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-8 -mb-8 pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-xl ring-1 ring-white/30 shadow-inner shrink-0">
            <BookOpen size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight leading-none">
              Class Management
            </h1>
          </div>
        </div>

        {/* Date — always shown but smaller on mobile */}
        <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/15 backdrop-blur-md rounded-xl ring-1 ring-white/20 text-[11px] sm:text-[13px] font-semibold">
          <Calendar size={13} className="opacity-80 shrink-0" />
          <span className="opacity-90">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ClassManagementHeader;
