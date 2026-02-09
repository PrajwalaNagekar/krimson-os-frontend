import React, { useState } from "react";
import UnifiedCalendar from "../../../components/common/UnifiedCalendar";
import EventRegistration from "../../../components/dashboard/student/CalendarEvent/EventRegistration";
import CreateEventModal from "../../../components/dashboard/student/CalendarEvent/CreateEventModal";
import DayDetailsModal from "../../../components/dashboard/student/CalendarEvent/DayDetailsModal";
import EventInsightSidebar from "../../../components/dashboard/student/CalendarEvent/EventInsightSidebar";
import { STUDENT_DATA } from "../../../data/studentData";

const CalendarEvent = () => {
  // Mock Holidays
  const holidays = [
    { date: "2026-02-14", title: "Valentines Day", type: "holiday" },
    { date: "2026-02-20", title: "School Foundation Day", type: "holiday" },
  ];

  const [localEvents, setLocalEvents] = useState([
    ...(STUDENT_DATA.user.calendarEvents || []),
    ...holidays,
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false); // For Creating Event
  const [isDayDetailsOpen, setIsDayDetailsOpen] = useState(false); // For Viewing Day Details
  const [selectedDate, setSelectedDate] = useState(null);
  const [view, setView] = useState("calendar");

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

  // Helper to check for holidays
  const isHoliday = (d, m, y) => {
    return holidays.some((h) => {
      const hDate = new Date(h.date);
      return (
        hDate.getDate() === d &&
        hDate.getMonth() === m &&
        hDate.getFullYear() === y
      );
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Unified Header Section & Toggle */}
      <div className="max-w-[90%] mx-auto px-6 md:px-10 pt-8 pb-6">
        <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Academic Events & Calendar
            </h1>
            <p className="text-white/90 text-sm md:text-base">
              {view === "calendar"
                ? "View all your important dates, holidays, and upcoming events"
                : "Register for upcoming events and manage your participation"}
            </p>
          </div>

          {/* View Toggle */}
          <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-xl flex items-center shadow-inner">
            <button
              onClick={() => setView("calendar")}
              className={`px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${
                view === "calendar"
                  ? "bg-white text-blue-600 shadow-lg scale-105"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Calendar View
            </button>
            <button
              onClick={() => setView("events")}
              className={`px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${
                view === "events"
                  ? "bg-white text-blue-600 shadow-lg scale-105"
                  : "text-white hover:bg-white/10"
              }`}
            >
              My Events
            </button>
          </div>
        </div>
      </div>

      <div className="transition-all duration-500 ease-in-out">
        {view === "calendar" ? (
          <UnifiedCalendar
            events={localEvents}
            role="student"
            hideSidebar={true}
            showAddButton={true}
            onCreateEvent={() => setIsModalOpen(true)}
            onDateSelect={handleDateSelect}
            className="!min-h-0 !p-6 md:!p-10 !bg-transparent max-w-[90%] mx-auto animate-fadeIn"
            getCellProps={(day, month, year) => {
              const date = new Date(year, month, day);
              const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
              const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
              const holiday = isHoliday(day, month, year);

              let classes = "!aspect-[5/3] "; // Maintain aspect ratio
              if (holiday)
                classes +=
                  "bg-blue-50 hover:bg-blue-100 border-blue-100 text-slate-700 ";
              // Blue for holiday
              else if (isWeekend)
                classes += "bg-slate-700 hover:bg-slate-800 text-white "; // Dark gray for weekend

              return { className: classes };
            }}
          />
        ) : (
          /* Extended Event Registration Section */
          <div className="max-w-[1600px] mx-auto px-6 md:px-10 animate-fadeIn">
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
        )}
      </div>

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
    </div>
  );
};

export default CalendarEvent;
