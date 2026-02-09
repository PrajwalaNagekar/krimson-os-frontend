import React from "react";
import {
  AlertTriangle,
  Users,
  Calendar,
  Phone,
  Mail,
  Send,
  Eye,
  Bell,
  RefreshCw,
  CheckCircle,
  Clock,
} from "lucide-react";
import Pagination from "../../../../components/common/Pagination";

const DefaultersList = ({
  defaulters,
  currentPage,
  itemsPerPage,
  setCurrentPage,
  totalItems,
}) => {
  const getFollowUpStatusColor = (status) => {
    switch (status) {
      case "Sent":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Replied":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Paid":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getFollowUpIcon = (status) => {
    switch (status) {
      case "Sent":
        return <Send className="w-3 h-3" />;
      case "Replied":
        return <Mail className="w-3 h-3" />;
      case "Paid":
        return <CheckCircle className="w-3 h-3" />;
      default:
        return <Clock className="w-3 h-3" />;
    }
  };

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
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
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Fee Defaulters List
            </h2>
            <p className="text-sm text-gray-600">
              Students with pending dues requiring follow-up
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {defaulters.map((defaulter) => (
          <div
            key={defaulter.id}
            className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-red-100 hover:border-red-200 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getFollowUpStatusColor(defaulter.followUpStatus)}`}
                  >
                    <div className="flex items-center gap-1">
                      {getFollowUpIcon(defaulter.followUpStatus)}
                      <span>{defaulter.followUpStatus}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                    {defaulter.daysOverdue} days overdue
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {defaulter.reminderCount} reminders
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {defaulter.studentName}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">
                      {defaulter.studentId} • {defaulter.grade}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-700">
                      Due: {formatDate(defaulter.dueDate)}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mb-3">
                  <p className="text-xs text-gray-600 mb-2">
                    Parent Contact Details
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-800">
                        {defaulter.parentName}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">
                        {defaulter.parentContact}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm col-span-2">
                      <Mail className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">
                        {defaulter.parentEmail}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    Class Teacher:{" "}
                    <span className="font-semibold text-gray-800">
                      {defaulter.classTeacher}
                    </span>
                  </span>
                  <span className="text-gray-600">
                    Last Reminder:{" "}
                    <span className="font-semibold text-gray-800">
                      {formatDate(defaulter.lastReminder)}
                    </span>
                  </span>
                </div>
              </div>

              <div className="lg:w-64 space-y-3">
                <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border-2 border-red-200 text-center">
                  <p className="text-xs text-gray-600 mb-1">Total Due</p>
                  <p className="text-3xl font-bold text-red-600">
                    {formatCurrency(defaulter.totalDue)}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Send Reminder</span>
                    </div>
                    <div className="text-[10px] opacity-70">get in app</div>
                  </button>

                  <button className="w-full px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalItems / itemsPerPage)}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
      />

      {/* Bulk Actions */}
      <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            <span>Send All Reminders</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>

        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>Email Teachers</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>

        <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
          <RefreshCw className="w-4 h-4" />
          <span>Refresh Data</span>
        </button>
      </div>
    </div>
  );
};

export default DefaultersList;
