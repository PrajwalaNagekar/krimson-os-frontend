import React from "react";
import ThreadHeader from "./ThreadHeader";
import ThreadContent from "./ThreadContent";
import ThreadInput from "./ThreadInput";
import EmptyState from "./EmptyState";

const CommunicationDetail = ({
  selectedThread,
  showMobileList,
  activeTab,
  onClose,
  onOpenMobileList,
  replyText,
  setReplyText,
  onSendMessage,
}) => {
  return (
    <div
      className={`${!showMobileList || selectedThread ? "flex" : "hidden lg:flex"} flex-1 bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/60 overflow-hidden flex-col hover:shadow-cyan-500/10 transition-all duration-300`}
    >
      {selectedThread ? (
        <>
          {/* Header */}
          <ThreadHeader
            selectedThread={selectedThread}
            activeTab={activeTab}
            onClose={onClose}
          />

          {/* Content / Chat History */}
          <ThreadContent
            selectedThread={selectedThread}
            activeTab={activeTab}
          />

          {/* Footer Action Area */}
          {(activeTab === "messages" || activeTab === "counselor") && (
            <ThreadInput
              replyText={replyText}
              setReplyText={setReplyText}
              onSendMessage={onSendMessage}
            />
          )}
        </>
      ) : (
        <EmptyState onOpenMobileList={onOpenMobileList} />
      )}
    </div>
  );
};

export default CommunicationDetail;
