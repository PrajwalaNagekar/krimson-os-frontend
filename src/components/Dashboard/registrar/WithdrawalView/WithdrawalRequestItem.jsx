import React from "react";
import {
  Eye,
  FileCheck,
  Download,
  Archive,
  IdCard,
  BookOpen,
  Calendar,
  CheckCircle,
} from "lucide-react";
import WithdrawalDetails from "./WithdrawalDetails";
import { getStatusColor, getClearanceSteps } from "./utils";

const WithdrawalRequestItem = ({ request, isExpanded, onToggle }) => {
  const statusColors = getStatusColor(request.status);
  const StatusIcon = statusColors.icon;

  return (
    <div className="hover:bg-gradient-to-r hover:from-cyan-50/30 hover:to-pink-50/30 transition-colors">
      {/* Request Row */}
      <div className="p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* Student Info */}
          <div className="flex items-center gap-4 flex-1">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
              {request.name.charAt(0)}
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h3 className="font-bold text-slate-800 text-base lg:text-lg">
                  {request.name}
                </h3>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg ${statusColors.bg} ${statusColors.text} border ${statusColors.border} text-xs font-bold`}
                >
                  <StatusIcon className="w-3.5 h-3.5" />
                  {request.status.replace("-", " ").toUpperCase()}
                </span>
                {request.tcGenerated && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-purple-100 text-purple-700 text-xs font-bold">
                    <FileCheck className="w-3 h-3" />
                    TC Generated
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 flex-wrap text-sm text-slate-600">
                <span className="flex items-center gap-1.5">
                  <IdCard className="w-4 h-4 text-slate-400" />
                  {request.studentId}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  {request.class}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  Exit: {request.withdrawalDate}
                </span>
              </div>
            </div>
          </div>

          {/* Clearance Progress - Desktop */}
          <div className="hidden xl:flex items-center gap-2">
            {getClearanceSteps().map((step, idx) => {
              const clearanceStatus = request.clearance[step.key].status;
              const stepColors = getStatusColor(clearanceStatus);
              return (
                <div key={idx} className="flex items-center gap-2">
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg ${stepColors.bg} ${stepColors.text} text-xs font-semibold`}
                  >
                    <step.icon className="w-3 h-3" />
                    <span className="hidden 2xl:inline">{step.label}</span>
                  </div>
                  {idx < getClearanceSteps().length - 1 && (
                    <div className="w-4 h-0.5 bg-slate-200"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={onToggle}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all text-sm font-semibold"
            >
              <Eye className="w-4 h-4" />
              {isExpanded ? "Hide" : "View"} Details
            </button>

            {request.status === "ready-tc" && !request.tcGenerated && (
              <button className="relative group/tc flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all text-sm font-semibold">
                <FileCheck className="w-4 h-4" />
                Generate TC
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/tc:opacity-100 transition-opacity pointer-events-none z-10">
                  get in app
                </span>
              </button>
            )}

            {request.tcGenerated && (
              <button className="relative group/download flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-all text-sm font-semibold">
                <Download className="w-4 h-4" />
                Download TC
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/download:opacity-100 transition-opacity pointer-events-none z-10">
                  get in app
                </span>
              </button>
            )}

            {request.status === "completed" && !request.archived && (
              <button
                className="relative group/archive p-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100 transition-all hover:scale-110"
                title="Archive"
              >
                <Archive className="w-4 h-4" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/archive:opacity-100 transition-opacity pointer-events-none z-10">
                  get in app
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && <WithdrawalDetails request={request} />}
      </div>
    </div>
  );
};

export default WithdrawalRequestItem;
