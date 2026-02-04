import React, { useState, useEffect } from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import {
  Send, MessageSquare, Users, Filter, Search, Clock,
  CheckCircle, AlertCircle, Tag, Copy, Edit, Trash2,
  X, ChevronDown, Bell, Archive, Shield, FileText,
  Radio, User, MessageCircle, Sparkles, Eye, Share2
} from 'lucide-react';

const CommunicationHub = () => {
  // Sample message data
  const [messages, setMessages] = useState([
    {
      id: 'M1',
      type: 'direct',
      from: 'Parent of Aarav Singh',
      studentName: 'Aarav Singh',
      subject: 'Query about assignment submission',
      preview: 'Could you please clarify the deadline for...',
      content: 'Could you please clarify the deadline for the Physics lab report? My son mentioned it\'s due tomorrow but I wanted to confirm.',
      timestamp: '2026-01-19T10:30:00',
      read: false,
      replied: false,
      tag: 'Academic',
      archived: false,
      chatHistory: []
    },
    {
      id: 'M2',
      type: 'direct',
      from: 'Parent of Bianca Liu',
      studentName: 'Bianca Liu',
      subject: 'Attendance concern',
      preview: 'I noticed Bianca was marked absent yesterday...',
      content: 'I noticed Bianca was marked absent yesterday, but she was at school. Could this be a mistake?',
      timestamp: '2026-01-19T09:15:00',
      read: true,
      replied: true,
      tag: 'Attendance',
      archived: false,
      chatHistory: [
        { role: 'teacher', content: 'Thank you for bringing this to my attention. I will check the attendance logs and get back to you shortly.', timestamp: '2026-01-19T09:45:00' }
      ]
    },
    {
      id: 'M3',
      type: 'direct',
      from: 'Parent of Charlie Tan',
      studentName: 'Charlie Tan',
      subject: 'Excellent progress!',
      preview: 'Thank you for your dedication...',
      content: 'Thank you for your dedication in teaching. Charlie has shown remarkable improvement in Physics this term.',
      timestamp: '2026-01-18T16:45:00',
      read: true,
      replied: true,
      tag: 'Behavior',
      archived: false,
      chatHistory: [
        { role: 'teacher', content: 'It is a pleasure to teach Charlie. He has been very focused lately!', timestamp: '2026-01-18T17:30:00' }
      ]
    },
    {
      id: 'M4',
      type: 'broadcast',
      from: 'You',
      subject: 'Homework Reminder - Unit Test',
      preview: 'Dear Parents, This is a reminder...',
      content: 'Dear Parents, This is a reminder that Unit Test 2 is scheduled for Monday, January 22nd. Please ensure your child revises chapters 3-5.',
      timestamp: '2026-01-18T14:00:00',
      read: true,
      replied: false,
      tag: 'Academic',
      archived: false,
      recipients: 32,
      sent: true,
      chatHistory: []
    },
  ]);

  // Message templates
  const templates = [
    {
      id: 'T1',
      name: 'Homework Reminder',
      category: 'Academic',
      content: 'Dear Parent,\n\nThis is a reminder about the upcoming homework assignment:\n\n[Assignment Details]\n\nDue Date: [Date]\n\nThank you,\n[Teacher Name]'
    },
    {
      id: 'T2',
      name: 'Attendance Alert',
      category: 'Attendance',
      content: 'Dear Parent,\n\nWe noticed that [Student Name] was absent on [Date].\n\nIf this absence was unplanned, please provide a reason for our records.\n\nThank you,\n[Teacher Name]'
    },
    {
      id: 'T3',
      name: 'Positive Behavior',
      category: 'Behavior',
      content: 'Dear Parent,\n\nI wanted to share some positive news about [Student Name].\n\n[Positive behavior/achievement]\n\nKeep up the great work!\n\nBest regards,\n[Teacher Name]'
    },
    {
      id: 'T4',
      name: 'Parent-Teacher Meeting',
      category: 'Academic',
      content: 'Dear Parent,\n\nI would like to schedule a meeting to discuss [Student Name]\'s academic progress.\n\nPlease let me know your availability.\n\nThank you,\n[Teacher Name]'
    },
    {
      id: 'T5',
      name: 'Low Performance Alert',
      category: 'Academic',
      content: 'Dear Parent,\n\nI wanted to bring to your attention that [Student Name] has been struggling with [Subject/Topic].\n\nI recommend additional practice and would be happy to provide extra support.\n\nBest regards,\n[Teacher Name]'
    },
  ];

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filterType, setFilterType] = useState('all'); // 'all', 'direct', 'broadcast', 'unread'
  const [filterTag, setFilterTag] = useState('all'); // 'all', 'Academic', 'Attendance', 'Behavior'
  const [searchQuery, setSearchQuery] = useState('');
  const [showTemplates, setShowTemplates] = useState(false);
  const [showCompose, setShowCompose] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [isViewingArchive, setIsViewingArchive] = useState(false);

  // New Message State
  const [composeData, setComposeData] = useState({
    recipientType: 'student', // student, class, parent, broadcast
    recipientName: '',
    subject: '',
    tag: 'Academic',
    content: ''
  });

  // Extract recipient lists from TEACHER_DATA
  const studentList = TEACHER_DATA.attendance.map(s => s.name).sort();
  const parentList = TEACHER_DATA.attendance.map(s => `Parent of ${s.name}`).sort();
  const classList = TEACHER_DATA.classes.map(c => c.grade).sort();

  // Handle Send New Message
  const handleSendMessage = () => {
    if (!composeData.subject.trim() || !composeData.content.trim() || !composeData.recipientName.trim()) return;

    const newMessage = {
      id: `M${Date.now()}`,
      type: composeData.recipientType === 'broadcast' ? 'broadcast' : 'direct',
      from: 'You',
      studentName: composeData.recipientType === 'student' || composeData.recipientType === 'parent' ? composeData.recipientName : null,
      classRoom: composeData.recipientType === 'class' ? composeData.recipientName : null,
      subject: composeData.subject,
      preview: composeData.content.substring(0, 50) + '...',
      content: composeData.content,
      timestamp: new Date().toISOString(),
      read: true,
      replied: false,
      tag: composeData.tag,
      archived: false,
      chatHistory: [],
      sent: true,
      recipients: composeData.recipientType === 'broadcast' ? 45 : null // Mock recipient count for broadcast
    };

    setMessages(prev => [newMessage, ...prev]);
    setShowCompose(false);
    setComposeData({
      recipientType: 'student',
      recipientName: '',
      subject: '',
      tag: 'Academic',
      content: ''
    });
  };

  // Handle Use Template
  const handleUseTemplate = (template) => {
    setComposeData({
      recipientType: template.category === 'Attendance' ? 'parent' : 'student',
      recipientName: '',
      subject: template.name,
      tag: template.category,
      content: template.content
    });
    setShowCompose(true);
    setShowTemplates(false);
    // Scroll to top to see modal if needed
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Archive
  const handleArchive = (id) => {
    setMessages(prev => prev.map(msg =>
      msg.id === id ? { ...msg, archived: true } : msg
    ));
    setSelectedMessage(null);
  };

  // Handle Restore from Archive
  const handleRestore = (id) => {
    setMessages(prev => prev.map(msg =>
      msg.id === id ? { ...msg, archived: false } : msg
    ));
    setSelectedMessage(null);
  };

  // Handle Reply
  const handleSendReply = (id) => {
    if (!replyText.trim()) return;

    const newReply = {
      role: 'teacher',
      content: replyText,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => prev.map(msg =>
      msg.id === id ? {
        ...msg,
        replied: true,
        read: true,
        chatHistory: [...(msg.chatHistory || []), newReply]
      } : msg
    ));

    // Update selected message to show the new reply without closing modal
    setSelectedMessage(prev => ({
      ...prev,
      replied: true,
      read: true,
      chatHistory: [...(prev.chatHistory || []), newReply]
    }));

    setIsReplying(false);
    setReplyText('');
  };

  // Filter messages
  const filteredMessages = messages.filter(msg => {
    // Filter based on whether we are viewing archive or inbox
    if (isViewingArchive && !msg.archived) return false;
    if (!isViewingArchive && msg.archived) return false;

    // Filter by type
    if (filterType !== 'all') {
      if (filterType === 'direct' && msg.type !== 'direct') return false;
      if (filterType === 'broadcast' && msg.type !== 'broadcast') return false;
      if (filterType === 'unread' && msg.read) return false;
    }

    // Filter by tag
    if (filterTag !== 'all' && msg.tag !== filterTag) return false;

    // Filter by search
    if (searchQuery) {
      return msg.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (msg.studentName && msg.studentName.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    return true;
  });

  // Calculate statistics
  const stats = {
    total: messages.filter(m => !m.archived).length,
    unread: messages.filter(m => !m.read && !m.archived).length,
    direct: messages.filter(m => m.type === 'direct' && !m.archived).length,
    broadcast: messages.filter(m => m.type === 'broadcast' && !m.archived).length,
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/messages')
    //   .then(res => res.json())
    //   .then(data => setMessages(data));
    console.log('Communication Hub loaded - Ready for API integration');
  }, []);

  // Get tag color
  const getTagColor = (tag) => {
    switch (tag) {
      case 'Academic':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Attendance':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Behavior':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  // Format timestamp
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    if (hours < 48) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
            Communication & Messaging Hub
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                {isViewingArchive ? 'Message Archive' : 'Message Center'}
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base">
                {isViewingArchive
                  ? `${messages.filter(m => m.archived).length} archived messages`
                  : `${stats.total} messages • ${stats.unread} unread`
                }
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowCompose(true)}
                className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95"
              >
                <Send size={20} />
                <div className="text-left">
                  <div>Compose</div>
                </div>
              </button>
              {isViewingArchive && (
                <button
                  onClick={() => setIsViewingArchive(false)}
                  className="px-6 py-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold hover:bg-white/30 transition-all flex items-center gap-2"
                >
                  <X size={20} />
                  <span>Exit Archive</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer ${filterType === 'all'
            ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-blue-500 shadow-lg'
            : 'bg-white border-blue-200 hover:border-blue-300 hover:shadow-lg hover:scale-105 transition-all duration-300'
            }`}
          onClick={() => setFilterType('all')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${filterType === 'all' ? 'text-white/80' : 'text-slate-400'}`}>
              All Messages
            </p>
            <MessageSquare className={filterType === 'all' ? 'text-white opacity-60' : 'text-blue-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${filterType === 'all' ? 'text-white' : 'text-slate-800'}`}>
            {stats.total}
          </h3>
        </div>

        <div
          className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer ${filterType === 'unread'
            ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white border-orange-500 shadow-lg'
            : 'bg-white border-orange-200 hover:border-orange-300 hover:shadow-lg hover:scale-105 transition-all duration-300'
            }`}
          onClick={() => setFilterType('unread')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${filterType === 'unread' ? 'text-white/80' : 'text-slate-400'}`}>
              Unread
            </p>
            <Bell className={filterType === 'unread' ? 'text-white opacity-60' : 'text-orange-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${filterType === 'unread' ? 'text-white' : 'text-orange-600'}`}>
            {stats.unread}
          </h3>
        </div>

        <div
          className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer ${filterType === 'direct'
            ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white border-purple-500 shadow-lg'
            : 'bg-white border-purple-200 hover:border-purple-300 hover:shadow-lg hover:scale-105 transition-all duration-300'
            }`}
          onClick={() => setFilterType('direct')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${filterType === 'direct' ? 'text-white/80' : 'text-slate-400'}`}>
              Direct
            </p>
            <User className={filterType === 'direct' ? 'text-white opacity-60' : 'text-purple-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${filterType === 'direct' ? 'text-white' : 'text-purple-600'}`}>
            {stats.direct}
          </h3>

        </div>

        <div
          className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer ${filterType === 'broadcast'
            ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white border-green-500 shadow-lg'
            : 'bg-white border-green-200 hover:border-green-300 hover:shadow-lg hover:scale-105 transition-all duration-300'
            }`}
          onClick={() => setFilterType('broadcast')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${filterType === 'broadcast' ? 'text-white/80' : 'text-slate-400'}`}>
              Broadcast
            </p>
            <Radio className={filterType === 'broadcast' ? 'text-white opacity-60' : 'text-green-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${filterType === 'broadcast' ? 'text-white' : 'text-green-600'}`}>
            {stats.broadcast}
          </h3>

        </div>
      </div>

      {/* Message Templates Banner */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
            <Sparkles size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">Quick Message Templates</h3>
              <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-bold">{templates.length} TEMPLATES</span>
            </div>
            <p className="text-sm opacity-90 mb-3">
              Save time with pre-written templates for recurring messages like homework reminders, attendance alerts, and parent meetings.
            </p>
          </div>
          <button
            onClick={() => setShowTemplates(!showTemplates)}
            className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            <ChevronDown size={18} className={`transition-transform ${showTemplates ? 'rotate-180' : ''}`} />
            <span>{showTemplates ? 'Hide' : 'Show'} Templates</span>
          </button>
        </div>

        {/* Templates Grid */}
        {showTemplates && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map(template => (
              <div key={template.id} className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 hover:bg-white/30 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-white mb-1">{template.name}</h4>
                    <span className="text-xs text-white/80 px-2 py-1 bg-white/20 rounded-lg">
                      {template.category}
                    </span>
                  </div>
                  <Copy size={16} className="text-white/60 cursor-pointer hover:text-white" />
                </div>
                <p className="text-xs text-white/80 line-clamp-3">{template.content}</p>
                <button
                  onClick={() => handleUseTemplate(template)}
                  className="w-full mt-3 px-3 py-2 bg-white/30 text-white rounded-lg text-xs font-bold hover:bg-white/40 transition-colors"
                >
                  Use Template
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search messages by sender, subject, or student..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>

          {/* Tag Filter */}
          <div className="flex gap-2">
            {['all', 'Academic', 'Attendance', 'Behavior'].map(tag => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${filterTag === tag
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {tag === 'all' ? 'All Tags' : tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMessages.map((message) => (
          <div
            key={message.id}
            className={`bg-white rounded-3xl p-6 shadow-md border-2 transition-all duration-300 cursor-pointer ${!message.read
              ? 'border-blue-400 bg-blue-50/30'
              : 'border-transparent hover:border-blue-200'
              } hover:shadow-xl`}
            onClick={() => {
              setSelectedMessage(message);
              // Mark as read when clicking if not already read
              if (!message.read) {
                setMessages(prev => prev.map(m =>
                  m.id === message.id ? { ...m, read: true } : m
                ));
              }
            }}
          >
            {/* Message Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-2 rounded-xl ${message.type === 'direct' ? 'bg-purple-100' : 'bg-green-100'}`}>
                    {message.type === 'direct' ? (
                      <MessageCircle size={18} className="text-purple-600" />
                    ) : (
                      <Radio size={18} className="text-green-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 text-sm">{message.from}</h4>
                    {message.studentName && (
                      <p className="text-xs text-slate-500">Student: {message.studentName}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                {!message.read && (
                  <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                )}
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock size={12} />
                  {formatTime(message.timestamp)}
                </span>
              </div>
            </div>

            {/* Subject */}
            <h3 className="font-bold text-slate-800 mb-2">{message.subject}</h3>

            {/* Preview */}
            <p className="text-sm text-slate-600 line-clamp-2 mb-4">{message.preview}</p>

            {/* Tags and Status */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-lg text-xs font-bold border ${getTagColor(message.tag)}`}>
                  <Tag size={12} className="inline mr-1" />
                  {message.tag}
                </span>
                {message.type === 'broadcast' && message.recipients && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold">
                    <Users size={12} className="inline mr-1" />
                    {message.recipients} recipients
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {message.replied && (
                  <CheckCircle size={16} className="text-green-500" />
                )}
                <button className="text-blue-600 hover:text-blue-700 font-bold text-xs">
                  View →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredMessages.length === 0 && (
        <div className="bg-white p-12 rounded-3xl shadow-md text-center">
          <MessageSquare className="mx-auto text-slate-300 mb-3" size={48} />
          <h3 className="text-lg font-bold text-slate-800 mb-2">No Messages Found</h3>
          <p className="text-sm text-slate-500">
            {searchQuery || filterType !== 'all' || filterTag !== 'all'
              ? 'Try adjusting your filters'
              : 'No messages yet'}
          </p>
        </div>
      )}

      {/* PDPA Compliance Notice */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-3xl border-2 border-blue-100">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-xl">
            <Shield size={24} className="text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              PDPA Compliance & Data Security
            </h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>All message logs are automatically archived for audit purposes</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Communication data is encrypted and stored securely</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Messages are retained according to institutional policies</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Firebase Notifications integrated for real-time delivery</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsViewingArchive(!isViewingArchive)}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            {isViewingArchive ? <MessageSquare size={14} /> : <Archive size={14} />}
            {isViewingArchive ? 'Return to Inbox' : 'View Archive'}
          </button>
        </div>
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getTagColor(selectedMessage.tag)}`}>
                    <Tag size={12} className="inline mr-1" />
                    {selectedMessage.tag}
                  </span>
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${selectedMessage.type === 'direct' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>
                    {selectedMessage.type === 'direct' ? 'Direct Message' : 'Broadcast'}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{selectedMessage.subject}</h2>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="font-bold">{selectedMessage.from}</span>
                  <span>•</span>
                  <span>{formatTime(selectedMessage.timestamp)}</span>
                  {selectedMessage.studentName && (
                    <>
                      <span>•</span>
                      <span>Re: {selectedMessage.studentName}</span>
                    </>
                  )}
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedMessage(null);
                  setIsReplying(false);
                  setReplyText('');
                }}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Message Content */}
            <div className="mb-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {selectedMessage.content}
                </p>
              </div>

              {/* Chat History / Replies */}
              {(selectedMessage.chatHistory && selectedMessage.chatHistory.length > 0) && (
                <div className="mt-4 space-y-4">
                  {selectedMessage.chatHistory.map((chat, idx) => (
                    <div key={idx} className={`flex flex-col ${chat.role === 'teacher' ? 'items-end' : 'items-start'}`}>
                      <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${chat.role === 'teacher'
                        ? 'bg-blue-500 text-white rounded-tr-none'
                        : 'bg-slate-100 text-slate-700 rounded-tl-none'
                        }`}>
                        <p>{chat.content}</p>
                        <p className={`text-[10px] mt-1 opacity-70 text-right`}>
                          {formatTime(chat.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            {!isReplying ? (
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setIsReplying(true)}
                  className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  <div className="text-left">
                    <div>Reply</div>
                  </div>
                </button>
                <button
                  onClick={() => selectedMessage.archived ? handleRestore(selectedMessage.id) : handleArchive(selectedMessage.id)}
                  className="px-6 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <Archive size={18} />
                  <div className="text-left">
                    <div>{selectedMessage.archived ? 'Restore' : 'Archive'}</div>
                  </div>
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply here..."
                  className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:border-blue-400 focus:outline-none min-h-[120px] text-sm font-medium"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setIsReplying(false);
                      setReplyText('');
                    }}
                    className="flex-1 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSendReply(selectedMessage.id)}
                    className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    <span>Send Reply</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Compose Message Modal */}
      {showCompose && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800">Compose New Message</h2>
              <button
                onClick={() => setShowCompose(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Recipient Type */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Send To</label>
                  <select
                    value={composeData.recipientType}
                    onChange={(e) => setComposeData({ ...composeData, recipientType: e.target.value, recipientName: '' })}
                    className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none bg-white text-sm"
                  >
                    <option value="student">Student</option>
                    <option value="parent">Parent</option>
                    <option value="class">Whole Class</option>
                    <option value="broadcast">Broadcast (All)</option>
                  </select>
                </div>

                {/* Category/Tag */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Category</label>
                  <select
                    value={composeData.tag}
                    onChange={(e) => setComposeData({ ...composeData, tag: e.target.value })}
                    className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none bg-white text-sm"
                  >
                    <option value="Academic">Academic</option>
                    <option value="Attendance">Attendance</option>
                    <option value="Behavior">Behavior</option>
                    <option value="General">General</option>
                  </select>
                </div>
              </div>

              {/* Recipient Selection (if not broadcast) */}
              {composeData.recipientType !== 'broadcast' && (
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Select {composeData.recipientType === 'student' ? 'Student' :
                      composeData.recipientType === 'parent' ? 'Parent' : 'Class'}
                  </label>
                  <select
                    value={composeData.recipientName}
                    onChange={(e) => setComposeData({ ...composeData, recipientName: e.target.value })}
                    className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none bg-white text-sm"
                  >
                    <option value="">Select a {composeData.recipientType}...</option>
                    {composeData.recipientType === 'student' && studentList.map(name => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                    {composeData.recipientType === 'parent' && parentList.map(name => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                    {composeData.recipientType === 'class' && classList.map(name => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject (Heading)</label>
                <input
                  type="text"
                  placeholder="What is this message about?"
                  value={composeData.subject}
                  onChange={(e) => setComposeData({ ...composeData, subject: e.target.value })}
                  className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none text-sm"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message Content</label>
                <textarea
                  placeholder="Type your message here..."
                  value={composeData.content}
                  onChange={(e) => setComposeData({ ...composeData, content: e.target.value })}
                  className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:border-blue-400 focus:outline-none min-h-[150px] text-sm font-medium"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setShowCompose(false)}
                  className="flex-1 px-6 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
                >
                  Discard
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!composeData.subject || !composeData.content || (composeData.recipientType !== 'broadcast' && !composeData.recipientName)}
                  className="flex-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunicationHub;
