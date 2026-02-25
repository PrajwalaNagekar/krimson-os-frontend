/**
 * @component ReviewStep
 * @description Screen G – Full review of the academic year data before saving.
 */
import React, { useState } from "react";
import {
  CheckCircle,
  ArrowLeft,
  Edit2,
  Calendar,
  BookOpen,
  Target,
  MapPin,
  Save,
  ChevronDown,
} from "lucide-react";

const formatDate = (d) => {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const SummaryCard = ({ title, icon: Icon, iconColor, onEdit, children }) => (
  <div className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden shadow-sm">
    <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-100">
      <div className="flex items-center gap-2">
        <Icon size={18} className={iconColor} />
        <h3 className="font-bold text-slate-700">{title}</h3>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-xl hover:bg-blue-100 transition-colors"
      >
        <Edit2 size={12} />
        Edit
      </button>
    </div>
    <div className="px-6 py-4">{children}</div>
  </div>
);

const StatusBadge = ({ status }) => {
  const cfg = {
    active: "bg-emerald-100 text-emerald-700 border-emerald-200",
    draft: "bg-amber-100 text-amber-700 border-amber-200",
    locked: "bg-rose-100 text-rose-700 border-rose-200",
    closed: "bg-slate-100 text-slate-600 border-slate-200",
    archived: "bg-purple-100 text-purple-600 border-purple-200",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-bold border capitalize ${cfg[status] || cfg.draft}`}
    >
      {status}
    </span>
  );
};

const ReviewStep = ({
  formData,
  onEditStep,
  onBack,
  onSave,
  readOnly = false,
}) => {
  const { basicInfo, terms, assessmentData, holidays } = formData;
  const [localStatus, setLocalStatus] = useState("draft");

  const handleSave = () => {
    onSave(localStatus);
  };

  const allAssessmentWindows = (assessmentData || []).flatMap(
    (termData, ti) => {
      const term = terms[ti];
      const results = [];
      if ((termData.diagnostic || []).length > 0) {
        termData.diagnostic.forEach((w) => {
          results.push({ label: `Diagnostic (${term?.name})`, ...w });
        });
      }
      (termData.formative || []).forEach((w, fi) => {
        results.push({ label: `Formative ${fi + 1} (${term?.name})`, ...w });
      });
      (termData.summative || []).forEach((w) => {
        results.push({ label: `Summative (${term?.name})`, ...w });
      });
      (termData.project || []).forEach((w) => {
        results.push({ label: `Project (${term?.name})`, ...w });
      });
      return results;
    },
  );

  const allHolidays = [
    ...(holidays?.school || []).map((h) => ({ ...h, type: "School" })),
    ...(holidays?.public || []).map((h) => ({ ...h, type: "Public" })),
    ...(holidays?.training || []).map((h) => ({ ...h, type: "Training" })),
    ...(holidays?.events || []).map((h) => ({ ...h, type: "Event" })),
  ];

  return (
    <div className="space-y-5 animate-fadeIn">
      <div className="flex items-center gap-3 mb-2">
        <CheckCircle size={26} className="text-blue-500 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800">
            Review — {basicInfo?.name}
          </h2>
          <p className="text-sm text-slate-500">
            Review everything before {readOnly ? "closing" : "saving"} the
            academic year.
          </p>
        </div>
      </div>

      {/* Basic Info Card */}
      <SummaryCard
        title="Basic Info"
        icon={Calendar}
        iconColor="text-blue-500"
        onEdit={() => onEditStep(1)}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-slate-500 font-medium text-xs mb-0.5">Year</p>
            <p className="font-bold text-slate-800">{basicInfo?.name || "—"}</p>
          </div>
          <div>
            <p className="text-slate-500 font-medium text-xs mb-0.5">
              Start Date
            </p>
            <p className="font-bold text-slate-800">
              {formatDate(basicInfo?.startDate)}
            </p>
          </div>
          <div>
            <p className="text-slate-500 font-medium text-xs mb-0.5">
              End Date
            </p>
            <p className="font-bold text-slate-800">
              {formatDate(basicInfo?.endDate)}
            </p>
          </div>
        </div>
      </SummaryCard>

      {/* Terms Card */}
      <SummaryCard
        title="Terms"
        icon={BookOpen}
        iconColor="text-cyan-500"
        onEdit={() => onEditStep(2)}
      >
        <div className="space-y-2">
          {(terms || []).map((term, i) => (
            <div
              key={i}
              className="flex items-center justify-between text-sm bg-slate-50 rounded-xl px-4 py-2.5 border border-slate-100"
            >
              <span className="font-semibold text-slate-700">{term.name}</span>
              <span className="text-slate-500">
                {formatDate(term.startDate)} — {formatDate(term.endDate)}
              </span>
              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 font-medium">
                {term.instructionalWeeks || 0}w Teaching ·{" "}
                {term.breakWeeks || 0}w Project · {term.examWeeks || 0}w
                Assessment
              </span>
            </div>
          ))}
        </div>
      </SummaryCard>

      {/* Assessment Windows Card */}
      {allAssessmentWindows.length > 0 && (
        <SummaryCard
          title="Assessment Windows"
          icon={Target}
          iconColor="text-pink-500"
          onEdit={() => onEditStep(4)}
        >
          <div className="space-y-2">
            {allAssessmentWindows.map((w, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-sm bg-slate-50 rounded-xl px-4 py-2.5 border border-slate-100"
              >
                <span className="font-semibold text-slate-700">{w.label}</span>
                <span className="text-slate-500 text-xs">
                  {w.date
                    ? formatDate(w.date)
                    : `${formatDate(w.startDate)} — ${formatDate(w.endDate)}`}
                </span>
              </div>
            ))}
          </div>
        </SummaryCard>
      )}

      {/* Holidays Card */}
      {allHolidays.length > 0 && (
        <SummaryCard
          title="Holidays & Events"
          icon={MapPin}
          iconColor="text-emerald-500"
          onEdit={() => onEditStep(5)}
        >
          <div className="space-y-2">
            {allHolidays.map((h, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-xl px-4 py-3 border border-slate-100 flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        h.type === "School"
                          ? "bg-emerald-100 text-emerald-700"
                          : h.type === "Public"
                            ? "bg-amber-100 text-amber-700"
                            : h.type === "Training"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {h.type}
                    </span>
                    <span className="font-semibold text-slate-700">
                      {h.name}
                    </span>
                  </div>
                  <span className="text-slate-500 text-xs font-semibold">
                    {h.date
                      ? formatDate(h.date)
                      : `${formatDate(h.startDate)} — ${formatDate(h.endDate)}`}
                  </span>
                </div>
                {h.description && (
                  <p className="text-xs text-slate-500 ml-1">{h.description}</p>
                )}
              </div>
            ))}
          </div>
        </SummaryCard>
      )}

      {/* Status + Save */}
      {!readOnly && (
        <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Set Status
              </label>
              <div className="relative inline-block">
                <select
                  value={localStatus}
                  onChange={(e) => setLocalStatus(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none text-sm font-bold text-slate-800 bg-white cursor-pointer min-w-[180px]"
                >
                  <option value="draft">Draft</option>
                  <option value="active">Active</option>
                  <option value="locked">Locked</option>
                  <option value="archived">Archived</option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>
              <p className="text-xs text-slate-400 mt-1.5">
                Note: Only one academic year can be Active at a time.
              </p>
            </div>
            <StatusBadge status={localStatus} />
          </div>
        </div>
      )}

      <div className="flex justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-all"
        >
          <ArrowLeft size={18} /> Back
        </button>
        {!readOnly && (
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <Save size={18} />
            Finish & Save
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewStep;
