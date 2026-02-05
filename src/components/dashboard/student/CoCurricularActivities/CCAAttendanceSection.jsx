import React, { useState } from "react";
import {
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  User,
  BarChart3,
  Info,
} from "lucide-react";

/**
 * CCAAttendanceSection Component
 *
 * Layout: LB — List to Detail
 * Data Control: Mixed
 * AI: None
 * Purpose: Track activity attendance
 */
const CCAAttendanceSection = ({ ccaAttendance }) => {
  const [selectedActivity, setSelectedActivity] = useState(
    ccaAttendance?.activities?.[0] || null,
  );

  if (!ccaAttendance || !ccaAttendance.activities) return null;

  const { overview, activities } = ccaAttendance;

  return (
    <>
      {/* Overall Attendance Summary - Compact */}
      <div className="mb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl px-4 py-3 border border-blue-100">
            <p className="text-xs text-blue-600 font-semibold mb-1">Overall</p>
            <p className="text-2xl font-bold text-blue-700">
              {overview.attendancePercentage}%
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {overview.attendedSessions}/{overview.totalSessions}
            </p>
          </div>
          <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl px-4 py-3 border border-green-100">
            <p className="text-xs text-green-600 font-semibold mb-1">Present</p>
            <p className="text-2xl font-bold text-green-700">
              {overview.attendedSessions}
            </p>
            <p className="text-xs text-slate-500 mt-1">sessions</p>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl px-4 py-3 border border-slate-200">
            <p className="text-xs text-slate-600 font-semibold mb-1">Total</p>
            <p className="text-2xl font-bold text-slate-700">
              {overview.totalSessions}
            </p>
            <p className="text-xs text-slate-500 mt-1">sessions</p>
          </div>
        </div>
      </div>

      {/* LB Layout: List on Left, Detail on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Activity List (1/3 width on desktop) */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="text-sm font-bold text-slate-600 mb-3 flex items-center gap-2">
            <Calendar size={16} className="text-cyan-500" />
            Your Activities ({activities.length})
          </h3>

          {activities.map((activity) => {
            const isSelected = selectedActivity?.id === activity.id;
            const attendanceColor =
              activity.attendancePercentage >= 90
                ? "green"
                : activity.attendancePercentage >= 75
                  ? "blue"
                  : "orange";

            return (
              <button
                key={activity.id}
                onClick={() => setSelectedActivity(activity)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  isSelected
                    ? "border-cyan-500 bg-gradient-to-r from-cyan-50 to-blue-50 shadow-md"
                    : "border-slate-100 bg-white hover:border-cyan-200 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">
                      {activity.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {activity.category}
                    </p>
                  </div>
                  <div
                    className={`text-${attendanceColor}-600 bg-${attendanceColor}-50 px-2 py-1 rounded-lg`}
                  >
                    <span className="text-xs font-bold">
                      {activity.attendancePercentage}%
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-3 text-xs text-slate-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle size={12} className="text-green-500" />
                    <span>{activity.attendedSessions}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <XCircle size={12} className="text-red-500" />
                    <span>{activity.missedSessions}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-blue-500" />
                    <span>{activity.totalSessions}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-3 bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-${attendanceColor}-400 to-${attendanceColor}-500 rounded-full transition-all`}
                    style={{ width: `${activity.attendancePercentage}%` }}
                  ></div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Section: Detail Panel (2/3 width on desktop) */}
        <div className="lg:col-span-2">
          {selectedActivity ? (
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
              {/* Activity Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {selectedActivity.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock size={16} className="text-cyan-500" />
                    <span>{selectedActivity.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <User size={16} className="text-blue-500" />
                    <span>Instructor: {selectedActivity.instructor}</span>
                  </div>
                </div>
              </div>

              {/* Attendance Stats Summary */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white rounded-xl p-4 text-center border border-green-100">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mx-auto mb-2"
                  />
                  <p className="text-2xl font-bold text-green-600">
                    {selectedActivity.attendedSessions}
                  </p>
                  <p className="text-xs text-slate-500">Present</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-red-100">
                  <XCircle size={20} className="text-red-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-red-600">
                    {selectedActivity.missedSessions}
                  </p>
                  <p className="text-xs text-slate-500">Absent</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-blue-100">
                  <BarChart3 size={20} className="text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600">
                    {selectedActivity.attendancePercentage}%
                  </p>
                  <p className="text-xs text-slate-500">Attendance</p>
                </div>
              </div>

              {/* Session History */}
              <div>
                <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                  <Calendar size={16} className="text-cyan-500" />
                  Session History ({selectedActivity.sessions.length})
                </h4>

                <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                  {selectedActivity.sessions.map((session, index) => {
                    const isPresent = session.status === "present";

                    return (
                      <div
                        key={index}
                        className={`bg-white rounded-xl p-4 border-l-4 ${
                          isPresent
                            ? "border-green-400 shadow-sm"
                            : "border-red-400 shadow-sm"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              {isPresent ? (
                                <CheckCircle
                                  size={16}
                                  className="text-green-500"
                                />
                              ) : (
                                <XCircle size={16} className="text-red-500" />
                              )}
                              <span
                                className={`text-xs font-bold ${
                                  isPresent ? "text-green-600" : "text-red-600"
                                }`}
                              >
                                {isPresent ? "Present" : "Absent"}
                              </span>
                              <span className="text-xs text-slate-400">•</span>
                              <span className="text-xs text-slate-600">
                                {new Date(session.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  },
                                )}
                              </span>
                            </div>
                            <p className="text-sm font-semibold text-slate-800">
                              {session.topic}
                            </p>
                            {session.reason && (
                              <div className="mt-2 flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg inline-block">
                                <Info size={12} className="text-orange-500" />
                                <span className="text-xs text-orange-700">
                                  Reason: {session.reason}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-2xl p-12 text-center border border-slate-200">
              <Calendar size={48} className="text-slate-300 mx-auto mb-4" />
              <p className="text-slate-400 font-medium">
                Select an activity to view attendance details
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CCAAttendanceSection;
