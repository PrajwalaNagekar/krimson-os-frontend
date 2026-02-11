import React from "react";
import { Sparkles, Target } from "lucide-react";

const AIStrategicAnalysis = ({ showAIModal, setShowAIModal }) => {
  if (!showAIModal) return null;

  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-2xl"
        onClick={() => setShowAIModal(false)}
      />
      <div className="bg-white w-full max-w-2xl rounded-[4rem] shadow-[0_50px_150px_rgba(0,0,0,0.3)] relative overflow-hidden animate-scaleIn border-8 border-white/20">
        <div className="p-12 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white relative">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-[80px] -mr-20 -mt-20 anim-float"></div>
          <Sparkles size={40} className="mb-6 animate-pulse" />
          <h3 className="text-3xl font-black mb-3 tracking-tighter uppercase tracking-[-0.02em]">
            Cognitive Clustering Engine
          </h3>
          <p className="opacity-80 text-[15px] font-bold leading-relaxed max-w-md">
            Optimizing classroom topology through multi-factor competency
            analysis and behavioral pattern mapping.
          </p>
          <div className="absolute top-12 right-12 flex flex-col items-end gap-1">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-xl rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">
              System V.4.0
            </span>
            <span className="text-[10px] font-black text-green-400 uppercase tracking-widest animate-pulse">
              Engaged
            </span>
          </div>
        </div>
        <div className="p-12 text-center space-y-8 bg-white">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 border-[6px] border-slate-50 rounded-full"></div>
            <div className="absolute inset-0 border-[6px] border-t-purple-600 rounded-full animate-spin"></div>
            <div className="absolute inset-4 bg-slate-50 rounded-[2rem] flex items-center justify-center">
              <Target size={32} className="text-purple-600" />
            </div>
          </div>
          <div>
            <p className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] mb-2">
              Simulating Group Scenarios
            </p>
            <p className="text-xs font-bold text-slate-400 tracking-tight">
              Processing historical mastery curves for 10 identities...
            </p>
          </div>
          <div className="pt-8 flex gap-4">
            <button className="flex-1 py-4 bg-slate-900 text-white rounded-[1.8rem] font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-[0_15px_30px_rgba(0,0,0,0.15)] active:scale-95">
              Accelerate Analysis
            </button>
            <button
              onClick={() => setShowAIModal(false)}
              className="px-10 py-4 bg-[#F8FAFC] text-slate-500 rounded-[1.8rem] font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all"
            >
              Abort
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStrategicAnalysis;
