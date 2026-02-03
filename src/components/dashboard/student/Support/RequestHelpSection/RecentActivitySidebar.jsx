import React from "react";
import { Clock } from "lucide-react";
import { STUDENT_DATA } from "../../../../../data/studentData";

const RecentActivitySidebar = () => {
  const recentTickets = STUDENT_DATA.supportData.recentTickets;

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 h-fit">
      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Clock size={20} className="text-slate-400" /> Recent Activity
      </h3>
      <div className="space-y-4">
        {recentTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="p-4 bg-slate-50 rounded-2xl border border-slate-100"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[10px] font-bold bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-500">
                {ticket.id}
              </span>
              <span
                className={`text-[10px] font-bold text-${ticket.statusColor}-600 bg-${ticket.statusColor}-100 px-2 py-0.5 rounded-full`}
              >
                {ticket.status}
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-700">{ticket.title}</h4>
            <p className="text-xs text-slate-500 mt-1">{ticket.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivitySidebar;
