import React from "react";
import { Activity, Receipt } from "lucide-react";
import { getColorClasses, getStatusColor, getStatusIcon } from "./utils";

const LiveCollectionDashboard = ({ liveReceipts, feeCategories }) => {
  const getCategoryColor = (categoryName) => {
    const cat = feeCategories.find((c) => c.name === categoryName);
    return cat ? cat.color : "slate";
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
      {/* Enhanced Header with Gradient */}
      <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 px-8 py-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
              Live Collection Dashboard
              <span className="flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Live
              </span>
            </h2>
            <p className="text-sm text-slate-500 flex items-center gap-2">
              <Activity size={14} className="text-blue-500" />
              Real-time payment receipts from gateway APIs
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-4 py-2 bg-white text-blue-600 rounded-xl text-sm font-bold border border-blue-100 shadow-sm">
              {liveReceipts.length} Receipts Today
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Receipt ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Student
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Payment Method
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Gateway
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-right text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {liveReceipts.map((receipt) => (
              <tr
                key={receipt.id}
                className="hover:bg-blue-50/20 transition-colors group"
              >
                <td className="px-4 py-4">
                  <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
                    {receipt.id}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div>
                    <p className="font-bold text-slate-700 text-sm">
                      {receipt.studentName}
                    </p>
                    <p className="text-xs text-slate-400">
                      {receipt.studentId}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-bold border ${getColorClasses(getCategoryColor(receipt.category)).bg} ${getColorClasses(getCategoryColor(receipt.category)).text} ${getColorClasses(getCategoryColor(receipt.category)).border}`}
                  >
                    {receipt.category}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="font-bold text-slate-800">
                    {receipt.amount}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-semibold text-slate-600">
                    {receipt.paymentMethod}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                    {receipt.gateway}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs text-slate-600">
                    {receipt.timestamp}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 w-fit border ${getStatusColor(receipt.status)}`}
                  >
                    {getStatusIcon(receipt.status)}
                    {receipt.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <button className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-all flex flex-col items-center ml-auto">
                    <div className="flex items-center gap-1">
                      <Receipt size={14} />
                      View
                    </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
        <p className="text-xs text-slate-500 font-medium">
          <span className="font-bold text-slate-700">PDPA Compliance:</span>{" "}
          Parent banking details are not stored or displayed in this system.
        </p>
        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md border border-green-200">
          ✓ Compliant
        </span>
      </div>
    </div>
  );
};

export default LiveCollectionDashboard;
