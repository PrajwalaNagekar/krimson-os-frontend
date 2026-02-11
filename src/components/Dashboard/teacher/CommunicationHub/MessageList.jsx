import React from "react";
import {
  MessageSquare,
  Users,
  Clock,
  CheckCircle,
  Tag,
  MessageCircle,
  Radio,
} from "lucide-react";

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

const MessageList = ({
  messages,
  onSelectMessage,
  searchQuery,
  filterType,
  filterTag,
}) => {
  if (messages.length === 0) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-md text-center">
        <MessageSquare className="mx-auto text-slate-300 mb-3" size={48} />
        <h3 className="text-lg font-bold text-slate-800 mb-2">
          No Messages Found
        </h3>
        <p className="text-sm text-slate-500">
          {searchQuery || filterType !== "all" || filterTag !== "all"
            ? "Try adjusting your filters"
            : "No messages yet"}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`bg-white rounded-3xl p-6 shadow-md border-2 transition-all duration-300 cursor-pointer ${
            !message.read
              ? "border-blue-400 bg-blue-50/30"
              : "border-transparent hover:border-blue-200"
          } hover:shadow-xl`}
          onClick={() => onSelectMessage(message)}
        >
          {/* Message Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`p-2 rounded-xl ${message.type === "direct" ? "bg-purple-100" : "bg-green-100"}`}
                >
                  {message.type === "direct" ? (
                    <MessageCircle size={18} className="text-purple-600" />
                  ) : (
                    <Radio size={18} className="text-green-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-sm">
                    {message.from}
                  </h4>
                  {message.studentName && (
                    <p className="text-xs text-slate-500">
                      Student: {message.studentName}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              {!message.read && (
                <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
              )}
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock size={12} />
                {formatTime(message.timestamp)}
              </span>
            </div>
          </div>

          {/* Subject */}
          <h3 className="font-bold text-slate-800 mb-2">{message.subject}</h3>

          {/* Preview */}
          <p className="text-sm text-slate-600 line-clamp-2 mb-4">
            {message.preview}
          </p>

          {/* Tags and Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-1 rounded-lg text-xs font-bold border ${getTagColor(message.tag)}`}
              >
                <Tag size={12} className="inline mr-1" />
                {message.tag}
              </span>
              {message.type === "broadcast" && message.recipients && (
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold">
                  <Users size={12} className="inline mr-1" />
                  {message.recipients} recipients
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {message.replied && (
                <CheckCircle size={16} className="text-green-500" />
              )}
              <button className="text-blue-600 hover:text-blue-700 font-bold text-xs">
                View →
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
