import React from "react";
import {
  User,
  Search,
  Award,
  History,
  Sparkles,
  ExternalLink,
  Shield,
} from "lucide-react";

const NominationForm = () => {
  return (
    <div className="lg:col-span-8 space-y-8">
      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">
            <User size={24} className="text-slate-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">
              Select Nominee
            </h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              Search student records
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Student ID or Name..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
          />
          <Search
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
          />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
              <Award size={16} className="text-amber-600" />
            </div>
            <h4 className="font-bold text-slate-800">
              Nomination Justification
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-800 hover:border-slate-400 transition-all">
              <History size={12} className="text-slate-400" /> Check Neutrality
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-800 hover:border-slate-400 transition-all">
              <Sparkles size={12} className="text-blue-500" /> Improve Wording
            </button>
          </div>
        </div>

        <div className="p-10 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Detailed Justification
              </label>
              <span className="text-[9px] font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full uppercase italic">
                Formal Guidance Applied
              </span>
            </div>
            <textarea
              rows={12}
              className="w-full bg-slate-50 border border-slate-200 rounded-3xl p-8 text-base font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all resize-none leading-relaxed"
              placeholder="Document the specific evidence, behavioral patterns, and academic achievements that justify this nomination..."
            ></textarea>
          </div>

          <div className="pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Evidence References
              </label>
              <div className="p-6 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-blue-300 transition-all cursor-pointer">
                <div className="p-3 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform mb-3">
                  <ExternalLink
                    size={20}
                    className="text-slate-400 group-hover:text-blue-500"
                  />
                </div>
                <p className="text-xs font-bold text-slate-500 mb-1 group-hover:text-slate-800">
                  Attach Official Docs
                </p>
                <p className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">
                  PDF, Docx, or Data Link
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Endorsement Status
              </label>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-sm">
                  <Shield size={20} className="text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-800 uppercase tracking-wide">
                    Self-Audit Passed
                  </p>
                  <p className="text-[10px] text-emerald-600 font-bold uppercase mt-0.5">
                    Tone: Professional/Objective
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NominationForm;
