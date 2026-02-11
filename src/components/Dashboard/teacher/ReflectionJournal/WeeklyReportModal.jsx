import React from "react";
import {
  X,
  CheckCircle,
  Sparkles,
  MessageSquare,
  Download,
  Share2,
} from "lucide-react";

const WeeklyReportModal = ({ showModal, onClose, report }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Weekly Teaching Reflection Report
            </h2>
            <p className="text-slate-600">
              Week {report.weekNumber} •{" "}
              {new Date(report.periodStart).toLocaleDateString()} -{" "}
              {new Date(report.periodEnd).toLocaleDateString()}
            </p>
            {report.principalViewed && (
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-bold">
                <CheckCircle size={16} />
                Viewed by Principal
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Report Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
            <p className="text-sm text-slate-600 mb-2">Total Lessons</p>
            <p className="text-3xl font-bold text-blue-600">
              {report.totalLessons}
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <p className="text-sm text-slate-600 mb-2">Reflections Completed</p>
            <p className="text-3xl font-bold text-green-600">
              {report.reflectionsCompleted}
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <p className="text-sm text-slate-600 mb-2">Avg Engagement</p>
            <p className="text-3xl font-bold text-purple-600">
              {report.avgEngagement}%
            </p>
          </div>
        </div>

        {/* Key Insights */}
        <div className="mb-6 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Sparkles className="text-orange-500" size={20} />
            Key Insights This Week
          </h3>
          <ul className="space-y-3">
            {report.keyInsights.map((insight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-slate-700"
              >
                <CheckCircle
                  size={16}
                  className="text-orange-500 flex-shrink-0 mt-0.5"
                />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Principal Comments */}
        {report.principalComments && (
          <div className="mb-6 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <MessageSquare className="text-blue-500" size={20} />
              Principal's Feedback
            </h3>
            <p className="text-slate-700 italic">
              "{report.principalComments}"
            </p>
            <p className="text-xs text-slate-500 mt-2">
              — Principal, {new Date(report.periodEnd).toLocaleDateString()}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all flex items-center justify-center gap-2">
            <Download size={18} />
            <div className="text-left">
              <div>Download PDF</div>
            </div>
          </button>
          <button className="px-6 py-4 bg-white text-green-600 border-2 border-green-200 rounded-xl font-bold hover:bg-green-50 transition-all flex items-center justify-center gap-2">
            <Share2 size={18} />
            <div className="text-left">
              <div>Share Report</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReportModal;
