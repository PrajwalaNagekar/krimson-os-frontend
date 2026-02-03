import React from "react";
import TicketForm from "./TicketForm";
import RecentActivitySidebar from "./RecentActivitySidebar";

const RequestHelpSection = ({
  ticketForm,
  onFormChange,
  onSubmit,
  submitted,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slideDown">
      <div className="lg:col-span-2">
        <TicketForm
          form={ticketForm}
          onFormChange={onFormChange}
          onSubmit={onSubmit}
          submitted={submitted}
        />
      </div>
      <RecentActivitySidebar />
    </div>
  );
};

export default RequestHelpSection;
