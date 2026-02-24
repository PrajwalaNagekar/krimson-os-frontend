import React from "react";
import { ClipboardList } from "lucide-react";
import SubstitutionNotification from "./SubstitutionNotification";
import PeriodCard from "./PeriodCard";
import { TEACHER_DATA } from "../../../../data/teacherData";

/**
 * TodayClasses — Container for the "Today Class" tab.
 * DailySummary has been moved to the parent page (shown after toggle).
 * Props:
 *   data {object} - { substitutionNotification, periods[] }
 */
const TodayClasses = ({ data }) => {
  if (!data) return null;
  const { substitutionNotification, periods = [] } = data;

  return (
    <div className="space-y-5">
      {/* Substitution Notification top card */}
      {substitutionNotification &&
        substitutionNotification.status !== "declined" && (
          <SubstitutionNotification notification={substitutionNotification} />
        )}

      {/* Section divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-slate-200" />
        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
          <ClipboardList size={14} className="text-blue-500" />
          📋 Your Regular Classes Today
        </div>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Period Cards */}
      <div className="space-y-4">
        {periods.map((period) => (
          <PeriodCard key={period.id} period={period} />
        ))}
        {periods.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm font-medium">
            {TEACHER_DATA.classManagement.config.emptyTexts.today}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodayClasses;
