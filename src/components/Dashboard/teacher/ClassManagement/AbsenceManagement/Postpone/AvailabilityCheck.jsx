import React from "react";
import {
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Loader2,
  CalendarClock,
} from "lucide-react";

const AvailabilityCheck = ({
  checks,
  isChecking,
  newPeriod,
  availablePeriods,
  onSwitchPeriod,
  onConfirmPostpone,
  isPostposing,
}) => {
  if (!newPeriod) return null;

  if (isChecking || !checks) {
    return (
      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3 text-slate-500 text-[13px] font-semibold">
        <Loader2 size={16} className="animate-spin text-blue-500" />
        Checking availability...
      </div>
    );
  }

  const isConflict = !checks.roomAvailable || !checks.noTeacherClash;
  const hasWarning = !!checks.gradeConflict;

  // Suggest alternative periods: all other periods excluding current
  const suggestedPeriods = availablePeriods.filter((p) => p.id !== newPeriod);

  return (
    <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
      {/* Checks */}
      <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500">
        Availability Check
      </h3>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5">
        {checks.roomAvailable ? (
          <div className="flex items-center gap-2 text-emerald-600 text-[13px] font-bold">
            <CheckCircle2 size={16} /> Room {checks.room || "204"} available
          </div>
        ) : (
          <div className="flex items-center gap-2 text-rose-600 text-[13px] font-bold">
            <AlertTriangle size={16} /> Room not available for this period
          </div>
        )}

        {checks.noTeacherClash ? (
          <div className="flex items-center gap-2 text-emerald-600 text-[13px] font-bold">
            <CheckCircle2 size={16} /> No teacher clash
          </div>
        ) : (
          <div className="flex items-center gap-2 text-rose-600 text-[13px] font-bold">
            <AlertTriangle size={16} /> Teacher schedule conflict
          </div>
        )}

        {hasWarning && (
          <div className="flex items-center gap-2 text-orange-500 text-[13px] font-bold">
            <AlertTriangle size={16} /> ⚠ {checks.gradeConflict}
          </div>
        )}
      </div>

      {/* Suggestions if conflict */}
      {isConflict && suggestedPeriods.length > 0 && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-2">
          <p className="text-[11px] font-black uppercase tracking-widest text-blue-600 flex items-center gap-1.5">
            <CalendarClock size={14} /> Suggested Alternative Periods (Same
            Date)
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            {suggestedPeriods.map((p) => (
              <button
                key={p.id}
                onClick={() => onSwitchPeriod(p.id)}
                className="px-4 py-1.5 bg-white border border-blue-200 text-blue-700 rounded-lg text-[12px] font-black hover:bg-blue-600 hover:text-white transition-all"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Confirm button (only if no hard conflict) */}
      {!isConflict && (
        <div className="flex justify-end pt-1">
          <button
            onClick={onConfirmPostpone}
            disabled={isPostposing}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[12px] font-black uppercase tracking-wider shadow-md transition-all ${
              isPostposing
                ? "bg-emerald-400 text-white opacity-80 cursor-default"
                : "bg-gradient-to-r from-emerald-400 to-emerald-600 text-white hover:shadow-lg hover:-translate-y-0.5"
            }`}
          >
            <ShieldCheck size={16} />
            {isPostposing ? "Confirmed ✓" : "Confirm Postpone"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AvailabilityCheck;
