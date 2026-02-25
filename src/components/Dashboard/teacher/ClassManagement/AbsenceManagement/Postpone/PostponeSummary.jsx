import React from "react";
import { CheckCheck, Send } from "lucide-react";

const PostponeSummary = ({
  lesson,
  newDate,
  newPeriodLabel,
  isPostposing,
  onSendApproval,
  onDone,
  approvalSent,
}) => {
  if (!isPostposing) return null;

  const formattedDate = newDate
    ? new Date(newDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const periodShort = newPeriodLabel
    ? newPeriodLabel.split(" ").slice(0, 2).join(" ")
    : "";

  return (
    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 shadow-sm mt-2">
      <h3 className="text-[11px] font-black uppercase tracking-widest text-emerald-800 mb-4 flex items-center gap-2">
        <CheckCheck size={16} /> Postpone Summary
      </h3>

      <div className="bg-white rounded-xl p-4 space-y-3 shadow-sm border border-emerald-50">
        <div className="flex justify-between items-center border-b border-slate-100 pb-2">
          <span className="text-[12px] font-bold text-slate-500 uppercase">
            Original Date:
          </span>
          <span className="text-[13px] font-black text-slate-700">
            {lesson.originalDate}, {lesson.originalPeriod}
          </span>
        </div>
        <div className="flex justify-between items-center border-b border-slate-100 pb-2">
          <span className="text-[12px] font-bold text-slate-500 uppercase">
            New Date:
          </span>
          <span className="text-[13px] font-black text-emerald-600">
            {formattedDate}
            {periodShort ? `, ${periodShort}` : ""}
          </span>
        </div>
        <div className="flex justify-between items-center border-b border-slate-100 pb-2">
          <span className="text-[12px] font-bold text-slate-500 uppercase">
            Status:
          </span>
          <span className="text-[11px] bg-emerald-100 text-emerald-700 font-black uppercase tracking-wider px-2 py-1 rounded-md">
            Postponed — Awaiting Coordinator Approval
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[12px] font-bold text-slate-500 uppercase">
            Sent to:
          </span>
          <span className="text-[13px] font-bold text-slate-600">
            Academic Coordinator
          </span>
        </div>
      </div>

      <div className="flex gap-3 justify-end mt-5">
        {!approvalSent ? (
          <button
            onClick={onSendApproval}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl text-[12px] font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <Send size={14} /> Send Request for Approval
          </button>
        ) : (
          <div className="flex items-center gap-2 px-6 py-2.5 bg-emerald-100 text-emerald-700 rounded-xl text-[12px] font-black uppercase tracking-wider">
            <CheckCheck size={14} /> Request Sent to Academic Coordinator
          </div>
        )}
        <button
          onClick={onDone}
          className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl text-[12px] font-black uppercase tracking-wider shadow-sm transition-all"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default PostponeSummary;
