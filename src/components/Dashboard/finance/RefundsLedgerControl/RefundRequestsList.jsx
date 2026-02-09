import React, { useEffect } from "react";
import {
  RefreshCw,
  FileText,
  Check,
  X,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  Calendar,
  User,
  AlertCircle,
} from "lucide-react";
import Pagination from "../../../../components/common/Pagination";

const RefundRequestsList = ({
  refundRequests,
  currentPage,
  itemsPerPage,
  setCurrentPage,
  selectedTab,
  setSelectedTab,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Approved":
        return "bg-green-100 text-green-700 border-green-200";
      case "Rejected":
        return "bg-red-100 text-red-700 border-red-200";
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

  const filteredRequests = refundRequests.filter((req) => {
    switch (selectedTab) {
      case "pending":
        return req.status === "Pending";
      case "approved":
        return req.status === "Approved";
      case "rejected":
        return req.status === "Rejected";
      default:
        return true;
    }
  });

  // Reset page when tab changes
  useEffect(() => {
    if (setCurrentPage) {
      setCurrentPage(1);
    }
  }, [selectedTab, setCurrentPage]);

  return (
    <>
      {/* Tab Navigation */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20 flex gap-2">
        <button
          onClick={() => setSelectedTab("pending")}
          className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === "pending" ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}
        >
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            <span>
              Pending (
              {refundRequests.filter((r) => r.status === "Pending").length})
            </span>
          </div>
        </button>
        <button
          onClick={() => setSelectedTab("approved")}
          className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === "approved" ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}
        >
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>
              Approved (
              {refundRequests.filter((r) => r.status === "Approved").length})
            </span>
          </div>
        </button>
        <button
          onClick={() => setSelectedTab("rejected")}
          className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === "rejected" ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}
        >
          <div className="flex items-center justify-center gap-2">
            <XCircle className="w-4 h-4" />
            <span>
              Rejected (
              {refundRequests.filter((r) => r.status === "Rejected").length})
            </span>
          </div>
        </button>
      </div>

      {/* Refund Requests List */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
            <RefreshCw className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Refund Requests
            </h2>
            <p className="text-sm text-gray-600">
              Approval workflow: Admin → Finance Head
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {filteredRequests
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((request) => (
              <div
                key={request.id}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold font-mono">
                        {request.id}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(request.status)}`}
                      >
                        {request.status === "Pending" && (
                          <Clock className="w-3 h-3 inline mr-1" />
                        )}
                        {request.status === "Approved" && (
                          <CheckCircle className="w-3 h-3 inline mr-1" />
                        )}
                        {request.status === "Rejected" && (
                          <XCircle className="w-3 h-3 inline mr-1" />
                        )}
                        {request.status}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        {request.approvalStage}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {request.studentName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {request.studentId} • {request.grade}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-3">
                      <div className="flex items-center gap-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-700">
                          Reason:{" "}
                          <span className="font-semibold">
                            {request.reason}
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700">
                          Requested: {formatDate(request.requestDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <User className="w-4 h-4 text-purple-500" />
                        <span className="text-gray-700">
                          By: {request.requestedBy}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FileText className="w-4 h-4 text-cyan-500" />
                        <span className="text-gray-700">
                          Txn: {request.linkedTransaction}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mb-3">
                      <p className="text-sm text-gray-700">
                        {request.description}
                      </p>
                      {request.refundMode && (
                        <p className="text-xs text-gray-600 mt-2">
                          Refund Mode:{" "}
                          <span className="font-semibold">
                            {request.refundMode}
                          </span>
                          {request.accountDetails &&
                            ` • Account: ${request.accountDetails}`}
                        </p>
                      )}
                    </div>

                    {request.rejectionReason && (
                      <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                        <p className="text-sm text-red-700">
                          <strong>Rejection Reason:</strong>{" "}
                          {request.rejectionReason}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Rejected by {request.rejectedBy} on{" "}
                          {formatDate(request.rejectedDate)}
                        </p>
                      </div>
                    )}

                    {request.approvedBy && (
                      <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                        <p className="text-sm text-green-700">
                          Approved by {request.approvedBy} on{" "}
                          {formatDate(request.approvedDate)}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="lg:w-64 space-y-3">
                    <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 text-center">
                      <p className="text-xs text-gray-600 mb-1">
                        Refund Amount
                      </p>
                      <p className="text-3xl font-bold text-green-700">
                        {formatCurrency(request.amount)}
                      </p>
                    </div>

                    {request.status === "Pending" && (
                      <div className="flex flex-col gap-2">
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4" />
                            <span>Approve</span>
                          </div>
                          <div className="text-[10px] opacity-70">
                            get in app
                          </div>
                        </button>
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                          <div className="flex items-center gap-2">
                            <X className="w-4 h-4" />
                            <span>Reject</span>
                          </div>
                          <div className="text-[10px] opacity-70">
                            get in app
                          </div>
                        </button>
                      </div>
                    )}

                    <button className="w-full px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>View Ledger</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredRequests.length / itemsPerPage)}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredRequests.length}
        />
      </div>
    </>
  );
};

export default RefundRequestsList;
