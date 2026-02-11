import React from "react";
import { FileText, CheckSquare, Shield, BarChart2 } from "lucide-react";

const AssignmentTabs = ({
  activeTab,
  setActiveTab,
  assignmentView,
  setAssignmentView,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="flex p-1.5 bg-slate-100 rounded-[2rem] w-full max-w-2xl shadow-inner border border-slate-200/50">
        {[
          { id: "active", label: "Assignments", icon: <FileText size={16} /> },
          {
            id: "quizzes",
            label: "Quiz Builder",
            icon: <CheckSquare size={16} />,
          },
          { id: "integrity", label: "Integrity", icon: <Shield size={16} /> },
          {
            id: "blueprint",
            label: "Blueprints",
            icon: <BarChart2 size={16} />,
          },
          {
            id: "rubrics",
            label: "Rubric Library",
            icon: <Shield size={16} />,
          },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-[1.5rem] text-xs font-bold transition-all duration-500 ${
              activeTab === tab.id
                ? "bg-white text-blue-600 shadow-xl scale-105"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "active" && (
        <div className="flex p-1 bg-blue-50/50 rounded-2xl border border-blue-100 self-end md:self-auto">
          <button
            onClick={() => setAssignmentView("tracker")}
            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${assignmentView === "tracker" ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:text-blue-600"}`}
          >
            Live Tracker
          </button>
          <button
            onClick={() => setAssignmentView("repository")}
            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${assignmentView === "repository" ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:text-blue-600"}`}
          >
            Master Repository
          </button>
        </div>
      )}
    </div>
  );
};

export default AssignmentTabs;
