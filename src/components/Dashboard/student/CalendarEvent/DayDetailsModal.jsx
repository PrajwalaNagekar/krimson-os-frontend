import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, Plus } from "lucide-react";

const DayDetailsModal = ({ isOpen, onClose, date, events, onAddEvent }) => {
  if (!isOpen || !date) return null;

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Filter events for this specific date
  const dayEvents = events.filter((e) => {
    if (!e.date) return false;
    // Robust date comparison: Parse YYYY-MM-DD string parts
    // This avoids timezone issues where "2026-02-14" might become "2026-02-13" in Western timezones
    const [y, m, d] = e.date.split("-").map(Number);

    return (
      y === date.getFullYear() &&
      m === date.getMonth() + 1 && // Month is 0-indexed in JS Date
      d === date.getDate()
    );
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[80vh]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 p-6 text-white relative flex-shrink-0">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Calendar className="w-6 h-6" /> {date.getDate()}
            </h2>
            <p className="text-white/90 text-sm font-medium">{formattedDate}</p>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {dayEvents.length > 0 ? (
              dayEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-4 hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                      event.category === "Personal"
                        ? "bg-purple-500"
                        : "bg-gradient-to-b from-blue-400 to-cyan-500"
                    }`}
                  ></div>
                  <div className="pl-3">
                    <h3 className="font-bold text-slate-800 text-lg">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-slate-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-orange-400" />
                        {event.time}
                      </div>
                      {event.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-pink-400" />
                          {event.location}
                        </div>
                      )}
                    </div>
                    {event.description && (
                      <p className="mt-2 text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-2">
                        {event.description}
                      </p>
                    )}
                    <span className="inline-block mt-3 px-2 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {event.type}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-slate-400">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                  <Calendar size={32} className="opacity-30" />
                </div>
                <p className="font-medium">No events scheduled</p>
                <p className="text-xs">Take a break or add a new task!</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 pt-2 border-t border-slate-100 flex-shrink-0">
            <button
              onClick={() => {
                onClose();
                onAddEvent && onAddEvent(date);
              }}
              className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
            >
              <Plus size={18} /> Add Event for this Day
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DayDetailsModal;
