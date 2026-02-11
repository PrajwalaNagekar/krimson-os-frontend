import React from "react";
import { Sparkles, Calendar, FileText, CheckCircle2 } from "lucide-react";

const PTMHeader = ({ activeTab, onTabChange }) => {
  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => onTabChange(id)}
      className={`flex items-center gap-3 px-8 py-4 rounded-[2rem] transition-all duration-500 ${
        activeTab === id
          ? "bg-indigo-500/20 backdrop-blur-3xl text-white shadow-2xl scale-105 border border-white/20"
          : "text-indigo-100/60 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Icon size={18} />
      <span className="text-[10px] font-bold uppercase tracking-[0.15em]">
        {label}
      </span>
    </button>
  );

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-700 rounded-[3.5rem] p-12 text-white shadow-[0_32px_128px_-16px_rgba(79,70,229,0.3)] relative overflow-hidden group">
      <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-300 opacity-20 rounded-full blur-[80px] -ml-20 -mb-20"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 px-6 py-2 bg-indigo-500/10 backdrop-blur-xl rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-[inset_0_0_12px_rgba(165,180,252,0.2)] border border-indigo-400/20 mb-8 w-fit hover:bg-indigo-500/20 transition-all cursor-default group-hover:scale-105 duration-500">
          <Sparkles size={14} className="text-indigo-200 animate-spin-slow" />
          <span className="text-indigo-50">
            Krimson OS • PTM Management Suite
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div>
            <h1 className="text-6xl font-bold mb-4 tracking-tight animate-in slide-in-from-left-4 duration-1000">
              PTM Manager
            </h1>
            <p className="opacity-90 font-medium text-xl max-w-2xl leading-relaxed animate-in fade-in duration-1000 delay-300">
              Coordinate high-fidelity parent engagement through intelligent
              slot management, AI-assisted agendas, and clinical action
              tracking.
            </p>
          </div>
          <div className="flex bg-slate-900/40 backdrop-blur-3xl p-2.5 rounded-[3rem] border border-white/10 shadow-2xl scale-105 lg:scale-110">
            <TabButton id="scheduler" label="Scheduler" icon={Calendar} />
            <TabButton id="agenda" label="Agenda" icon={FileText} />
            <TabButton id="tracker" label="Tracker" icon={CheckCircle2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PTMHeader;
