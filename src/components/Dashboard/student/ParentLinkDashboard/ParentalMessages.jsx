import React from "react";
import { Mail, User, Phone, CheckCircle, ExternalLink } from "lucide-react";

const ParentalMessages = ({
  messages,
  unreadMessages,
  acknowledgedItems,
  handleAcknowledge,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Mail className="text-orange-500" size={24} />
          Parental Messages
          {unreadMessages > 0 && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {unreadMessages}
            </span>
          )}
        </h2>
      </div>

      <div className="space-y-4">
        {messages.map((message) => {
          const isAcknowledged =
            acknowledgedItems.has(message.id) || message.acknowledged;
          return (
            <div
              key={message.id}
              className={`rounded-2xl p-5 border-2 transition-all ${
                message.read
                  ? "bg-slate-50 border-slate-100"
                  : "bg-orange-50 border-orange-200"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-xl ${message.read ? "bg-slate-200" : "bg-orange-200"}`}
                  >
                    <User
                      size={18}
                      className={
                        message.read ? "text-slate-600" : "text-orange-700"
                      }
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">
                      {message.subject}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                      <span>{message.from}</span>
                      <span>•</span>
                      <span>
                        {message.date} at {message.time}
                      </span>
                    </div>
                  </div>
                </div>
                {!message.read && (
                  <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                {message.message}
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                {message.requiresAck && !isAcknowledged && (
                  <button
                    onClick={() => handleAcknowledge(message.id, "message")}
                    className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all hover:scale-105"
                  >
                    <CheckCircle size={14} />
                    Acknowledge
                  </button>
                )}
                {isAcknowledged && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                    <CheckCircle size={14} />
                    Acknowledged
                  </div>
                )}
                <span className="text-[10px] text-slate-400 flex items-center gap-1 italic opacity-70 ml-auto">
                  Go to App <ExternalLink size={10} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParentalMessages;
