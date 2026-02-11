import React from "react";
import { Sparkles, Info, Shield, Send } from "lucide-react";

const SubstitutionPlanForm = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
            <Sparkles size={24} className="text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
            Substitution Lesson Plan
          </h3>
        </div>
        <button className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all flex items-center gap-2">
          <Sparkles size={14} /> AI2 Generator
        </button>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
              Planned Topic
            </label>
            <input
              type="text"
              placeholder="e.g., Quantum Mechanics Overview"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
              Learning Objective
            </label>
            <input
              type="text"
              placeholder="e.g., Understanding wave-particle duality"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
            Teaching Instructions & Activities
          </label>
          <textarea
            rows={10}
            className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] p-8 text-sm font-medium text-slate-700 focus:outline-none focus:border-blue-500 transition-all leading-relaxed"
            placeholder="AI suggest: Start with active recall of last lesson. Use 'Sheet A' for group work. Conclude with a 5-minute quiz."
          />
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <Info size={16} className="text-blue-500" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mb-1">
              Pedagogical Continuity Guard
            </p>
            <p className="text-xs text-blue-600 font-medium">
              Topic aligns with Week 24 Syllabus. Substitute teacher Wilson has
              expertise in this domain. Continuity risks: LOW.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-slate-400" />
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic">
            Institutional Verification Required
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100 transition-all">
            Save for Review
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-xs font-bold shadow-xl shadow-blue-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
            <Send size={16} /> Finalise & Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubstitutionPlanForm;
