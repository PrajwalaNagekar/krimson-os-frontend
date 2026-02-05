import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import ParentSyncHeader from "../../../components/dashboard/student/ParentLinkDashboard/ParentSyncHeader";
import ParentInfoCard from "../../../components/dashboard/student/ParentLinkDashboard/ParentInfoCard";
import DataMirrorSection from "../../../components/dashboard/student/ParentLinkDashboard/DataMirrorSection";
import ParentalMessages from "../../../components/dashboard/student/ParentLinkDashboard/ParentalMessages";
import TeacherComments from "../../../components/dashboard/student/ParentLinkDashboard/TeacherComments";
import JointActivities from "../../../components/dashboard/student/ParentLinkDashboard/JointActivities";

/**
 * Parent Link Dashboard - Screen 13
 * Purpose: Synchronization between student and parent accounts
 * Future: Replace static data with Parent Module + Communication Sync API
 */
const ParentLinkDashboard = () => {
  const { parentLinkData } = STUDENT_DATA;
  const [acknowledgedItems, setAcknowledgedItems] = useState(new Set());

  // Future API: Acknowledge message or activity
  const handleAcknowledge = (itemId, type) => {
    console.log(`Future API: POST /api/student/parentlink/acknowledge`, {
      itemId,
      type,
    });
    setAcknowledgedItems((prev) => new Set([...prev, itemId]));
  };

  // Count unread items
  const unreadMessages = parentLinkData.parentalMessages.filter(
    (m) => !m.read,
  ).length;
  const unreadComments = parentLinkData.teacherComments.filter(
    (c) => !c.read,
  ).length;

  return (
    <div className="space-y-6">
      {/* Header - Parent Sync Status */}
      <ParentSyncHeader
        unreadMessages={unreadMessages}
        unreadComments={unreadComments}
      />

      {/* Parent Info Card */}
      <ParentInfoCard parentInfo={parentLinkData.parentInfo} />

      {/* Data Mirror Section */}
      <DataMirrorSection mirrorData={parentLinkData.mirrorData} />

      {/* Parental Messages */}
      <ParentalMessages
        messages={parentLinkData.parentalMessages}
        unreadMessages={unreadMessages}
        acknowledgedItems={acknowledgedItems}
        handleAcknowledge={handleAcknowledge}
      />

      {/* Teacher Comments */}
      <TeacherComments
        comments={parentLinkData.teacherComments}
        unreadComments={unreadComments}
      />

      {/* Joint Activities */}
      <JointActivities
        activities={parentLinkData.jointActivities}
        acknowledgedItems={acknowledgedItems}
        handleAcknowledge={handleAcknowledge}
      />
    </div>
  );
};

export default ParentLinkDashboard;
