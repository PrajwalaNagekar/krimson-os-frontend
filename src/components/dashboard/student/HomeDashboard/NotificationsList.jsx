import React from "react";
import { AlertCircle, Calendar, Book, Award } from "lucide-react";

/**
 * NotificationsList Component
 *
 * Purpose: Display recent notifications with priority indicators and category icons
 */
const NotificationsList = ({ notifications, onViewAll }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 opacity-5 rounded-full blur-2xl"></div>

      <h3 className="font-bold text-slate-800 mb-5 flex items-center gap-2 relative z-10">
        <AlertCircle size={20} className="text-blue-500" />
        Recent Alerts
      </h3>

      <div className="space-y-3 relative z-10">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all group"
          >
            {/* Category indicator */}
            <div
              className={`w-2 h-2 rounded-full ${
                notif.priority === "high"
                  ? "bg-red-500 animate-pulse"
                  : notif.priority === "medium"
                    ? "bg-orange-500"
                    : "bg-blue-500"
              }`}
            ></div>

            {/* Icon based on category */}
            <div
              className={`p-2 rounded-xl ${
                notif.category === "event"
                  ? "bg-purple-100 text-purple-600"
                  : notif.category === "assignment"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-green-100 text-green-600"
              }`}
            >
              {notif.category === "event" && <Calendar size={16} />}
              {notif.category === "assignment" && <Book size={16} />}
              {notif.category === "grade" && <Award size={16} />}
            </div>

            <p className="text-sm font-medium text-slate-700 flex-1">
              {notif.text}
            </p>

            <button className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100">
              View
            </button>
            <button className="text-xs font-bold text-slate-400 hover:text-red-600 transition-colors">
              Dismiss
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={onViewAll}
        className="w-full mt-4 py-3 border-2 border-slate-100 text-slate-600 font-bold rounded-xl text-sm hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all"
      >
        View All Notifications
      </button>
    </div>
  );
};

export default NotificationsList;
