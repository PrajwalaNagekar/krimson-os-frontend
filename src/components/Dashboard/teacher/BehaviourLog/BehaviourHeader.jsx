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
    className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-500 ${activeTab === id
      ? "bg-white/20 backdrop-blur-3xl text-white shadow-lg border border-white/30"
      : "text-indigo-100/60 hover:bg-white/10 hover:text-white"
      }`}
  >
    <Icon size={16} />
    <span className="text-[9px] font-black uppercase tracking-widest">
      {label}
    </span>
  </button>
);

const BehaviourHeader = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "behaviour", label: "Log", icon: <ClipboardList size={16} /> },
    { id: "house-points", label: "Points", icon: <Award size={16} /> },
    { id: "wellbeing", label: "Wellbeing", icon: <Heart size={16} /> },
    {
      id: "behaviour-analytics",
      label: "Behaviour Analyt.",
      icon: <LineChart size={16} />,
    },
    {
      id: "wellbeing-analytics",
      label: "Wellbeing Analyt.",
      icon: <Waves size={16} />,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
      {/* Dynamic Background Elements */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10 group-hover:scale-125 transition-transform duration-1000"></div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-inner ring-1 ring-white/20">
            <Sparkles size={12} className="text-white" />
            Krimson OS • Student Conduct
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-black mb-3 tracking-tighter leading-none">
              {activeTab === "behaviour"
                ? "Behaviour Log"
                : activeTab === "house-points"
                  ? "House Points"
                  : activeTab === "wellbeing"
                    ? "Wellbeing Monitor"
                    : "Conduct Analytics"}
            </h1>
            <p className="opacity-90 font-bold text-sm md:text-lg max-w-2xl leading-relaxed">
              {activeTab === "behaviour"
                ? "Real-time observation tracking and professional documentation of student incidents."
                : activeTab === "house-points"
                  ? "Gamified merit system for incentivizing positive collective house contributions."
                  : activeTab === "wellbeing"
                    ? "Systematic tracking of emotional trends and proactive student support check-ins."
                    : "Data-driven insights into behavioral patterns and institutional conduct trends."}
            </p>
          </div>
        </div>

        {/* Tab Navigation Ribbon - Integrated Design */}
        <div className="inline-flex p-1.5 bg-black/10 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-lg relative z-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3 ${activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-xl scale-105 ring-1 ring-black/5"
                  : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BehaviourHeader;
