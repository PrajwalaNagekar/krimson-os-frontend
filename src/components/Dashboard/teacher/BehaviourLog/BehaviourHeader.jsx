import React from "react";
import {
  ClipboardList,
  Award,
  Heart,
  LineChart,
  Waves,
  Sparkles,
  Shield,
} from "lucide-react";

const TabButton = ({ id, label, icon: Icon, activeTab, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-500 ${
      activeTab === id
        ? "bg-white/20 backdrop-blur-3xl text-white shadow-lg border border-white/30"
        : "text-white/70 hover:bg-white/10 hover:text-white"
    }`}
  >
    <Icon size={16} />
    <span className="text-[9px] font-black uppercase tracking-widest">
      {label}
    </span>
  </button>
);

const BehaviourHeader = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

      <div className="relative z-10">
        {/* Krimson OS Pill Breadcrumb */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-inner ring-1 ring-white/20">
            <Sparkles size={12} className="text-cyan-100" />
            Krimson OS • Student Conduct
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
                <Shield size={28} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                Student Conduct
              </h1>
            </div>
            <p className="text-white/90 font-medium text-lg max-w-2xl leading-relaxed opacity-90">
              Comprehensive behaviour tracking, house points management, and
              student wellbeing monitoring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviourHeader;
