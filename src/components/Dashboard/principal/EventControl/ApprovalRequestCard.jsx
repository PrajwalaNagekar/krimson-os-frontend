import React from "react";
import { Clock, Check, X } from "lucide-react";

const ApprovalRequestCard = ({
  title,
  category,
  requestedBy,
  date,
  time,
  attendees,
  priority,
}) => (
  <div
    className={`p-4 border-l-4 rounded-xl ${
      priority === "High"
        ? "border-orange-600 bg-orange-50"
        : "border-blue-600 bg-blue-50"
    }`}
  >
    <div className="flex items-start justify-between mb-2">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Clock
            className={`w-4 h-4 ${
              priority === "High" ? "text-orange-600" : "text-blue-600"
            }`}
          />
          {priority === "High" && (
            <span className="px-2 py-0.5 bg-orange-200 text-orange-800 rounded-full text-[10px] font-bold uppercase">
              High Priority
            </span>
          )}
        </div>
        <h4 className="font-bold text-slate-800">{title}</h4>
        <p className="text-xs text-slate-600 mt-1">
          Requested by: <span className="font-semibold">{requestedBy}</span>
        </p>
      </div>
    </div>
    <div className="text-xs text-slate-700 space-y-1 mb-3">
      <p>
        📅 {date} {time && `• ${time}`}
      </p>
      {attendees && <p>👥 Expected: {attendees} attendees</p>}
      <p className="font-semibold text-slate-600">Category: {category}</p>
    </div>
    <div className="flex gap-2">
      <button className="flex-1 px-3 py-2 bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        <X className="w-3 h-3" />
        Reject
        <span className="text-[8px] opacity-70">(get in app)</span>
      </button>
      <button className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        <Check className="w-3 h-3" />
        Approve
        <span className="text-[8px] opacity-80">(get in app)</span>
      </button>
    </div>
  </div>
);

export default ApprovalRequestCard;
