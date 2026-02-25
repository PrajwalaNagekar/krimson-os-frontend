import React, { useState } from "react";
import {
  LayoutDashboard,
  Layers,
  BookOpen,
  FileText,
  ClipboardList,
  PenTool,
  BookMarked,
} from "lucide-react";

// Sub-panels — 4 levels up from pages/dashboards/teacher/CurriculumBuilder/
import CurriculumDashboard from "../../../../components/dashboard/teacher/CurriculumBuilder/CurriculumDashboard/CurriculumDashboard";
import UnitBuilder from "../../../../components/dashboard/teacher/CurriculumBuilder/UnitBuilder/UnitBuilder";
import ChapterBuilder from "../../../../components/dashboard/teacher/CurriculumBuilder/ChapterBuilder/ChapterBuilder";
import TopicBuilder from "../../../../components/dashboard/teacher/CurriculumBuilder/TopicBuilder/TopicBuilder";
import SubtopicBuilder from "../../../../components/dashboard/teacher/CurriculumBuilder/SubtopicBuilder/SubtopicBuilder";
import LessonPlanBuilder from "../../../../components/dashboard/teacher/CurriculumBuilder/LessonPlanBuilder/LessonPlanBuilder";
import LessonBuilder from "../../../../components/dashboard/teacher/CurriculumBuilder/LessonBuilder/LessonBuilder";

const TABS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "units", label: "Unit Builder", icon: Layers },
  { id: "chapters", label: "Chapter Builder", icon: BookMarked },
  { id: "topics", label: "Topic Builder", icon: BookOpen },
  { id: "subtopics", label: "Sub-Topic Builder", icon: FileText },
  { id: "lessonPlan", label: "Lesson Plan Builder", icon: ClipboardList },
  { id: "lessonBuilder", label: "Lesson Builder", icon: PenTool },
];

const CurriculumBuilder = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderPanel = () => {
    switch (activeTab) {
      case "dashboard":
        return <CurriculumDashboard />;
      case "units":
        return <UnitBuilder />;
      case "chapters":
        return <ChapterBuilder />;
      case "topics":
        return <TopicBuilder />;
      case "subtopics":
        return <SubtopicBuilder />;
      case "lessonPlan":
        return <LessonPlanBuilder />;
      case "lessonBuilder":
        return <LessonBuilder />;
      default:
        return <CurriculumDashboard />;
    }
  };

  return (
    <div className="space-y-5">
      {/* ── Header Banner ─────────────────────────────────────────────────── */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 p-6 text-white shadow-lg">
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 -left-8 w-32 h-32 bg-pink-400 opacity-20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <BookOpen size={20} className="opacity-90" />
            <h1 className="text-2xl font-bold tracking-tight">
              Curriculum Builder
            </h1>
          </div>
          <p className="text-white/80 text-sm">
            Build your curriculum — Units → Chapters → Topics → Sub-Topics →
            Lesson Plans
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {[
              "Term 1 · Grade 10 · Mathematics",
              "CBSE — NCERT Framework",
              "Academic Year 2024–25",
            ].map((label) => (
              <span
                key={label}
                className="bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Toggle Tab Bar ────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-1.5 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {TABS.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                }`}
              >
                <Icon
                  size={15}
                  className={isActive ? "text-white" : "text-slate-400"}
                />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Active Panel ──────────────────────────────────────────────────── */}
      <div>{renderPanel()}</div>
    </div>
  );
};

export default CurriculumBuilder;
