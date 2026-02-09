import React, { useState } from "react";
import {
  XCircle,
  Calendar,
  User,
  FileText,
  Activity,
  CheckCircle,
} from "lucide-react";
import Pagination from "../../../../components/common/Pagination";

const DiscrepancyList = ({ discrepancies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
            <XCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Flagged Discrepancies
            </h2>
            <p className="text-sm text-gray-600">
              Auto-flagged amounts &gt; ₹1,000 for review
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {discrepancies
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((disc) => (
            <div
              key={disc.id}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-red-100 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold font-mono">
                      {disc.id}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(disc.status)}`}
                    >
                      {disc.status}
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                      {disc.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {disc.description}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-3 mb-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>Detected: {formatDate(disc.detectedDate)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="w-4 h-4 text-purple-500" />
                      <span>Assigned to: {disc.assignedTo}</span>
                    </div>
                    {disc.studentId && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <FileText className="w-4 h-4 text-cyan-500" />
                        <span>Student: {disc.studentId}</span>
                      </div>
                    )}
                    {disc.transactionId && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Activity className="w-4 h-4 text-green-500" />
                        <span>Txn: {disc.transactionId}</span>
                      </div>
                    )}
                  </div>

                  {disc.status === "Resolved" && disc.resolution && (
                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                      <p className="text-sm font-semibold text-green-800 mb-1">
                        Resolution:
                      </p>
                      <p className="text-sm text-green-700">
                        {disc.resolution}
                      </p>
                    </div>
                  )}
                </div>

                <div className="lg:w-48">
                  <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border-2 border-red-200 text-center mb-3">
                    <p className="text-xs text-gray-600 mb-1">
                      Discrepancy Amount
                    </p>
                    <p className="text-2xl font-bold text-red-600">
                      {formatCurrency(disc.amount)}
                    </p>
                  </div>
                  {disc.status === "Under Review" && (
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Mark Resolved</span>
                      </div>
                      <div className="text-[10px] opacity-70">get in app</div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(discrepancies.length / itemsPerPage)}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={discrepancies.length}
      />
    </div>
  );
};

export default DiscrepancyList;
