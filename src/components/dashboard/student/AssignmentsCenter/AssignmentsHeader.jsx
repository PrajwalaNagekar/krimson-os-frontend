import React from "react";
import { Layout, Calendar, Layers, FileText, Trophy } from "lucide-react";

// AssignmentsHeader: Displays the title, description, and view toggle
const AssignmentsHeader = ({ viewMode, setViewMode }) => {
  const getHeaderContent = () => {
    switch (viewMode) {
      case "assignments":
        return {
          title: "Homework & Assignments",
          description:
            "✨ AI-powered mastery tracking • Adaptive learning paths",
        };
      case "projects":
        return {
          title: "Project Management",
          description: "🚀 Content Studio • Workflow Console • AI Automate",
        };
      case "quizzes":
        return {
          title: "Quiz Player",
          description: "📝 Assessment Player • Autosave • Stress-free UI",
        };
      default:
        return {
          title: "Homework & Assignments",
          description:
            "✨ AI-powered mastery tracking • Adaptive learning paths",
        };
    }
  };

  const headerContent = getHeaderContent();

  return (
    <div className="flex flex-col gap-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-8 rounded-3xl shadow-lg border-0 transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {headerContent.title}
          </h2>
          <p className="text-sm text-white/90 font-semibold flex items-center gap-2">
            {headerContent.description}
          </p>
        </div>

        {/* Main View Toggle */}
        <div className="bg-white/20 p-1 rounded-xl backdrop-blur-md border border-white/10 flex flex-wrap gap-1">
          <button
            onClick={() => setViewMode("assignments")}
            className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
              viewMode === "assignments"
                ? "bg-white text-blue-600 shadow-lg"
                : "text-white/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            <FileText size={18} />
            Assignments
          </button>
          <button
            onClick={() => setViewMode("projects")}
            className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
              viewMode === "projects"
                ? "bg-white text-pink-600 shadow-lg"
                : "text-white/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Layers size={18} />
            Projects
          </button>
          <button
            onClick={() => setViewMode("quizzes")}
            className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
              viewMode === "quizzes"
                ? "bg-white text-purple-600 shadow-lg"
                : "text-white/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Trophy size={18} />
            Quiz Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsHeader;
