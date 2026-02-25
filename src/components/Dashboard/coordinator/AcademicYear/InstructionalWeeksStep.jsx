/**
 * @component InstructionalWeeksStep
 * @description Screen D – Per-term week breakdown: Teaching Weeks, Project Weeks, Assessment Weeks.
 */
import React from "react";
import { Clock, ArrowLeft, ArrowRight, AlertCircle } from "lucide-react";

const calcTotalWeeks = (startDate, endDate) => {
  if (!startDate || !endDate) return null;
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (isNaN(start) || isNaN(end) || end <= start) return null;
  return Math.round((end - start) / (7 * 24 * 60 * 60 * 1000));
};

const formatDate = (d) => {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const WEEK_TYPES = [
  {
    field: "Teaching Weeks",
    label: "Teaching Weeks",
    color: "text-blue-600",
    barColor: "bg-gradient-to-r from-cyan-400 to-blue-500",
    dotColor: "bg-blue-400",
  },
  {
    field: "Revision",
    label: "Revision Weeks",
    color: "text-amber-600",
    barColor: "bg-gradient-to-r from-amber-400 to-orange-400",
    dotColor: "bg-amber-400",
  },
  {
    field: "Assessments weeks",
    label: "Assessments Weeks",
    color: "text-pink-600",
    barColor: "bg-gradient-to-r from-pink-400 to-rose-400",
    dotColor: "bg-pink-400",
  },
  {
    field: "Project Weeks",
    label: "Project Weeks",
    color: "text-purple-600",
    barColor: "bg-gradient-to-r from-violet-400 to-purple-500",
    dotColor: "bg-purple-500",
  },
];

const WeekSelector = ({ label, value, max, onChange, color }) => {
  const options = Array.from({ length: max + 1 }, (_, i) => i);
  return (
    <div>
      <label className={`block text-xs font-semibold mb-1.5 ${color}`}>
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full px-3 py-2.5 rounded-xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm text-slate-800 bg-white"
      >
        {options.map((n) => (
          <option key={n} value={n}>
            {n} {n === 1 ? "Week" : "Weeks"}
          </option>
        ))}
      </select>
    </div>
  );
};

const InstructionalWeeksStep = ({ terms, onChangeTerms, onBack, onNext }) => {
  const handleWeekField = (index, field, value) => {
    const updated = terms.map((t, i) =>
      i === index ? { ...t, [field]: value } : t,
    );
    onChangeTerms(updated);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <Clock size={26} className="text-pink-500 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800">
            Week Breakdown
          </h2>
          <p className="text-sm text-slate-500">
            Divide each term into Teaching, Project, and Assessment weeks.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {terms.map((term, index) => {
          const totalWeeks =
            term.totalWeeks ||
            calcTotalWeeks(term.startDate, term.endDate) ||
            0;
          const allocatedWeeks =
            (term.instructionalWeeks || 0) +
            (term.breakWeeks || 0) +
            (term.examWeeks || 0);
          const isOverAllocated = totalWeeks > 0 && allocatedWeeks > totalWeeks;

          return (
            <div
              key={term.id || index}
              className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden shadow-sm"
            >
              {/* Term header */}
              <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{term.name}</h3>
                    <p className="text-xs text-slate-500">
                      {formatDate(term.startDate)} → {formatDate(term.endDate)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-xs text-slate-500 font-medium">
                      Total Weeks
                    </p>
                    <p className="text-2xl font-extrabold text-slate-800">
                      {totalWeeks || "—"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500 font-medium">
                      Allocated
                    </p>
                    <p
                      className={`text-2xl font-extrabold ${isOverAllocated ? "text-rose-500" : "text-blue-600"}`}
                    >
                      {allocatedWeeks}
                    </p>
                  </div>
                </div>
              </div>

              {/* Allocation bar */}
              {totalWeeks > 0 && (
                <div className="px-6 pt-5 pb-2">
                  <div className="h-3 rounded-full bg-slate-100 overflow-hidden flex mb-1">
                    {WEEK_TYPES.map((wt) => (
                      <div
                        key={wt.field}
                        className={`${wt.barColor} transition-all`}
                        style={{
                          width: `${Math.min(100, ((term[wt.field] || 0) / totalWeeks) * 100)}%`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex gap-5 text-xs text-slate-400 mb-4">
                    {WEEK_TYPES.map((wt) => (
                      <span key={wt.field} className="flex items-center gap-1">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${wt.dotColor} inline-block`}
                        />
                        {wt.label}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {isOverAllocated && (
                <div className="mx-6 mb-3 flex items-center gap-2 text-xs text-rose-600 bg-rose-50 rounded-lg px-3 py-2 border border-rose-200">
                  <AlertCircle size={14} />
                  Allocated weeks ({allocatedWeeks}) exceed total weeks (
                  {totalWeeks}). Please adjust.
                </div>
              )}

              {/* Selectors */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pb-6">
                {WEEK_TYPES.map((wt) => (
                  <WeekSelector
                    key={wt.field}
                    label={wt.label}
                    value={term[wt.field] || 0}
                    max={totalWeeks || 52}
                    onChange={(v) => handleWeekField(index, wt.field, v)}
                    color={wt.color}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-all"
        >
          <ArrowLeft size={18} /> Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          Save &amp; Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default InstructionalWeeksStep;
