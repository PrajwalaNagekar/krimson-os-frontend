import React from "react";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";

const MeetingLogs = ({ logs }) => {
  return (
    <div className="space-y-4">
      {logs.map((item) => (
        <div
          key={item.id}
          className="border border-slate-100 rounded-2xl p-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div
              className={`p-3 rounded-xl ${item.type === "Meeting" ? "bg-purple-50 text-purple-600" : "bg-blue-50 text-blue-600"}`}
            >
              {item.type === "Meeting" ? (
                <Calendar size={20} />
              ) : (
                <MessageCircle size={20} />
              )}
            </div>
            <div>
              <h4 className="font-bold text-slate-700 text-sm">
                {item.type} with {item.with}
              </h4>
              <p className="text-xs text-slate-400">
                {item.date} • {item.time || item.status}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {item.status === "Scheduled" && (
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
                Upcoming
              </span>
            )}
            <button className="text-slate-400 hover:text-blue-600">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetingLogs;
