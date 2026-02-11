import React from "react";
import { BookOpen, Sparkles } from "lucide-react";

const ProgressSection = ({ skills }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
      <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <BookOpen size={16} className="text-blue-600" />
          </div>
          <h4 className="font-bold text-slate-800">
            Academic & Skill Progress
          </h4>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-800 hover:border-slate-400 transition-all">
          <Sparkles size={12} className="text-blue-500" /> Refine with AI
        </button>
      </div>

      <div className="p-8 space-y-8">
        {/* Academic Growth */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
              Academic Growth Summary
            </label>
            <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full uppercase">
              Min. 200 Characters
            </span>
          </div>
          <textarea
            rows={5}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all resize-none leading-relaxed"
            placeholder="Provide an evidence-based summary of the student's academic evolution this term..."
          ></textarea>
        </div>

        {/* Skill Development */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
            Skill Development (Key Competencies)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skills.map((skill) => (
              <button
                key={skill}
                className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-600 hover:bg-white hover:border-blue-400 hover:text-blue-600 transition-all text-center"
              >
                {skill}
              </button>
            ))}
            <button className="px-4 py-2 border border-slate-200 border-dashed rounded-xl text-[10px] font-bold text-slate-400 flex items-center justify-center gap-2 hover:bg-slate-50 transition-all italic">
              + Add Other
            </button>
          </div>
          <textarea
            rows={3}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all resize-none leading-relaxed"
            placeholder="Elaborate on specific skill advancements..."
          ></textarea>
        </div>

        {/* Behavioral Growth */}
        <div className="space-y-3">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
            Behavioral Growth (Formal Assessment)
          </label>
          <textarea
            rows={3}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all resize-none leading-relaxed"
            placeholder="Formal observations regarding conduct, social integration, and character development..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
