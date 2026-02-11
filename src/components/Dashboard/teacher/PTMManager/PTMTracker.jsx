import React from "react";
import ActionList from "./ActionList";
import SentinelStats from "./SentinelStats";

const PTMTracker = ({ actions, onShowActionModal, onShowToast }) => {
  const handleNudge = () => {
    onShowToast("Reminder sent to Kabir Singh's parents via WhatsApp & Email.");
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-left-8 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <ActionList
          actions={actions}
          onLogAction={onShowActionModal}
          onShowToast={onShowToast}
        />
        <SentinelStats onNudge={handleNudge} />
      </div>
    </div>
  );
};

export default PTMTracker;
