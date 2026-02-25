import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  MapPin,
  ListChecks,
  ShieldAlert,
  Sparkles,
  UserCheck,
  CalendarCheck,
  Combine,
  XCircle,
  GraduationCap,
} from "lucide-react";
import ActionButton from "./ActionButton";

const ClassActionCard = ({ cls, selectedAction, onSelectAction }) => {
  const navigate = useNavigate();

  const handleAction = (act) => {
    if (act === "POSTPONE") {
      navigate(`/dashboard/teacher/classes/absence/postpone/${cls.id}`);
    } else {
      onSelectAction(cls.id, act);
    }
  };

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
            {selectedAction === "POSTPONE" && (
              <div className="space-y-3">
                <h4 className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500">
                  <CalendarCheck size={14} className="text-emerald-500" />{" "}
                  Postponement Navigation
                </h4>
                <p className="text-[12px] font-semibold text-slate-600">
                  Navigating to dedicated postpone page...
                </p>
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

export default ClassActionCard;
