import React, { useState, useMemo } from 'react';
import { Bell, MessageCircle, User, Building2, BookOpen, CheckCircle, Clock, ChevronRight, ExternalLink, Eye, Pin, AlertCircle, X, Send, Paperclip, Smile } from 'lucide-react';
import { STUDENT_DATA } from '../../../data/studentData';

/**
 * Student Communication Hub - Screen 8
 * Read-only message viewer with categorized sections
 * Features: Priority pinning, expiry date enforcement, modern premium UI, reply functionality
 * Future: Replace static data with backend API calls
 */
const CommunicationHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [acknowledgedMessages, setAcknowledgedMessages] = useState(new Set());
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const { communicationMessages } = STUDENT_DATA;

  const categories = [
    { id: 'all', label: 'All Messages', icon: MessageCircle, color: 'cyan' },
    { id: 'school', label: 'From School', icon: Building2, color: 'blue' },
    { id: 'teacher', label: 'From Teacher', icon: BookOpen, color: 'purple' },
    { id: 'private', label: 'Private Messages', icon: User, color: 'pink' }
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

  const handleAcknowledge = (messageId) => {
    setAcknowledgedMessages(prev => new Set([...prev, messageId]));
    console.log('Message acknowledged:', messageId);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-gradient-to-r from-red-500 to-orange-500 text-white';
      case 'high': return 'bg-gradient-to-r from-orange-400 to-amber-400 text-white';
      case 'normal': return 'bg-gradient-to-r from-blue-400 to-cyan-400 text-white';
      case 'low': return 'bg-slate-100 text-slate-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const getPriorityBadge = (priority) => {
    const labels = {
      urgent: 'URGENT',
      high: 'Important',
      normal: 'Normal',
      low: 'Info'
    };
    return labels[priority] || 'Normal';
  };

  const getExpiryStatus = (expiryDate) => {
    if (!expiryDate) return null;
    const now = new Date('2026-02-02T10:03:53+05:30');
    const expiry = new Date(expiryDate);
    const diffInHours = (expiry - now) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return { text: 'Expires in < 24 hrs', color: 'text-red-600 bg-red-50' };
    } else if (diffInHours < 72) {
      return { text: 'Expires soon', color: 'text-orange-600 bg-orange-50' };
    }
    return null;
  };

  const handleOpenReply = (message) => {
    setReplyingTo(message);
    setReplyText('');
  };

  const handleCloseReply = () => {
    setReplyingTo(null);
    setReplyText('');
  };

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    
    // Future: API call to send reply
    console.log('Sending reply to:', replyingTo.id, 'Message:', replyText);
    
    // Show success feedback (in production, this would be a toast notification)
    alert(`Reply sent successfully!\n\nThis is a demo. In the actual app, your message would be sent to ${replyingTo.from}.`);
    
    handleCloseReply();
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col gap-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
              <MessageCircle size={32} />
              Communication Hub
            </h1>
            <p className="text-white/90 text-sm md:text-base">View announcements, notices, and messages</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">{unreadCount}</div>
                <div className="text-xs text-white/90 mt-1">Unread</div>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">{activeMessages.filter(m => m.isPinned).length}</div>
                <div className="text-xs text-white/90 mt-1">Pinned</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white rounded-3xl p-2 shadow-xl border-2 border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {categories.map(cat => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            const categoryCount = cat.id === 'all' 
              ? activeMessages.length 
              : activeMessages.filter(m => m.category === cat.id).length;
            
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white shadow-lg scale-105'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:scale-102'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-semibold hidden sm:inline">{cat.label}</span>
                <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">{categoryCount}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Messages Grid */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {activeMessages.length > 0 ? (
            activeMessages.map(message => {
              const Icon = { Building2, BookOpen, User }[message.icon] || MessageCircle;
              const isExpanded = expandedMessage === message.id;
              const isAcknowledged = acknowledgedMessages.has(message.id);
              const expiryStatus = getExpiryStatus(message.expiryDate);
              
              return (
                <div
                  key={message.id}
                  className={`bg-white rounded-2xl p-5 shadow-md border-2 transition-all duration-300 hover:shadow-2xl relative ${
                    message.unread 
                      ? 'border-cyan-200 bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-pink-50/50' 
                      : 'border-slate-100 hover:border-slate-200'
                  } ${isExpanded ? 'lg:col-span-2 shadow-2xl ring-2 ring-cyan-200' : ''} ${
                    message.isPinned ? 'ring-2 ring-blue-300 shadow-lg' : ''
                  }`}
                >
                  {/* Pinned Badge */}
                  {message.isPinned && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-bold">
                        <Pin size={12} className="fill-current" />
                        <span>PINNED</span>
                      </div>
                    </div>
                  )}

                  {/* Message Header */}
                  <div className="flex items-start gap-4 mb-3">
                    {/* Icon/Avatar */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      message.category === 'school' ? 'bg-gradient-to-br from-cyan-400 to-blue-400' :
                      message.category === 'teacher' ? 'bg-gradient-to-br from-blue-400 to-purple-400' :
                      'bg-gradient-to-br from-purple-400 to-pink-400'
                    } text-white shadow-lg`}>
                      {message.avatar ? (
                        <img src={message.avatar} alt={message.from} className="w-full h-full rounded-xl object-cover" />
                      ) : (
                        <Icon size={24} />
                      )}
                    </div>

                    {/* Message Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-bold text-slate-800 text-base">{message.from}</h3>
                        {message.unread && (
                          <span className="flex-shrink-0 w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse shadow-lg"></span>
                        )}
                      </div>
                      
                      {message.subject && (
                        <p className="text-sm font-semibold text-slate-700 mb-2">{message.subject}</p>
                      )}
                      
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {message.subjectCode && (
                          <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-lg">
                            {message.subjectCode}
                          </span>
                        )}
                        
                        {/* Priority Badge */}
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-lg shadow-sm ${getPriorityColor(message.priority)}`}>
                          {getPriorityBadge(message.priority)}
                        </span>

                        {/* Expiry Warning */}
                        {expiryStatus && (
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-lg flex items-center gap-1 ${expiryStatus.color}`}>
                            <Clock size={10} />
                            {expiryStatus.text}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Clock size={12} />
                        <span>{message.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className={`text-sm text-slate-600 leading-relaxed mb-3 ${!isExpanded && 'line-clamp-2'}`}>
                    {message.content}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => {
                        const newExpandedState = isExpanded ? null : message.id;
                        setExpandedMessage(newExpandedState);
                        if (!isExpanded && message.requiresAck && !isAcknowledged) {
                          handleAcknowledge(message.id);
                        }
                      }}
                      className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-2.5 rounded-xl hover:shadow-lg transition-all hover:scale-105"
                    >
                      <Eye size={14} />
                      {isExpanded ? 'Show Less' : 'View Message'}
                    </button>

                    <button
                      onClick={() => handleOpenReply(message)}
                      className="flex-1 flex flex-col items-center justify-center gap-0.5 text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1.5 rounded-xl hover:shadow-lg transition-all hover:scale-105"
                    >
                       <div className="flex items-center gap-2">
                        <MessageCircle size={14} />
                        <span>Reply</span>
                      </div>
                    </button>

                    {isAcknowledged && (
                      <div className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold text-green-600 bg-green-50 px-2 py-2 rounded-xl border-2 border-green-200 shadow-sm">
                        <CheckCircle size={14} />
                        Acknowledged
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-400">
              <MessageCircle size={64} className="opacity-20 mb-4" />
              <p className="text-lg font-medium">No active messages in this category</p>
              <p className="text-sm mt-2">Expired messages are automatically hidden</p>
            </div>
          )}
        </div>
      </div>

      {/* Reply Modal */}
      {replyingTo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-slideUp">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-6 text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-600 opacity-20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageCircle size={28} />
                  <div>
                    <h2 className="text-2xl font-bold">Reply to Message</h2>
                    <p className="text-white/80 text-sm mt-1">Compose your response</p>
                  </div>
                </div>
                <button
                  onClick={handleCloseReply}
                  className="p-2 hover:bg-white/20 rounded-xl transition-all"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Original Message Preview */}
              <div className="mb-6 p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border-2 border-slate-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                    replyingTo.category === 'school' ? 'bg-gradient-to-br from-cyan-400 to-blue-400' :
                    replyingTo.category === 'teacher' ? 'bg-gradient-to-br from-blue-400 to-purple-400' :
                    'bg-gradient-to-br from-purple-400 to-pink-400'
                  } text-white shadow-md`}>
                    {replyingTo.icon === 'Building2' ? <Building2 size={20} /> :
                     replyingTo.icon === 'BookOpen' ? <BookOpen size={20} /> :
                     <User size={20} />}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-800 text-sm">{replyingTo.from}</p>
                    {replyingTo.subject && (
                      <p className="text-sm text-slate-600 font-semibold">{replyingTo.subject}</p>
                    )}
                    <p className="text-xs text-slate-500 mt-1">{replyingTo.time}</p>
                  </div>
                </div>
                <div className="text-sm text-slate-600 leading-relaxed pl-13">
                  {replyingTo.content.length > 150 
                    ? `${replyingTo.content.substring(0, 150)}...` 
                    : replyingTo.content}
                </div>
              </div>

              {/* Reply Text Area */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Message
                </label>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full h-40 px-4 py-3 border-2 border-slate-200 rounded-2xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none resize-none text-slate-700 placeholder-slate-400 transition-all"
                  autoFocus
                />
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-slate-500">
                    {replyText.length} characters
                  </p>
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                      <Paperclip size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                      <Smile size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Info Note */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-3 mb-4">
                <p className="text-xs text-blue-700 flex items-start gap-2">
                  <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                  <span>This is a demonstration. In the actual app, your reply will be sent through the messaging system.</span>
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t-2 border-slate-100 flex gap-3">
              <button
                onClick={handleCloseReply}
                className="flex-1 px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSendReply}
                disabled={!replyText.trim()}
                className={`flex-1 px-6 py-3 font-semibold rounded-xl flex items-center justify-center gap-2 transition-all ${
                  replyText.trim()
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Send size={18} />
                Send Reply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunicationHub;

