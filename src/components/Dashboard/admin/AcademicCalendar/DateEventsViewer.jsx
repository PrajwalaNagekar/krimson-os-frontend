/**
 * @component DateEventsViewer
 * @description Shows all events for a selected date with option to add new event
 * @props {boolean} isOpen - Whether viewer is open
 * @props {Function} onClose - Callback to close viewer
 * @props {Date} selectedDate - The selected date
 * @props {Array} events - Events for this date
 * @props {Function} onAddEvent - Callback to add new event for this date
 * @props {Function} onEditEvent - Callback to edit an event
 */
import React from "react";
import { X, Calendar, Clock, MapPin, Plus, Edit2 } from "lucide-react";

const DateEventsViewer = ({
  isOpen,
  onClose,
  selectedDate,
  events = [],
  onAddEvent,
  onEditEvent,
}) => {
  if (!isOpen || !selectedDate) return null;

  const dateStr = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700 border-green-200";
      case "Confirmed":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "exam":
        return "from-pink-500 to-rose-500";
      case "class":
        return "from-blue-500 to-cyan-500";
      default:
        return "from-purple-500 to-indigo-500";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Calendar size={24} />
                <h2 className="text-2xl font-bold">Events on this Date</h2>
              </div>
              <p className="text-white/90 text-sm">{dateStr}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {/* Events List */}
          {events.length > 0 ? (
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-bold text-slate-800 mb-4">
                {events.length} {events.length === 1 ? "Event" : "Events"}{" "}
                Scheduled
              </h3>

              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-2xl p-4 hover:shadow-md transition-all group cursor-pointer"
                  onClick={() => onEditEvent(event)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Event Type Badge */}
                      <div
                        className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${getTypeColor(event.type)} text-white text-xs font-bold mb-2`}
                      >
                        {event.type.toUpperCase()}
                      </div>

                      {/* Event Title */}
                      <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h4>

                      {/* Event Details */}
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-purple-500" />
                          <span>{event.time}</span>
                          {event.isMultiDay && (
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs font-semibold">
                              Multi-day
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-pink-500" />
                          <span>{event.location}</span>
                        </div>

                        {event.description && (
                          <p className="text-slate-500 italic mt-2 line-clamp-2">
                            {event.description}
                          </p>
                        )}
                      </div>

                      {/* Status Badge */}
                      <div className="mt-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-lg text-xs font-bold border ${getStatusColor(event.status)}`}
                        >
                          {event.status}
                        </span>
                      </div>
                    </div>

                    {/* Edit Icon */}
                    <div className="flex-shrink-0">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                        <Edit2 size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                <Calendar size={32} className="text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-700 mb-2">
                No Events
              </h3>
              <p className="text-slate-500 text-sm">
                There are no events scheduled for this date.
              </p>
            </div>
          )}

          {/* Add New Event Button */}
          <button
            onClick={onAddEvent}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 hover:from-cyan-600 hover:via-blue-600 hover:to-pink-600 text-white font-bold rounded-2xl transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-3 group"
          >
            <div className="p-2 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
              <Plus size={24} />
            </div>
            <span className="text-lg">Add New Event for This Date</span>
          </button>
        </div>

        {/* Footer Info */}
        <div className="px-6 pb-6 pt-2">
          <p className="text-xs text-slate-500 text-center">
            Click on an event to edit or click "Add New Event" to create another
            event for this date
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateEventsViewer;
