import React from "react";
import { FileText, Paperclip, AlertTriangle } from "lucide-react";

const ExtendedDetailsPanel = ({ notification, showDetails }) => {
  if (!showDetails) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <FileText size={15} className="text-blue-500" />
        <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500">
          Additional Information
        </h3>
      </div>
      <div className="space-y-2.5">
        {notification?.lessonPlan && (
          <div className="flex gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <Paperclip size={14} className="text-slate-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-0.5">
                Lesson Plan
              </p>
              <p className="text-slate-700 font-semibold text-[13px]">
                {notification.lessonPlan}
              </p>
            </div>
          </div>
        )}
        {notification?.worksheets?.length > 0 && (
          <div className="flex gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <Paperclip size={14} className="text-slate-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-0.5">
                Worksheets
              </p>
              <p className="text-blue-600 font-semibold text-[13px]">
                {notification.worksheets.join(", ")}
              </p>
            </div>
          </div>
        )}
        {notification?.specialNotes && (
          <div className="flex gap-3 p-3 bg-orange-50 border border-orange-100 rounded-xl">
            <AlertTriangle
              size={14}
              className="text-orange-400 mt-0.5 shrink-0"
            />
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-orange-500 mb-0.5">
                Special Notes from Coordinator
              </p>
              <p className="text-slate-700 italic text-[13px]">
                "{notification.specialNotes}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExtendedDetailsPanel;
