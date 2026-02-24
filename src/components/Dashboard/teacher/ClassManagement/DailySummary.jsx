import React from "react";
import { BarChart2, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import StatCard from "../../../common/StatCard";
import { TEACHER_DATA } from "../../../../data/teacherData";

const ICON_MAP = {
  BarChart2,
  CheckCircle,
  Clock,
  AlertTriangle,
};

const DailySummary = ({ summary }) => {
  if (!summary) return null;
  const statsConfig = TEACHER_DATA.classManagement.config.dailySummaryStats;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <BarChart2 size={14} className="text-blue-500" />
        <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500">
          📊 Daily Summary
        </h3>
      </div>
      {/* 2 cols on mobile → 3 on sm → 5 on lg */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {statsConfig.map(({ key, title, icon, color }) => (
          <StatCard
            key={key}
            title={title}
            value={summary[key] ?? 0}
            icon={ICON_MAP[icon]}
            color={color}
          />
        ))}
      </div>
    </div>
  );
};

export default DailySummary;
