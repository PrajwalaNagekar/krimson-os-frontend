import React from "react";
import { CheckCheck, ShieldAlert } from "lucide-react";
import { getTabIcon, getTabGradient } from "../utils";

const ThreadContent = ({ selectedThread, activeTab }) => {
  return (
    <div className="flex-1 overflow-y-auto p-3 md:p-5 lg:p-8 bg-gradient-to-br from-slate-50/50 to-cyan-50/20 custom-scrollbar">
      {selectedThread.history ? (
        <div className="space-y-3 md:space-y-4 lg:space-y-6 max-w-4xl mx-auto">
          {/* Date Divider */}
          <div className="flex justify-center sticky top-0 z-10 py-2">
            <span className="bg-white/90 backdrop-blur-md text-slate-600 text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full uppercase tracking-wide shadow-lg border border-slate-200/60">
              {selectedThread.date}
            </span>
          </div>

          {selectedThread.history.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.isMe ? "justify-end" : "justify-start"} animate-fadeIn`}
            >
              <div
                className={`max-w-[85%] md:max-w-[80%] lg:max-w-[75%] p-3 md:p-4 lg:p-5 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl text-xs md:text-sm leading-relaxed relative transition-all duration-300 ${
                  msg.isMe
                    ? "bg-gradient-to-br from-cyan-500 via-blue-500 to-pink-500 text-white rounded-tr-sm hover:scale-[1.02]"
                    : "bg-white text-slate-700 border border-slate-200/60 rounded-tl-sm hover:scale-[1.02]"
                }`}
              >
                {!msg.isMe && (
                  <p className="text-[10px] md:text-xs font-bold mb-1.5 md:mb-2 opacity-70">
                    {msg.sender}
                  </p>
                )}
                <p className="leading-relaxed">{msg.text}</p>
                <div className="flex items-center justify-between mt-2 md:mt-3 gap-2 md:gap-3">
                  <p
                    className={`text-[9px] md:text-[10px] font-medium ${msg.isMe ? "text-blue-100" : "text-slate-400"}`}
                  >
                    {msg.time}
                  </p>
                  {msg.read && msg.isMe && (
                    <CheckCheck
                      size={12}
                      className="md:w-[14px] md:h-[14px] text-blue-200"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200/60 hover:shadow-cyan-500/10 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-4 md:mb-6">
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${getTabGradient(activeTab)} animate-gradient flex-shrink-0`}
              >
                {getTabIcon(activeTab)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">
                  {selectedThread.title || "Announcement"}
                </h3>
                <p className="text-[10px] md:text-xs text-slate-500 font-medium">
                  {selectedThread.sender} • {selectedThread.time}
                </p>
              </div>
              {selectedThread.urgent && (
                <span className="bg-red-50 text-red-600 text-[10px] md:text-xs px-2.5 md:px-3 py-1 md:py-1.5 rounded-full font-bold border border-red-200 flex items-center gap-1 md:gap-1.5 shadow-sm flex-shrink-0">
                  <ShieldAlert size={10} className="md:w-3 md:h-3" />{" "}
                  <span className="hidden sm:inline">Urgent</span>
                </span>
              )}
            </div>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              {selectedThread.content}
            </p>
            {selectedThread.tags && (
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-200/60 flex items-center gap-2 flex-wrap">
                <span className="text-[10px] md:text-xs text-slate-500 font-medium">
                  Tags:
                </span>
                {selectedThread.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full font-bold border border-cyan-200 hover:scale-105 transition-transform duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreadContent;
