import React from "react";
import { Paperclip, Send, Shield } from "lucide-react";

const ThreadInput = ({ replyText, setReplyText, onSendMessage }) => {
  return (
    <div className="p-3 md:p-4 lg:p-6 bg-white/95 backdrop-blur-2xl border-t border-slate-200/60 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-2 md:gap-3">
          <button className="p-2 md:p-3 text-slate-600 hover:bg-slate-100 rounded-lg md:rounded-xl transition-all duration-300 border border-slate-200/60 hover:border-slate-300 hover:scale-110 active:scale-95 flex-shrink-0">
            <Paperclip size={18} className="md:w-5 md:h-5" />
          </button>
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 md:px-5 py-2 md:py-3 bg-slate-50 border border-slate-200/60 rounded-xl md:rounded-2xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 font-medium hover:bg-white transition-all duration-300"
            onKeyPress={(e) => e.key === "Enter" && onSendMessage()}
          />
          <button
            onClick={onSendMessage}
            className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white font-bold rounded-xl md:rounded-2xl text-xs md:text-sm shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5 md:gap-2 flex-shrink-0"
          >
            <Send size={16} className="md:w-[18px] md:h-[18px]" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>
        <p className="text-[10px] md:text-xs text-slate-400 mt-2 md:mt-3 text-center font-medium">
          <span className="inline-flex items-center gap-1">
            <Shield size={10} className="md:w-3 md:h-3" />
            <span className="hidden sm:inline">
              Messages are encrypted and PDPA compliant
            </span>
            <span className="sm:hidden">PDPA Encrypted</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ThreadInput;
