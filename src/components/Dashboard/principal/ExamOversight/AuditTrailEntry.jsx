import React from "react";

const AuditTrailEntry = ({ action, performedBy, timestamp, status }) => (
  <div className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors">
    <div
      className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
        status === "Approved"
          ? "bg-green-500"
          : status === "Rejected"
            ? "bg-red-500"
            : "bg-blue-500"
      }`}
    ></div>
    <div className="flex-1">
      <p className="text-sm font-medium text-slate-800">{action}</p>
      <p className="text-xs text-slate-500">
        By {performedBy} • {timestamp}
      </p>
    </div>
    <span
      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
        status === "Approved"
          ? "bg-green-100 text-green-700"
          : status === "Rejected"
            ? "bg-red-100 text-red-700"
            : "bg-blue-100 text-blue-700"
      }`}
    >
      {status}
    </span>
  </div>
);

export default AuditTrailEntry;
