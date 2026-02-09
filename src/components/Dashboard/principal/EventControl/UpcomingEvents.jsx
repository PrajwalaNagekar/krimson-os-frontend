import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import EventCard from "./EventCard";

const UpcomingEvents = ({ events, activeFilter }) => {
  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter((event) => event.category === activeFilter);

  return (
    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-blue-500" />
          Upcoming Events ({filteredEvents.length})
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Filtered by: {activeFilter}
        </p>
      </div>

      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto">
        {filteredEvents.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
