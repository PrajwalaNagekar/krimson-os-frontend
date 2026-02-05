import React from "react";
import { CheckCircle } from "lucide-react";

const RegulationCard = ({
  icon: Icon,
  title,
  badge,
  description,
  checklist = [],
  action,
  variant = "indigo",
}) => {
  const variantColors = {
    indigo: {
      border: "hover:border-indigo-300",
      iconBg: "bg-white",
      iconText: "text-indigo-600",
      badgeBg: "bg-indigo-100",
      badgeText: "text-indigo-700",
      badgeBorder: "border-indigo-200",
    },
    purple: {
      border: "hover:border-purple-300",
      iconBg: "bg-white",
      iconText: "text-purple-600",
      badgeBg: "bg-purple-100",
      badgeText: "text-purple-700",
      badgeBorder: "border-purple-200",
    },
    cyan: {
      border: "hover:border-cyan-300",
      iconBg: "bg-white",
      iconText: "text-cyan-600",
      badgeBg: "bg-cyan-100",
      badgeText: "text-cyan-700",
      badgeBorder: "border-cyan-200",
    },
    rose: {
      border: "hover:border-rose-300",
      iconBg: "bg-white",
      iconText: "text-rose-600",
      badgeBg: "bg-rose-100",
      badgeText: "text-rose-700",
      badgeBorder: "border-rose-200",
    },
  };

  const colors = variantColors[variant] || variantColors.indigo;

  return (
    <div
      className={`p-6 rounded-2xl border border-slate-200 ${colors.border} hover:shadow-md transition-all group bg-gradient-to-br from-slate-50 to-white`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`p-2 ${colors.iconBg} rounded-lg shadow-sm ${colors.iconText} border border-slate-100`}
          >
            <Icon size={24} />
          </div>
          <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
        </div>
        <span
          className={`px-2 py-1 ${colors.badgeBg} ${colors.badgeText} text-xs font-bold rounded-lg border ${colors.badgeBorder}`}
        >
          {badge}
        </span>
      </div>
      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
        {description}
      </p>
      {checklist.length > 0 && (
        <div className="space-y-2 mb-4">
          {checklist.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs text-slate-500"
            >
              <CheckCircle size={14} className="text-green-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
      <button className="w-full py-2 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
        {action}
      </button>
    </div>
  );
};

export default RegulationCard;
