import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Megaphone, 
  Radio, 
  Lock, 
  Search, 
  ExternalLink, 
  ShieldAlert, 
  CheckCheck, 
  Flag,
  User,
  Clock,
  Send,
  Paperclip,
  Filter,
  Star,
  Archive,
  Trash2,
  MoreVertical,
  Tag,
  Shield,
  X,
  Menu
} from 'lucide-react';

const CommunicationHub = () => {
  const [activeTab, setActiveTab] = useState('messages');
  const [selectedThread, setSelectedThread] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileList, setShowMobileList] = useState(true);

  // Mock Data with enhanced features
  const messages = [
    {
      id: 1,
      sender: 'Mrs. Sarah Tan',
      role: 'Class Teacher (5-A)',
      time: '10:45 AM',
      date: 'Today',
      preview: 'Regarding the upcoming field trip to the Science Museum...',
      read: true,
      readReceipt: { time: '11:10 AM', date: 'Today' },
      urgent: false,
      followUp: false,
      tags: ['Field Trip', 'Permission'],
      history: [
        { sender: 'Mrs. Sarah Tan', text: 'Hello, I wanted to remind you about the permission slip for the Science Museum trip next Tuesday.', time: '10:45 AM', isMe: false, read: true },
        { sender: 'You', text: 'Hi, yes I will send it with Aravind tomorrow. Thanks for the reminder.', time: '11:00 AM', isMe: true, read: true },
        { sender: 'Mrs. Sarah Tan', text: 'Perfect. Also, please pack a lunch for him.', time: '11:05 AM', isMe: false, read: true }
      ]
    },
    {
      id: 2,
      sender: 'Mr. David Lee',
      role: 'Math Teacher',
      time: '2:30 PM',
      date: 'Yesterday',
      preview: 'Aravind needs to improve his algebra scores.',
      read: true,
      readReceipt: { time: '3:15 PM', date: 'Yesterday' },
      urgent: true,
      followUp: true,
      tags: ['Academic', 'Follow-up Required'],
      history: [
        { sender: 'Mr. David Lee', text: 'Aravind scored 60% in the last Algebra test. I suggest some extra practice.', time: '2:30 PM', isMe: false, read: true },
        { sender: 'You', text: 'Thank you for letting me know. What specific topics should we focus on?', time: '3:15 PM', isMe: true, read: true }
      ]
    },
    {
      id: 3,
      sender: 'Ms. Jennifer Wong',
      role: 'English Teacher',
      time: '9:15 AM',
      date: 'Today',
      preview: 'Great improvement in reading comprehension!',
      read: false,
      urgent: false,
      followUp: false,
      tags: ['Positive Feedback'],
      history: [
        { sender: 'Ms. Jennifer Wong', text: 'Great improvement in reading comprehension!', time: '9:15 AM', isMe: false, read: false }
      ]
    }
  ];

  const announcements = [
    {
      id: 1,
      sender: 'School Administration',
      title: 'Annual Sports Day Postponed',
      time: '2 hours ago',
      date: 'Today',
      content: 'Due to predicted heavy rainfall, the Annual Sports Day scheduled for tomorrow has been postponed to next Friday, January 27th. All participants will be notified via class teachers.',
      read: false,
      urgent: true,
      tags: ['Event Update']
    },
    {
      id: 2,
      sender: 'Principal Office',
      title: 'Parent-Teacher Meeting Schedule',
      time: '1 day ago',
      date: 'Yesterday',
      content: 'The PTM for Term 1 will be held on Saturday, 15th Jan. Slots are available for booking through the parent portal. Please book your slots by Wednesday.',
      read: true,
      tags: ['PTM', 'Important']
    },
    {
      id: 3,
      sender: 'Health & Safety Committee',
      title: 'COVID-19 Protocols Update',
      time: '3 days ago',
      date: 'Jan 16',
      content: 'Updated protocols: Masks are now optional for outdoor activities. Hand sanitization stations remain active.',
      read: true,
      tags: ['Health']
    }
  ];

  const broadcasts = [
    {
      id: 1,
      sender: 'Admin (System)',
      title: 'School Bus Route 4 Delay',
      time: '08:00 AM',
      date: 'Today',
      content: 'Bus Route 4 is delayed by 15 minutes due to traffic congestion on PIE. Expected arrival: 8:15 AM.',
      urgent: true,
      read: true,
      tags: ['Transport']
    },
    {
      id: 2,
      sender: 'Class 5-A Coordinator',
      title: 'Tomorrow\'s Class Photo Session',
      time: 'Yesterday',
      date: 'Jan 18',
      content: 'Class 5-A photo session is scheduled for 10 AM tomorrow. Please ensure students wear full uniform.',
      urgent: false,
      read: true,
      tags: ['Class Activity']
    }
  ];

  const counselorMsgs = [
    {
      id: 1,
      sender: 'Ms. Emily White',
      role: 'School Counselor',
      time: '10:00 AM',
      date: '3 days ago',
      preview: 'Follow up on Aravind\'s focus in class.',
      read: true,
      readReceipt: { time: '10:30 AM', date: '3 days ago' },
      confidential: true,
      followUp: false,
      tags: ['Confidential', 'Student Wellbeing'],
      history: [
        { sender: 'Ms. Emily White', text: 'Hi, I noticed Aravind was a bit distracted lately. Is everything okay at home?', time: '10:00 AM', isMe: false, read: true },
        { sender: 'You', text: 'Thank you for reaching out. He\'s been adjusting to a new routine. We\'ll monitor closely.', time: '10:30 AM', isMe: true, read: true }
      ]
    }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'messages': return messages;
      case 'announcements': return announcements;
      case 'broadcasts': return broadcasts;
      case 'counselor': return counselorMsgs;
      default: return messages;
    }
  };

  const filteredData = getCurrentData().filter(item => {
    if (!searchQuery) return true;
    return item.sender?.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.preview?.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.content?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const getTabIcon = (tab) => {
    switch (tab) {
      case 'counselor': return <Lock size={18} />;
      case 'broadcasts': return <Radio size={18} />;
      case 'announcements': return <Megaphone size={18} />;
      default: return <User size={18} />;
    }
  };

  const getTabGradient = (tab) => {
    switch (tab) {
      case 'counselor': return 'from-purple-500 to-indigo-600';
      case 'broadcasts': return 'from-orange-400 to-red-500';
      case 'announcements': return 'from-emerald-400 to-teal-600';
      default: return 'from-cyan-400 via-blue-400 to-pink-400';
    }
  };

  const handleSendMessage = () => {
    if (replyText.trim()) {
      console.log('Sending message:', replyText);
      setReplyText('');
    }
  };

  const renderContent = () => {
    return (
      <div className="space-y-3">
        {filteredData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 text-sm">No messages found</p>
          </div>
        ) : (
          filteredData.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedThread(item)}
              className={`group p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                selectedThread?.id === item.id 
                  ? 'bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-pink-50/50 border-blue-200 shadow-lg ring-2 ring-blue-100' 
                  : 'bg-white border-slate-100 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/10'
              }`}
            >
              {/* Decorative gradient orb */}
              <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity ${
                activeTab === 'counselor' ? 'bg-purple-400' :
                activeTab === 'broadcasts' ? 'bg-orange-400' :
                activeTab === 'announcements' ? 'bg-emerald-400' :
                'bg-cyan-400'
              }`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${getTabGradient(activeTab)}`}>
                      {getTabIcon(activeTab)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-800">{item.sender}</h4>
                        {!item.read && (
                          <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                        )}
                      </div>
                      {(item.role || item.title) && (
                        <p className="text-xs text-slate-500 font-medium mt-0.5">{item.role || item.title}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                      <Clock size={10} /> {item.time}
                    </span>
                    {item.readReceipt && (
                      <span className="text-cyan-500 flex items-center gap-1" title={`Read at ${item.readReceipt.time}`}>
                        <CheckCheck size={14} />
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-sm text-slate-600 line-clamp-2 pl-[60px] mb-3">
                  {item.preview || item.content}
                </p>

                <div className="pl-[60px] flex items-center gap-2 flex-wrap">
                  {item.urgent && (
                    <span className="bg-red-50 text-red-600 text-[10px] px-2.5 py-1 rounded-full font-bold border border-red-200 flex items-center gap-1 shadow-sm">
                      <ShieldAlert size={10} /> Urgent
                    </span>
                  )}
                  {item.confidential && (
                    <span className="bg-purple-50 text-purple-600 text-[10px] px-2.5 py-1 rounded-full font-bold border border-purple-200 flex items-center gap-1 shadow-sm">
                      <Lock size={10} /> Confidential
                    </span>
                  )}
                  {item.followUp && (
                    <span className="bg-amber-50 text-amber-600 text-[10px] px-2.5 py-1 rounded-full font-bold border border-amber-200 flex items-center gap-1 shadow-sm">
                      <Tag size={10} /> Follow-up
                    </span>
                  )}
                  {item.tags && item.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-600 text-[10px] px-2 py-1 rounded-full font-medium border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Page Header */}
      <div className="mb-4 md:mb-6 relative z-10">
        <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
          <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
            <MessageSquare size={24} className="md:hidden text-white" />
            <MessageSquare size={28} className="hidden md:block text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Communication Hub
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">Seamless communication between parents, teachers, and school</p>
          </div>
        </div>
        
        {/* PDPA Compliance Badge */}
        <div className="inline-flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl shadow-sm">
          <Shield size={14} className="md:w-4 md:h-4 text-emerald-600" />
          <span className="text-[10px] md:text-xs font-bold text-emerald-700">
            <span className="hidden sm:inline">PDPA Compliant - All messages securely archived and encrypted</span>
            <span className="sm:hidden">PDPA Compliant & Encrypted</span>
          </span>
        </div>
      </div>

      <div className="flex gap-3 md:gap-4 lg:gap-6 h-[calc(100vh-160px)] sm:h-[calc(100vh-180px)] md:h-[calc(100vh-240px)] relative z-10">
        {/* Left Panel - Navigation & List */}
        <div className={`${showMobileList ? 'flex' : 'hidden lg:flex'} w-full lg:w-[400px] xl:w-[420px] flex-col gap-3 md:gap-4 lg:gap-5 transition-all duration-300`}>
          {/* Tabs */}
          <div className="bg-white/90 backdrop-blur-2xl p-2 md:p-3 rounded-2xl md:rounded-3xl shadow-2xl border border-white/60 hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="grid grid-cols-2 gap-1.5 md:gap-2 p-1 md:p-1.5 bg-gradient-to-br from-slate-100 via-slate-50 to-white rounded-xl md:rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-pink-400/5 animate-shimmer"></div>
              <button 
                onClick={() => { setActiveTab('messages'); setSelectedThread(null); setShowMobileList(true); }}
                className={`relative flex flex-col items-center justify-center py-2.5 md:py-3.5 px-2 md:px-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 z-10 ${
                  activeTab === 'messages' 
                    ? 'bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 text-white shadow-xl shadow-blue-500/40 scale-[1.03] hover:scale-[1.05]' 
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:scale-[1.02]'
                }`}
              >
                <MessageSquare size={18} className="md:w-5 md:h-5 mb-1 md:mb-1.5" />
                <span className="hidden sm:inline">Messages</span>
                <span className="sm:hidden">Msgs</span>
              </button>
              <button 
                onClick={() => { setActiveTab('announcements'); setSelectedThread(null); setShowMobileList(true); }}
                className={`relative flex flex-col items-center justify-center py-2.5 md:py-3.5 px-2 md:px-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 z-10 ${
                  activeTab === 'announcements' 
                    ? 'bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-xl shadow-emerald-500/40 scale-[1.03] hover:scale-[1.05]' 
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:scale-[1.02]'
                }`}
              >
                <Megaphone size={18} className="md:w-5 md:h-5 mb-1 md:mb-1.5" />
                <span className="hidden sm:inline">Announcements</span>
                <span className="sm:hidden">News</span>
              </button>
              <button 
                onClick={() => { setActiveTab('broadcasts'); setSelectedThread(null); setShowMobileList(true); }}
                className={`relative flex flex-col items-center justify-center py-2.5 md:py-3.5 px-2 md:px-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 z-10 ${
                  activeTab === 'broadcasts' 
                    ? 'bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-xl shadow-orange-500/40 scale-[1.03] hover:scale-[1.05]' 
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:scale-[1.02]'
                }`}
              >
                <Radio size={18} className="md:w-5 md:h-5 mb-1 md:mb-1.5" />
                <span className="hidden sm:inline">Broadcasts</span>
                <span className="sm:hidden">Live</span>
              </button>
              <button 
                onClick={() => { setActiveTab('counselor'); setSelectedThread(null); setShowMobileList(true); }}
                className={`relative flex flex-col items-center justify-center py-2.5 md:py-3.5 px-2 md:px-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 z-10 ${
                  activeTab === 'counselor' 
                    ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-xl shadow-purple-500/40 scale-[1.03] hover:scale-[1.05]' 
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:scale-[1.02]'
                }`}
              >
                <Lock size={18} className="md:w-5 md:h-5 mb-1 md:mb-1.5" />
                <span className="hidden sm:inline">Counselor</span>
                <span className="sm:hidden">Private</span>
              </button>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search conversations..." 
                className="w-full pl-9 md:pl-11 pr-3 md:pr-4 py-2.5 md:py-3.5 bg-white/90 backdrop-blur-2xl border border-slate-200/60 rounded-xl md:rounded-2xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 shadow-lg hover:shadow-xl transition-all duration-300 font-medium placeholder:text-slate-400" 
              />
            </div>
            <button className="p-2.5 md:p-3.5 bg-white/90 backdrop-blur-2xl border border-slate-200/60 rounded-xl md:rounded-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 hover:border-cyan-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              <Filter size={16} className="md:w-[18px] md:h-[18px] text-slate-600" />
            </button>
          </div>

          {/* Scrollable List */}
          <div className="flex-1 overflow-y-auto pr-1 md:pr-2 custom-scrollbar">
            {renderContent()}
          </div>
        </div>

        {/* Right Panel - Detail View */}
        <div className={`${!showMobileList || selectedThread ? 'flex' : 'hidden lg:flex'} flex-1 bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/60 overflow-hidden flex-col hover:shadow-cyan-500/10 transition-all duration-300`}>
          {selectedThread ? (
            <>
              {/* Header */}
              <div className="p-3 md:p-4 lg:p-6 border-b border-slate-200/60 flex justify-between items-center bg-gradient-to-r from-white/95 to-cyan-50/40 backdrop-blur-2xl sticky top-0 z-20 shadow-sm">
                <div className="flex items-center gap-2 md:gap-3 lg:gap-4 flex-1">
                  {/* Mobile Back Button */}
                  <button 
                    onClick={() => { setSelectedThread(null); setShowMobileList(true); }}
                    className="lg:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors active:scale-95"
                  >
                    <X size={20} className="text-slate-600" />
                  </button>
                  <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl bg-gradient-to-br ${getTabGradient(activeTab)} animate-gradient`}>
                    {getTabIcon(activeTab)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base md:text-lg lg:text-xl font-bold text-slate-800 truncate">{selectedThread.sender}</h2>
                    <p className="text-xs md:text-sm text-slate-500 font-medium truncate">{selectedThread.role || selectedThread.title}</p>
                    {selectedThread.readReceipt && (
                      <p className="text-[10px] md:text-xs text-cyan-600 font-medium mt-0.5 md:mt-1 flex items-center gap-1">
                        <CheckCheck size={10} className="md:w-3 md:h-3" /> Read at {selectedThread.readReceipt.time}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-1.5 md:gap-2">
                  {(activeTab === 'messages' || activeTab === 'counselor') && (
                    <>
                      <button 
                        className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 bg-amber-50 text-amber-700 font-bold rounded-lg lg:rounded-xl text-xs hover:bg-amber-100 hover:shadow-lg transition-all duration-300 border border-amber-200 shadow-sm hover:scale-105 active:scale-95"
                        title="Mark for follow-up"
                      >
                        <Tag size={14} />
                        <span className="hidden lg:inline">Follow-up</span>
                      </button>
                      <button className="md:hidden p-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200 hover:bg-amber-100 transition-all active:scale-95">
                        <Tag size={16} />
                      </button>
                      <button className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 bg-red-50 text-red-600 font-bold rounded-lg lg:rounded-xl text-xs hover:bg-red-100 hover:shadow-lg transition-all duration-300 border border-red-200 shadow-sm hover:scale-105 active:scale-95">
                        <Flag size={14} />
                        <span className="hidden lg:inline">Escalate</span>
                      </button>
                      <button className="md:hidden p-2 bg-red-50 text-red-600 rounded-lg border border-red-200 hover:bg-red-100 transition-all active:scale-95">
                        <Flag size={16} />
                      </button>
                    </>
                  )}
                  <button className="p-2 md:p-2.5 text-slate-600 hover:bg-slate-100 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-110 active:scale-95">
                    <MoreVertical size={16} className="md:w-[18px] md:h-[18px]" />
                  </button>
                </div>
              </div>

              {/* Content / Chat History */}
              <div className="flex-1 overflow-y-auto p-3 md:p-5 lg:p-8 bg-gradient-to-br from-slate-50/50 to-cyan-50/20 custom-scrollbar">
                {selectedThread.history ? (
                  <div className="space-y-3 md:space-y-4 lg:space-y-6 max-w-4xl mx-auto">
                    {/* Date Divider */}
                    <div className="flex justify-center sticky top-0 z-10 py-2">
                      <span className="bg-white/90 backdrop-blur-md text-slate-600 text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full uppercase tracking-wide shadow-lg border border-slate-200/60">
                        {selectedThread.date}
                      </span>
                    </div>

                    {selectedThread.history.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                        <div className={`max-w-[85%] md:max-w-[80%] lg:max-w-[75%] p-3 md:p-4 lg:p-5 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl text-xs md:text-sm leading-relaxed relative transition-all duration-300 ${
                          msg.isMe 
                            ? 'bg-gradient-to-br from-cyan-500 via-blue-500 to-pink-500 text-white rounded-tr-sm hover:scale-[1.02]' 
                            : 'bg-white text-slate-700 border border-slate-200/60 rounded-tl-sm hover:scale-[1.02]'
                        }`}>
                          {!msg.isMe && (
                            <p className="text-[10px] md:text-xs font-bold mb-1.5 md:mb-2 opacity-70">{msg.sender}</p>
                          )}
                          <p className="leading-relaxed">{msg.text}</p>
                          <div className="flex items-center justify-between mt-2 md:mt-3 gap-2 md:gap-3">
                            <p className={`text-[9px] md:text-[10px] font-medium ${msg.isMe ? 'text-blue-100' : 'text-slate-400'}`}>
                              {msg.time}
                            </p>
                            {msg.read && msg.isMe && (
                              <CheckCheck size={12} className="md:w-[14px] md:h-[14px] text-blue-200" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-white/95 backdrop-blur-md p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200/60 hover:shadow-cyan-500/10 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${getTabGradient(activeTab)} animate-gradient flex-shrink-0`}>
                          {getTabIcon(activeTab)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">{selectedThread.title || 'Announcement'}</h3>
                          <p className="text-[10px] md:text-xs text-slate-500 font-medium">
                            {selectedThread.sender} • {selectedThread.time}
                          </p>
                        </div>
                        {selectedThread.urgent && (
                          <span className="bg-red-50 text-red-600 text-[10px] md:text-xs px-2.5 md:px-3 py-1 md:py-1.5 rounded-full font-bold border border-red-200 flex items-center gap-1 md:gap-1.5 shadow-sm flex-shrink-0">
                            <ShieldAlert size={10} className="md:w-3 md:h-3" /> <span className="hidden sm:inline">Urgent</span>
                          </span>
                        )}
                      </div>
                      <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                        {selectedThread.content}
                      </p>
                      {selectedThread.tags && (
                        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-200/60 flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] md:text-xs text-slate-500 font-medium">Tags:</span>
                          {selectedThread.tags.map((tag, idx) => (
                            <span key={idx} className="bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full font-bold border border-cyan-200 hover:scale-105 transition-transform duration-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Action Area */}
              {(activeTab === 'messages' || activeTab === 'counselor') && (
                <div className="p-3 md:p-4 lg:p-6 bg-white/95 backdrop-blur-2xl border-t border-slate-200/60 shadow-lg">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex gap-2 md:gap-3">
                      <button className="p-2 md:p-3 text-slate-600 hover:bg-slate-100 rounded-lg md:rounded-xl transition-all duration-300 border border-slate-200/60 hover:border-slate-300 hover:scale-110 active:scale-95 flex-shrink-0">
                        <Paperclip size={18} className="md:w-5 md:h-5" />
                      </button>
                      <input
                        type="text"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 px-3 md:px-5 py-2 md:py-3 bg-slate-50 border border-slate-200/60 rounded-xl md:rounded-2xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 font-medium hover:bg-white transition-all duration-300"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <button 
                        onClick={handleSendMessage}
                        className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white font-bold rounded-xl md:rounded-2xl text-xs md:text-sm shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5 md:gap-2 flex-shrink-0"
                      >
                        <Send size={16} className="md:w-[18px] md:h-[18px]" />
                        <span className="hidden sm:inline">Send</span>
                      </button>
                    </div>
                    <p className="text-[10px] md:text-xs text-slate-400 mt-2 md:mt-3 text-center font-medium">
                      <span className="inline-flex items-center gap-1">
                        <Shield size={10} className="md:w-3 md:h-3" />
                        <span className="hidden sm:inline">Messages are encrypted and PDPA compliant</span>
                        <span className="sm:hidden">PDPA Encrypted</span>
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 shadow-2xl animate-float">
                <MessageSquare size={32} className="md:w-10 md:h-10 text-cyan-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-1 md:mb-2">Select a conversation</h3>
              <p className="text-xs md:text-sm text-slate-500 font-medium max-w-xs">Choose a thread from the list to view details and respond</p>
              <button 
                onClick={() => setShowMobileList(true)}
                className="lg:hidden mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white font-bold rounded-xl text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Menu size={18} />
                View Messages
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
          background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.1), transparent);
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
