import React from "react";
import { TrendingUp, CheckCircle } from "lucide-react";

const MonthlyReconciliationSummary = ({ reconciliationData }) => {
  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Monthly Reconciliation
            </h2>
            <p className="text-sm text-gray-600">{reconciliationData.month}</p>
          </div>
        </div>
        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${reconciliationData.reconciliationStatus === "Balanced" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
        >
          <CheckCircle className="w-4 h-4 inline mr-1" />
          {reconciliationData.reconciliationStatus}
        </span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
          <p className="text-xs text-gray-600 mb-2">Total Refunds</p>
          <p className="text-2xl font-bold text-blue-700">
            {formatCurrency(reconciliationData.totalRefunds)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {reconciliationData.completedTransactions} transactions
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
          <p className="text-xs text-gray-600 mb-2">Credit Notes</p>
          <p className="text-2xl font-bold text-green-700">
            {formatCurrency(reconciliationData.creditNotes)}
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100">
          <p className="text-xs text-gray-600 mb-2">Debit Notes</p>
          <p className="text-2xl font-bold text-orange-700">
            {formatCurrency(reconciliationData.debitNotes)}
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
          <p className="text-xs text-gray-600 mb-2">Pending Approvals</p>
          <p className="text-2xl font-bold text-purple-700">
            {formatCurrency(reconciliationData.pendingApprovals)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyReconciliationSummary;
