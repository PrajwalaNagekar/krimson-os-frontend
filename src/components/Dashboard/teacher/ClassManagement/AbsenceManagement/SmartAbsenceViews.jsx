import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  CheckCircle,
  BrainCircuit,
  Plus,
  ArrowLeft,
  Clock,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Upload,
  Paperclip,
} from "lucide-react";
import ClassActionCard from "./ClassActionCard";

const SmartAbsenceViews = ({ data }) => {
  const [view, setView] = useState("dashboard"); // dashboard, plan
  const [actions, setActions] = useState({});
  const [absenceDate, setAbsenceDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [absenceReason, setAbsenceReason] = useState("Sick Leave");
  const [evidenceFile, setEvidenceFile] = useState(null);

  const LEAVE_TYPES = [
    "Sick Leave",
    "Personal Emergency",
    "Professional Development",
    "Bereavement Leave",
    "Casual Leave",
    "Jury Duty",
    "Other",
  ];

  const summaryRequests = data?.summaryRequests || [];
  const affectedClasses = data?.affectedClasses || [];

  const handleApplyAI = () => {
    const aiActions = {};
    affectedClasses.forEach((c) => (aiActions[c.id] = c.aiRecommendation));
    setActions(aiActions);
  };

  if (view === "plan") {
    return (
      <div className="space-y-6">
        {/* Header Ribbon */}
        <div className="bg-white border text-center sm:text-left sm:flex justify-between items-center border-slate-200 rounded-2xl p-5 shadow-sm">
          <div>
            <button
              onClick={() => setView("dashboard")}
              className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-blue-500 mb-2"
            >
              <ArrowLeft size={12} /> Back to Summary
            </button>
            <h2 className="text-xl font-black text-slate-800 flex items-center gap-2 justify-center sm:justify-start">
              <BrainCircuit className="text-indigo-500" /> Smart Absence Planner
            </h2>
            <p className="text-[13px] font-medium text-slate-500 mt-1">
              Planning for:{" "}
              {new Date(absenceDate).toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "short",
                year: "numeric",
              })}{" "}
              ({absenceReason})
            </p>
          </div>

          {/* Evidence Upload & Bulk Ops */}
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center gap-3">
            <label className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl text-[12px] font-black uppercase tracking-wider shadow-sm hover:bg-slate-50 hover:border-blue-300 transition-all cursor-pointer">
              {evidenceFile ? (
                <Paperclip size={14} className="text-blue-500" />
              ) : (
                <Upload size={14} />
              )}
              {evidenceFile ? evidenceFile.name : "Upload Evidence"}
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setEvidenceFile(e.target.files[0]);
                  }
                }}
              />
            </label>
            <button
              onClick={handleApplyAI}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 text-white rounded-xl text-[12px] font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Sparkles size={14} /> Auto-Apply AI Recommendations
            </button>
          </div>
        </div>

        {/* Classes List */}
        <div className="space-y-5">
          <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-2">
            Per-Class Granularity Setup ({affectedClasses.length} Affected)
          </h3>
          {affectedClasses.map((cls) => (
            <ClassActionCard
              key={cls.id}
              cls={cls}
              selectedAction={actions[cls.id]}
              onSelectAction={(id, act) =>
                setActions({ ...actions, [id]: act })
              }
            />
          ))}
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-4 border-t border-slate-200">
          <button
            onClick={() => setView("dashboard")}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 text-white rounded-xl text-[13px] font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            Submit Complete Plan for Approval
          </button>
        </div>
      </div>
    );
  }

  // DASHBOARD VIEW
  return (
    <div className="space-y-6">
      {/* Header & CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 rounded-2xl shadow-xl overflow-hidden relative">
        <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <CalendarIcon className="text-blue-400" /> My Leave Management
          </h2>
          <p className="text-sm font-medium text-slate-300 mt-1">
            Report absences, manage substitute assignments, and plan class
            recovery.
          </p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative flex items-center bg-white/20 px-3 py-2 rounded-xl backdrop-blur-sm border border-white/30">
              <select
                value={absenceReason}
                onChange={(e) => setAbsenceReason(e.target.value)}
                className="bg-transparent text-white font-bold text-[13px] outline-none border-none focus:ring-0 cursor-pointer appearance-none pr-6 w-full"
              >
                {LEAVE_TYPES.map((type) => (
                  <option
                    key={type}
                    value={type}
                    className="text-slate-800 font-medium"
                  >
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="text-white absolute right-3 pointer-events-none"
              />
            </div>

            <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-xl backdrop-blur-sm border border-white/30">
              <CalendarIcon size={16} className="text-white" />
              <input
                type="date"
                value={absenceDate}
                onChange={(e) => setAbsenceDate(e.target.value)}
                className="bg-transparent text-white font-bold text-[13px] outline-none border-none focus:ring-0 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert cursor-pointer"
              />
            </div>
          </div>

          <button
            onClick={() => setView("plan")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-blue-600 rounded-xl text-[12px] font-black uppercase tracking-wider shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl ml-2"
          >
            <Plus size={16} /> Plan Absence
          </button>
        </div>
      </div>

      {/* Summary Dashboard List */}
      <div className="space-y-4">
        <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">
          Recent & Upcoming Requests
        </h3>

        <div className="grid grid-cols-1 gap-3">
          {summaryRequests.map((req) => {
            const colorMap = {
              emerald: {
                bg: "bg-emerald-50",
                border: "border-emerald-100",
                text: "text-emerald-600",
              },
              orange: {
                bg: "bg-orange-50",
                border: "border-orange-100",
                text: "text-orange-600",
              },
            };
            const c = colorMap[req.color] || colorMap.emerald;

            return (
              <div
                key={req.id}
                className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex gap-4 items-center">
                  <div
                    className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center ${c.text} shrink-0`}
                  >
                    <CalendarIcon size={20} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-extrabold text-slate-800">
                      {req.date}
                    </h4>
                    <p className="text-[12px] font-semibold text-slate-500 mt-0.5">
                      {req.reason} • {req.classesAffected} Classes Affected
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 mt-2 text-[10px] font-black uppercase tracking-widest ${c.text} ${c.bg} px-2 py-1 rounded-md`}
                    >
                      {req.status.includes("Pending") ? (
                        <Clock size={11} />
                      ) : (
                        <CheckCircle size={11} />
                      )}{" "}
                      {req.status}
                    </span>
                  </div>
                </div>
                <div className="flex justify-end shrink-0">
                  <button
                    onClick={() => setView("plan")}
                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SmartAbsenceViews;
