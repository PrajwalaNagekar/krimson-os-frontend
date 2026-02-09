import React from "react";
import {
  Clock,
  Calendar,
  User,
  Book,
  MessageSquare,
  CheckCircle,
  Bell,
  XCircle,
  Eye,
} from "lucide-react";

const ReservationQueue = ({ queue }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
          <Clock className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Reservation Queue
          </h2>
          <p className="text-sm text-gray-600">
            Pending approval sorted by priority
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {queue.map((reservation) => (
          <div
            key={reservation.id}
            className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getPriorityColor(reservation.priority)}`}
                  >
                    {reservation.priority} priority
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    Position #{reservation.position}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Requested {formatDate(reservation.requestDate)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {reservation.bookTitle}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  ISBN: {reservation.bookISBN}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">
                      {reservation.studentName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Book className="w-4 h-4 text-cyan-500" />
                    <span className="text-gray-700">
                      {reservation.studentId} • {reservation.studentGrade}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-pink-500" />
                    <span className="text-gray-700">
                      Expected: {formatDate(reservation.expectedAvailable)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MessageSquare className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-700">
                      {reservation.contactEmail}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
              <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Approve</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>

              <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  <span>Notify Available</span>
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

              <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>View Details</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationQueue;
