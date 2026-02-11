import React from "react";
import { X, TrendingUp, TrendingDown, Edit, Share2, Send } from "lucide-react";

const StudentDetailModal = ({ student, onClose }) => {
  if (!student) return null;

  const getGradeColor = (grade) => {
    if (grade >= 90) return "text-green-600 bg-green-50";
    if (grade >= 75) return "text-blue-600 bg-blue-50";
    if (grade >= 60) return "text-orange-600 bg-orange-50";
    return "text-red-600 bg-red-50";
  };
  const getTrendColor = (trend) => {
    return trend === "improving" ? "text-green-600" : "text-red-600";
  };
  const getParticipationColor = (participation) => {
    if (participation === "A+" || participation === "A")
      return "bg-green-100 text-green-700";
    if (participation === "B") return "bg-blue-100 text-blue-700";
    if (participation === "C") return "bg-orange-100 text-orange-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto animate-in fade-in zoom-in duration-200">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {student.name}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span>Roll: {student.roll}</span>
              <span>•</span>
              <span>ID: {student.id}</span>
              <span>•</span>
              <span
                className={`px-2 py-1 rounded-lg font-bold ${student.atRisk ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
              >
                {student.atRisk ? "At Risk" : "On Track"}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4 border-l-4 border-blue-500 pl-3">
              Academic Performance
            </h3>
            <div className="space-y-3">
              {Object.entries(student.assessments).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-lg font-bold text-sm ${getGradeColor(value)}`}
                  >
                    {value}%
                  </span>
                </div>
              ))}
              <div className="pt-3 border-t border-blue-200 flex justify-between items-center">
                <span className="font-bold text-slate-700">
                  Overall Average
                </span>
                <span className="text-lg font-bold text-blue-600">
                  {student.avgScore}%
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4 border-l-4 border-purple-500 pl-3">
              Behavior & Analytics
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Participation</span>
                <span
                  className={`px-3 py-1 rounded-lg font-bold text-sm ${getParticipationColor(student.participation)}`}
                >
                  {student.participation}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Attendance Rate</span>
                <span className="font-bold text-slate-800">
                  {student.attendance}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Behavior Score</span>
                <span className="font-bold text-slate-800">
                  {student.behaviorScore}/100
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">
                  Performance Trend
                </span>
                <span
                  className={`font-bold flex items-center gap-1 ${getTrendColor(student.trend)}`}
                >
                  {student.trend === "improving" ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}
                  {student.trend === "improving" ? "+" : ""}
                  {student.trendValue}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Remarks Section */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            Teacher Remarks
          </h3>
          {student.remarks.length > 0 ? (
            <div className="space-y-2 mb-4">
              {student.remarks.map((remark, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white rounded-xl border border-orange-100"
                >
                  <p className="text-sm text-slate-700">{remark}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500 mb-4">No remarks added yet</p>
          )}
          <button className="w-full px-4 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
            <Edit size={18} />
            <div className="text-left">
              <div>Add Remark for Parent Report</div>
            </div>
          </button>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex gap-3">
          <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all flex flex-col items-center gap-1">
            <Send size={18} />
            <span className="text-sm">Send Report</span>
          </button>
          <button className="px-4 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex flex-col items-center gap-1">
            <Share2 size={18} />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailModal;
