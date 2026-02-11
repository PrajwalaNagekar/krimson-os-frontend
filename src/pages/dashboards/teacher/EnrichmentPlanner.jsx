import React, { useState } from "react";
import { ENRICHMENT_DATA } from "../../../data/teacherData";
import EnrichmentHeader from "../../../components/dashboard/teacher/EnrichmentPlanner/EnrichmentHeader";
import TabNavigation from "../../../components/dashboard/teacher/EnrichmentPlanner/TabNavigation";
import StatsGrid from "../../../components/dashboard/teacher/EnrichmentPlanner/StatsGrid";
import StudentMasteryCards from "../../../components/dashboard/teacher/EnrichmentPlanner/StudentMasteryCards";
import AIGrowthInsight from "../../../components/dashboard/teacher/EnrichmentPlanner/AIGrowthInsight";
import SessionList from "../../../components/dashboard/teacher/EnrichmentPlanner/SessionList";
import CreateChallengeWizard from "../../../components/dashboard/teacher/EnrichmentPlanner/CreateChallengeWizard";

const EnrichmentPlanner = () => {
  const [activeTab, setActiveTab] = useState("upcoming"); // upcoming, drafts, history
  const [searchQuery, setSearchQuery] = useState("");
  const [showWizard, setShowWizard] = useState(false);

  // We keep sessions in state to allow future API updates or local modifications (e.g. adding new session)
  const [sessions, setSessions] = useState(ENRICHMENT_DATA.sessions);

  const getFilteredSessions = (status) => {
    return sessions.filter(
      (s) =>
        s.status === status &&
        s.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <EnrichmentHeader onWizardOpen={() => setShowWizard(true)} />

      {/* Navigation & Search */}
      <TabNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Content Area */}
      <div className="animate-fadeIn">
        {activeTab === "enrichment" && (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            {/* Advanced Skill Dashboard */}
            <StatsGrid />

            {/* Student Mastery Cards */}
            <StudentMasteryCards />

            {/* AI Growth Insight */}
            <AIGrowthInsight />
          </div>
        )}

        {activeTab === "upcoming" && (
          <SessionList
            sessions={getFilteredSessions("upcoming")}
            type="upcoming"
            onWizardOpen={() => setShowWizard(true)}
          />
        )}

        {activeTab === "drafts" && (
          <SessionList
            sessions={getFilteredSessions("draft")}
            type="drafts"
            onWizardOpen={() => setShowWizard(true)}
          />
        )}

        {/* History tab was present in original but empty logic? Original code had logic for 'history' status in sessions but no rendering block for it specifically except filtered? 
                    Ah, original code had:
                    {activeTab === 'upcoming' && (...)}
                    {activeTab === 'drafts' && (...)}
                    It didn't explicitly handle 'history' tab rendering block in the main return.
                    However, tabs had 'history'.
                    I will check original code content again.
                 */}
        {activeTab === "history" && (
          <SessionList
            sessions={getFilteredSessions("history")}
            type="upcoming" // Reusing upcoming style for history or create new style if needed. Original had no history view implemented in the provided snippet?
            onWizardOpen={() => setShowWizard(true)}
          />
        )}
      </div>

      {/* Create Enrichment Wizard */}
      {showWizard && (
        <CreateChallengeWizard onClose={() => setShowWizard(false)} />
      )}

      <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
            `}</style>
    </div>
  );
};

export default EnrichmentPlanner;
