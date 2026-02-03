import React, { useState, useRef, useEffect } from 'react';
import { X, Users, Send, Smile, Paperclip, CheckCheck, Check } from 'lucide-react';

const GroupMessageView = ({ group, onClose, onSendMessage }) => {
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [group.messages]);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    onSendMessage(group.id, messageText);
    setMessageText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getStatusIcon = (status) => {
    if (status === 'read') {
      return <CheckCheck size={14} className="text-blue-400" />;
    } else if (status === 'delivered') {
      return <CheckCheck size={14} className="text-slate-400" />;
    } else {
      return <Check size={14} className="text-slate-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[85vh] overflow-hidden animate-slideUp flex flex-col">
        {/* WhatsApp-Style Header */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-4 text-white flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
              {group.avatar}
            </div>
            <div>
              <h3 className="font-bold text-lg">{group.name}</h3>
              <p className="text-xs text-white/80 flex items-center gap-1">
                <Users size={12} />
                {group.memberCount} members
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-all"
          >
            <X size={22} />
          </button>
        </div>

        {/* WhatsApp-Style Chat Area */}
        <div
          className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-slate-50 to-slate-100"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d1d5db' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          <div className="space-y-3 max-w-4xl mx-auto">
            {group.messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-2 ${
                  message.isOwn ? 'justify-end' : 'justify-start'
                }`}
              >
                {/* Sender Avatar (Left side for others) */}
                {!message.isOwn && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                    {message.sender.charAt(0)}
                  </div>
                )}

                {/* Message Bubble */}
                <div className="flex-1 flex" style={{ maxWidth: '75%' }}>
                  <div
                    className={`rounded-2xl p-3 shadow-md ${
                      message.isOwn
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-tr-sm ml-auto'
                        : 'bg-white text-slate-800 rounded-tl-sm'
                    }`}
                  >
                    {/* Sender Name (only for group messages from others) */}
                    {!message.isOwn && (
                      <p className="font-semibold text-purple-600 text-xs mb-1">
                        {message.sender}
                      </p>
                    )}
                    
                    {/* Message Content */}
                    <p className={`text-sm leading-relaxed whitespace-pre-wrap break-words ${
                      message.isOwn ? 'text-white' : 'text-slate-800'
                    }`}>
                      {message.content}
                    </p>
                    
                    {/* Time and Status */}
                    <div className={`flex items-center gap-1 mt-1 justify-end ${
                      message.isOwn ? 'text-white/80' : 'text-slate-400'
                    }`}>
                      <span className="text-xs">{message.time}</span>
                      {message.isOwn && getStatusIcon(message.status)}
                    </div>
                  </div>
                </div>

                {/* User Avatar (Right side for own messages) */}
                {message.isOwn && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                    You
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* WhatsApp-Style Input Area */}
        <div className="p-4 bg-white border-t-2 border-slate-100">
          <div className="flex items-end gap-3">
            {/* Input Field */}
            <div className="flex-1 bg-slate-100 rounded-3xl flex items-end gap-2 px-4 py-2 border-2 border-transparent focus-within:border-purple-300 transition-all">
              <button className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                <Smile size={22} />
              </button>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 bg-transparent outline-none resize-none text-slate-800 placeholder-slate-400 max-h-32 py-2"
                rows="1"
                style={{ minHeight: '24px' }}
                autoFocus
              />
              <button className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                <Paperclip size={22} />
              </button>
            </div>

            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              disabled={!messageText.trim()}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
                messageText.trim()
                  ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:shadow-xl hover:scale-105'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Send size={20} />
            </button>
          </div>

          {/* Helper Text */}
          <div className="flex items-center justify-between mt-2 px-2">
            <p className="text-xs text-slate-400">
              {messageText.length > 0 ? `${messageText.length} characters` : 'Press Enter to send, Shift+Enter for new line'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupMessageView;
