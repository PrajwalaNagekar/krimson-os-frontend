import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Video,
  Users,
  CheckCircle,
  Circle,
  Download,
  PlayCircle,
  UserCircle,
} from "lucide-react";

const ParentCirclesSection = ({ parentCircles }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case "Parenting Workshop":
        return "from-pink-500 to-purple-500";
      case "Curriculum Briefing":
        return "from-cyan-500 to-blue-500";
      case "Wellbeing Talk":
        return "from-green-500 to-emerald-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  const getCategoryBg = (category) => {
    switch (category) {
      case "Parenting Workshop":
        return "from-pink-50 to-purple-50";
      case "Curriculum Briefing":
        return "from-cyan-50 to-blue-50";
      case "Wellbeing Talk":
        return "from-green-50 to-emerald-50";
      default:
        return "from-gray-50 to-slate-50";
    }
  };

  const getModeIcon = (mode) => {
    if (mode === "Online") return <Video className="w-4 h-4" />;
    if (mode === "In-Person") return <MapPin className="w-4 h-4" />;
    return <Users className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-pink-600" />
          Upcoming Parent Circles
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {parentCircles.upcomingEvents.map((event) => (
            <div
              key={event.id}
              className={`bg-gradient-to-br ${getCategoryBg(
                event.category,
              )} rounded-2xl p-6 border-2 ${
                event.registered ? "border-green-300" : "border-gray-200"
              } hover:shadow-lg transition-shadow`}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(
                    event.category,
                  )}`}
                >
                  {event.category}
                </span>
                {event.registered && (
                  <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    <span className="text-xs font-semibold">Registered</span>
                  </div>
                )}
              </div>

              {/* Event Title */}
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                {event.title}
              </h4>

              {/* Event Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Clock className="w-4 h-4 text-gray-600" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  {getModeIcon(event.mode)}
                  {event.mode === "Online"
                    ? "Online Event"
                    : event.mode === "Hybrid"
                      ? `${event.venue} + Online`
                      : event.venue}
                </div>
              </div>

              {/* Facilitator */}
              <div className="bg-white rounded-lg p-3 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={event.facilitatorPhoto}
                    alt={event.facilitator}
                    className="w-10 h-10 rounded-full border-2 border-gray-300"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      {event.facilitator}
                    </p>
                    <p className="text-xs text-gray-600">
                      {event.facilitatorTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 mb-3">{event.description}</p>

              {/* Topics */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-700 mb-2">
                  Topics Covered:
                </p>
                <div className="flex flex-wrap gap-1">
                  {event.topics.slice(0, 2).map((topic, index) => (
                    <span
                      key={index}
                      className="bg-white text-gray-700 px-2 py-1 rounded-lg text-[10px] border border-gray-300"
                    >
                      {topic}
                    </span>
                  ))}
                  {event.topics.length > 2 && (
                    <span className="bg-white text-gray-700 px-2 py-1 rounded-lg text-[10px] border border-gray-300">
                      +{event.topics.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Spots Available */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">Seats Available</span>
                  <span className="text-xs font-bold text-gray-800">
                    {event.spotsAvailable} / {event.totalSpots}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${getCategoryColor(
                      event.category,
                    )}`}
                    style={{
                      width: `${(event.spotsAvailable / event.totalSpots) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Register Button */}
              {!event.registered ? (
                <button
                  className={`w-full bg-gradient-to-r ${getCategoryColor(
                    event.category,
                  )} text-white py-3 rounded-xl font-bold hover:shadow-xl transition-shadow`}
                >
                  Register Now
                </button>
              ) : (
                <button className="w-full bg-gray-200 text-gray-600 py-3 rounded-xl font-bold cursor-not-allowed">
                  Already Registered
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      {parentCircles.pastEvents && parentCircles.pastEvents.length > 0 && (
        <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 border-2 border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <PlayCircle className="w-6 h-6 text-gray-600" />
            Past Events - Recordings & Materials
          </h3>
          <div className="space-y-3">
            {parentCircles.pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl p-4 border border-gray-200"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.category}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {event.date} • {event.attendees} attendees
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition-colors">
                      <PlayCircle className="w-4 h-4" />
                    </button>
                    <button className="bg-green-100 text-green-600 p-2 rounded-lg hover:bg-green-200 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentCirclesSection;
