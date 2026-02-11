import React from "react";
import {
  FileText,
  CheckSquare,
  Users,
  Calendar,
  Copy,
  Edit,
} from "lucide-react";
import {
  getStatusColor,
  getStatusBadge,
  formatDate,
} from "./AssignmentManagerUtils";

const AssignmentCard = ({ assignment, view, onSelect, onGrade }) => {
  return (
    <div
      className={`bg-white rounded-3xl p-6 shadow-md border-2 transition-all duration-300 group ${view === "repository" ? "hover:border-purple-200" : "hover:border-blue-200"} hover:shadow-xl`}
    >
      <div className="flex justify-between items-start mb-4">
        <div
          className={`p-3 bg-gradient-to-br ${view === "repository" ? "from-purple-500 to-indigo-500" : getStatusColor(assignment.status)} text-white rounded-xl shadow-md group-hover:scale-110 transition-transform`}
        >
          {assignment.type === "Quiz" ? (
            <CheckSquare size={24} />
          ) : (
            <FileText size={24} />
          )}
        </div>
        <div
          className={`px-3 py-1 rounded-xl text-xs font-bold border-2 ${view === "repository" ? "border-purple-200 text-purple-600 bg-purple-50" : getStatusBadge(assignment.status)}`}
        >
          {view === "repository"
            ? assignment.status === "Draft"
              ? "DRAFT"
              : "MASTER"
            : assignment.status}
        </div>
      </div>

      <h4 className="font-bold text-slate-800 text-lg mb-2 line-clamp-2">
        {assignment.title}
      </h4>

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500 font-medium flex items-center gap-1">
            <Users size={14} />
            {assignment.class || assignment.grade}
          </span>
          <span
            className={`px-2 py-0.5 bg-gradient-to-r ${getStatusColor(assignment.status)} text-white rounded-lg text-xs font-bold`}
          >
            {assignment.subject}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500 font-medium flex items-center gap-1">
            <Calendar size={14} />
            {view === "repository"
              ? `Created: ${assignment.created}`
              : `Due: ${formatDate(assignment.due)}`}
          </span>
          {view === "tracker" && (
            <span className="text-slate-600 font-bold">
              {assignment.dueTime}
            </span>
          )}
        </div>
      </div>

      <div className="mb-4">
        {view === "tracker" ? (
          <>
            <div className="flex justify-between text-xs mb-2 font-semibold text-slate-500">
              <span>Submissions</span>
              <span>
                {assignment.submitted} / {assignment.total}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${getStatusColor(assignment.status)} rounded-full transition-all`}
                style={{
                  width: `${(assignment.submitted / assignment.total) * 100}%`,
                }}
              ></div>
            </div>
          </>
        ) : (
          <div className="p-3 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase">
              <span>Used: {assignment.used} Times</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        {view === "tracker" ? (
          <>
            <button
              onClick={() => onSelect(assignment)}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all active:scale-95 text-xs"
            >
              View Details
            </button>
            <button
              onClick={() => onGrade && onGrade(assignment)}
              className="flex-1 px-4 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 text-xs transition-all"
            >
              Grade Now
            </button>
          </>
        ) : (
          <>
            <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-md transition-all active:scale-95 text-xs flex items-center justify-center gap-2">
              <Copy size={14} />
              Assign New
            </button>
            <button className="px-4 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 text-xs transition-all">
              <Edit size={14} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AssignmentCard;
