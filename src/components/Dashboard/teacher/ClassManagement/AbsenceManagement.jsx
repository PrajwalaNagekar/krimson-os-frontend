import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  AlertCircle,
  CheckCircle,
  UserCheck,
  CalendarCheck,
  Combine,
  XCircle,
  BrainCircuit,
  Plus,
  ArrowLeft,
  Clock,
  ChevronRight,
  ShieldAlert,
  GraduationCap,
  Sparkles,
  Users,
  MapPin,
  ListChecks,
  Upload,
  Paperclip,
} from "lucide-react";

// --- MOCK DATA ---

const ActionButton = ({
  active,
  icon: Icon,
  label,
  color,
  onClick,
  disabled,
}) => {
  const baseConfig = {
    blue: "text-blue-600 border-blue-500 bg-blue-50 hover:bg-blue-100",
    purple:
      "text-purple-600 border-purple-500 bg-purple-50 hover:bg-purple-100",
    emerald:
      "text-emerald-600 border-emerald-500 bg-emerald-50 hover:bg-emerald-100",
    rose: "text-rose-600 border-rose-500 bg-rose-50 hover:bg-rose-100",
  };

  const defaultConfig =
    "text-slate-500 border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50";
  const disabledConfig =
    "text-slate-300 border-slate-100 bg-slate-50 cursor-not-allowed opacity-60";

  let styles = disabled
    ? disabledConfig
    : active
      ? baseConfig[color]
      : defaultConfig;

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`flex flex-col items-center justify-center p-3 sm:p-4 border rounded-xl gap-2 transition-all duration-200 shadow-sm ${styles}`}
    >
      <Icon size={18} />
      <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-center leading-tight">
        {label}
      </span>
    </button>
  );
};

const ClassActionCard = ({ cls, selectedAction, onSelectAction }) => {
  const handleAction = (act) => onSelectAction(cls.id, act);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col transition-all hover:border-blue-200">
      {/* ── HEADER ── */}
      <div className="p-4 sm:p-5 border-b border-slate-100">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[12px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                {cls.period}
              </span>
              {cls.type === "Critical Exams" && (
                <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100">
                  <ShieldAlert size={10} /> CRITICAL
                </span>
              )}
            </div>
            <h3 className="text-[16px] font-extrabold text-slate-800">
              {cls.grade} <span className="text-slate-300 mx-1">|</span>{" "}
              {cls.subject}
            </h3>
            <div className="flex items-center gap-3 mt-2 text-[12px] font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                <Users size={12} /> {cls.students}{" "}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={12} /> {cls.room}{" "}
              </span>
              <span
                className={`flex items-center gap-1 ${cls.curriculumStatus.includes("Behind") ? "text-orange-500" : "text-emerald-500"}`}
              >
                <ListChecks size={12} /> {cls.curriculumStatus}
              </span>
            </div>
          </div>

          {/* AI Banner */}
          <div className="max-w-xs bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-3 shrink-0">
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-1">
              <Sparkles size={11} /> AI Suggests: {cls.aiRecommendation}
            </div>
            <p className="text-[11px] font-medium text-slate-600 leading-snug">
              {cls.aiReason}
            </p>
          </div>
        </div>
      </div>

      {/* ── ACTION SELECTOR ── */}
      <div className="p-4 sm:p-5 bg-slate-50/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <ActionButton
            icon={UserCheck}
            label="Substitute"
            color="blue"
            active={selectedAction === "SUBSTITUTE"}
            onClick={() => handleAction("SUBSTITUTE")}
            disabled={!cls.allowedActions.includes("SUBSTITUTE")}
          />
          <ActionButton
            icon={CalendarCheck}
            label="Postpone"
            color="emerald"
            active={selectedAction === "POSTPONE"}
            onClick={() => handleAction("POSTPONE")}
            disabled={!cls.allowedActions.includes("POSTPONE")}
          />
          <ActionButton
            icon={Combine}
            label="Merge Class"
            color="purple"
            active={selectedAction === "MERGE"}
            onClick={() => handleAction("MERGE")}
            disabled={!cls.allowedActions.includes("MERGE")}
          />
          <ActionButton
            icon={XCircle}
            label="Cancel / Recovery"
            color="rose"
            active={selectedAction === "CANCEL"}
            onClick={() => handleAction("CANCEL")}
            disabled={!cls.allowedActions.includes("CANCEL")}
          />
        </div>

        {/* ── DYNAMIC ACTION CONTENT ── */}
        {selectedAction && (
          <div className="mt-4 pt-4 border-t border-slate-200">
            {/* Substitute Intelligence */}
            {selectedAction === "SUBSTITUTE" && cls.substitutes && (
              <div className="space-y-3">
                <h4 className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500">
                  <UserCheck size={14} className="text-blue-500" /> Substitute
                  Intelligence
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cls.substitutes.map((sub, i) => (
                    <label
                      key={i}
                      className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-blue-300"
                    >
                      <input
                        type="radio"
                        name={`sub-${cls.id}`}
                        className="mt-1"
                        defaultChecked={i === 0}
                      />
                      <div>
                        <p className="text-[13px] font-extrabold text-slate-800">
                          {sub.name}
                        </p>
                        <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                          {sub.exp}
                        </p>
                        <div className="flex gap-2 mt-1.5">
                          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase rounded-md">
                            {sub.match} Match
                          </span>
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-black uppercase rounded-md">
                            {sub.avail}
                          </span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Postponement Scheduler */}
            {selectedAction === "POSTPONE" && cls.postponeSlots && (
              <div className="space-y-3">
                <h4 className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500">
                  <CalendarCheck size={14} className="text-emerald-500" />{" "}
                  Postponement Scheduler
                </h4>
                <select className="w-full sm:w-2/3 p-3 bg-white border border-slate-200 rounded-xl text-[13px] font-semibold text-slate-700 focus:ring-1 focus:ring-emerald-500 outline-none">
                  {cls.postponeSlots.map((slot, i) => (
                    <option key={i}>
                      {slot.date} — {slot.room} ({slot.type})
                    </option>
                  ))}
                  <option>Find another slot...</option>
                </select>
              </div>
            )}

            {/* Merge Planning */}
            {selectedAction === "MERGE" && cls.mergeOptions && (
              <div className="space-y-3">
                <h4 className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500">
                  <Combine size={14} className="text-purple-500" /> Merge
                  Planning Validator
                </h4>
                {cls.mergeOptions.map((opt, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                        <GraduationCap size={16} />
                      </div>
                      <div>
                        <p className="text-[13px] font-black text-slate-800">
                          Merge with {opt.targetClass} ({opt.period})
                        </p>
                        <p className="text-[11px] font-medium text-slate-500">
                          Topic Match: {opt.topic} | Room: {opt.room}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">
                      Capacity: {opt.capacity}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Cancel / Recovery */}
            {selectedAction === "CANCEL" && cls.recoveryPlanOpt && (
              <div className="space-y-3">
                <h4 className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500">
                  <XCircle size={14} className="text-rose-500" /> Cancellation &
                  Recovery Plan
                </h4>
                <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-3">
                  <p className="text-[12px] font-semibold text-rose-700 mb-2">
                    Coordinator approval required. Please outline the async
                    recovery task:
                  </p>
                  <textarea
                    rows={2}
                    placeholder="e.g. Read chapter 4 and complete worksheet 12 independently."
                    className="w-full p-3 bg-white border border-slate-200 rounded-lg text-[13px] outline-none focus:ring-1 focus:ring-rose-300"
                  ></textarea>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const SmartAbsenceViews = ({ data }) => {
  const [view, setView] = useState("dashboard"); // dashboard, plan
  const [actions, setActions] = useState({});
  const [absenceDate, setAbsenceDate] = useState(
    new Date("2026-02-23").toISOString().split("T")[0],
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
            <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-xl backdrop-blur-sm border border-white/30">
              <select
                value={absenceReason}
                onChange={(e) => setAbsenceReason(e.target.value)}
                className="bg-transparent text-white font-bold text-[13px] outline-none border-none focus:ring-0 cursor-pointer appearance-none"
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
