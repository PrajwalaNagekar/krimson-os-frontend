import React, { useState, useMemo } from 'react';
import { MessageCircle, User, Building2, BookOpen, Users } from 'lucide-react';
import { STUDENT_DATA } from '../../../data/studentData';
import CommunicationHeader from '../../../components/dashboard/student/CommunicationHub/CommunicationHeader';
import CategoryTabs from '../../../components/dashboard/student/CommunicationHub/CategoryTabs';
import MessageList from '../../../components/dashboard/student/CommunicationHub/MessageList';
import GroupsTab from '../../../components/dashboard/student/CommunicationHub/GroupsTab';
import InlineReplyView from '../../../components/dashboard/student/CommunicationHub/InlineReplyView';
import InlineGroupChatView from '../../../components/dashboard/student/CommunicationHub/InlineGroupChatView';

/**
 * Student Communication Hub - Screen 8
 * Read-only message viewer with categorized sections and groups
 * Features: Priority pinning, expiry date enforcement, modern premium UI, inline WhatsApp-style chat
 * Future: Replace static data with backend API calls
 */
const CommunicationHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [acknowledgedMessages, setAcknowledgedMessages] = useState(new Set());
  const [replyingTo, setReplyingTo] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const { communicationMessages, groups } = STUDENT_DATA;

  const categories = [
    { id: 'all', label: 'All Messages', icon: MessageCircle, color: 'cyan' },
    { id: 'school', label: 'From School', icon: Building2, color: 'blue' },
    { id: 'teacher', label: 'From Teacher', icon: BookOpen, color: 'purple' },
    { id: 'private', label: 'Private Messages', icon: User, color: 'pink' },
    { id: 'groups', label: 'Groups', icon: Users, color: 'green' }
  ];

  // Filter messages by expiry date and category
  const activeMessages = useMemo(() => {
    const now = new Date('2026-02-02T10:03:53+05:30'); // Current date from context
    
    // Filter out expired messages
    const nonExpiredMessages = communicationMessages.filter(msg => {
      if (!msg.expiryDate) return true;
      return new Date(msg.expiryDate) > now;
    });

    // Apply category filter
    const categoryFiltered = selectedCategory === 'all' 
      ? nonExpiredMessages 
      : selectedCategory === 'groups'
      ? [] // No messages when groups tab is selected
      : nonExpiredMessages.filter(msg => msg.category === selectedCategory);

    // Sort: Pinned first (by priority), then by timestamp
    return categoryFiltered.sort((a, b) => {
      // Pinned messages come first
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      
      // Among pinned messages, sort by priority
      if (a.isPinned && b.isPinned) {
        const priorityOrder = { urgent: 0, high: 1, normal: 2, low: 3 };
        const priorityDiff = (priorityOrder[a.priority] || 2) - (priorityOrder[b.priority] || 2);
        if (priorityDiff !== 0) return priorityDiff;
      }
      
      // Finally, sort by timestamp (newest first)
      return new Date(b.timestamp) - new Date(a.timestamp);
    });
  }, [communicationMessages, selectedCategory]);

  const unreadCount = activeMessages.filter(msg => msg.unread).length;
  const pinnedCount = activeMessages.filter(m => m.isPinned).length;
  const groupsUnreadCount = groups.reduce((sum, group) => sum + group.unreadCount, 0);

  const handleAcknowledge = (messageId) => {
    setAcknowledgedMessages(prev => new Set([...prev, messageId]));
    console.log('Message acknowledged:', messageId);
  };

  const handleOpenReply = (message) => {
    setReplyingTo(message);
  };

  const handleCloseReply = () => {
    setReplyingTo(null);
  };

  const handleSendReply = (replyText) => {
    // Future: API call to send reply
    console.log('Sending reply to:', replyingTo.id, 'Message:', replyText);
    
    // Show success feedback (in production, this would be a toast notification)
    alert(`Reply sent successfully!\n\nThis is a demo. In the actual app, your message would be sent to ${replyingTo.from}.`);
    
    handleCloseReply();
  };

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
  };

  const handleCloseGroupView = () => {
    setSelectedGroup(null);
  };

  const handleSendGroupMessage = (groupId, messageText) => {
    // Future: API call to send group message
    console.log('Sending message to group:', groupId, 'Message:', messageText);
    
    // In production, this would update the group messages via API
    // For now, we'll just log it
    alert(`Message sent to group!\n\nThis is a demo. Your message: "${messageText}"`);
  };

  // Determine what to show - if replying or viewing group, show inline chat, otherwise show message list/groups
  const showInlineReply = replyingTo !== null;
  const showInlineGroupChat = selectedGroup !== null;
  const showMainContent = !showInlineReply && !showInlineGroupChat;

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col gap-6">
      {/* Header - Only show when not in chat view */}
      {showMainContent && (
        <>
          <CommunicationHeader 
            unreadCount={selectedCategory === 'groups' ? groupsUnreadCount : unreadCount} 
            pinnedCount={pinnedCount} 
          />

          {/* Category Tabs */}
          <CategoryTabs 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
            activeMessages={activeMessages} 
            groupsUnreadCount={groupsUnreadCount}
          />
        </>
      )}

      {/* Content Area - Messages, Groups, or Inline Chat */}
      <div className="flex-1 overflow-hidden bg-white rounded-3xl shadow-xl border-2 border-slate-100">
        {showInlineReply ? (
          <InlineReplyView 
            replyingTo={replyingTo}
            onClose={handleCloseReply}
            onSend={handleSendReply}
          />
        ) : showInlineGroupChat ? (
          <InlineGroupChatView 
            group={selectedGroup}
            onClose={handleCloseGroupView}
            onSendMessage={handleSendGroupMessage}
          />
        ) : selectedCategory === 'groups' ? (
          <div className="h-full overflow-y-auto p-6">
            <GroupsTab groups={groups} onSelectGroup={handleSelectGroup} />
          </div>
        ) : (
          <div className="h-full overflow-hidden">
            <MessageList 
              activeMessages={activeMessages}
              expandedMessage={expandedMessage}
              onToggleExpand={setExpandedMessage}
              onAcknowledge={handleAcknowledge}
              acknowledgedMessages={acknowledgedMessages}
              onOpenReply={handleOpenReply}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunicationHub;
