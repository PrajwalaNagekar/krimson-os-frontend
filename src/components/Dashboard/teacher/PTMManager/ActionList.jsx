import React, { useState } from "react";
import {
  Plus,
  CheckCircle2,
  Activity,
  Clock,
  Users,
  FileText,
  MessageSquare,
} from "lucide-react";

const ActionList = ({ actions: initialActions, onLogAction, onShowToast }) => {
  const [filterStatus, setFilterStatus] = useState("all");
  const [actions, setActions] = useState(initialActions);

  const handleStatusUpdate = (action) => {
    const newStatus = action.status === "open" ? "in-progress" : "completed";
    setActions(
      actions.map((a) =>
        a.id === action.id ? { ...a, status: newStatus } : a,
      ),
    );
    onShowToast(`Action status updated to ${newStatus}`);
  };

  return (
    <div className="lg:col-span-3 space-y-8">
      <div className="bg-white/70 backdrop-blur-3xl rounded-[3.5rem] p-8 md:p-10 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.08)] border border-white/50 ring-1 ring-indigo-500/5">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-indigo-950 tracking-tight leading-none mb-3">
              Action Tracker
            </h2>
            <p className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              Execution & Accountability Engine
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50">
              {["all", "open", "in-progress", "completed"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilterStatus(f)}
                  className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${filterStatus === f
                      ? "bg-white text-indigo-600 shadow-md scale-105"
                      : "text-slate-400 hover:text-indigo-400"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <button
              onClick={onLogAction}
              className="px-8 py-4 bg-indigo-600 text-white rounded-[1.25rem] font-black text-[10px] uppercase tracking-[0.1em] shadow-[0_20px_40px_-10px_rgba(79,70,229,0.4)] hover:bg-indigo-700 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-3 group"
            >
              <Plus size={18} className="group-hover:rotate-90 transition-transform duration-500" />
              Log New Action
            </button>
          </div>
        </div>


        <div className="space-y-4">
          {actions
            .filter((a) =>
              filterStatus === "all" ? true : a.status === filterStatus,
            )
            .map((action) => (
              <div
                key={action.id}
                className={`p-6 bg-white border rounded-[2rem] transition-all duration-300 relative group overflow-hidden ${action.status === "completed"
                    ? "border-emerald-100 bg-emerald-50/10"
                    : "border-indigo-50 hover:border-indigo-200 hover:shadow-lg"
                  }`}
              >
                {/* Status Light */}
                <div
                  className={`absolute top-0 left-0 w-1.5 h-full transition-colors ${action.status === "completed"
                      ? "bg-emerald-400"
                      : action.status === "in-progress"
                        ? "bg-amber-400"
                        : "bg-indigo-200"
                    }`}
                ></div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-6 pl-4">
                  {/* Status Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${action.status === "completed"
                        ? "bg-emerald-100 text-emerald-600"
                        : action.status === "in-progress"
                          ? "bg-amber-100 text-amber-600"
                          : "bg-indigo-50 text-indigo-600"
                      }`}
                  >
                    {action.status === "completed" ? (
                      <CheckCircle2 size={24} />
                    ) : action.status === "in-progress" ? (
                      <Activity size={24} />
                    ) : (
                      <Clock size={24} />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                        {action.student}
                      </span>
                      <span className="w-1 h-1 bg-indigo-200 rounded-full"></span>
                      <div
                        className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${action.owner === "Parent"
                            ? "bg-purple-100 text-purple-600"
                            : action.owner === "Teacher"
                              ? "bg-indigo-100 text-indigo-600"
                              : "bg-slate-100 text-slate-500"
                          }`}
                      >
                        <Users size={10} />
                        {action.owner}
                      </div>
                      {action.priority === "critical" && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[9px] font-bold uppercase tracking-wider">
                          Critical
                        </span>
                      )}
                    </div>
                    <p className="text-lg font-bold text-slate-800 tracking-tight leading-snug mb-3">
                      {action.action}
                    </p>

                    {/* Evidence & Notes */}
                    {(action.evidence.length > 0 || action.notes) && (
                      <div className="flex items-center gap-4 mt-2">
                        {action.evidence.length > 0 && (
                          <div className="flex items-center gap-1.5 text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-lg">
                            <FileText size={12} />
                            {action.evidence.length} Evidence Attached
                          </div>
                        )}
                        {action.notes && (
                          <div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                            <MessageSquare size={12} />"{action.notes}"
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-3 min-w-[140px]">
                    <div className="text-right">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        Due Date
                      </p>
                      <p
                        className={`text-xs font-bold ${new Date(action.dueDate) < new Date() &&
                            action.status !== "completed"
                            ? "text-red-500"
                            : "text-slate-700"
                          }`}
                      >
                        {action.dueDate}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      {action.status !== "completed" ? (
                        <>
                          <button
                            className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                            title="Attach Evidence"
                          >
                            <FileText size={16} />
                          </button>
                          <button
                            onClick={() => handleStatusUpdate(action)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-md"
                          >
                            {action.status === "open" ? "Start" : "Mark Done"}
                          </button>
                        </>
                      ) : (
                        <button className="px-4 py-2 bg-emerald-100 text-emerald-600 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 cursor-default">
                          <CheckCircle2 size={14} />
                          Verified
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ActionList;
