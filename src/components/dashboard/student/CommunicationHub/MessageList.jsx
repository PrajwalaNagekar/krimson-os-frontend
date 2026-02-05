import React from 'react';
import MessageCard from './MessageCard';
import { MessageCircle } from 'lucide-react';

const MessageList = ({ activeMessages, expandedMessage, onToggleExpand, onAcknowledge, acknowledgedMessages, onOpenReply }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {activeMessages.length > 0 ? (
          activeMessages.map(message => (
            <MessageCard
              key={message.id}
              message={message}
              isExpanded={expandedMessage === message.id}
              expandedMessageId={expandedMessage}
              onToggleExpand={onToggleExpand}
              onAcknowledge={onAcknowledge}
              acknowledgedMessages={acknowledgedMessages}
              onOpenReply={onOpenReply}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-400">
            <MessageCircle size={64} className="opacity-20 mb-4" />
            <p className="text-lg font-medium">No active messages in this category</p>
            <p className="text-sm mt-2">Expired messages are automatically hidden</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageList;
