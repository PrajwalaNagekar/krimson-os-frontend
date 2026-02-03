import React from 'react';
import { Users, ChevronRight, MessageCircle } from 'lucide-react';

const GroupsTab = ({ groups, onSelectGroup }) => {
  const totalUnread = groups.reduce((sum, group) => sum + group.unreadCount, 0);

  const getGroupTypeColor = (type) => {
    switch (type) {
      case 'class':
        return 'from-cyan-400 to-blue-400';
      case 'club':
        return 'from-purple-400 to-pink-400';
      case 'study':
        return 'from-blue-400 to-purple-400';
      case 'sports':
        return 'from-green-400 to-emerald-400';
      default:
        return 'from-slate-400 to-slate-500';
    }
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Header Removed */}

      {/* Groups List */}
      <div className="flex-1 overflow-y-auto space-y-3">
        {groups.map((group) => (
          <div
            key={group.id}
            onClick={() => onSelectGroup(group)}
            className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-purple-200 group"
          >
            <div className="flex items-start gap-4">
              {/* Group Avatar */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getGroupTypeColor(group.type)} flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
                {group.avatar}
              </div>

              {/* Group Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-800 text-lg truncate">
                      {group.name}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <Users size={12} />
                      {group.memberCount} members
                    </p>
                  </div>
                  {group.unreadCount > 0 && (
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                      {group.unreadCount}
                    </div>
                  )}
                </div>

                {/* Last Message */}
                <div className="mt-2 bg-slate-50 rounded-xl p-2">
                  <div className="flex items-center gap-2 mb-1">
                    <MessageCircle size={12} className="text-slate-400" />
                    <p className="text-xs font-semibold text-slate-600">
                      {group.lastMessage.sender}
                    </p>
                    <span className="text-xs text-slate-400">•</span>
                    <p className="text-xs text-slate-400">{group.lastMessage.time}</p>
                  </div>
                  <p className="text-sm text-slate-600 truncate">
                    {group.lastMessage.content}
                  </p>
                </div>
              </div>

              {/* Arrow Icon */}
              <ChevronRight 
                size={20} 
                className="text-slate-400 group-hover:text-purple-500 transition-colors flex-shrink-0 mt-2" 
              />
            </div>

            {/* Group Description */}
            <p className="text-xs text-slate-500 mt-2 ml-[72px] italic">
              {group.description}
            </p>
          </div>
        ))}

        {groups.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mb-4">
              <Users size={32} className="text-slate-400" />
            </div>
            <p className="text-slate-500 font-semibold">No groups available</p>
            <p className="text-slate-400 text-sm mt-1">Join a group to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupsTab;
