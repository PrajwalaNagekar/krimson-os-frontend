/**
 * @component EventsList
 * @description List of upcoming events with details
 * @props {Array} events - Array of event objects
 * @props {Function} onEventClick - Callback when event is clicked
 */
import React from "react";
import { Calendar, Clock, MapPin, Users, Tag } from "lucide-react";

const EventsList = ({ events = [], onEventClick }) => {
  // Sort events by date
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );

  // Get upcoming events (events that haven't passed)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcomingEvents = sortedEvents.filter(
    (event) => new Date(event.date) >= today,
  );

  const getEventTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case "exam":
        return "bg-pink-100 text-pink-700 border-pink-200";
      case "event":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "class":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-700 border-green-200";
      case "scheduled":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "confirmed":
        return "bg-cyan-100 text-cyan-700 border-cyan-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Upcoming Events</h2>
          <p className="text-sm text-slate-500">
            Next scheduled events and activities
          </p>
        </div>
        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold border border-blue-100">
          {upcomingEvents.length} Events
        </span>
      </div>

      <div className="space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => onEventClick && onEventClick(event)}
              className="group p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-cyan-50/50 transition-all duration-300 cursor-pointer"
            >
              {/* Event Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {event.description}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getEventTypeColor(event.type)}`}
                  >
                    {event.type}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(event.status)}`}
                  >
                    {event.status}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar size={16} className="text-blue-500" />
                  <span>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    {event.isMultiDay && event.endDate && (
                      <span className="text-slate-400">
                        {" - "}
                        {new Date(event.endDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock size={16} className="text-purple-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={16} className="text-pink-500" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Tag size={16} className="text-cyan-500" />
                  <span>{event.category}</span>
                </div>
              </div>

              {/* Participants */}
              <div className="mt-3 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Users size={14} />
                  <span className="font-medium">
                    {event.participants?.join(", ") || "No participants"}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-10 text-center text-slate-400">
            <Calendar className="mx-auto mb-3 opacity-20" size={40} />
            <p className="text-sm font-medium">No upcoming events</p>
          </div>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }
      `}</style>
    </div>
  );
};

export default EventsList;
