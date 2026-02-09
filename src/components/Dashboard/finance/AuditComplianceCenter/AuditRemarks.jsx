import React, { useState } from "react";
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  Calendar,
} from "lucide-react";
import Pagination from "../../../../components/common/Pagination";

const AuditRemarks = ({ remarks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "High":
        return "bg-red-100 text-red-700 border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Low":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Verified":
      case "Resolved":
        return "bg-green-100 text-green-700 border-green-200";
      case "Pending Review":
      case "Pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "In Progress":
      case "Under Review":
        return "bg-blue-100 text-blue-700 border-blue-200";
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
          <AlertTriangle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Audit Remarks & Resolution
          </h2>
          <p className="text-sm text-gray-600">
            Track and resolve audit observations
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {remarks
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((remark) => (
            <div
              key={remark.id}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold font-mono">
                      {remark.id}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getSeverityColor(remark.severity)}`}
                    >
                      {remark.severity} Priority
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(remark.status)}`}
                    >
                      {remark.status === "Resolved" && (
                        <CheckCircle className="w-3 h-3 inline mr-1" />
                      )}
                      {remark.status === "In Progress" && (
                        <Clock className="w-3 h-3 inline mr-1" />
                      )}
                      {remark.status}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                      {remark.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {remark.remark}
                  </h3>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="w-4 h-4 text-purple-500" />
                      <span>Raised by: {remark.raisedBy}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="w-4 h-4 text-cyan-500" />
                      <span>Assigned to: {remark.assignedTo}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span>Due: {formatDate(remark.dueDate)}</span>
                    </div>
                  </div>

                  {remark.status === "Resolved" && remark.resolution && (
                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                      <p className="text-sm font-semibold text-green-800 mb-1">
                        Resolution:
                      </p>
                      <p className="text-sm text-green-700">
                        {remark.resolution}
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        Resolved on {formatDate(remark.resolvedDate)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(remarks.length / itemsPerPage)}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={remarks.length}
      />
    </div>
  );
};

export default AuditRemarks;
