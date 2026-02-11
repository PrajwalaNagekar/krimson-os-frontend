import React from "react";
import { FilePlus, Sparkles } from "lucide-react";

const AssignmentHeader = ({
  activeTab,
  assignmentView,
  stats,
  onCreateNew,
}) => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

      <div className="relative z-10">
        <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm border border-white/30 uppercase tracking-widest">
          {activeTab === "active"
            ? "Assignment & Evaluation Manager"
            : activeTab === "quizzes"
              ? "Quiz & Assessment Builder"
              : activeTab === "blueprint"
                ? "Pedagogical Blueprinting"
                : activeTab === "integrity"
                  ? "Academic Integrity & Proctoring"
                  : "Grading Rubric Library"}
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-black mb-2 tracking-tight">
              {activeTab === "active"
                ? "Assignment Hub"
                : activeTab === "quizzes"
                  ? "Quiz Studio"
                  : activeTab === "blueprint"
                    ? "Design Blueprint"
                    : activeTab === "integrity"
                      ? "Integrity Shield"
                      : "Rubric Studio"}
            </h1>
            <p className="opacity-90 font-medium text-sm md:text-base">
              {activeTab === "active"
                ? assignmentView === "tracker"
                  ? `${stats.total} Assignments • ${stats.totalPending} Pending Reviews`
                  : `12 Saved Templates • 5 Recently Used`
                : activeTab === "quizzes"
                  ? "Create high-fidelity tests with AI drafting."
                  : activeTab === "blueprint"
                    ? "Ensure balanced difficulty & outcome coverage."
                    : activeTab === "integrity"
                      ? "Monitor assessment legitimacy & AI-detected anomalies."
                      : "Define misinterpretation-proof success criteria."}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {activeTab === "active" ? (
              <button
                onClick={onCreateNew}
                className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95"
              >
                <FilePlus size={20} />
                <div className="text-left">
                  <div>Create New</div>
                  <div className="text-[10px] opacity-70">Follow Framework</div>
                </div>
              </button>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-xs font-bold border border-white/20">
                <Sparkles size={16} />
                AI2 Assistant Active
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentHeader;
