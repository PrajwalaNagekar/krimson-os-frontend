import React from "react";
import { Sparkles } from "lucide-react";
import { ENRICHMENT_DATA } from "../../../../data/teacherData";

const AIGrowthInsight = () => {
  const { aiInsight } = ENRICHMENT_DATA;

  return (
    <div className="bg-white rounded-[3rem] p-1 border-2 border-dashed border-slate-200">
      <div className="bg-slate-50 rounded-[2.8rem] p-8 flex flex-col md:flex-row items-center gap-8 group">
        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-indigo-500 shadow-sm shrink-0 border border-slate-100 group-hover:rotate-12 transition-transform duration-500">
          <Sparkles size={40} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-3">
            AI3 Strategic Growth Advisor
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight uppercase">
            Talent Plateau Detected
          </h3>
          <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-2xl">
            Student{" "}
            <span className="text-slate-900 font-bold">
              {aiInsight.studentName}
            </span>{" "}
            has achieved {aiInsight.creativityScore} in creativity but has{" "}
            {aiInsight.issue}. AI suggests assigning a{" "}
            <span className="text-indigo-600 font-bold">
              {aiInsight.suggestion}
            </span>{" "}
            with the {aiInsight.department} department to stimulate new research
            pathways.
          </p>
        </div>
        <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 whitespace-nowrap">
          Generate Plan
        </button>
      </div>
    </div>
  );
};

export default AIGrowthInsight;
