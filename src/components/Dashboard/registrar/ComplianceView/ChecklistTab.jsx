import React from "react";
import { Calendar, CheckCircle, CheckSquare, Activity } from "lucide-react";
import { getStatusColor, getPriorityBadge } from "./utils.jsx";

const ChecklistTab = ({ checklist }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800">
          January 2026 Compliance Checklist
        </h3>
        <span className="text-sm text-slate-500">
          {checklist.filter((i) => i.status === "completed").length} of{" "}
          {checklist.length} completed
        </span>
      </div>

      {checklist.map((item) => {
        const statusColors = getStatusColor(item.status);
        const StatusIcon = statusColors.icon;
        const isOverdue =
          new Date(item.due) < new Date() && item.status !== "completed";

        return (
          <div
            key={item.id}
            className={`group p-4 lg:p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
              item.status === "completed"
                ? "bg-green-50/50 border-green-200"
                : isOverdue
                  ? "bg-red-50/50 border-red-200"
                  : "bg-white border-slate-200 hover:border-blue-300"
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Checkbox */}
              <div
                className={`mt-1 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                  item.status === "completed"
                    ? "bg-green-500 border-green-500"
                    : "border-slate-300 group-hover:border-blue-400"
                }`}
              >
                {item.status === "completed" && (
                  <CheckCircle className="w-4 h-4 text-white" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h4
                        className={`font-bold text-base ${item.status === "completed" ? "text-slate-500 line-through" : "text-slate-800"}`}
                      >
                        {item.item}
                      </h4>
                      {getPriorityBadge(item.priority)}
                      <span
                        className={`px-2 py-1 rounded-lg text-xs font-bold ${statusColors.bg} ${statusColors.text}`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 flex-wrap text-sm">
                      <span
                        className={`flex items-center gap-1.5 ${isOverdue ? "text-red-600 font-bold" : "text-slate-500"}`}
                      >
                        <Calendar className="w-4 h-4" />
                        Due: {item.due}
                        {isOverdue && (
                          <span className="ml-1 text-xs bg-red-100 px-2 py-0.5 rounded">
                            OVERDUE
                          </span>
                        )}
                      </span>
                      {item.completedDate && (
                        <span className="flex items-center gap-1.5 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          Completed: {item.completedDate}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${statusColors.bg} ${statusColors.text} border ${statusColors.border} text-xs lg:text-sm font-bold whitespace-nowrap`}
                  >
                    <StatusIcon className="w-4 h-4" />
                    {item.status.replace("-", " ").toUpperCase()}
                  </span>
                </div>

                {/* Action Buttons */}
                {item.status !== "completed" && (
                  <div className="flex gap-2 mt-4">
                    <button className="relative group/mark flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all text-sm font-semibold">
                      <CheckSquare className="w-4 h-4" />
                      Mark Complete
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/mark:opacity-100 transition-opacity pointer-events-none">
                        get in app
                      </span>
                    </button>
                    <button className="relative group/update flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all text-sm font-semibold">
                      <Activity className="w-4 h-4" />
                      Update Status
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/update:opacity-100 transition-opacity pointer-events-none">
                        get in app
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChecklistTab;
