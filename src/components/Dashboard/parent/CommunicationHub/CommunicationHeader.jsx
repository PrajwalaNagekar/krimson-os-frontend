import React from "react";
import { MessageSquare, Shield } from "lucide-react";

const CommunicationHeader = () => {
  return (
    <div className="mb-4 md:mb-6 relative z-10">
      <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
        <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
          <MessageSquare size={24} className="md:hidden text-white" />
          <MessageSquare size={28} className="hidden md:block text-white" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Communication Hub
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">
            Seamless communication between parents, teachers, and school
          </p>
        </div>
      </div>

      {/* PDPA Compliance Badge */}
      <div className="inline-flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl shadow-sm">
        <Shield size={14} className="md:w-4 md:h-4 text-emerald-600" />
        <span className="text-[10px] md:text-xs font-bold text-emerald-700">
          <span className="hidden sm:inline">
            PDPA Compliant - All messages securely archived and encrypted
          </span>
          <span className="sm:hidden">PDPA Compliant & Encrypted</span>
        </span>
      </div>
    </div>
  );
};

export default CommunicationHeader;
