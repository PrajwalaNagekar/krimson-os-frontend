import React from "react";
import { X, Check } from "lucide-react";

const SubstitutionRequestCard = ({
  teacherName,
  subject,
  date,
  reason,
  duration,
  priority,
}) => (
  <div
    className={`p-4 border-l-4 rounded-xl ${
      priority === "Urgent"
        ? "border-red-500 bg-red-50"
        : "border-orange-500 bg-orange-50"
    }`}
  >
    <div className="flex items-start justify-between mb-2">
      <div className="flex-1">
        <h4 className="font-bold text-slate-800">{teacherName}</h4>
        <p className="text-xs text-slate-600">
          {subject} • {date}
        </p>
      </div>
      <span
        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
          priority === "Urgent"
            ? "bg-red-200 text-red-800"
            : "bg-orange-200 text-orange-800"
        }`}
      >
        {priority}
      </span>
    </div>
    <p className="text-sm text-slate-700 mb-2">
      <span className="font-semibold">Reason:</span> {reason}
    </p>
    <p className="text-xs text-slate-500 mb-3">{duration}</p>
    <div className="flex gap-2">
      <button className="flex-1 px-3 py-2 bg-white hover:bg-slate-100 border-2 border-slate-300 text-slate-700 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
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

export default SubstitutionRequestCard;
