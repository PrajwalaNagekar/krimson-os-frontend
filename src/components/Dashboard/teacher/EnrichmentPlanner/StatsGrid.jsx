import React from "react";
import { Star, Zap, Award, Target } from "lucide-react";
import { ENRICHMENT_DATA } from "../../../../data/teacherData";

const iconMap = {
  Star,
  Zap,
  Award,
  Target,
};

const colorMap = {
  indigo: { bg: "bg-indigo-50", text: "text-indigo-500" },
  amber: { bg: "bg-amber-50", text: "text-amber-500" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-500" },
  rose: { bg: "bg-rose-50", text: "text-rose-500" },
};

const StatsGrid = () => {
  const { stats } = ENRICHMENT_DATA;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => {
        const Icon = iconMap[stat.icon];
        const colors = colorMap[stat.color] || {
          bg: "bg-slate-50",
          text: "text-slate-500",
        };

        return (
          <div
            key={i}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4"
          >
            <div
              className={`w-10 h-10 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center`}
            >
              <Icon size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                {stat.label}
              </p>
              <p className="text-xl font-bold text-slate-800">{stat.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
