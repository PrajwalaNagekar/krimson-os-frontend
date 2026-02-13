import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import CommunicationHeader from "../../../components/dashboard/teacher/CommunicationHub/CommunicationHeader";
import MessageStats from "../../../components/dashboard/teacher/CommunicationHub/MessageStats";
import TemplatesBanner from "../../../components/dashboard/teacher/CommunicationHub/TemplatesBanner";
import MessageFilters from "../../../components/dashboard/teacher/CommunicationHub/MessageFilters";
import MessageList from "../../../components/dashboard/teacher/CommunicationHub/MessageList";
import ComplianceNotice from "../../../components/dashboard/teacher/CommunicationHub/ComplianceNotice";
import MessageDetailModal from "../../../components/dashboard/teacher/CommunicationHub/MessageDetailModal";
import ComposeModal from "../../../components/dashboard/teacher/CommunicationHub/ComposeModal";

const CommunicationHub = () => {
  // Sample message data from centralized data
  const [messages, setMessages] = useState(
    TEACHER_DATA.communication?.messages || [],
  );
  const templates = TEACHER_DATA.communication?.templates || [];

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filterType, setFilterType] = useState("all"); // 'all', 'direct', 'broadcast', 'unread'
  const [filterTag, setFilterTag] = useState("all"); // 'all', 'Academic', 'Attendance', 'Behavior'
  const [searchQuery, setSearchQuery] = useState("");

  const [showCompose, setShowCompose] = useState(false);
  const [composePrefillData, setComposePrefillData] = useState(null);
  const [isViewingArchive, setIsViewingArchive] = useState(false);

  // Extract recipient lists from TEACHER_DATA
  const studentList = TEACHER_DATA.attendance?.map((s) => s.name).sort() || [];
  const parentList =
    TEACHER_DATA.attendance?.map((s) => `Parent of ${s.name}`).sort() || [];
  const classList = TEACHER_DATA.classes?.map((c) => c.grade).sort() || [];

  // Handle Send New Message
  const handleSendMessage = (composeData) => {
    const newMessage = {
      id: `M${Date.now()}`,
      type: composeData.recipientType === "broadcast" ? "broadcast" : "direct",
      from: "You",
      studentName:
        composeData.recipientType === "student" ||
          composeData.recipientType === "parent"
          ? composeData.recipientName
          : null,
      classRoom:
        composeData.recipientType === "class"
          ? composeData.recipientName
          : null,
      subject: composeData.subject,
      preview: composeData.content.substring(0, 50) + "...",
      content: composeData.content,
      timestamp: new Date().toISOString(),
      read: true,
      replied: false,
      tag: composeData.tag,
      archived: false,
      chatHistory: [],
      sent: true,
      recipients: composeData.recipientType === "broadcast" ? 45 : null, // Mock recipient count for broadcast
    };

    setMessages((prev) => [newMessage, ...prev]);
    setShowCompose(false);
    setComposePrefillData(null);
  };

  // Handle Use Template
  const handleUseTemplate = (template) => {
    setComposePrefillData({
      recipientType: template.category === "Attendance" ? "parent" : "student",
      recipientName: "",
      subject: template.name,
      tag: template.category,
      content: template.content,
    });
    setShowCompose(true);
    // Scroll to top to see modal if needed (though modal is fixed)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle Archive
  const handleArchive = (id) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, archived: true } : msg)),
    );
    setSelectedMessage(null);
  };

  // Handle Restore from Archive
  const handleRestore = (id) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, archived: false } : msg)),
    );
    setSelectedMessage(null);
  };

  // Handle Reply
  const handleSendReply = (id, replyText) => {
    const newReply = {
      role: "teacher",
      content: replyText,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id
          ? {
            ...msg,
            replied: true,
            read: true,
            chatHistory: [...(msg.chatHistory || []), newReply],
          }
          : msg,
      ),
    );

    // Update selected message to show the new reply without closing modal
    setSelectedMessage((prev) => ({
      ...prev,
      replied: true,
      read: true,
      chatHistory: [...(prev.chatHistory || []), newReply],
    }));
  };

  // Filter messages
  const filteredMessages = messages.filter((msg) => {
    // Filter based on whether we are viewing archive or inbox
    if (isViewingArchive && !msg.archived) return false;
    if (!isViewingArchive && msg.archived) return false;

    // Filter by type
    if (filterType !== "all") {
      if (filterType === "direct" && msg.type !== "direct") return false;
      if (filterType === "broadcast" && msg.type !== "broadcast") return false;
      if (filterType === "unread" && msg.read) return false;
    }

    // Filter by tag
    if (filterTag !== "all" && msg.tag !== filterTag) return false;

    // Filter by search
    if (searchQuery) {
      return (
        msg.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (msg.studentName &&
          msg.studentName.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return true;
  });

  // Calculate statistics
  const stats = {
    total: messages.filter((m) => !m.archived).length,
    unread: messages.filter((m) => !m.read && !m.archived).length,
    direct: messages.filter((m) => m.type === "direct" && !m.archived).length,
    broadcast: messages.filter((m) => m.type === "broadcast" && !m.archived)
      .length,
  };

  const archivedCount = messages.filter((m) => m.archived).length;

  // Mock API call
  useEffect(() => {
    console.log("Communication Hub loaded - Ready for API integration");
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <CommunicationHeader
        isViewingArchive={isViewingArchive}
        messageCount={stats.total}
        unreadCount={stats.unread}
        archivedCount={archivedCount}
        onCompose={() => {
          setComposePrefillData(null);
          setShowCompose(true);
        }}
        onExitArchive={() => setIsViewingArchive(false)}
      />

      {/* Quick Stats */}
      <MessageStats
        stats={stats}
        filterType={filterType}
        onFilterChange={setFilterType}
      />

      {/* Message Templates Banner */}
      <TemplatesBanner
        templates={templates}
        onUseTemplate={handleUseTemplate}
      />

      {/* Action Bar */}
      <MessageFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterTag={filterTag}
        setFilterTag={setFilterTag}
      />

      {/* Messages List */}
      <MessageList
        messages={filteredMessages}
        onSelectMessage={(msg) => {
          setSelectedMessage(msg);
          if (!msg.read) {
            setMessages((prev) =>
              prev.map((m) => (m.id === msg.id ? { ...m, read: true } : m)),
            );
          }
        }}
        searchQuery={searchQuery}
        filterType={filterType}
        filterTag={filterTag}
      />

      {/* PDPA Compliance Notice */}
      <ComplianceNotice
        isViewingArchive={isViewingArchive}
        onToggleArchive={() => setIsViewingArchive(!isViewingArchive)}
      />

      {/* Message Detail Modal */}
      {selectedMessage && (
        <MessageDetailModal
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
          onArchive={handleArchive}
          onRestore={handleRestore}
          onSendReply={handleSendReply}
        />
      )}

      {/* Compose Message Modal */}
      <ComposeModal
        isOpen={showCompose}
        onClose={() => setShowCompose(false)}
        onSend={handleSendMessage}
        prefilledData={composePrefillData}
        studentList={studentList}
        parentList={parentList}
        classList={classList}
      />
    </div>
  );
};

export default CommunicationHub;
