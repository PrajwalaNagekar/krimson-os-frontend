import React from "react";
import { Calendar, Clock, MapPin, CheckCircle } from "lucide-react";

const JointActivities = ({
  activities,
  acknowledgedItems,
  handleAcknowledge,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border-2 border-purple-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Calendar className="text-purple-500" size={24} />
          Joint Activities (Dual Acknowledgment)
        </h2>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const studentAcked =
            acknowledgedItems.has(activity.id) || activity.studentAck;
          return (
            <div
              key={activity.id}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border-2 border-purple-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-purple-900 text-lg">
                    {activity.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 items-center mt-2 text-xs text-purple-700">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {activity.date}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {activity.time}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      {activity.location}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-purple-800 mb-4">
                {activity.description}
              </p>

              {/* Acknowledgment Status */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div
                  className={`p-3 rounded-xl border-2 ${
                    studentAcked
                      ? "bg-green-50 border-green-200"
                      : "bg-yellow-50 border-yellow-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle
                      size={14}
                      className={
                        studentAcked ? "text-green-600" : "text-yellow-600"
                      }
                    />
                    <span className="text-xs font-bold text-slate-700">
                      Student
                    </span>
                  </div>
                  <span
                    className={`text-xs font-semibold ${
                      studentAcked ? "text-green-700" : "text-yellow-700"
                    }`}
                  >
                    {studentAcked ? "Acknowledged" : "Pending"}
                  </span>
                </div>
                <div
                  className={`p-3 rounded-xl border-2 ${
                    activity.parentAck
                      ? "bg-green-50 border-green-200"
                      : "bg-yellow-50 border-yellow-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle
                      size={14}
                      className={
                        activity.parentAck
                          ? "text-green-600"
                          : "text-yellow-600"
                      }
                    />
                    <span className="text-xs font-bold text-slate-700">
                      Parent
                    </span>
                  </div>
                  <span
                    className={`text-xs font-semibold ${
                      activity.parentAck ? "text-green-700" : "text-yellow-700"
                    }`}
                  >
                    {activity.parentAck ? "Acknowledged" : "Pending"}
                  </span>
                </div>
              </div>

              {!studentAcked && (
                <button
                  onClick={() => handleAcknowledge(activity.id, "activity")}
                  className="w-full flex items-center justify-center gap-2 text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all hover:scale-105"
                >
                  <CheckCircle size={16} />
                  Acknowledge Activity
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JointActivities;
