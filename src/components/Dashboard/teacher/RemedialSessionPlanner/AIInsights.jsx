import React from "react";
import { Brain, AlertCircle, CheckCircle, LogOut } from "lucide-react";

const AIInsights = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <Brain size={24} className="text-blue-400" /> AI3 Intervention
          Insights
        </h3>
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={16} className="text-amber-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                Slower Progress Detected
              </span>
            </div>
            <p className="text-sm font-medium text-slate-300 leading-relaxed">
              <span className="text-white font-bold">Sana K.</span> is showing
              minimal improvement in Chemical Bonding. AI suggests switching
              from Guided Practice to{" "}
              <span className="text-blue-400 underline decoration-dotted">
                Worked Examples
              </span>{" "}
              with visual manipulatives.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle size={16} className="text-emerald-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                Exit Readiness High
              </span>
            </div>
            <p className="text-sm font-medium text-slate-300 leading-relaxed">
              <span className="text-white font-bold">Rahul M.</span> has
              surpassed his mastery goal (85% vs 75% target). Recommend
              transitioning back to core classroom instruction.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4 ring-8 ring-purple-100/50">
          <LogOut size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2 font-bold uppercase tracking-tight">
          Exit Program Readiness
        </h3>
        <p className="text-sm text-slate-500 max-w-xs mb-8">
          Confirm if students are ready to integrate back into regular classroom
          sessions.
        </p>
        <div className="w-full space-y-3">
          <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98]">
            Finalize Transitions (1)
          </button>
          <button className="w-full py-4 bg-white text-slate-400 border-2 border-slate-100 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
            View Transition Checklist
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
