import React from 'react';
import { Pin, Building2, BookOpen, User, MessageCircle, Clock, Eye, CheckCircle } from 'lucide-react';

const MessageCard = ({ message, isExpanded, expandedMessageId, onToggleExpand, onAcknowledge, acknowledgedMessages, onOpenReply }) => {
  const Icon = { Building2, BookOpen, User }[message.icon] || MessageCircle;
  const isAcknowledged = acknowledgedMessages.has(message.id);
  
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

  const expiryStatus = getExpiryStatus(message.expiryDate);

  return (
    <div
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
             onToggleExpand(newExpandedState);
             if (!isExpanded && message.requiresAck && !isAcknowledged) {
               onAcknowledge(message.id);
             }
          }}
          className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-2.5 rounded-xl hover:shadow-lg transition-all hover:scale-105"
        >
          <Eye size={14} />
          {isExpanded ? 'Show Less' : 'View Message'}
        </button>

        <button
          onClick={() => onOpenReply(message)}
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
};

export default MessageCard;
