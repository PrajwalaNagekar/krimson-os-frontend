import React from 'react';
import { MessageCircle } from 'lucide-react';

const CommunicationHeader = ({ unreadCount, pinnedCount }) => {
  return (
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
              <div className="text-3xl font-bold">{pinnedCount}</div>
              <div className="text-xs text-white/90 mt-1">Pinned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationHeader;
