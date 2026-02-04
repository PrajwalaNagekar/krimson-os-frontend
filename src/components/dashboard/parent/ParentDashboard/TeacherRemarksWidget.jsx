import React from "react";
import { User, ExternalLink } from "lucide-react";

const TeacherRemarksWidget = ({ remarks }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <User size={20} className="text-blue-500" />
          <h3 className="font-bold text-slate-800 text-lg">Teacher Remarks</h3>
        </div>
        <span className="text-xs text-slate-400 font-medium bg-slate-100 px-3 py-1 rounded-lg">
          Last 7 Days
        </span>
      </div>

      <div className="space-y-4">
        {remarks.map((remark, i) => (
          <div
            key={i}
            className="relative pl-4 border-l-4 border-blue-400 pb-4 last:pb-0 last:border-l-transparent"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
            <div>
              <p className="text-sm text-slate-700 leading-relaxed mb-2">
                "{remark.text}"
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-bold text-blue-600">
                  {remark.teacher}
                </span>
                <span>•</span>
                <span>{remark.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherRemarksWidget;
