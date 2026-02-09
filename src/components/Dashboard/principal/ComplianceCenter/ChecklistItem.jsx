import React from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

const ChecklistItem = ({ title, category, status, dueDate }) => (
  <div
    className={`flex items-center gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all ${
      status === "completed"
        ? "bg-green-50 border-green-200 opacity-60"
        : status === "overdue"
          ? "bg-red-50 border-red-200"
          : "bg-slate-50 border-slate-200 hover:border-blue-300"
    }`}
  >
    <div className="flex-shrink-0">
      {status === "completed" ? (
        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
      ) : status === "overdue" ? (
        <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
      ) : (
        <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-slate-300 rounded"></div>
      )}
    </div>
    <div className="flex-1">
      <h4
        className={`font-semibold text-sm sm:text-base ${
          status === "completed"
            ? "line-through text-slate-500"
            : "text-slate-800"
        }`}
      >
        {title}
      </h4>
      <div className="flex flex-wrap items-center gap-2 mt-1">
        <span className="text-[10px] sm:text-xs text-slate-500">
          {category}
        </span>
        {dueDate && (
          <>
            <span className="text-slate-300">•</span>
            <span
              className={`text-[10px] sm:text-xs ${
                status === "overdue"
                  ? "text-red-600 font-bold"
                  : "text-slate-500"
              }`}
            >
              Due: {dueDate}
            </span>
          </>
        )}
      </div>
    </div>
  </div>
);

export default ChecklistItem;
