import React from "react";
import { FileText, ArrowRight, ArrowLeft } from "lucide-react";

const TransactionHistory = ({ transactions, formatDate }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Recent Transactions
            </h2>
            <p className="text-sm text-gray-600">Today's activity log</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${transaction.type === "Issue" ? "bg-gradient-to-r from-green-500 to-emerald-500" : "bg-gradient-to-r from-blue-500 to-cyan-500"}`}
                  >
                    {transaction.type === "Issue" ? (
                      <ArrowRight className="w-3 h-3 inline mr-1" />
                    ) : (
                      <ArrowLeft className="w-3 h-3 inline mr-1" />
                    )}
                    {transaction.type}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                    {transaction.barcode}
                  </span>
                  {transaction.daysOverdue > 0 && (
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                      Fine: ₹{transaction.fine}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-gray-800 mb-1">
                  {transaction.bookTitle}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {transaction.memberName} • {transaction.memberId} •{" "}
                  {transaction.memberType}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                  <span>ISBN: {transaction.bookISBN}</span>
                  <span>•</span>
                  <span>
                    {transaction.type === "Issue" ? "Issued" : "Returned"}:{" "}
                    {formatDate(
                      transaction.type === "Issue"
                        ? transaction.issueDate
                        : transaction.returnDate,
                    )}
                  </span>
                  <span>•</span>
                  <span>Due: {formatDate(transaction.dueDate)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-4 py-2 rounded-xl text-sm font-semibold ${transaction.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                >
                  {transaction.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
