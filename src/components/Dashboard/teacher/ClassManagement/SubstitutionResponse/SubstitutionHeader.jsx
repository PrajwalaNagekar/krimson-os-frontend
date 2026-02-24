import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, Sparkles, AlertTriangle } from "lucide-react";

const SubstitutionHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-2xl px-7 py-5 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-8 -mb-8 pointer-events-none" />

      {/* Breadcrumb */}
      <div className="relative z-10 flex items-center gap-1.5 text-[11px] font-bold text-white/70 mb-3 flex-wrap">
        <button
          onClick={() => navigate("/dashboard/teacher/classes")}
          className="hover:text-white transition-colors"
        >
          Class Management
        </button>
        <ChevronRight size={12} />
        <button
          onClick={() => navigate("/dashboard/teacher/classes")}
          className="hover:text-white transition-colors"
        >
          Today's Class
        </button>
        <ChevronRight size={12} />
        <span className="text-white font-black">Substitution Response</span>
      </div>

      {/* Title Row */}
      <div className="relative z-10 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <button
            id="btn-back"
            onClick={() => navigate("/dashboard/teacher/classes")}
            className="flex items-center justify-center w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl border border-white/30 transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft size={17} />
          </button>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-[0.18em] ring-1 ring-white/20 mb-1">
              <Sparkles size={9} /> Coordinator Assignment
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tight leading-none">
              Substitution Response
            </h1>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-400/30 border border-orange-200/30 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
          <AlertTriangle size={11} /> Urgent
        </span>
      </div>
    </div>
  );
};

export default SubstitutionHeader;
