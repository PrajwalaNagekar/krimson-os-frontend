import React from "react";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";

const SectionHeader = ({
  title,
  section,
  isCompleted,
  expandedSections,
  toggleSection,
}) => (
  <div
    className="flex items-center justify-between p-4 bg-slate-50 cursor-pointer border-b border-slate-200"
    onClick={() => toggleSection(section)}
  >
    <div className="flex items-center gap-3">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
          isCompleted ? "bg-emerald-500 text-white" : "bg-slate-300 text-white"
        }`}
      >
        {isCompleted ? <CheckCircle2 size={14} /> : "!"}
      </div>
      <h3 className="font-bold text-slate-700">{title}</h3>
    </div>
    {expandedSections[section] ? (
      <ChevronUp size={20} className="text-slate-400" />
    ) : (
      <ChevronDown size={20} className="text-slate-400" />
    )}
  </div>
);

export default SectionHeader;
