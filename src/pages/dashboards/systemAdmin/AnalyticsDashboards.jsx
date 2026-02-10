import React, { useState } from "react";
import { SYSTEM_ADMIN_DATA } from "../../../data/systemAdminData";
import PageHeader from "../../../components/dashboard/systemAdmin/shared/PageHeader";

// Analytics Components
import SchoolwideAnalytics from "../../../components/dashboard/systemAdmin/AnalyticsDashboards/SchoolwideAnalytics";
import AcademicResults from "../../../components/dashboard/systemAdmin/AnalyticsDashboards/AcademicResults";
import LearningProgress from "../../../components/dashboard/systemAdmin/AnalyticsDashboards/LearningProgress";
import AttendanceRetention from "../../../components/dashboard/systemAdmin/AnalyticsDashboards/AttendanceRetention";
import WellbeingSignals from "../../../components/dashboard/systemAdmin/AnalyticsDashboards/WellbeingSignals";
import CoCurricularParticipation from "../../../components/dashboard/systemAdmin/AnalyticsDashboards/CoCurricularParticipation";
import LabUtilisation from "../../../components/dashboard/systemAdmin/AnalyticsDashboards/LabUtilisation";
import TeacherWorkload from "../../../components/dashboard/systemAdmin/AnalyticsDashboards/TeacherWorkload";

const AnalyticsDashboards = () => {
  const { analyticsDashboards } = SYSTEM_ADMIN_DATA;

  const [activeSection, setActiveSection] = useState("schoolwide");

  const sections = [
    { id: "schoolwide", label: "📊 Schoolwide Analytics", icon: "📊" },
    { id: "academic", label: "🎓 Academic Results", icon: "🎓" },
    { id: "progress", label: "📈 Learning Progress", icon: "📈" },
    { id: "attendance", label: "📅 Attendance & Retention", icon: "📅" },
    { id: "wellbeing", label: "💚 Wellbeing Signals", icon: "💚" },
    { id: "cocurricular", label: "🏆 Co-Curricular", icon: "🏆" },
    { id: "labs", label: "🔬 Lab Utilisation", icon: "🔬" },
    { id: "workload", label: "👩‍🏫 Teacher Workload", icon: "👩‍🏫" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <PageHeader
          title="Analytics & Dashboards"
          description="Comprehensive school analytics and insights"
        />

        {/* Section Tabs */}
        <div className="flex gap-3 flex-wrap">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:scale-105"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {activeSection === "schoolwide" && (
          <div className="animate-in fade-in duration-300">
            <SchoolwideAnalytics
              data={analyticsDashboards.schoolwideAnalytics}
            />
          </div>
        )}

        {activeSection === "academic" && (
          <div className="animate-in fade-in duration-300">
            <AcademicResults data={analyticsDashboards.academicResults} />
          </div>
        )}

        {activeSection === "progress" && (
          <div className="animate-in fade-in duration-300">
            <LearningProgress data={analyticsDashboards.learningProgress} />
          </div>
        )}

        {activeSection === "attendance" && (
          <div className="animate-in fade-in duration-300">
            <AttendanceRetention
              data={analyticsDashboards.attendanceRetention}
            />
          </div>
        )}

        {activeSection === "wellbeing" && (
          <div className="animate-in fade-in duration-300">
            <WellbeingSignals data={analyticsDashboards.wellbeingSignals} />
          </div>
        )}

        {activeSection === "cocurricular" && (
          <div className="animate-in fade-in duration-300">
            <CoCurricularParticipation
              data={analyticsDashboards.coCurricularParticipation}
            />
          </div>
        )}

        {activeSection === "labs" && (
          <div className="animate-in fade-in duration-300">
            <LabUtilisation data={analyticsDashboards.labUtilisation} />
          </div>
        )}

        {activeSection === "workload" && (
          <div className="animate-in fade-in duration-300">
            <TeacherWorkload data={analyticsDashboards.teacherWorkload} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsDashboards;
