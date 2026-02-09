import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Video,
  User,
  CheckCircle,
  XCircle,
  FileText,
} from "lucide-react";

const PTMBookingSection = ({ ptmBooking }) => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const getModeIcon = (mode) => {
    return mode === "Online" ? (
      <Video className="w-4 h-4" />
    ) : (
      <MapPin className="w-4 h-4" />
    );
  };

  const getModeColor = (mode) => {
    return mode === "Online"
      ? "from-purple-500 to-indigo-500"
      : "from-cyan-500 to-blue-500";
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Booked Meetings */}
      {ptmBooking.bookedMeetings && ptmBooking.bookedMeetings.length > 0 && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            Confirmed Meetings
          </h3>
          <div className="space-y-3">
            {ptmBooking.bookedMeetings.map((meeting) => (
              <div
                key={meeting.id}
                className="bg-white rounded-xl p-4 border-2 border-green-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={meeting.teacherPhoto}
                      alt={meeting.teacherName}
                      className="w-12 h-12 rounded-full border-2 border-green-300"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {meeting.teacherName}
                      </h4>
                      <p className="text-sm text-gray-600">{meeting.subject}</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    {meeting.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar className="w-4 h-4 text-green-600" />
                    {meeting.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-green-600" />
                    {meeting.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    {getModeIcon(meeting.mode)}
                    {meeting.mode === "Online" ? "Online" : meeting.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Available Slots by Teacher */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-blue-600" />
          Book Parent-Teacher Meeting
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ptmBooking.upcomingSlots.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-5 border-2 border-cyan-100 hover:shadow-lg transition-shadow"
            >
              {/* Teacher Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={teacher.teacherPhoto}
                  alt={teacher.teacherName}
                  className="w-16 h-16 rounded-full border-2 border-cyan-300"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">
                    {teacher.teacherName}
                  </h4>
                  <p className="text-sm text-gray-600">{teacher.subject}</p>
                </div>
              </div>

              {/* Agenda Preview */}
              <div className="bg-white rounded-lg p-3 mb-4">
                <p className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  Meeting Agenda:
                </p>
                <ul className="space-y-1">
                  {teacher.agenda.map((item, index) => (
                    <li
                      key={index}
                      className="text-xs text-gray-600 flex items-start gap-2"
                    >
                      <div className="w-1 h-1 bg-cyan-500 rounded-full mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Available Slots */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Available Slots:
                </p>
                {teacher.availableSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className={`bg-white rounded-lg p-3 border-2 ${
                      slot.available
                        ? "border-green-200 hover:border-green-400 cursor-pointer"
                        : "border-gray-200 opacity-50 cursor-not-allowed"
                    } transition-colors`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-3 h-3 text-gray-600" />
                          <span className="text-sm font-semibold text-gray-800">
                            {slot.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Clock className="w-3 h-3" />
                          {slot.time}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                          {getModeIcon(slot.mode)}
                          <span
                            className={`font-semibold bg-gradient-to-r ${getModeColor(
                              slot.mode,
                            )} bg-clip-text text-transparent`}
                          >
                            {slot.mode}
                          </span>
                        </div>
                      </div>
                      {slot.available ? (
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-xs font-bold hover:shadow-lg transition-shadow">
                          Book
                        </button>
                      ) : (
                        <span className="text-xs text-gray-500 font-semibold">
                          Booked
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PTMBookingSection;
