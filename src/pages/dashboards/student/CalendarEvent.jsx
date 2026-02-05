import React, { useState } from "react";
import UnifiedCalendar from "../../../components/common/UnifiedCalendar";
import EventRegistration from "../../../components/dashboard/student/CalendarEvent/EventRegistration";
import CreateEventModal from "../../../components/dashboard/student/CalendarEvent/CreateEventModal";
import DayDetailsModal from "../../../components/dashboard/student/CalendarEvent/DayDetailsModal";
import EventInsightSidebar from "../../../components/dashboard/student/CalendarEvent/EventInsightSidebar";
import { STUDENT_DATA } from "../../../data/studentData";

const CalendarEvent = () => {
  const [localEvents, setLocalEvents] = useState(
    STUDENT_DATA.user.calendarEvents || [],
  );
  const [isModalOpen, setIsModalOpen] = useState(false); // For Creating Event
  const [isDayDetailsOpen, setIsDayDetailsOpen] = useState(false); // For Viewing Day Details
  const [selectedDate, setSelectedDate] = useState(null);

  const handleCreateEvent = (newEvent) => {
    const eventWithId = {
      ...newEvent,
      id: Date.now(), // Simple ID generation
      registered: true, // Auto-register for own events
      category: "Personal",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&auto=format&fit=crop&q=60", // Default image
    };
    setLocalEvents([...localEvents, eventWithId]);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsDayDetailsOpen(true);
  };

  const openCreateModalFromDay = (date) => {
    // Optionally pre-fill date in CreateEventModal if we were to pass initial data
    // For now just opening it is fine, user can pick date.
    // Ideally we would pass `date` to CreateEventModal to pre-select it.
    setIsDayDetailsOpen(false);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <UnifiedCalendar
        events={localEvents}
        role="student"
        hideSidebar={true}
        showAddButton={true}
        onCreateEvent={() => setIsModalOpen(true)}
        onDateSelect={handleDateSelect}
        className="!min-h-0 !p-6 md:!p-10 !bg-transparent"
      />

      <CreateEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleCreateEvent}
      />

      <DayDetailsModal
        isOpen={isDayDetailsOpen}
        onClose={() => setIsDayDetailsOpen(false)}
        date={selectedDate}
        events={localEvents}
        onAddEvent={openCreateModalFromDay}
      />

      {/* Extended Event Registration Section */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main List */}
          <div className="lg:col-span-2">
            <EventRegistration events={localEvents} />
          </div>

          {/* Quick Info / Sidebar */}
          <div className="space-y-6">
            <EventInsightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarEvent;
