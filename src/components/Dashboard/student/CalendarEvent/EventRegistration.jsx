import React, { useState } from "react";
import {
  FiCalendar,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiPlusCircle,
  FiInfo,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const EventRegistration = ({ events }) => {
  const [registeredEvents, setRegisteredEvents] = useState(
    events.filter((e) => e.registered).map((e) => e.id),
  );

  const toggleRegistration = (eventId) => {
    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents(registeredEvents.filter((id) => id !== eventId));
    } else {
      setRegisteredEvents([...registeredEvents, eventId]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">Upcoming Events</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium bg-white px-3 py-1 rounded-full border border-slate-200">
            {events.length} Events Total
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {events.map((event) => {
            const isRegistered = registeredEvents.includes(event.id);

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative bg-white rounded-2xl border border-slate-100 p-4 hover:shadow-lg hover:shadow-blue-500/5 transition-all overflow-hidden"
              >
                {/* Decorative Side Accent */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${
                    isRegistered
                      ? "bg-green-500"
                      : "bg-gradient-to-b from-cyan-400 to-blue-500"
                  }`}
                />

                <div className="flex flex-col md:flex-row gap-4">
                  {/* Event Image */}
                  <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md">
                      {event.category}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {event.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <FiCalendar className="text-blue-500" />
                          <span className="font-medium text-xs">
                            {new Date(event.date).toLocaleDateString("en-US", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FiClock className="text-orange-500" />
                          <span className="text-xs">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FiMapPin className="text-pink-500" />
                          <span className="text-xs">{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                        {event.type}
                      </div>

                      <button
                        onClick={() => toggleRegistration(event.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                          isRegistered
                            ? "bg-green-50 text-green-600 border border-green-200"
                            : "bg-slate-900 text-white shadow-lg hover:shadow-cyan-500/20 hover:scale-105 active:scale-95"
                        }`}
                      >
                        {isRegistered ? (
                          <>
                            <FiCheckCircle /> Registered
                          </>
                        ) : (
                          <>
                            Register Now <FiPlusCircle />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventRegistration;
