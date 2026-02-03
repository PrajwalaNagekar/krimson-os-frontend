import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, Smile, Paperclip, CheckCheck, Check } from 'lucide-react';

const InlineReplyView = ({ replyingTo, onClose, onSend }) => {
  const [replyText, setReplyText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    onSend(replyText);
    setReplyText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendReply();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-50 to-slate-100">
      {/* WhatsApp-Style Header */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-4 text-white flex items-center gap-3 shadow-lg">
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/20 rounded-full transition-all"
        >
          <ArrowLeft size={22} />
        </button>
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
          {replyingTo.from.charAt(0)}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{replyingTo.from}</h3>
          <p className="text-xs text-white/80">Reply to message</p>
        </div>
      </div>

      {/* WhatsApp-Style Chat Area */}
      <div
        className="flex-1 overflow-y-auto p-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d1d5db' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      >
        <div className="space-y-3 max-w-4xl mx-auto">
          {/* Original Message - Sender's Bubble (Left) */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
              {replyingTo.from.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-md max-w-[85%]">
                {replyingTo.subject && (
                  <p className="font-semibold text-purple-600 text-sm mb-1">{replyingTo.subject}</p>
                )}
                <p className="text-slate-800 text-sm leading-relaxed whitespace-pre-wrap break-words">
                  {replyingTo.content}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-slate-400">{replyingTo.time}</span>
                </div>
              </div>
            </div>
          </div>

          {/* User's Reply Bubble (Right) - Only shows if typing */}
          {replyText.trim() && (
            <div className="flex items-start gap-2 justify-end">
              <div className="flex-1 flex justify-end">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rounded-tr-sm p-3 shadow-md max-w-[85%]">
                  <p className="text-white text-sm leading-relaxed whitespace-pre-wrap break-words">
                    {replyText}
                  </p>
                  <div className="flex items-center gap-2 mt-2 justify-end">
                    <span className="text-xs text-white/80">Now</span>
                    <CheckCheck size={14} className="text-white/80" />
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                You
              </div>
            </div>
          )}
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
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
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
            onClick={handleSendReply}
            disabled={!replyText.trim()}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
              replyText.trim()
                ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:shadow-xl hover:scale-105'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Send size={20} />
          </button>
        </div>

        {/* Character Count */}
        <div className="flex items-center justify-between mt-2 px-2">
          <p className="text-xs text-slate-400">
            {replyText.length > 0 ? `${replyText.length} characters` : 'Press Enter to send, Shift+Enter for new line'}
          </p>
          <div className="flex items-center gap-1 text-xs text-blue-500">
            <Check size={12} />
            <span>Draft auto-saved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineReplyView;
