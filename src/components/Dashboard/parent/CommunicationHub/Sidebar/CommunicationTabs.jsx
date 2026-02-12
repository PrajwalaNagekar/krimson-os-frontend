import React from "react";
import { MessageSquare, Megaphone, Radio, Lock, User } from "lucide-react";

const CommunicationTabs = ({ activeTab, setActiveTab, resetSelection }) => {
  return (
    <div className="bg-white/90 backdrop-blur-2xl p-2 md:p-3 rounded-2xl md:rounded-3xl shadow-2xl border border-white/60 hover:shadow-cyan-500/20 transition-all duration-300">
      <div className="grid grid-cols-2 gap-1.5 md:gap-2 p-1 md:p-1.5 bg-gradient-to-br from-slate-100 via-slate-50 to-white rounded-xl md:rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-pink-400/5 animate-shimmer"></div>
        <button
          onClick={() => {
            setActiveTab("messages");
            resetSelection();
          }}
          className={`relative flex flex-col items-center justify-center py-2.5 md:py-3.5 px-2 md:px-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 z-10 ${
            activeTab === "messages"
              ? "bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 text-white shadow-xl shadow-blue-500/40 scale-[1.03] hover:scale-[1.05]"
              : "text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:scale-[1.02]"
          }`}
        >
          <MessageSquare size={18} className="md:w-5 md:h-5 mb-1 md:mb-1.5" />
          <span className="hidden sm:inline">Messages</span>
          <span className="sm:hidden">Msgs</span>
        </button>
        <button
          onClick={() => {
            setActiveTab("announcements");
            resetSelection();
          }}
          className={`relative flex flex-col items-center justify-center py-2.5 md:py-3.5 px-2 md:px-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 z-10 ${
            activeTab === "announcements"
              ? "bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-xl shadow-emerald-500/40 scale-[1.03] hover:scale-[1.05]"
              : "text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:scale-[1.02]"
          }`}
        >
          <Megaphone size={18} className="md:w-5 md:h-5 mb-1 md:mb-1.5" />
          <span className="hidden sm:inline">Announcements</span>
          <span className="sm:hidden">News</span>
        </button>
        <button
          onClick={() => {
            setActiveTab("broadcasts");
            resetSelection();
          }}
          className={`relative flex flex-col items-center justify-center py-2.5 md:py-3.5 px-2 md:px-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 z-10 ${
            activeTab === "broadcasts"
              ? "bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-xl shadow-orange-500/40 scale-[1.03] hover:scale-[1.05]"
              : "text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:scale-[1.02]"
          }`}
        >
          <Radio size={18} className="md:w-5 md:h-5 mb-1 md:mb-1.5" />
          <span className="hidden sm:inline">Broadcasts</span>
          <span className="sm:hidden">Live</span>
        </button>
        <button
          onClick={() => {
            setActiveTab("counselor");
            resetSelection();
          }}
          className={`relative flex flex-col items-center justify-center py-2.5 md:py-3.5 px-2 md:px-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 z-10 ${
            activeTab === "counselor"
              ? "bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-xl shadow-purple-500/40 scale-[1.03] hover:scale-[1.05]"
              : "text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:scale-[1.02]"
          }`}
        >
          <Lock size={18} className="md:w-5 md:h-5 mb-1 md:mb-1.5" />
          <span className="hidden sm:inline">Counselor</span>
          <span className="sm:hidden">Private</span>
        </button>
      </div>
    </div>
  );
};

export default CommunicationTabs;
