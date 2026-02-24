import React, { useState } from "react";
import {
  CheckCircle,
  Clock,
  AlertTriangle,
  Users,
  MapPin,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ClipboardCheck,
  Upload,
  Eye,
  Wrench,
  FileText,
} from "lucide-react";
import { TEACHER_DATA } from "../../../../data/teacherData";

/**
 * PeriodCard — fully responsive, timetable-row style.
 *
 * Mobile  (<md):  stacked — period bar on top, info block, buttons row below
 * Desktop (≥md):  accent | Period col | info flex-1 | buttons right col
 */

const ICON_MAP = {
  CheckCircle,
  Clock,
  AlertTriangle,
};

const STATUS_CONFIG_RAW = TEACHER_DATA.classManagement.config.statusConfig;
const STATUS_CONFIG = Object.keys(STATUS_CONFIG_RAW).reduce((acc, key) => {
  const cfg = STATUS_CONFIG_RAW[key];
  acc[key] = { ...cfg, icon: ICON_MAP[cfg.icon] || AlertTriangle };
  return acc;
}, {});

const Chip = ({ icon: Icon, text }) => (
  <span className="flex items-center gap-1 text-[12px] text-slate-500">
    <Icon size={11} className="text-slate-400 shrink-0" /> {text}
  </span>
);

const ActionBtn = ({ id, icon: Icon, label, variant = "outline", onClick }) => {
  const v = {
    outline: "bg-white hover:bg-slate-50 text-slate-600 border-slate-300",
    primary:
      "bg-blue-500 hover:bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-100",
    success:
      "bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-100",
    warning:
      "bg-orange-500 hover:bg-orange-600 text-white border-orange-600 shadow-sm shadow-orange-100",
  };
  return (
    <button
      id={id}
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-2 border rounded-lg text-[11px] font-bold transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap ${v[variant]}`}
    >
      <Icon size={12} /> {label}
    </button>
  );
};

const PeriodCard = ({ period }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showSubDetails, setShowSubDetails] = useState(false);

  const cfg = STATUS_CONFIG[period.status] || STATUS_CONFIG.pending;
  const StatusIcon = cfg.icon;

  const handleMarkAttendance = () =>
    console.log("API: POST /api/attendance", period.id);
  const handleUploadEvidence = () =>
    console.log("API: POST /api/evidence", period.id);
  const handleViewLesson = () =>
    console.log("API: GET  /api/lesson-plan", period.id);
  const handlePrepMaterials = () => console.log("Prep materials", period.id);

  const Actions = () => {
    switch (period.status) {
      case "completed":
        return (
          <ActionBtn
            id={`btn-details-${period.id}`}
            icon={showDetails ? ChevronUp : ChevronRight}
            label={showDetails ? "Hide Details" : "Class Details"}
            variant="outline"
            onClick={() => setShowDetails((p) => !p)}
          />
        );
      case "inProgress":
        return (
          <>
            <ActionBtn
              id={`btn-att-${period.id}`}
              icon={ClipboardCheck}
              label="Mark Attendance"
              variant="primary"
              onClick={handleMarkAttendance}
            />
            <ActionBtn
              id={`btn-evi-${period.id}`}
              icon={Upload}
              label="Upload Evidence"
              variant="success"
              onClick={handleUploadEvidence}
            />
          </>
        );
      case "pending":
        return (
          <>
            <ActionBtn
              id={`btn-les-${period.id}`}
              icon={Eye}
              label="View Lesson"
              variant="primary"
              onClick={handleViewLesson}
            />
            <ActionBtn
              id={`btn-prep-${period.id}`}
              icon={Wrench}
              label="Prep Materials"
              variant="warning"
              onClick={handlePrepMaterials}
            />
          </>
        );
      case "substitution":
        return (
          <>
            {period.substitutionStatus === "accepted" ? (
              <span className="flex items-center gap-1 px-3 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg text-[11px] font-bold">
                ✅ Accepted
              </span>
            ) : (
              <ActionBtn
                id={`btn-acc-${period.id}`}
                icon={CheckCircle}
                label="Accept"
                variant="success"
                onClick={() => console.log("accept", period.id)}
              />
            )}
            <ActionBtn
              id={`btn-vl-${period.id}`}
              icon={Eye}
              label="View Lesson"
              variant="primary"
              onClick={handleViewLesson}
            />
            <ActionBtn
              id={`btn-sd-${period.id}`}
              icon={FileText}
              label={showSubDetails ? "Hide" : "Sub Details"}
              variant="warning"
              onClick={() => setShowSubDetails((p) => !p)}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* ── Mobile top bar / Desktop: part of flex row ── */}
      {/* On mobile: show period as a slim top pill bar */}
      <div
        className={`flex md:hidden items-center justify-between px-4 py-2 ${cfg.expandBg} border-b ${cfg.expandBorder}`}
      >
        <span
          className={`text-[11px] font-black uppercase tracking-widest ${cfg.periodColor}`}
        >
          Period {period.periodNum}
        </span>
        <span className="text-[11px] font-bold text-slate-400">
          {period.time}
        </span>
        {period.status === "substitution" && (
          <span className="text-[9px] font-black uppercase tracking-wider text-orange-600 ml-1">
            Sub Class
          </span>
        )}
      </div>

      {/* ── Row (desktop: horizontal | mobile: vertical) ── */}
      <div className="flex flex-col md:flex-row md:items-stretch">
        {/* Left accent bar — desktop only */}
        <div className={`hidden md:block w-1 shrink-0 ${cfg.accentBg}`} />

        {/* Period column — desktop only */}
        <div className="hidden md:flex flex-col items-center justify-center px-4 py-4 border-r border-slate-100 min-w-[80px]">
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
            Period
          </span>
          <span className={`text-2xl font-black ${cfg.periodColor}`}>
            {period.periodNum}
          </span>
          <StatusIcon size={14} className={cfg.periodColor} />
        </div>

        {/* ── Middle: Class info ── */}
        <div className="flex-1 min-w-0 px-4 md:px-5 py-4 flex flex-col gap-2">
          {/* Subject + badge */}
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[15px] font-black text-slate-800 leading-tight">
              {period.grade} — {period.subject}
            </h3>
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${cfg.badgeBg}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.accentBg}`} />
              {cfg.label}
              {period.status === "pending" && period.startsInMins != null && (
                <span className="ml-0.5 opacity-70">
                  · {period.startsInMins}m
                </span>
              )}
              {period.status === "inProgress" &&
                period.startedMinsAgo != null && (
                  <span className="ml-0.5 opacity-70">
                    · {period.startedMinsAgo}m ago
                  </span>
                )}
            </span>
          </div>

          {/* Time — mobile shows time here since top bar already has it; repeat for clarity */}
          <div className="flex md:hidden items-center gap-1.5 text-[12px] text-slate-500">
            <Clock size={11} className="text-slate-400" /> {period.time}
          </div>

          {/* Info chips — wrap on all screens */}
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Chip icon={MapPin} text={period.room} />
            <Chip
              icon={Users}
              text={`${period.students} Students${period.note ? ` (${period.note})` : ""}`}
            />
            <Chip icon={BookOpen} text={period.topic} />
          </div>

          {/* Completed confirmations */}
          {period.status === "completed" && (
            <div className="flex flex-wrap gap-3 text-[11px]">
              <span className="text-emerald-600 font-semibold">
                ✓ Attendance Marked
              </span>
              <span className="text-emerald-600 font-semibold">
                ✓ Evidence Uploaded
              </span>
            </div>
          )}

          {/* Pending materials */}
          {period.status === "pending" && period.materials?.length > 0 && (
            <p className="text-[11px] text-slate-500">
              📋{" "}
              <span className="font-semibold text-slate-600">Materials: </span>
              {period.materials.join(", ")}
            </p>
          )}

          {/* Substitution: original teacher */}
          {period.status === "substitution" && period.originalTeacher && (
            <p className="text-[11px] text-slate-500">
              Original Teacher:{" "}
              <span className="text-orange-600 font-semibold">
                {period.originalTeacher}
              </span>
              {period.originalTeacherReason && (
                <span className="text-slate-400"> — On Leave</span>
              )}
            </p>
          )}

          {/* Action buttons — mobile: inline below info */}
          <div className="flex md:hidden flex-wrap gap-2 pt-1">
            <Actions />
          </div>
        </div>

        {/* ── Right: action buttons — desktop only ── */}
        <div className="hidden md:flex flex-col items-end justify-center gap-2 px-5 py-4 border-l border-slate-100 shrink-0 min-w-[160px]">
          <Actions />
        </div>
      </div>

      {/* ── Expandable: Completed class details ── */}
      {period.status === "completed" && showDetails && period.attendance && (
        <div
          className={`border-t ${cfg.expandBorder} ${cfg.expandBg} px-4 md:px-5 py-4`}
        >
          <div className="flex flex-wrap gap-4 md:gap-6 text-[12px]">
            {period.completedAt && (
              <div>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">
                  Completed At
                </span>
                <span className="text-slate-800 font-semibold">
                  {period.completedAt}
                </span>
              </div>
            )}
            <div>
              <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">
                Present
              </span>
              <span className="text-slate-800 font-semibold">
                {period.attendance.present}/{period.attendance.total}
              </span>
            </div>
            {period.attendance.absentNames?.length > 0 && (
              <div>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">
                  Absent
                </span>
                <span className="text-red-600 font-semibold">
                  {period.attendance.absentNames.join(", ")}
                </span>
              </div>
            )}
            {period.evidence && (
              <div>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">
                  Evidence
                </span>
                <span className="text-slate-800 font-semibold">
                  {period.evidence.photos} photos · {period.evidence.worksheets}{" "}
                  worksheet
                </span>
              </div>
            )}
            {period.nextClass && (
              <div>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">
                  Next Class
                </span>
                <span className="text-blue-600 font-semibold">
                  {period.nextClass}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Expandable: Substitution details ── */}
      {period.status === "substitution" && showSubDetails && (
        <div
          className={`border-t ${cfg.expandBorder} ${cfg.expandBg} px-4 md:px-5 py-4`}
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-orange-600 mb-3">
            Substitution Details
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 text-[12px]">
            {[
              ["Original Teacher", period.originalTeacher],
              ["Reason", period.originalTeacherReason],
              ["Coordinator", period.coordinator],
              ["Lesson Plan", period.lessonPlan],
              ["Worksheets", period.worksheets?.join(", ")],
            ].map(([label, value]) =>
              value ? (
                <div key={label}>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">
                    {label}
                  </span>
                  <span className="text-slate-700 font-semibold">{value}</span>
                </div>
              ) : null,
            )}
          </div>
          {period.specialNotes && (
            <div className="mt-3 pt-3 border-t border-orange-200">
              <span className="block text-[10px] uppercase font-bold tracking-wider text-orange-500 mb-1">
                Special Notes
              </span>
              <span className="text-slate-700 italic text-[12px]">
                "{period.specialNotes}"
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PeriodCard;
