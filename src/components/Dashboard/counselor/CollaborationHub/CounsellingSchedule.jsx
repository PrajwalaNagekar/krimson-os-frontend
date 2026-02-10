import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  User,
  UserPlus,
  AlertCircle,
  CheckCircle,
  XCircle,
  Filter,
  Plus,
  Eye,
  RefreshCw,
  X as CloseIcon,
} from "lucide-react";

const CounsellingSchedule = ({
  scheduleData,
  onScheduleSession,
  onReschedule,
  onCancel,
}) => {
  const [filterType, setFilterType] = useState("All");
  const { weeklyStats, upcomingSessions, sessionTypes } = scheduleData;

  const filteredSessions = upcomingSessions.filter(
    (session) => filterType === "All" || session.type === filterType,
  );

  const getTypeIcon = (type) => {
    switch (type) {
      case "Individual":
        return <User size={16} />;
      case "Group":
        return <Users size={16} />;
      case "Parent-Teacher":
        return <UserPlus size={16} />;
      default:
        return <Calendar size={16} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Individual":
        return "from-cyan-400 to-cyan-500";
      case "Group":
        return "from-blue-400 to-blue-500";
      case "Parent-Teacher":
        return "from-pink-400 to-pink-500";
      case "Follow-up":
        return "from-purple-400 to-purple-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  const getTypeBgColor = (type) => {
    switch (type) {
      case "Individual":
        return "bg-cyan-50";
      case "Group":
        return "bg-blue-50";
      case "Parent-Teacher":
        return "bg-pink-50";
      case "Follow-up":
        return "bg-purple-50";
      default:
        return "bg-gray-50";
    }
  };

  const getTypeTextColor = (type) => {
    switch (type) {
      case "Individual":
        return "text-cyan-700";
      case "Group":
        return "text-blue-700";
      case "Parent-Teacher":
        return "text-pink-700";
      case "Follow-up":
        return "text-purple-700";
      default:
        return "text-gray-700";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700 border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Counselling Schedule Management
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Manage your counselling sessions and track student appointments
          </p>
        </div>
        <button
          onClick={onScheduleSession}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105 font-medium"
        >
          <Plus size={20} />
          <span>Schedule New Session</span>
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-4 border border-cyan-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-lg text-white">
              <Calendar size={20} />
            </div>
            <p className="text-cyan-700 font-medium text-sm">
              Today's Sessions
            </p>
          </div>
          <p className="text-3xl font-bold text-cyan-700">
            {weeklyStats.todaySessions}
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-white">
              <Users size={20} />
            </div>
            <p className="text-blue-700 font-medium text-sm">This Week</p>
          </div>
          <p className="text-3xl font-bold text-blue-700">
            {weeklyStats.weekTotal}
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-4 border border-pink-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg text-white">
              <CheckCircle size={20} />
            </div>
            <p className="text-pink-700 font-medium text-sm">Completion Rate</p>
          </div>
          <p className="text-3xl font-bold text-pink-700">
            {weeklyStats.completionRate}%
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 border border-purple-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg text-white">
              <Clock size={20} />
            </div>
            <p className="text-purple-700 font-medium text-sm">Avg Duration</p>
          </div>
          <p className="text-3xl font-bold text-purple-700">
            {weeklyStats.avgDuration} min
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex items-center gap-2 text-gray-600">
          <Filter size={18} />
          <span className="text-sm font-medium">Filter by Type:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", ...sessionTypes.map((st) => st.type)].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filterType === type
                  ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Sessions List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Calendar size={22} className="text-blue-500" />
          Upcoming Sessions ({filteredSessions.length})
        </h3>

        {filteredSessions.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl">
            <AlertCircle size={48} className="mx-auto text-gray-400 mb-3" />
            <p className="text-gray-600 font-medium">
              No sessions found for this filter
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Try selecting a different filter or schedule a new session
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                className={`${getTypeBgColor(session.type)} rounded-2xl p-5 border-2 ${
                  session.priority === "High"
                    ? "border-red-300"
                    : "border-transparent"
                } hover:shadow-md transition-all duration-200`}
              >
                {/* Session Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 bg-gradient-to-r ${getTypeColor(session.type)} rounded-lg text-white`}
                    >
                      {getTypeIcon(session.type)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {session.studentName}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {session.studentId} • {session.class}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(session.priority)}`}
                  >
                    {session.priority}
                  </span>
                </div>

                {/* Session Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar size={16} className="text-gray-500" />
                    <span>{session.date}</span>
                    <span className="text-gray-400">•</span>
                    <Clock size={16} className="text-gray-500" />
                    <span>{session.time}</span>
                    <span className="text-gray-400">
                      ({session.duration} min)
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <AlertCircle size={16} className="text-gray-500 mt-0.5" />
                    <span
                      className={`font-medium ${getTypeTextColor(session.type)}`}
                    >
                      {session.topic}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${getTypeBgColor(session.type)} ${getTypeTextColor(session.type)}`}
                    >
                      {session.type} Session
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200">
                  <button
                    onClick={() => console.log("View session:", session.id)}
                    className="flex items-center gap-1 px-3 py-2 bg-white text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-50 transition-colors"
                  >
                    <Eye size={14} />
                    View
                  </button>
                  <button
                    onClick={() => onReschedule(session.id)}
                    className="flex items-center gap-1 px-3 py-2 bg-white text-purple-600 rounded-lg text-xs font-medium hover:bg-purple-50 transition-colors"
                  >
                    <RefreshCw size={14} />
                    Reschedule
                  </button>
                  <button
                    onClick={() => onCancel(session.id)}
                    className="flex items-center gap-1 px-3 py-2 bg-white text-red-600 rounded-lg text-xs font-medium hover:bg-red-50 transition-colors"
                  >
                    <CloseIcon size={14} />
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CounsellingSchedule;
