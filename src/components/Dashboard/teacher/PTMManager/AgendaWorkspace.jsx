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
        <div className="flex items-center justify-between bg-white/60 backdrop-blur-3xl p-8 rounded-[3rem] border border-white/80 shadow-sm mb-8 ring-1 ring-indigo-500/5">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl shadow-xl flex items-center justify-center text-white relative group">
              <Users
                size={32}
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white"></div>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <h3 className="text-4xl font-bold text-indigo-950 tracking-tight">
                  {selectedSlot.student}
                </h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                    Active Draft
                  </span>
                  <span className="px-3 py-1 bg-violet-100 text-violet-600 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                    {selectedSlot.mode}
                  </span>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-400 mt-2 flex items-center gap-3">
                <span>
                  Parent:{" "}
                  <span className="text-indigo-600 font-bold">
                    {selectedSlot.parent}
                  </span>
                </span>
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                <span>
                  Time:{" "}
                  <span className="text-indigo-600 font-bold">
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
            className="px-8 py-5 bg-indigo-600 text-white rounded-[1.5rem] font-bold text-xs uppercase tracking-widest shadow-[0_20px_40px_-8px_rgba(79,70,229,0.4)] flex items-center gap-4 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all group overflow-hidden"
          >
            <Sparkles
              size={20}
              className={`relative z-10 ${
                aiDrafting
                  ? "animate-spin"
                  : "group-hover:rotate-12 transition-transform"
              }`}
            />
            <span className="relative z-10">
              {aiDrafting ? "Synthesizing Data..." : "Generate AI Insights"}
            </span>
          </button>
        </div>

        {/* Redesigned Workspace Fields */}
        <div className="flex-1 space-y-8 overflow-y-auto px-8 py-4 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-indigo-500/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-indigo-50 shadow-sm space-y-4 hover:border-indigo-300 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                      Primary Objective
                    </label>
                    <p className="text-[10px] font-medium text-slate-400">
                      Define the core meeting goal
                    </p>
                  </div>
                </div>
                <select className="w-full p-5 bg-white border border-indigo-100 rounded-2xl text-base font-bold text-indigo-900 outline-none focus:ring-4 ring-indigo-500/10 appearance-none transition-all cursor-pointer shadow-sm">
                  <option>Performance Optimization</option>
                  <option>Behavioral Strategy</option>
                  <option>Academic Transition</option>
                  <option>Holistic Support Plan</option>
                </select>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-violet-500/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-violet-50 shadow-sm space-y-4 hover:border-violet-300 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center">
                    <FileText size={24} />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-violet-400 uppercase tracking-widest">
                      Evidence Library
                    </label>
                    <p className="text-[10px] font-medium text-slate-400">
                      Link relevant student data
                    </p>
                  </div>
                </div>
                <div className="w-full p-5 bg-white border-2 border-dashed border-indigo-100 rounded-2xl flex items-center justify-center gap-4 text-indigo-400 font-bold text-sm cursor-pointer hover:border-indigo-400 hover:bg-slate-50 transition-all shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <Plus size={18} />
                  </div>
                  Attach Evidence Cards
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 pb-12">
            <div className="space-y-4">
              <div className="flex items-center justify-between px-4">
                <div>
                  <label className="text-sm font-bold text-indigo-950 uppercase tracking-widest">
                    Critical Discussion Tracks
                  </label>
                  <p className="text-[11px] font-medium text-slate-400 mt-1">
                    High-impact points to cover during the session
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-[10px] font-bold uppercase tracking-wider cursor-pointer hover:bg-indigo-100 transition-all">
                  <Sparkles size={14} />
                  Refine with AI2
                </div>
              </div>
              <textarea
                placeholder="Synthesize observations into key talk tracks..."
                className="w-full p-8 bg-white/40 backdrop-blur-md border border-indigo-50 rounded-[2.5rem] text-base font-medium text-indigo-950 outline-none focus:bg-white focus:ring-8 ring-indigo-500/5 min-h-[180px] resize-none transition-all placeholder:text-slate-300 shadow-[inset_0_2px_10px_rgba(79,70,229,0.02)]"
              />
            </div>

            <div className="space-y-4">
              <div className="px-4">
                <label className="text-sm font-bold text-indigo-950 uppercase tracking-widest">
                  Actionable Commitments
                </label>
                <p className="text-[11px] font-medium text-slate-400 mt-1">
                  Define clear ownership for follow-up execution
                </p>
              </div>
              <textarea
                placeholder="Outline parent & teacher commitments..."
                className="w-full p-8 bg-white/40 backdrop-blur-md border border-indigo-50 rounded-[2.5rem] text-base font-medium text-indigo-950 outline-none focus:bg-white focus:ring-8 ring-indigo-500/5 min-h-[140px] resize-none transition-all placeholder:text-slate-300 shadow-[inset_0_2px_10px_rgba(79,70,229,0.02)]"
              />
            </div>
          </div>
        </div>

        {/* High-Fidelity Workspace Footer */}
        <div className="relative z-10 px-8 py-6 bg-white/40 backdrop-blur-3xl border-t border-indigo-50 flex items-center justify-between rounded-b-[3.5rem]">
          <div className="flex items-center gap-4 py-2 px-5 bg-indigo-50/50 rounded-2xl">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-full h-full bg-indigo-400/20 rounded-full animate-ping"></div>
              <Clock size={16} className="text-indigo-400" />
            </div>
            <span className="text-[10px] font-bold text-indigo-900 uppercase tracking-widest">
              Vault protection active • Auto-saving...
            </span>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-white border border-indigo-100 text-indigo-400 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
              Reset
            </button>
            <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-violet-700 text-white rounded-[1.25rem] font-bold text-xs uppercase tracking-widest shadow-[0_15px_30px_-5px_rgba(79,70,229,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(79,70,229,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-3">
              <Save size={18} />
              Finalize Framework
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaWorkspace;
