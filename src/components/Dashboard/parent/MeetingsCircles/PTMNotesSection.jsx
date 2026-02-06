import React, { useState } from "react";
import {
  FileText,
  Calendar,
  Clock,
  CheckCircle2,
  Circle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  User,
  Target,
} from "lucide-react";

const PTMNotesSection = ({ ptmNotes }) => {
  const [expandedMeeting, setExpandedMeeting] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700 border-green-300";
      case "In Progress":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "Pending":
        return "bg-amber-100 text-amber-700 border-amber-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle2 className="w-4 h-4" />;
      case "In Progress":
        return <Circle className="w-4 h-4" />;
      case "Pending":
        return <Clock className="w-4 h-4" />;
      default:
        return <Circle className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200";
      case "medium":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Recent Meetings with Notes */}
      {ptmNotes.recentMeetings.map((meeting) => (
        <div
          key={meeting.id}
          className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100"
        >
          {/* Meeting Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                src={meeting.teacherPhoto}
                alt={meeting.teacherName}
                className="w-14 h-14 rounded-full border-2 border-pink-300"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {meeting.teacherName}
                </h3>
                <p className="text-sm text-gray-600">{meeting.subject}</p>
                <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {meeting.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {meeting.time}
                  </div>
                  <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-semibold">
                    {meeting.mode}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Discussion Points */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Key Discussion Points
            </h4>
            <ul className="space-y-2">
              {meeting.discussionPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 flex items-start gap-2"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Items */}
          <div className="space-y-3 mb-4">
            <h4 className="font-bold text-gray-800 flex items-center gap-2">
              <Target className="w-5 h-5 text-pink-600" />
              Action Items
            </h4>
            {meeting.actionItems.map((item) => (
              <div
                key={item.id}
                className={`bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border-2 ${
                  item.status === "Completed"
                    ? "border-green-300"
                    : "border-pink-200"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="mt-0.5">{getStatusIcon(item.status)}</div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800 mb-1">
                        {item.action}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="flex items-center gap-1 text-xs text-gray-600">
                          <User className="w-3 h-3" />
                          {item.assignedTo}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="flex items-center gap-1 text-xs text-gray-600">
                          <Calendar className="w-3 h-3" />
                          Due: {item.dueDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end ml-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getStatusColor(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getPriorityColor(
                        item.priority,
                      )}`}
                    >
                      {item.priority}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Follow-up */}
          {meeting.followUpScheduled && (
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Follow-up Meeting Scheduled
                    </p>
                    <p className="text-xs text-gray-600">
                      {meeting.followUpDate}
                    </p>
                  </div>
                </div>
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PTMNotesSection;
