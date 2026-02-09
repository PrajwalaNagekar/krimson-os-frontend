import React from "react";
import {
  CheckCircle,
  User,
  Book,
  AlertCircle,
  MessageSquare,
  Send,
  Eye,
} from "lucide-react";

const ApprovedReservations = ({ reservations }) => {
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
        <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
          <CheckCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Ready for Pickup</h2>
          <p className="text-sm text-gray-600">
            Approved reservations awaiting collection
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {reservations.map((reservation) => (
          <div
            key={reservation.id}
            className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border-2 border-green-200 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-4 py-1.5 bg-green-500 text-white rounded-full text-xs font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {reservation.status}
                  </span>
                  <span className="text-xs text-gray-500">
                    Approved {formatDate(reservation.approvedDate)}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {reservation.bookTitle}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  ISBN: {reservation.bookISBN}
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">
                      {reservation.studentName} ({reservation.studentId})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Book className="w-4 h-4 text-cyan-500" />
                    <span className="text-gray-700">
                      {reservation.studentGrade}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-orange-600 font-semibold">
                      Pickup by {formatDate(reservation.pickupDeadline)}
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

              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Send Reminder</span>
                  </div>
                  <div className="text-[10px] opacity-70">get in app</div>
                </button>

                <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>Details</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovedReservations;
