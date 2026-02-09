import React from "react";
import {
  Clock,
  User,
  FileText,
  Calendar,
  ThumbsUp,
  MessageSquare,
  XCircle,
  Eye,
} from "lucide-react";
import {
  getPriorityColor,
  getTypeColor,
  getTimeAgo,
  formatTimestamp,
} from "./utils";

const PendingApprovalQueue = ({ queue }) => {
  return (
    <div className="space-y-4">
      {queue.map((item) => (
        <div
          key={item.id}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(item.type)} shadow-md`}
                >
                  {item.type}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getPriorityColor(item.priority)}`}
                >
                  {item.priority} priority
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {getTimeAgo(item.submittedDate)}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>

              {/* Meta Info */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-700">{item.teacher}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4 text-cyan-500" />
                  <span className="text-gray-700">
                    {item.subject} • {item.grade}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-pink-500" />
                  <span className="text-gray-700">
                    Duration: {item.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-700">
                    {formatTimestamp(item.submittedDate)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
            <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                <span>Approve</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>

            <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>Request Revision</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>

            <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                <span>Reject</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>

            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>View Details</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
          </div>

          {/* Comment Section */}
          <div className="mt-4 p-4 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 rounded-2xl border border-cyan-100">
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              Add Comment or Revision Request
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white resize-none"
              rows="3"
              placeholder="Enter your comments, suggestions, or revision requests here..."
              disabled
            ></textarea>
            <p className="text-xs text-gray-500 mt-2">
              * Comments will be visible to the teacher when you take action
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PendingApprovalQueue;
