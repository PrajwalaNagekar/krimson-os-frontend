import React, { useState } from "react";
import {
  Users,
  Sparkles,
  Target,
  FileText,
  Plus,
  Clock,
  Save,
} from "lucide-react";

const AgendaWorkspace = ({ selectedSlot, onGenerateAI }) => {
  const [aiDrafting, setAiDrafting] = useState(false);

  if (!selectedSlot) {
    return (
      <div className="h-full bg-indigo-50/20 backdrop-blur-xl border-4 border-dashed border-indigo-100 rounded-[3.5rem] flex flex-col items-center justify-center text-center p-16 animate-in zoom-in-95 duration-700">
        <div className="w-28 h-28 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center mb-8 rotate-6 animate-bounce">
          <Users size={48} className="text-indigo-600" />
        </div>
        <h3 className="text-3xl font-bold text-indigo-900 mb-4 tracking-tight">
          Begin Framework Draft
        </h3>
        <p className="text-indigo-400/80 max-w-sm mx-auto text-base font-medium leading-relaxed">
          Select a student to initiate the AI-assisted Parent-Teacher framework
          synthesis.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[3.5rem] shadow-[0_64px_128px_-32px_rgba(79,70,229,0.15)] border border-indigo-100 relative overflow-hidden h-full flex flex-col p-2 animate-in slide-in-from-top-4 duration-700">
      {/* Workspace Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] -mr-32 -mt-32"></div>

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Cinematic Header Bar */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between bg-white/40 backdrop-blur-3xl p-6 md:p-8 rounded-[3rem] border border-white/80 shadow-[0_8px_32px_-8px_rgba(79,70,229,0.05)] mb-10 ring-1 ring-indigo-500/5">
          <div className="flex items-center gap-6 mb-6 xl:mb-0">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl shadow-xl flex items-center justify-center text-white relative group">
              <Users
                size={32}
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white"></div>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <h3 className="text-3xl md:text-4xl font-black text-indigo-950 tracking-tight leading-none">
                  {selectedSlot.student}
                </h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[9px] font-bold uppercase tracking-widest border border-indigo-100/50">
                    Active Draft
                  </span>
                  <span className="px-3 py-1 bg-violet-50 text-violet-600 rounded-lg text-[9px] font-bold uppercase tracking-widest border border-violet-100/50">
                    {selectedSlot.mode}
                  </span>
                </div>
              </div>
              <p className="text-xs md:text-sm font-bold text-slate-400 mt-3 flex items-center gap-4">
                <span>
                  Parent:{" "}
                  <span className="text-indigo-600 font-black">
                    {selectedSlot.parent}
                  </span>
                </span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>
                  Time:{" "}
                  <span className="text-indigo-600 font-black">
                    {selectedSlot.time}
                  </span>
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setAiDrafting(true);
              setTimeout(() => {
                setAiDrafting(false);
                onGenerateAI();
              }, 2000);
            }}
            className="w-full xl:w-auto px-10 py-5 bg-indigo-600 text-white rounded-[1.5rem] font-bold text-xs uppercase tracking-widest shadow-[0_20px_40px_-5px_rgba(79,70,229,0.3)] flex items-center justify-center gap-4 hover:bg-indigo-700 hover:-translate-y-1 active:translate-y-0 transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Sparkles
              size={18}
              className={`relative z-10 ${aiDrafting
                  ? "animate-spin"
                  : "group-hover:rotate-12 transition-transform duration-500"
                }`}
            />
            <span className="relative z-10">
              {aiDrafting ? "Synthesizing Framework..." : "Generate AI Insights"}
            </span>
          </button>
        </div>

        {/* Redesigned Workspace Fields */}
        <div className="flex-1 space-y-10 overflow-y-auto px-6 md:px-10 py-6 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="relative group">
              <div className="relative p-8 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white shadow-[0_4px_24px_-8px_rgba(79,70,229,0.05)] space-y-5 hover:border-indigo-200 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm">
                    <Target size={22} />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">
                      Primary Objective
                    </label>
                    <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                      Target Meeting Goal
                    </p>
                  </div>
                </div>
                <select className="w-full p-5 bg-white border border-indigo-50 rounded-2xl text-base font-black text-indigo-900 outline-none focus:ring-4 ring-indigo-500/10 appearance-none transition-all cursor-pointer shadow-sm">
                  <option>Performance Optimization</option>
                  <option>Behavioral Strategy</option>
                  <option>Academic Transition</option>
                  <option>Holistic Support Plan</option>
                </select>
              </div>
            </div>

            <div className="relative group">
              <div className="relative p-8 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white shadow-[0_4px_24px_-8px_rgba(79,70,229,0.05)] space-y-5 hover:border-violet-200 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center shadow-sm">
                    <FileText size={22} />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-violet-400 uppercase tracking-[0.2em]">
                      Evidence Library
                    </label>
                    <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                      Linked Student Data
                    </p>
                  </div>
                </div>
                <div className="w-full p-5 bg-white border-2 border-dashed border-indigo-100 rounded-2xl flex items-center justify-center gap-4 text-indigo-400 font-black text-xs uppercase tracking-widest cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 transition-all shadow-sm">
                  <Plus size={16} />
                  Link Evidence Cards
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 pb-16">
            <div className="space-y-5">
              <div className="flex items-center justify-between px-2">
                <div>
                  <label className="text-xs font-black text-indigo-950 uppercase tracking-[0.15em]">
                    Critical Discussion Tracks
                  </label>
                  <p className="text-[11px] font-bold text-slate-400 mt-1">
                    Pedagogical observations and talk tracks
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-full cursor-pointer hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                  <Sparkles size={14} />
                  Optimize
                </div>
              </div>
              <textarea
                placeholder="Synthesize observations into key talk tracks..."
                className="w-full p-8 bg-white/40 backdrop-blur-md border-2 border-transparent rounded-[3rem] text-base font-medium text-indigo-950 outline-none focus:bg-white focus:border-indigo-100 focus:ring-8 ring-indigo-500/5 min-h-[220px] resize-none transition-all placeholder:text-slate-300 shadow-[inset_0_2px_20px_rgba(79,70,229,0.03)]"
              />
            </div>

            <div className="space-y-5">
              <div className="px-2">
                <label className="text-xs font-black text-indigo-950 uppercase tracking-[0.15em]">
                  Actionable Commitments
                </label>
                <p className="text-[11px] font-bold text-slate-400 mt-1">
                  Post-session accountability roadmap
                </p>
              </div>
              <textarea
                placeholder="Outline parent & teacher commitments..."
                className="w-full p-8 bg-white/40 backdrop-blur-md border-2 border-transparent rounded-[3rem] text-base font-medium text-indigo-950 outline-none focus:bg-white focus:border-indigo-100 focus:ring-8 ring-indigo-500/5 min-h-[160px] resize-none transition-all placeholder:text-slate-300 shadow-[inset_0_2px_20px_rgba(79,70,229,0.03)]"
              />
            </div>
          </div>
        </div>

        {/* High-Fidelity Workspace Footer */}
        <div className="relative z-10 px-8 py-6 bg-white/60 backdrop-blur-3xl border-t border-indigo-50/50 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-b-[3.5rem]">
          <div className="flex items-center gap-5 py-3 px-6 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-6 h-6 bg-indigo-400/20 rounded-full animate-ping"></div>
              <Clock size={16} className="text-indigo-400 relative z-10" />
            </div>
            <span className="text-[10px] font-black text-indigo-900 uppercase tracking-[0.1em]">
              Vaulted • Local Auto-save active
            </span>
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-10 py-4 bg-white border border-indigo-100 text-indigo-400 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
              Reset
            </button>
            <button className="flex-1 sm:flex-none px-12 py-4 bg-gradient-to-r from-indigo-600 to-violet-700 text-white rounded-[1.5rem] font-bold text-xs uppercase tracking-widest shadow-[0_15px_30px_-5px_rgba(79,70,229,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(79,70,229,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3">
              <Save size={18} />
              Finalize Sync
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgendaWorkspace;
