import React from "react";
import { FileText, Eye } from "lucide-react";
import { getStatusColor, getStatusIcon } from "./utils";

const RefundsLog = ({ refundsLog }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
      {/* Enhanced Header with Gradient */}
      <div className="bg-gradient-to-r from-slate-50 via-amber-50 to-slate-50 px-8 py-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-1">
              Refunds & Adjustments Log
            </h2>
            <p className="text-sm text-slate-500 flex items-center gap-2">
              <FileText size={14} className="text-amber-500" />
              Track refund requests and fee adjustments
            </p>
          </div>
          <span className="px-4 py-2 bg-white text-amber-700 rounded-xl text-sm font-bold border border-amber-200 shadow-sm">
            {refundsLog.filter((r) => r.status === "Pending").length} Pending
            Approval
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Ref ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Student
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Original Amount
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Refund Amount
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Reason
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
            {refundsLog.map((refund) => (
              <tr
                key={refund.id}
                className="hover:bg-amber-50/20 transition-colors"
              >
                <td className="px-4 py-4">
                  <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
                    {refund.id}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div>
                    <p className="font-bold text-slate-700 text-sm">
                      {refund.studentName}
                    </p>
                    <p className="text-xs text-slate-400">{refund.studentId}</p>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs font-bold text-slate-600 bg-slate-50 px-2 py-1 rounded-md border border-slate-200">
                    {refund.category}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-slate-500">
                    {refund.originalAmount}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="font-bold text-red-600">
                    {refund.refundAmount}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <p className="text-xs text-slate-600 max-w-[200px] truncate">
                    {refund.reason}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 w-fit border ${getStatusColor(refund.status)}`}
                  >
                    {getStatusIcon(refund.status)}
                    {refund.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <button className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all ml-auto">
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      Details
                    </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RefundsLog;
