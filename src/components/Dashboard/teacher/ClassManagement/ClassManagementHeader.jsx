import React from "react";
import { Users, ArrowRightLeft, BarChart3 } from "lucide-react";

const ClassManagementHeader = ({ activeTab, setActiveTab, classesCount }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

      <div className="relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-1 backdrop-blur-sm border border-white/20">
            Institutional Administration
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight">
              {activeTab === "classes"
                ? "Class Management"
                : activeTab === "substitution"
                  ? "Substitution Planner"
                  : "Homework Load Balancer"}
            </h1>
            <p className="opacity-90 font-medium text-sm md:text-lg max-w-2xl leading-relaxed">
              {activeTab === "classes"
                ? `Comprehensive orchestration of ${classesCount} assigned pedagogical streams.`
                : activeTab === "substitution"
                  ? "Systematic continuity planning for faculty absence and class transitions."
                  : "Analytical oversight of student workload across cross-functional academic domains."}
            </p>
          </div>
        </div>

        {/* Glass Ribbon Tabs */}
        <div className="inline-flex p-1.5 bg-black/10 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-lg relative z-20 overflow-x-auto">
          {[
            { id: "classes", label: "My Classes", icon: Users },
            { id: "substitution", label: "Substitution", icon: ArrowRightLeft },
            { id: "homework", label: "Homework Load", icon: BarChart3 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3 ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-xl scale-105 ring-1 ring-black/5"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <tab.icon size={16} />
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassManagementHeader;
