import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { TEACHER_DATA } from "../../../../data/teacherData";

const AssessmentFooter = () => {
  const { aiFooter } = TEACHER_DATA.assessmentTools;

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-4 md:p-6 border border-blue-100 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-white rounded-2xl shadow-md text-indigo-600 ring-4 ring-indigo-50 flex-shrink-0">
          <Sparkles size={24} className="animate-pulse" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1 flex items-center gap-2">
            {aiFooter.title}
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-600 rounded-full text-[10px]">
              {aiFooter.status}
            </span>
          </h4>
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            {aiFooter.description}
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-xs shadow-lg shadow-indigo-200 hover:scale-105 transition-all active:scale-95">
          {aiFooter.buttonText}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
export default AssessmentFooter;
