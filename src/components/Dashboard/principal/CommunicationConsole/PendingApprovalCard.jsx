import React from "react";
import { Check, X } from "lucide-react";

const PendingApprovalCard = ({
  title,
  department,
  requestedBy,
  message,
  timestamp,
  category,
}) => (
  <div className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-all bg-white">
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h4 className="font-bold text-slate-800">{title}</h4>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
              category === "Academic"
                ? "bg-blue-100 text-blue-700"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {category}
          </span>
        </div>
        <p className="text-xs text-slate-500 mb-2">
          {department} • Requested by: {requestedBy}
        </p>
        <p className="text-sm bg-slate-50 p-3 rounded-lg text-slate-700 mb-2">
          "{message}"
        </p>
        <p className="text-xs text-slate-400">{timestamp}</p>
      </div>
      <div className="flex gap-2 flex-shrink-0">
        <button
          className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
          title="Approve"
        >
          <Check size={18} />
        </button>
        <button
          className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
          title="Reject"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  </div>
);

export default PendingApprovalCard;
