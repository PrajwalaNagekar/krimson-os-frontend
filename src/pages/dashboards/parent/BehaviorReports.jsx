import React, { useState } from "react";
import { Award } from "lucide-react";
import BehaviorStatsCards from "../../../components/dashboard/parent/BehaviorReports/BehaviorStatsCards";
import BehaviorGraph from "../../../components/dashboard/parent/BehaviorReports/BehaviorGraph";
import TeacherFeedbackList from "../../../components/dashboard/parent/BehaviorReports/TeacherFeedbackList";
import PeerCollaborationList from "../../../components/dashboard/parent/BehaviorReports/PeerCollaborationList";
import FlaggedPatternsAlert from "../../../components/dashboard/parent/BehaviorReports/FlaggedPatternsAlert";
import ParentResponseSection from "../../../components/dashboard/parent/BehaviorReports/ParentResponseSection";
import {
  behaviorStats,
  monthlyBehaviorData,
  teacherFeedback,
  peerCollaboration,
  flaggedPatterns,
} from "../../../data/parentData";

const BehaviorReports = () => {
  const [parentResponse, setParentResponse] = useState("");

  const handleSendResponse = () => {
    if (parentResponse.trim()) {
      console.log("Sending parent response:", parentResponse);
      // API call will be added here
      setParentResponse("");
    }
  };

  const handleEscalateToCounselor = () => {
    console.log("Escalating to counselor");
    // API call will be added here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Page Header */}
      <div className="mb-4 md:mb-6 relative z-10">
        <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
          <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
            <Award size={24} className="md:hidden text-white" />
            <Award size={28} className="hidden md:block text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Behavior & Feedback Reports
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">
              Track conduct, discipline, and participation insights
            </p>
          </div>
        </div>
      </div>

      <BehaviorStatsCards stats={behaviorStats} />

      <BehaviorGraph monthlyData={monthlyBehaviorData} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6 relative z-10">
        <TeacherFeedbackList feedback={teacherFeedback} />
        <PeerCollaborationList collaborations={peerCollaboration} />
      </div>

      <FlaggedPatternsAlert
        patterns={flaggedPatterns}
        onEscalate={handleEscalateToCounselor}
      />

      <ParentResponseSection
        response={parentResponse}
        onResponseChange={(e) => setParentResponse(e.target.value)}
        onSendResponse={handleSendResponse}
      />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default BehaviorReports;
