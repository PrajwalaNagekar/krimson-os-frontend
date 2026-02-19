import React from "react";
import { FileText, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const STATUS_DOT = {
  completed: "bg-green-500",
  "in-progress": "bg-blue-500",
  pending: "bg-slate-400",
};

const ChapterAssignments = ({ assignments }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-lg">
        <FileText size={20} className="text-purple-500" />
        Assignments
        <span className="ml-2 px-2.5 py-0.5 bg-purple-100 text-purple-600 text-xs font-bold rounded-full">
          {assignments.length}
        </span>
      </h2>

      <div className="space-y-2">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            onClick={() => navigate("/dashboard/student/assignments")}
            className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-2 h-2 rounded-full flex-shrink-0 ${STATUS_DOT[assignment.status] || "bg-slate-400"}`}
              />
              <div>
                <p className="font-medium text-slate-800">{assignment.name}</p>
                <p className="text-xs text-slate-500 capitalize">
                  {assignment.status}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {assignment.score && (
                <span className="text-sm font-bold text-green-600">
                  {assignment.score}%
                </span>
              )}
              <ChevronRight
                size={16}
                className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterAssignments;
