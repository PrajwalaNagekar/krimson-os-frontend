import React from "react";
import { Brain, CheckCircle2, ExternalLink, History } from "lucide-react";

const DecisionSidebar = ({ evidence, recommendations, history }) => {
  return (
    <div className="lg:col-span-4 space-y-8">
      {/* Supporting Evidence */}
      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
          <Brain size={14} /> Linked Evidence
        </h4>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">
              Assessment Samples
            </p>
            <div className="flex flex-wrap gap-2">
              {evidence.assessments.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-[9px] font-bold uppercase border border-blue-100 flex items-center gap-2 animate-in zoom-in-95"
                >
                  {chip} <CheckCircle2 size={10} />
                </span>
              ))}
              <button className="px-3 py-1.5 border border-slate-200 text-slate-400 rounded-lg text-[9px] font-bold uppercase hover:bg-slate-50 transition-all">
                + Link
              </button>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-100">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">
              Academic Programs
            </p>
            <div className="flex flex-wrap gap-2">
              {evidence.programs.map((prog) => (
                <span
                  key={prog}
                  className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-[9px] font-bold uppercase border border-emerald-100 flex items-center gap-2"
                >
                  {prog} <ExternalLink size={10} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Promotion Recommendation */}
      <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
        <h4 className="font-bold text-slate-800 mb-6 tracking-tight">
          Final Recommendation
        </h4>
        <div className="space-y-4">
          {recommendations.map((opt) => (
            <div
              key={opt.id}
              className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-blue-500 transition-all flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all"></div>
                </div>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  {opt.label}
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium ml-7 mt-1 tracking-tight leading-relaxed">
                {opt.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100/50">
          <p className="text-[10px] text-amber-700 font-medium leading-relaxed italic">
            Warning: Final promotion status is subject to board approval and
            complete attendance audit.
          </p>
        </div>
      </div>

      {/* History / Audit Log */}
      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Entry History
          </h4>
          <History size={14} className="text-slate-400" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[9px] font-bold">
            <span className="text-slate-600">Draft Created</span>
            <span className="text-slate-400">{history.created}</span>
          </div>
          <div className="flex items-center justify-between text-[9px] font-bold">
            <span className="text-slate-600">Last Modified</span>
            <span className="text-slate-400">{history.modified}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionSidebar;
