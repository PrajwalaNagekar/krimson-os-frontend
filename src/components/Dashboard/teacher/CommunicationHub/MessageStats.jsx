import React from "react";
import { MessageSquare, Bell, User, Radio } from "lucide-react";

const MessageStats = ({ stats, filterType, onFilterChange }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer ${
          filterType === "all"
            ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-blue-500 shadow-lg"
            : "bg-white border-blue-200 hover:border-blue-300 hover:shadow-lg hover:scale-105 transition-all duration-300"
        }`}
        onClick={() => onFilterChange("all")}
      >
        <div className="flex items-center justify-between mb-2">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${filterType === "all" ? "text-white/80" : "text-slate-400"}`}
          >
            All Messages
          </p>
          <MessageSquare
            className={
              filterType === "all"
                ? "text-white opacity-60"
                : "text-blue-400 opacity-60"
            }
            size={20}
          />
        </div>
        <h3
          className={`text-2xl md:text-3xl font-bold ${filterType === "all" ? "text-white" : "text-slate-800"}`}
        >
          {stats.total}
        </h3>
      </div>

      <div
        className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer ${
          filterType === "unread"
            ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white border-orange-500 shadow-lg"
            : "bg-white border-orange-200 hover:border-orange-300 hover:shadow-lg hover:scale-105 transition-all duration-300"
        }`}
        onClick={() => onFilterChange("unread")}
      >
        <div className="flex items-center justify-between mb-2">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${filterType === "unread" ? "text-white/80" : "text-slate-400"}`}
          >
            Unread
          </p>
          <Bell
            className={
              filterType === "unread"
                ? "text-white opacity-60"
                : "text-orange-400 opacity-60"
            }
            size={20}
          />
        </div>
        <h3
          className={`text-2xl md:text-3xl font-bold ${filterType === "unread" ? "text-white" : "text-orange-600"}`}
        >
          {stats.unread}
        </h3>
      </div>

      <div
        className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer ${
          filterType === "direct"
            ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white border-purple-500 shadow-lg"
            : "bg-white border-purple-200 hover:border-purple-300 hover:shadow-lg hover:scale-105 transition-all duration-300"
        }`}
        onClick={() => onFilterChange("direct")}
      >
        <div className="flex items-center justify-between mb-2">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${filterType === "direct" ? "text-white/80" : "text-slate-400"}`}
          >
            Direct
          </p>
          <User
            className={
              filterType === "direct"
                ? "text-white opacity-60"
                : "text-purple-400 opacity-60"
            }
            size={20}
          />
        </div>
        <h3
          className={`text-2xl md:text-3xl font-bold ${filterType === "direct" ? "text-white" : "text-purple-600"}`}
        >
          {stats.direct}
        </h3>
      </div>

      <div
        className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer ${
          filterType === "broadcast"
            ? "bg-gradient-to-br from-green-500 to-emerald-500 text-white border-green-500 shadow-lg"
            : "bg-white border-green-200 hover:border-green-300 hover:shadow-lg hover:scale-105 transition-all duration-300"
        }`}
        onClick={() => onFilterChange("broadcast")}
      >
        <div className="flex items-center justify-between mb-2">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${filterType === "broadcast" ? "text-white/80" : "text-slate-400"}`}
          >
            Broadcast
          </p>
          <Radio
            className={
              filterType === "broadcast"
                ? "text-white opacity-60"
                : "text-green-400 opacity-60"
            }
            size={20}
          />
        </div>
        <h3
          className={`text-2xl md:text-3xl font-bold ${filterType === "broadcast" ? "text-white" : "text-green-600"}`}
        >
          {stats.broadcast}
        </h3>
      </div>
    </div>
  );
};

export default MessageStats;
