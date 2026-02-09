import React from "react";
import { Calendar, Check, X } from "lucide-react";

const TimetableApprovalCard = ({
  title,
  grade,
  submittedBy,
  timestamp,
  examCount,
  status,
}) => (
  <div className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-all bg-white">
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Calendar className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-800">{title}</h4>
            <p className="text-xs text-slate-500">
              Grade {grade} • {examCount} exams scheduled
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-600 mb-2">
          Submitted by: <span className="font-semibold">{submittedBy}</span> •{" "}
          {timestamp}
        </p>
        <div className="flex gap-2 mt-3">
          <button className="flex-1 px-3 py-2 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-bold transition-colors">
            View Draft
            <span className="text-[8px] opacity-70 ml-1">(get in app)</span>
          </button>
          <button className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1">
            <Check size={14} />
            Approve
            <span className="text-[8px] opacity-80 ml-1">(get in app)</span>
          </button>
          <button className="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg text-xs font-bold transition-colors">
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default TimetableApprovalCard;
