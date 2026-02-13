import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";

const AIInsights = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white/70 backdrop-blur-3xl rounded-[3.5rem] p-10 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.08)] border border-white/50 ring-1 ring-indigo-500/5 relative overflow-hidden">
        {/* Subtle background decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-500/10 rounded-full blur-[30px] -ml-8 -mb-8"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl shadow-xl flex items-center justify-center text-white">
              <Sparkles size={24} className="animate-pulse" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-indigo-950 tracking-tight leading-none mb-1.5">
                AI5 Optimizer
              </h3>
              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">
                Smart Scheduler
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white shadow-[0_4px_24px_-8px_rgba(79,70,229,0.05)] space-y-3 group hover:border-indigo-200 transition-all duration-500">
              <p className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-4 bg-emerald-50 w-fit px-3 py-1.5 rounded-xl border border-emerald-100">
                Efficiency Insight
              </p>
              <p className="text-xl font-bold italic leading-tight text-indigo-900 group-hover:scale-[1.02] transition-transform">
                "15-minute slots detected as efficient for your 9:00 AM cohort."
              </p>
            </div>

            <div className="p-8 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white shadow-[0_4px_24px_-8px_rgba(79,70,229,0.05)] space-y-5 hover:border-orange-200 transition-all duration-500">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-black text-orange-500 uppercase tracking-[0.2em] bg-orange-50 w-fit px-3 py-1.5 rounded-xl border border-orange-100">
                  Action Required
                </p>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
              </div>
              <p className="text-base font-bold text-slate-700">
                4 parents have not yet booked their slots.
              </p>
              <button className="w-full py-4 bg-indigo-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-md group flex items-center justify-center gap-3">
                Send Smart Reminders
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full group-hover:animate-ping"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-3xl rounded-[3rem] p-8 border border-white/50 ring-1 ring-indigo-500/5 shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center shadow-sm">
            <ShieldCheck size={20} />
          </div>
          <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
            Shield Protection
          </h4>
        </div>
        <div className="space-y-5">
          <div
            className="group flex items-center justify-between p-6 bg-indigo-50/30 rounded-[2rem] border border-indigo-100 shadow-sm"
          >
            <div className="space-y-1">
              <span className="text-sm font-black text-indigo-950 block"> Conflict Prevention</span>
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">System-level safety active</span>
            </div>
            <ShieldCheck size={24} className="text-indigo-600 animate-pulse" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default AIInsights;
