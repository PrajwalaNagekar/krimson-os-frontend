import React from "react";
import {
  AlertOctagon,
  Bell,
  AlertTriangle,
  Eye,
  ExternalLink,
} from "lucide-react";

const HighRiskStudentsAlert = ({ highRiskCount, students }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border-2 border-red-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
          <AlertOctagon className="text-red-500" size={22} />
          High-Risk Students
        </h3>
        <div className="flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1.5 rounded-lg">
          <Bell size={14} />
          <span className="text-xs font-bold">{highRiskCount} Flagged</span>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {students.map((student, i) => (
          <div
            key={i}
            className="p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {student.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-slate-800 text-sm">
                      {student.name}
                    </p>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        student.severity === "High"
                          ? "bg-red-200 text-red-700"
                          : "bg-orange-200 text-orange-700"
                      }`}
                    >
                      {student.severity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-1">{student.id}</p>
                  <div className="flex items-center gap-2">
                    <AlertTriangle
                      size={12}
                      className="text-red-500 flex-shrink-0"
                    />
                    <p className="text-xs text-red-600 font-medium">
                      {student.flag}
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Flagged {student.days}
                  </p>
                </div>
              </div>
              <button className="flex flex-col items-center gap-0.5 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-2 rounded-lg hover:shadow-lg transition-all hover:scale-105 opacity-0 group-hover:opacity-100 flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <Eye size={12} />
                  Review
                </div>
                <div className="flex items-center gap-1 text-[9px] text-white/70 italic">
                  <span>Go to App</span>
                  <ExternalLink size={8} />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Alert Info */}
      <div className="pt-4 border-t border-red-100">
        <div className="flex items-start gap-2 text-xs text-slate-600">
          <AlertTriangle
            size={14}
            className="text-orange-500 flex-shrink-0 mt-0.5"
          />
          <p className="leading-relaxed">
            Students are flagged based on: attendance drops &gt;20%, grade
            decline, behavioral incidents, or self-reported stress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighRiskStudentsAlert;
