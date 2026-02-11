import React, { useState } from "react";
import {
  X,
  Users,
  FileText,
  Calendar,
  Award,
  TrendingUp,
  Paperclip,
  Download,
  Zap,
  Shield,
  CheckCircle,
} from "lucide-react";
import {
  getStatusColor,
  getStatusBadge,
  formatDate,
} from "./AssignmentManagerUtils";
import SubmissionTracker from "./SubmissionTracker";

const AssignmentDetailModal = ({ assignment, onClose, onOpenEvaluation }) => {
  const [activeModalTab, setActiveModalTab] = useState("overview"); // 'overview', 'tracking'

  if (!assignment) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`px-3 py-1.5 bg-gradient-to-r ${getStatusColor(assignment.status)} text-white rounded-xl font-bold text-sm`}
              >
                {assignment.subject}
              </span>
              <span
                className={`px-3 py-1.5 rounded-xl font-bold text-sm border-2 ${getStatusBadge(assignment.status)}`}
              >
                {assignment.status}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              {assignment.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-50 rounded-xl text-slate-500 border border-slate-100">
                  <Users size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Class
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    {assignment.class || assignment.grade}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-50 rounded-xl text-slate-500 border border-slate-100">
                  <FileText size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Type
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    {assignment.type}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-50 rounded-xl text-slate-500 border border-slate-100">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Due Date
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    {formatDate(assignment.due)} • {assignment.dueTime}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-50 rounded-xl text-slate-500 border border-slate-100">
                  <Award size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Max Marks
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    {assignment.maxMarks || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-6 border-b border-slate-100">
          <button
            onClick={() => setActiveModalTab("overview")}
            className={`pb-4 px-2 text-sm font-bold transition-all relative ${activeModalTab === "overview" ? "text-blue-600" : "text-slate-400 hover:text-slate-600"}`}
          >
            Overview{" "}
            {activeModalTab === "overview" && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full" />
            )}
          </button>
          <button
            onClick={() => setActiveModalTab("tracking")}
            className={`pb-4 px-2 text-sm font-bold transition-all relative ${activeModalTab === "tracking" ? "text-blue-600" : "text-slate-400 hover:text-slate-600"}`}
          >
            Tracking{" "}
            {activeModalTab === "tracking" && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full" />
            )}
          </button>
        </div>

        {activeModalTab === "overview" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
            <div className="space-y-6">
              {/* Overview Stats */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[2rem] border border-blue-100 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="text-blue-500" size={20} />
                  Performance Overview
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-2xl border border-blue-50">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Submissions
                    </p>
                    <p className="text-xl font-black text-slate-800">
                      {assignment.submitted}/{assignment.total}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-blue-50">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Graded
                    </p>
                    <p className="text-xl font-black text-green-600">
                      {assignment.graded}
                    </p>
                  </div>
                </div>
              </div>

              {/* Attachment List */}
              {assignment.attachments && assignment.attachments.length > 0 && (
                <div className="p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Paperclip className="text-slate-400" size={18} />
                    Resources & Attachments
                  </h3>
                  <div className="space-y-2">
                    {assignment.attachments.map((file, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <FileText size={16} className="text-blue-500" />
                          <span className="text-xs font-bold text-slate-700">
                            {file}
                          </span>
                        </div>
                        <Download
                          size={14}
                          className="text-slate-300 group-hover:text-blue-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {/* Evaluation Actions */}
              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="relative z-10 space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-2">
                      Evaluation Studio
                    </h4>
                    <p className="text-xs opacity-60 leading-relaxed">
                      Access the unified grading pipeline. Compare submissions
                      against rubrics and use AI2 for bias detection.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenEvaluation(null)}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                  >
                    <Zap size={18} />
                    Launch Studio
                  </button>
                </div>
              </div>

              {/* Evaluation Safeguards */}
              <div className="p-6 bg-orange-50 rounded-[2rem] border border-orange-100 shadow-sm">
                <h3 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                  <Shield className="text-orange-500" size={20} />
                  Evaluation Safeguards
                </h3>
                <div className="space-y-2 text-[10px] font-medium text-slate-600">
                  <p className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-green-500" />
                    Outcome Mapping Confirmed
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-green-500" />
                    Rubric Locked for Consistency
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-fadeIn">
            <SubmissionTracker
              assignment={assignment}
              onOpenEvaluation={onOpenEvaluation}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignmentDetailModal;
