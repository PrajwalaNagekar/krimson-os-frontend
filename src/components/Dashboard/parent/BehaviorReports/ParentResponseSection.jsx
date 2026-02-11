import React from "react";
import { MessageCircle, Info, Send } from "lucide-react";

const ParentResponseSection = ({
  response,
  onResponseChange,
  onSendResponse,
}) => {
  return (
    <div className="relative z-10">
      <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
        <h3 className="font-bold text-slate-800 text-base md:text-lg mb-4 flex items-center gap-2">
          <MessageCircle size={20} className="text-cyan-500" />
          Parent Response & Acknowledgment
        </h3>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 mb-6 border border-cyan-200">
          <p className="text-xs md:text-sm text-cyan-800 flex items-start gap-2">
            <Info size={14} className="flex-shrink-0 mt-0.5" />
            <span>
              Use the app to send responses and acknowledge feedback from
              teachers and counselors. Your messages will be shared with the
              relevant staff members.
            </span>
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={onSendResponse}
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            <div className="flex items-center gap-3">
              <Send size={20} />
              <div className="flex flex-col items-center">
                <span className="text-base font-bold">Send Message</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParentResponseSection;
