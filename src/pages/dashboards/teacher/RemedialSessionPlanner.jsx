/**
 * @component RemedialSessionPlanner
 * @description Teacher Dashboard - Remedial Session Planner
 */
import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import PlannerHeader from "../../../components/dashboard/teacher/RemedialSessionPlanner/PlannerHeader";
import PlannerTabs from "../../../components/dashboard/teacher/RemedialSessionPlanner/PlannerTabs";
import RemedialTracker from "../../../components/dashboard/teacher/RemedialSessionPlanner/RemedialTracker";
import SessionList from "../../../components/dashboard/teacher/RemedialSessionPlanner/SessionList";
import CreateSessionWizard from "../../../components/dashboard/teacher/RemedialSessionPlanner/CreateSessionWizard";

const RemedialSessionPlanner = ({ data }) => {
  // Use data from props or fallback to imported mock data
  const plannerData = data ||
    TEACHER_DATA.remedialPlanner || { remedialStudents: [], sessions: [] };
  const { remedialStudents, sessions } = plannerData;

  const [activeTab, setActiveTab] = useState("upcoming"); // upcoming, drafts, history, remedial
  const [searchQuery, setSearchQuery] = useState("");
  const [showWizard, setShowWizard] = useState(false);

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    console.log("Remedial Session Planner loaded - Ready for API integration");
  }, []);

  const getFilteredSessions = (status) => {
    return sessions.filter(
      (s) =>
        s.status === status &&
        s.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  // Filter sessions based on active tab
  const filteredSessions =
    activeTab !== "remedial"
      ? getFilteredSessions(activeTab === "drafts" ? "draft" : activeTab)
      : [];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <PlannerHeader onCreateSession={() => setShowWizard(true)} />

      {/* Navigation & Search */}
      <PlannerTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Content Area */}
      <div className="animate-fadeIn">
        {activeTab === "remedial" ? (
          <RemedialTracker students={remedialStudents} />
        ) : (
          <SessionList
            sessions={filteredSessions}
            activeTab={activeTab}
            onCreateSession={() => setShowWizard(true)}
          />
        )}
      </div>

      {/* Create Session Wizard Modal */}
      {showWizard && (
        <CreateSessionWizard onClose={() => setShowWizard(false)} />
      )}

      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default RemedialSessionPlanner;
