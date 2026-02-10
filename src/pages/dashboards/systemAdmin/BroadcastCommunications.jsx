import React, { useState } from "react";
import { SYSTEM_ADMIN_DATA } from "../../../data/systemAdminData";
import PageHeader from "../../../components/dashboard/systemAdmin/shared/PageHeader";

// Broadcast Communications Components
import StatsOverview from "../../../components/dashboard/systemAdmin/BroadcastCommunications/StatsOverview";
import AIInsightsPanel from "../../../components/dashboard/systemAdmin/BroadcastCommunications/AIInsightsPanel";
import BroadcastTabs from "../../../components/dashboard/systemAdmin/BroadcastCommunications/BroadcastTabs";
import BroadcastCard from "../../../components/dashboard/systemAdmin/BroadcastCommunications/BroadcastCard";
import ScheduledQueue from "../../../components/dashboard/systemAdmin/BroadcastCommunications/ScheduledQueue";
import AudienceSegments from "../../../components/dashboard/systemAdmin/BroadcastCommunications/AudienceSegments";

// Template Library Components
import TemplateStats from "../../../components/dashboard/systemAdmin/TemplateLibrary/TemplateStats";
import CategoryGrid from "../../../components/dashboard/systemAdmin/TemplateLibrary/CategoryGrid";
import TemplateCard from "../../../components/dashboard/systemAdmin/TemplateLibrary/TemplateCard";

// Content Repository Components
import StorageStats from "../../../components/dashboard/systemAdmin/ContentRepository/StorageStats";
import FolderGrid from "../../../components/dashboard/systemAdmin/ContentRepository/FolderGrid";
import FileCard from "../../../components/dashboard/systemAdmin/ContentRepository/FileCard";
import AIRecommendations from "../../../components/dashboard/systemAdmin/ContentRepository/AIRecommendations";

const BroadcastCommunications = () => {
  const { broadcastCommunications, templateLibrary, contentRepository } =
    SYSTEM_ADMIN_DATA.communicationsHub;

  const [activeSection, setActiveSection] = useState("broadcast");
  const [selectedBroadcastTab, setSelectedBroadcastTab] = useState("all");
  const [selectedTemplateCategory, setSelectedTemplateCategory] =
    useState("all");

  // Filter broadcast data
  const filteredBroadcasts = broadcastCommunications.recentBroadcasts.filter(
    (broadcast) => {
      if (selectedBroadcastTab === "all") return true;
      return broadcast.status.toLowerCase() === selectedBroadcastTab;
    },
  );

  // Filter template data
  const filteredTemplates = templateLibrary.templates.filter((template) => {
    if (selectedTemplateCategory === "all") return true;
    return template.category === selectedTemplateCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <PageHeader
          title="Communications Hub"
          description="Unified platform for broadcasts, templates, and content management"
        />

        {/* Main Section Tabs */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveSection("broadcast")}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              activeSection === "broadcast"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            📡 Broadcast Communications (AI2)
          </button>
          <button
            onClick={() => setActiveSection("templates")}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              activeSection === "templates"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            📝 Template Library
          </button>
          <button
            onClick={() => setActiveSection("repository")}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              activeSection === "repository"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            📁 Content Repository (AI6)
          </button>
        </div>

        {/* Broadcast Communications Section */}
        {activeSection === "broadcast" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-cyan-200">
              <p className="text-sm text-slate-700">
                <strong>Layout:</strong> LG (Large Grid) •{" "}
                <strong>Data Control:</strong> Configurable •{" "}
                <strong>AI:</strong> AI2
              </p>
            </div>

            <StatsOverview stats={broadcastCommunications.stats} />
            <AIInsightsPanel insights={broadcastCommunications.aiInsights} />
            <BroadcastTabs
              selectedTab={selectedBroadcastTab}
              onTabChange={setSelectedBroadcastTab}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredBroadcasts.map((broadcast) => (
                <BroadcastCard key={broadcast.id} broadcast={broadcast} />
              ))}
            </div>

            <ScheduledQueue
              scheduledItems={broadcastCommunications.scheduledQueue}
            />
            <AudienceSegments
              segments={broadcastCommunications.audienceSegments}
            />
          </div>
        )}

        {/* Template Library Section */}
        {activeSection === "templates" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-cyan-200">
              <p className="text-sm text-slate-700">
                <strong>Layout:</strong> LJ (List with JSON preview) •{" "}
                <strong>Data Control:</strong> Configurable •{" "}
                <strong>AI:</strong> None
              </p>
            </div>

            <TemplateStats stats={templateLibrary.stats} />
            <CategoryGrid categories={templateLibrary.categories} />

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedTemplateCategory("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTemplateCategory === "all"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                All Templates
              </button>
              {templateLibrary.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedTemplateCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedTemplateCategory === category.name
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-800">
                Templates ({filteredTemplates.length})
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredTemplates.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Content Repository Section */}
        {activeSection === "repository" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-cyan-200">
              <p className="text-sm text-slate-700">
                <strong>Layout:</strong> LB (List with Blocks) •{" "}
                <strong>Data Control:</strong> Configurable •{" "}
                <strong>AI:</strong> AI6
              </p>
            </div>

            <StorageStats stats={contentRepository.stats} />
            <FolderGrid folders={contentRepository.folders} />

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-800">
                Recent Files ({contentRepository.recentFiles.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {contentRepository.recentFiles.map((file) => (
                  <FileCard key={file.id} file={file} />
                ))}
              </div>
            </div>

            <AIRecommendations
              recommendations={contentRepository.aiRecommendations}
              storageBreakdown={contentRepository.storageBreakdown}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BroadcastCommunications;
