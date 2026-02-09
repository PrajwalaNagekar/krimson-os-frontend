import React, { useState } from "react";
import LessonApprovalHeader from "../../../components/dashboard/coordinator/LessonApprovalCenter/LessonApprovalHeader";
import LessonApprovalStats from "../../../components/dashboard/coordinator/LessonApprovalCenter/LessonApprovalStats";
import LessonApprovalTabs from "../../../components/dashboard/coordinator/LessonApprovalCenter/LessonApprovalTabs";
import PendingApprovalQueue from "../../../components/dashboard/coordinator/LessonApprovalCenter/PendingApprovalQueue";
import ApprovalLog from "../../../components/dashboard/coordinator/LessonApprovalCenter/ApprovalLog";
import { LESSON_APPROVAL_DATA } from "../../../data/registrarData";

/**
 * Screen 3: Lesson & Assessment Approval Center
 * Purpose: Review and approve academic submissions from teachers
 * Features:
 * - Lesson plan approval queue
 * - Assignment and Assessment approval workflow
 * - Comment and revision request section
 * - Approval Log (timestamped)
 * Integration: Lesson Plan API + Evaluation Engine
 */

const LessonApprovalCenter = () => {
  const [selectedTab, setSelectedTab] = useState("pending"); // pending, approved, revision

  const { stats, pendingQueue, approvalLog } = LESSON_APPROVAL_DATA;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <LessonApprovalHeader />

        {/* Stats Overview */}
        <LessonApprovalStats stats={stats} />

        {/* Tab Navigation */}
        <LessonApprovalTabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          pendingCount={pendingQueue.length}
        />

        {/* Pending Approval Queue */}
        {selectedTab === "pending" && (
          <PendingApprovalQueue queue={pendingQueue} />
        )}

        {/* Approval Log */}
        {selectedTab === "log" && <ApprovalLog approvalLog={approvalLog} />}
      </div>
    </div>
  );
};

export default LessonApprovalCenter;
