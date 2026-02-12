import React, { useState, useEffect } from "react";
import { communicationData } from "../../../data/parentData";
import CommunicationHeader from "../../../components/dashboard/parent/CommunicationHub/CommunicationHeader";
import CommunicationSidebar from "../../../components/dashboard/parent/CommunicationHub/Sidebar/CommunicationSidebar";
import CommunicationDetail from "../../../components/dashboard/parent/CommunicationHub/Detail/CommunicationDetail";

const CommunicationHub = () => {
  const [activeTab, setActiveTab] = useState("messages");
  const [selectedThread, setSelectedThread] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileList, setShowMobileList] = useState(true);

  const getCurrentData = () => {
    switch (activeTab) {
      case "messages":
        return communicationData.messages;
      case "announcements":
        return communicationData.announcements;
      case "broadcasts":
        return communicationData.broadcasts;
      case "counselor":
        return communicationData.counselorMsgs;
      default:
        return communicationData.messages;
    }
  };

  const filteredData = getCurrentData().filter((item) => {
    if (!searchQuery) return true;
    return (
      item.sender?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.preview?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleSendMessage = () => {
    if (replyText.trim()) {
      console.log("Sending message:", replyText);
      setReplyText("");
    }
  };

  // Mobile list toggle
  useEffect(() => {
    if (selectedThread && window.innerWidth < 1024) {
      setShowMobileList(false);
    }
  }, [selectedThread]);

  const handleThreadSelect = (thread) => {
    setSelectedThread(thread);
    if (window.innerWidth < 1024) {
      setShowMobileList(false);
    }
  };

  const handleCloseDetail = () => {
    setSelectedThread(null);
    setShowMobileList(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Page Header */}
      <CommunicationHeader />

      <div className="flex gap-3 md:gap-4 lg:gap-6 h-[calc(100vh-160px)] sm:h-[calc(100vh-180px)] md:h-[calc(100vh-240px)] relative z-10">
        {/* Left Panel - Navigation & List */}
        <CommunicationSidebar
          showMobileList={showMobileList}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          resetSelection={() => setSelectedThread(null)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredData={filteredData}
          selectedThread={selectedThread}
          onSelectThread={handleThreadSelect}
        />

        {/* Right Panel - Detail View */}
        <CommunicationDetail
          selectedThread={selectedThread}
          showMobileList={showMobileList}
          activeTab={activeTab}
          onClose={handleCloseDetail}
          onOpenMobileList={() => setShowMobileList(true)}
          replyText={replyText}
          setReplyText={setReplyText}
          onSendMessage={handleSendMessage}
        />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(96, 165, 250, 0.1),
            transparent
          );
          background-size: 1000px 100%;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(241, 245, 249, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6, #ec4899);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb, #db2777);
        }
      `}</style>
    </div>
  );
};

export default CommunicationHub;
