import React, { useState } from "react";
import { Receipt, Search, Download, CheckCircle, Clock } from "lucide-react";
import { getCategoryColor } from "../../../../data/parentData";

const TransactionHistory = ({ transactions }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch =
      txn.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || txn.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="relative z-10">
      <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
          <h3 className="font-bold text-slate-800 text-base md:text-lg flex items-center gap-2">
            <Receipt size={20} className="text-cyan-500" />
            Transaction History
          </h3>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={16}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search transactions..."
                className="w-full sm:w-64 pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs md:text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-xs text-slate-500 uppercase border-b-2 border-slate-200 bg-gradient-to-r from-slate-50 to-cyan-50">
              <tr>
                <th className="py-3 px-4 font-bold">Transaction ID</th>
                <th className="py-3 px-4 font-bold">Description</th>
                <th className="py-3 px-4 font-bold">Category</th>
                <th className="py-3 px-4 font-bold">Date</th>
                <th className="py-3 px-4 font-bold">Amount</th>
                <th className="py-3 px-4 font-bold">Status</th>
                <th className="py-3 px-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredTransactions.map((txn) => (
                <tr
                  key={txn.id}
                  className="hover:bg-gradient-to-r hover:from-cyan-50/50 hover:to-blue-50/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="font-mono text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">
                      {txn.id}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-medium text-slate-700">
                    {txn.description}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`text-xs font-bold bg-gradient-to-r ${getCategoryColor(txn.category)} bg-clip-text text-transparent`}
                    >
                      {txn.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-500">
                    {new Date(txn.date).toLocaleDateString("en-SG", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="py-4 px-4 text-slate-800 font-bold">
                    SGD {txn.amount.toFixed(2)}
                  </td>
                  <td className="py-4 px-4">
                    {txn.status === "paid" ? (
                      <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit">
                        <CheckCircle size={12} /> Paid
                      </span>
                    ) : (
                      <span className="text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit">
                        <Clock size={12} /> Pending
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="text-cyan-600 hover:bg-cyan-50 p-2 rounded-lg transition-all hover:scale-110 active:scale-95"
                        title="Download Receipt"
                      >
                        <Download size={16} />
                      </button>
                      <button className="text-slate-400 hover:bg-slate-100 p-2 rounded-lg text-[10px] font-medium transition-all hover:scale-105">
                        View in App
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {filteredTransactions.map((txn) => (
            <div
              key={txn.id}
              className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-xl border border-slate-200 shadow-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="text-xs font-mono text-slate-500 mb-1">
                    {txn.id}
                  </p>
                  <p className="text-sm font-bold text-slate-800 mb-1">
                    {txn.description}
                  </p>
                  <span
                    className={`text-xs font-bold bg-gradient-to-r ${getCategoryColor(txn.category)} bg-clip-text text-transparent`}
                  >
                    {txn.category}
                  </span>
                </div>
                {txn.status === "paid" ? (
                  <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <CheckCircle size={10} /> Paid
                  </span>
                ) : (
                  <span className="text-amber-600 bg-amber-50 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Clock size={10} /> Pending
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                <div>
                  <p className="text-xs text-slate-500">
                    {new Date(txn.date).toLocaleDateString("en-SG")}
                  </p>
                  <p className="text-base font-bold text-slate-800">
                    SGD {txn.amount.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-cyan-600 bg-cyan-50 p-2 rounded-lg">
                    <Download size={16} />
                  </button>
                  <button className="text-slate-600 bg-slate-100 px-3 py-2 rounded-lg text-xs font-medium">
                    View in App
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary moved to separate component or kept here? 
            Original code had it inside the same container. 
            I will expect AnnualSummary to be used separately for cleaner separation, 
            or I can include it here. 
            The plan said AnnualSummary is a separate component. 
            I'll remove it from here and let the parent component render it. 
        */}
      </div>
    </div>
  );
};

export default TransactionHistory;
