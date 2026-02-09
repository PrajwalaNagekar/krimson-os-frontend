import React from "react";
import { Eye } from "lucide-react";

const HistoryEntry = ({
  title,
  category,
  timestamp,
  audience,
  readRate,
  status,
}) => (
  <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
    <div className="flex items-start justify-between mb-2">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              category === "Academic"
                ? "bg-blue-100 text-blue-600"
                : "bg-purple-100 text-purple-600"
            }`}
          >
            {category}
          </span>
        </div>
        <p className="text-xs text-slate-500 mb-2">
          {timestamp} • {audience}
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3 text-slate-400" />
            <span className="text-xs text-slate-600">{readRate}% read</span>
          </div>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
              status === "Delivered"
                ? "bg-green-100 text-green-700"
                : status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
      <button className="text-blue-600 hover:text-blue-700 text-xs font-bold">
        View Details
        <span className="text-[8px] opacity-70 ml-1">(get in app)</span>
      </button>
    </div>
  </div>
);

export default HistoryEntry;
