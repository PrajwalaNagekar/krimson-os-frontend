import React from "react";
import { LayoutDashboard, FlaskConical, Calendar, Award } from "lucide-react";
import { LAB_DATA } from "../../../../data/teacherData";

const LabHeader = ({ activeTab, setActiveTab }) => {
  const { header } = LAB_DATA;

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 rounded-2xl transition-all duration-300 font-bold text-xs md:text-sm uppercase tracking-wider ${
        activeTab === id
          ? "bg-white text-emerald-600 shadow-lg scale-105"
          : "text-emerald-100 hover:bg-white/10"
      }`}
    >
      <Icon size={18} />
      <span className="hidden md:inline">{label}</span>
    </button>
  );

  return (
    <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl shadow-emerald-200 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-white opacity-10 rounded-full blur-[100px] -mr-20 -mt-20"></div>

      <div className="relative z-10">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div>
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-white/30">
              {header.badge}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
              {header.title}
            </h1>
            <p className="text-sm md:text-base text-white/90 font-medium max-w-2xl leading-relaxed">
              {header.subtitle}
            </p>
          </div>

          <div className="flex bg-slate-900/30 backdrop-blur-xl p-2 rounded-[2rem] border border-white/10 shadow-xl">
            <TabButton id="dashboard" label="Overview" icon={LayoutDashboard} />
            <TabButton id="planner" label="Planner" icon={FlaskConical} />
            <TabButton id="operations" label="Operations" icon={Calendar} />
            <TabButton id="assessment" label="Assessment" icon={Award} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabHeader;
