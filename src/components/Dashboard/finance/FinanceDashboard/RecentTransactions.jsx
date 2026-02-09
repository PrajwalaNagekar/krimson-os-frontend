import React, { useState } from "react";
import {
  Activity,
  Eye,
  CreditCard,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import Pagination from "../../../common/Pagination";

const RecentTransactions = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700 border-green-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Failed":
        return "bg-red-100 text-red-700 border-red-200";
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
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Recent Transactions
            </h2>
            <p className="text-sm text-gray-600">Last 10 payment activities</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
          <Eye className="w-4 h-4" />
          <span>View All</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Transaction ID
              </th>
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Student Details
              </th>
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Type
              </th>
              <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">
                Amount
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Mode
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Date & Time
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage,
              )
              .map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors"
                >
                  <td className="p-4">
                    <span className="text-xs font-mono text-gray-600">
                      {transaction.id}
                    </span>
                  </td>
                  <td className="p-4">
                    <div>
                      <p className="font-bold text-gray-800">
                        {transaction.studentName}
                      </p>
                      <p className="text-xs text-gray-600">
                        {transaction.studentId} • {transaction.grade}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                      {transaction.type}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-lg font-bold text-gray-800">
                      {transaction.amount}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <CreditCard className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-700">
                        {transaction.paymentMode}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm text-gray-700">
                        {formatDate(transaction.date)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {transaction.time}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(transaction.status)}`}
                    >
                      {transaction.status === "Paid" && (
                        <CheckCircle className="w-3 h-3 inline mr-1" />
                      )}
                      {transaction.status === "Failed" && (
                        <XCircle className="w-3 h-3 inline mr-1" />
                      )}
                      {transaction.status === "Pending" && (
                        <Clock className="w-3 h-3 inline mr-1" />
                      )}
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(transactions.length / itemsPerPage)}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={transactions.length}
        />
      </div>
    </div>
  );
};

export default RecentTransactions;
