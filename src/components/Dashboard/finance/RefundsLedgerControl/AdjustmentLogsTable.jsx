import React from "react";
import { Activity, Plus, CheckCircle, Eye, FileText } from "lucide-react";
import Pagination from "../../../../components/common/Pagination";

const AdjustmentLogsTable = ({
  adjustmentLogs,
  currentPage,
  itemsPerPage,
  setCurrentPage,
}) => {
  const getTypeColor = (type) => {
    return type === "Credit Note"
      ? "bg-green-100 text-green-700 border-green-200"
      : "bg-orange-100 text-orange-700 border-orange-200";
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
          <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Adjustment Logs
            </h2>
            <p className="text-sm text-gray-600">
              Credit & Debit notes with audit traceability
            </p>
          </div>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>New Adjustment</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                ID
              </th>
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Type
              </th>
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Student
              </th>
              <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">
                Amount
              </th>
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Reason
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Date
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Status
              </th>
              <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {adjustmentLogs
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage,
              )
              .map((log) => (
                <tr
                  key={log.id}
                  className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors"
                >
                  <td className="p-4">
                    <span className="text-sm font-mono text-blue-600">
                      {log.id}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getTypeColor(log.type)}`}
                    >
                      {log.type}
                    </span>
                  </td>
                  <td className="p-4">
                    <div>
                      <p className="font-bold text-gray-800">
                        {log.studentName}
                      </p>
                      <p className="text-xs text-gray-600">{log.studentId}</p>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span
                      className={`text-lg font-bold ${log.type === "Credit Note" ? "text-green-600" : "text-orange-600"}`}
                    >
                      {log.type === "Credit Note" ? "+" : "-"}
                      {formatCurrency(log.amount)}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-gray-700">{log.reason}</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-sm text-gray-700">
                      {formatDate(log.date)}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      <CheckCircle className="w-3 h-3 inline mr-1" />
                      {log.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-blue-500" />
                      </button>
                      <button className="p-2 hover:bg-green-50 rounded-lg transition-colors">
                        <FileText className="w-4 h-4 text-green-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(adjustmentLogs.length / itemsPerPage)}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={adjustmentLogs.length}
        />
      </div>
    </div>
  );
};

export default AdjustmentLogsTable;
