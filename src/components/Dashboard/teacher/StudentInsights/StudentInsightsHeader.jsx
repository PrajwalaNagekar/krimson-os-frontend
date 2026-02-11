import React from "react";
import {
  Sparkles,
  BarChart2,
  ListTodo,
  MessageSquare,
  AlertOctagon,
} from "lucide-react";

const StudentInsightsHeader = ({ insightMode, setInsightMode, stats }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden group">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl -ml-10 -mb-10 group-hover:scale-125 transition-transform duration-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-inner ring-1 ring-white/20">
            <Sparkles size={12} className="text-cyan-300" />
            Krimson OS • Unified Insights
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-2 tracking-tighter leading-none">
            {insightMode === "analytics"
              ? "Student Analytics"
              : insightMode === "intervention"
                ? "Intervention Queue"
                : "Conference Record"}
          </h1>
          <p className="opacity-80 font-bold text-sm md:text-lg max-w-2xl leading-relaxed">
            {insightMode === "analytics"
              ? `Comprehensive visibility into ${stats.total} student profiles and behavioral trends.`
              : insightMode === "intervention"
                ? "Systematic identification and tracking of academic support cycles."
                : "Professional documentation for structured pedagogical conversations."}
          </p>
        </div>

        {/* Tab Navigation Ribbon - Integrated Design */}
        <div className="inline-flex p-1.5 bg-black/10 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-lg relative z-20">
          {[
            {
              id: "analytics",
              label: "Analytics",
              icon: <BarChart2 size={16} />,
            },
            {
              id: "intervention",
              label: "Intervention",
              icon: <ListTodo size={16} />,
            },
            {
              id: "conference",
              label: "Conference",
              icon: <MessageSquare size={16} />,
            },
            {
              id: "incident",
              label: "Incident Report",
              icon: <AlertOctagon size={16} />,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setInsightMode(tab.id)}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3 ${
                insightMode === tab.id
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

export default StudentInsightsHeader;
