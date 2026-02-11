import React from "react";
import { FileText, Database } from "lucide-react";
import { TEACHER_DATA } from "../../../../data/teacherData";

const AssessmentNavigation = ({ activeTab, setActiveTab }) => {
  const { tabs } = TEACHER_DATA.assessmentTools;

  return (
    <div className="flex p-1.5 bg-slate-100 rounded-3xl w-full max-w-md shadow-inner">
      {tabs.map((tab) => {
        const Icon = tab.id === "worksheet" ? FileText : Database;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 md:py-4 rounded-2xl text-xs md:text-sm font-bold transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-white text-blue-600 shadow-lg"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Icon size={18} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
export default AssessmentNavigation;
