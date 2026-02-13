import React from "react";
import { X, CheckCheck, Tag, Flag, MoreVertical } from "lucide-react";
import { getTabIcon, getTabGradient } from "../utils";

const ThreadHeader = ({ selectedThread, activeTab, onClose }) => {
  return (
    <div className="p-3 md:p-4 lg:p-6 border-b border-slate-200/60 flex justify-between items-center bg-gradient-to-r from-white/95 to-cyan-50/40 backdrop-blur-2xl sticky top-0 z-20 shadow-sm">
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4 flex-1">
        {/* Mobile Back Button */}
        <button
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors active:scale-95"
        >
          <X size={20} className="text-slate-600" />
        </button>
        <div
          className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl bg-gradient-to-br ${getTabGradient(activeTab)} animate-gradient`}
        >
          {getTabIcon(activeTab)}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-base md:text-lg lg:text-xl font-bold text-slate-800 truncate">
            {selectedThread.sender}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 font-medium truncate">
            {selectedThread.role || selectedThread.title}
          </p>
          {selectedThread.readReceipt && (
            <p className="text-[10px] md:text-xs text-cyan-600 font-medium mt-0.5 md:mt-1 flex items-center gap-1">
              <CheckCheck size={10} className="md:w-3 md:h-3" /> Read at{" "}
              {selectedThread.readReceipt.time}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-1.5 md:gap-2">
        {(activeTab === "messages" || activeTab === "counselor") && (
          <>
            <button
              className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 bg-amber-50 text-amber-700 font-bold rounded-lg lg:rounded-xl text-xs hover:bg-amber-100 hover:shadow-lg transition-all duration-300 border border-amber-200 shadow-sm hover:scale-105 active:scale-95"
              title="Mark for follow-up"
            >
              <Tag size={14} />
              <span className="hidden lg:inline">Follow-up</span>
            </button>
            <button className="md:hidden p-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200 hover:bg-amber-100 transition-all active:scale-95">
              <Tag size={16} />
            </button>
            <button className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 bg-red-50 text-red-600 font-bold rounded-lg lg:rounded-xl text-xs hover:bg-red-100 hover:shadow-lg transition-all duration-300 border border-red-200 shadow-sm hover:scale-105 active:scale-95">
              <Flag size={14} />
              <span className="hidden lg:inline">Escalate</span>
            </button>
            <button className="md:hidden p-2 bg-red-50 text-red-600 rounded-lg border border-red-200 hover:bg-red-100 transition-all active:scale-95">
              <Flag size={16} />
            </button>
          </>
        )}
        <button className="p-2 md:p-2.5 text-slate-600 hover:bg-slate-100 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-110 active:scale-95">
          <MoreVertical size={16} className="md:w-[18px] md:h-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default ThreadHeader;
