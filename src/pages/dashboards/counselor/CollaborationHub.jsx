import React from "react";
import { COUNSELOR_DATA } from "../../../data/counselorData";
import CollaborationHeader from "../../../components/dashboard/counselor/CollaborationHub/CollaborationHeader";
import MeetingLogs from "../../../components/dashboard/counselor/CollaborationHub/MeetingLogs";
import EscalationWorkflow from "../../../components/dashboard/counselor/CollaborationHub/EscalationWorkflow";
import TeacherQuickConnect from "../../../components/dashboard/counselor/CollaborationHub/TeacherQuickConnect";

const CollaborationHub = () => {
  const { collaboration, escalationReasons } = COUNSELOR_DATA;

  const handleScheduleMeeting = () => {
    console.log("Schedule Joint Meeting");
  };

  const handleEscalateWithReason = () => {
    console.log("Escalate to Principal");
  };

  const handleSendNote = () => {
    console.log("Send Secure Note");
  };

  return (
    <div className="space-y-8">
      {/* Header and Logs Section */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <CollaborationHeader onSchedule={handleScheduleMeeting} />
        <MeetingLogs logs={collaboration} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <EscalationWorkflow
          reasons={
            escalationReasons || [
              "Immediate Safety Risk",
              "Severe Disciplinary Issue",
              "External Agency Involvement",
            ]
          }
          onEscalate={handleEscalateWithReason}
        />
        <TeacherQuickConnect onSendNote={handleSendNote} />
      </div>
    </div>
  );
};

export default CollaborationHub;
