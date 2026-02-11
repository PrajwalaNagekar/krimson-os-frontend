import React, { useState } from "react";
import DiscussionHub from "../../../components/dashboard/teacher/collaboration/DiscussionHub";
import CoPlanningWorkspace from "../../../components/dashboard/teacher/collaboration/CoPlanningWorkspace";
import PeerObservation from "../../../components/dashboard/teacher/collaboration/PeerObservation";
import ProfessionalGrowthHub from "../../../components/dashboard/teacher/collaboration/ProfessionalGrowthHub";
import CollabHeader from "../../../components/dashboard/teacher/CollaborationHub/CollabHeader";
import CollabTabs from "../../../components/dashboard/teacher/CollaborationHub/CollabTabs";
import { TEACHER_DATA } from "../../../data/teacherData";

const CollaborationHub = () => {
  const [activeTab, setActiveTab] = useState("discussions");
  // Safely access data, defaulting to empty objects if missing to avoid crashes
  const collaborationHubData = TEACHER_DATA.collaborationHub || {};
  const { header = {}, tabs = [], discussionHub = {} } = collaborationHubData;

  return (
    <div className="space-y-8">
      {/* HEADER SECTION */}
      <CollabHeader
        tag={header.tag || "Collaboration"}
        title={header.title || "Collaboration Hub"}
        description={header.description || "Welcome to the collaboration hub."}
      >
        <CollabTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </CollabHeader>

      {/* CONTENT AREA */}
      <div className="min-h-[600px]">
        {/* 
                  Passing discussionHub data as initialData.
                  Other components are left as is for now as per focused refactoring.
                */}
        {activeTab === "discussions" && (
          <DiscussionHub initialData={discussionHub} />
        )}
        {activeTab === "co-planning" && <CoPlanningWorkspace />}
        {activeTab === "observations" && <PeerObservation />}
        {activeTab === "growth" && <ProfessionalGrowthHub />}
      </div>
    </div>
  );
};

export default CollaborationHub;
