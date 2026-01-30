import React, { useState } from 'react';
import { Bell, MessageCircle, User, Building2, BookOpen, CheckCircle, Clock, ChevronRight, ExternalLink, Eye } from 'lucide-react';
import { STUDENT_DATA } from '../../../data/studentData';

/**
 * Student Communication Hub - Screen 8
 * Read-only message viewer with categorized sections
 * Future: Replace static data with backend API calls
 */
const CommunicationHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [acknowledgedMessages, setAcknowledgedMessages] = useState(new Set());
  const { communicationMessages } = STUDENT_DATA;

  // Static mock data - will be replaced with API calls in future


  const categories = [
    { id: 'all', label: 'All Messages', icon: MessageCircle, color: 'cyan' },
    { id: 'school', label: 'From School', icon: Building2, color: 'blue' },
    { id: 'teacher', label: 'From Teacher', icon: BookOpen, color: 'purple' },
    { id: 'private', label: 'Private Messages', icon: User, color: 'pink' }
  ];

  const filteredMessages = selectedCategory === 'all' 
    ? communicationMessages 
    : communicationMessages.filter(msg => msg.category === selectedCategory);

  const unreadCount = communicationMessages.filter(msg => msg.unread).length;

  const handleAcknowledge = (messageId) => {
    setAcknowledgedMessages(prev => new Set([...prev, messageId]));
    // Future: API call to backend
    console.log('Message acknowledged:', messageId);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'urgent': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'normal': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'low': return 'bg-slate-100 text-slate-600 border-slate-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
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
          <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold">{unreadCount}</div>
              <div className="text-xs text-white/90 mt-1">Unread Messages</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white rounded-3xl p-2 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {categories.map(cat => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            const categoryCount = cat.id === 'all' 
              ? communicationMessages.length 
              : communicationMessages.filter(m => m.category === cat.id).length;
            
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
          {filteredMessages.length > 0 ? (
            filteredMessages.map(message => {
              const Icon = { Building2, BookOpen, User }[message.icon] || MessageCircle;
              const isExpanded = expandedMessage === message.id;
              const isAcknowledged = acknowledgedMessages.has(message.id);
              
              return (
                <div
                  key={message.id}
                  className={`bg-white rounded-2xl p-5 shadow-sm border-2 transition-all duration-300 hover:shadow-xl ${
                    message.unread 
                      ? 'border-cyan-200 bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-pink-50/50' 
                      : 'border-slate-100 hover:border-slate-200'
                  } ${isExpanded ? 'lg:col-span-2 shadow-xl' : ''}`}
                >
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
                        <p className="text-sm font-semibold text-slate-700 mb-1">{message.subject}</p>
                      )}
                      
                      {message.subjectCode && (
                        <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-lg mb-2">
                          {message.subjectCode}
                        </span>
                      )}

                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                        <Clock size={12} />
                        <span>{message.time}</span>
                        {message.priority === 'high' && (
                          <span className="ml-auto bg-red-100 text-red-700 px-2 py-0.5 rounded-lg font-semibold">
                            Important
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className={`text-sm text-slate-600 leading-relaxed mb-3 ${!isExpanded && 'line-clamp-2'}`}>
                    {message.content}
                  </div>

                  {/* Actions */}
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
                      className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-2 rounded-lg hover:shadow-lg transition-all hover:scale-105"
                    >
                      <Eye size={14} />
                      {isExpanded ? 'Show Less' : 'View Message'}
                    </button>

                    <button
                      onClick={() => console.log('Future: Open messaging app to reply:', message.id)}
                      className="flex-1 flex flex-col items-center justify-center gap-0.5 text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1.5 rounded-lg hover:shadow-lg transition-all hover:scale-105"
                    >
                       <div className="flex items-center gap-2">
                        <MessageCircle size={14} />
                        <span>Reply</span>
                      </div>
                      <span className="text-[9px] font-normal opacity-80 whitespace-nowrap">Go to App</span>
                    </button>

                    {isAcknowledged && (
                      <div className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold text-green-600 bg-green-50 px-2 py-2 rounded-lg border border-green-200">
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
              <p className="text-lg font-medium">No messages in this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunicationHub;
