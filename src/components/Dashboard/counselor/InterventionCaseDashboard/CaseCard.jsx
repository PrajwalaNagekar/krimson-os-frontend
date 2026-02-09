import React from "react";
import {
  Bell,
  CheckCircle,
  MoreHorizontal,
  AlertTriangle,
  Calendar,
  Lock,
  Eye,
} from "lucide-react";
import { getProgressStatus, getSeverityColor } from "./utils";

const CaseCard = ({ data, onViewNotes }) => {
  const status = getProgressStatus(data.progress);
  const hasUpcomingReminder =
    data.nextFollowUp &&
    new Date(data.nextFollowUp) - new Date() < 3 * 24 * 60 * 60 * 1000;

  return (
    <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group cursor-pointer">
      {/* Severity Corner */}
      {data.severity === "High" && (
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-red-500 opacity-20"></div>
      )}

      {/* Reminder Badge */}
      {hasUpcomingReminder && (
        <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 animate-pulse">
          <Bell size={12} />
          Due Soon
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-lg ${status.bg} ${status.text}`}
            >
              <CheckCircle size={12} />
              {status.label}
            </span>
            <span
              className={`text-xs font-bold px-2 py-1 rounded ${getSeverityColor(data.severity)}`}
            >
              {data.severity}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-1">
            {data.student}
          </h3>
          <p className="text-xs text-slate-400">Case ID: {data.id}</p>
        </div>
        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Issue Summary */}
      <div className="mb-4 p-4 bg-slate-50 rounded-xl">
        <div className="flex items-start gap-2 mb-2">
          {data.severity === "High" && (
            <AlertTriangle
              size={16}
              className="text-red-500 flex-shrink-0 mt-0.5"
            />
          )}
          <p className="text-sm font-semibold text-slate-700">{data.issue}</p>
        </div>
        {data.description && (
          <p className="text-xs text-slate-500 leading-relaxed">
            {data.description}
          </p>
        )}
      </div>

      {/* Assigned Counselor */}
      <div className="mb-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold text-sm">
          {data.counselor?.charAt(0) || "C"}
        </div>
        <div>
          <div className="text-xs text-slate-400">Assigned to</div>
          <div className="text-sm font-bold text-slate-700">
            {data.counselor || "Unassigned"}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-2">
          <span className="text-slate-500 font-medium">Progress</span>
          <span className="font-bold text-slate-700">{data.progress}%</span>
        </div>
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${status.color} transition-all duration-500`}
            style={{ width: `${data.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Next Follow-up */}
      {data.nextFollowUp && (
        <div className="mb-4 flex items-center gap-2 text-xs text-slate-500 bg-blue-50 p-2 rounded-lg">
          <Calendar size={12} className="text-blue-600" />
          <span>
            Next Follow-up:{" "}
            <span className="font-bold text-blue-700">{data.nextFollowUp}</span>
          </span>
        </div>
      )}

      {/* Footer Actions */}
      <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Lock size={12} />
          <span className="font-medium">Confidential</span>
        </div>
        <button
          onClick={() => onViewNotes(data)}
          className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors"
        >
          <Eye size={12} />
          View Notes
        </button>
      </div>
    </div>
  );
};

export default CaseCard;
