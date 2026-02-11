import React, { useState } from "react";
import { Tag, Send, Archive, X } from "lucide-react";

const getTagColor = (tag) => {
  switch (tag) {
    case "Academic":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "Attendance":
      return "bg-orange-100 text-orange-700 border-orange-200";
    case "Behavior":
      return "bg-purple-100 text-purple-700 border-purple-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};

const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now - date;
  const hours = Math.floor(diff / (1000 * 60 * 60));

  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  if (hours < 48) return "Yesterday";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

const MessageDetailModal = ({
  message,
  onClose,
  onArchive,
  onRestore,
  onSendReply,
}) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    onSendReply(message.id, replyText);
    setIsReplying(false);
    setReplyText("");
  };

  if (!message) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`px-3 py-1 rounded-lg text-xs font-bold border ${getTagColor(message.tag)}`}
              >
                <Tag size={12} className="inline mr-1" />
                {message.tag}
              </span>
              <span
                className={`px-3 py-1 rounded-lg text-xs font-bold ${message.type === "direct" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"}`}
              >
                {message.type === "direct" ? "Direct Message" : "Broadcast"}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {message.subject}
            </h2>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <span className="font-bold">{message.from}</span>
              <span>•</span>
              <span>{formatTime(message.timestamp)}</span>
              {message.studentName && (
                <>
                  <span>•</span>
                  <span>Re: {message.studentName}</span>
                </>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Message Content */}
        <div className="mb-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
              {message.content}
            </p>
          </div>

          {/* Chat History / Replies */}
          {message.chatHistory && message.chatHistory.length > 0 && (
            <div className="mt-4 space-y-4">
              {message.chatHistory.map((chat, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${chat.role === "teacher" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                      chat.role === "teacher"
                        ? "bg-blue-500 text-white rounded-tr-none"
                        : "bg-slate-100 text-slate-700 rounded-tl-none"
                    }`}
                  >
                    <p>{chat.content}</p>
                    <p className={`text-[10px] mt-1 opacity-70 text-right`}>
                      {formatTime(chat.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {!isReplying ? (
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setIsReplying(true)}
              className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Send size={18} />
              <div className="text-left">
                <div>Reply</div>
              </div>
            </button>
            <button
              onClick={() =>
                message.archived ? onRestore(message.id) : onArchive(message.id)
              }
              className="px-6 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <Archive size={18} />
              <div className="text-left">
                <div>{message.archived ? "Restore" : "Archive"}</div>
              </div>
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Type your reply here..."
              className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:border-blue-400 focus:outline-none min-h-[120px] text-sm font-medium"
            />
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsReplying(false);
                  setReplyText("");
                }}
                className="flex-1 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSendReply}
                className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                <span>Send Reply</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageDetailModal;
