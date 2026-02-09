import React from "react";
import {
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Download,
  Mail,
  RefreshCw,
  Filter,
  Activity,
  CreditCard,
  DollarSign,
  Receipt,
} from "lucide-react";
import Pagination from "../../../../components/common/Pagination";

const InvoiceTable = ({
  filteredInvoices,
  currentPage,
  itemsPerPage,
  setCurrentPage,
}) => {
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

  const getPaymentModeIcon = (mode) => {
    switch (mode) {
      case "Online":
        return <Activity className="w-4 h-4" />;
      case "Card":
        return <CreditCard className="w-4 h-4" />;
      case "Cash":
        return <DollarSign className="w-4 h-4" />;
      case "Cheque":
        return <Receipt className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
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
          <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Invoices & Payments
            </h2>
            <p className="text-sm text-gray-600">
              Showing {filteredInvoices.length} invoices
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Invoice ID
              </th>
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Student Details
              </th>
              <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">
                Amount
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Due Date
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Payment Info
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
            {filteredInvoices
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage,
              )
              .map((invoice) => (
                <tr
                  key={invoice.invoiceId}
                  className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-mono text-gray-700">
                        {invoice.invoiceId}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div>
                      <p className="font-bold text-gray-800">
                        {invoice.studentName}
                      </p>
                      <p className="text-xs text-gray-600">
                        {invoice.studentId} • {invoice.grade}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-lg font-bold text-gray-800">
                      {formatCurrency(invoice.amount)}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <Calendar className="w-4 h-4 text-orange-500 mb-1" />
                      <span className="text-sm text-gray-700">
                        {formatDate(invoice.dueDate)}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    {invoice.paymentDate ? (
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1">
                          {getPaymentModeIcon(invoice.paymentMode)}
                          <span className="text-sm font-semibold text-gray-700">
                            {invoice.paymentMode}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {invoice.gateway}
                        </span>
                        <span className="text-xs text-gray-400 font-mono">
                          {invoice.transactionId}
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">-</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border-2 inline-flex items-center gap-1 ${getStatusColor(invoice.status)}`}
                    >
                      {invoice.status === "Paid" && (
                        <CheckCircle className="w-3 h-3" />
                      )}
                      {invoice.status === "Pending" && (
                        <Clock className="w-3 h-3" />
                      )}
                      {invoice.status === "Failed" && (
                        <XCircle className="w-3 h-3" />
                      )}
                      {invoice.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <button
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4 text-blue-500" />
                      </button>
                      {invoice.receiptGenerated && (
                        <>
                          <button
                            className="p-2 hover:bg-green-50 rounded-lg transition-colors"
                            title="Download Receipt"
                          >
                            <Download className="w-4 h-4 text-green-500" />
                          </button>
                          <button
                            className="p-2 hover:bg-purple-50 rounded-lg transition-colors"
                            title="Email Receipt"
                          >
                            <Mail className="w-4 h-4 text-purple-500" />
                          </button>
                        </>
                      )}
                      {invoice.status === "Failed" && (
                        <button
                          className="p-2 hover:bg-orange-50 rounded-lg transition-colors"
                          title="Retry Payment"
                        >
                          <RefreshCw className="w-4 h-4 text-orange-500" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredInvoices.length / itemsPerPage)}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredInvoices.length}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200">
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Download All Receipts</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>

        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>Email Receipts</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>

        <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
          <Filter className="w-4 h-4" />
          <span>Advanced Filters</span>
        </button>
      </div>
    </div>
  );
};

export default InvoiceTable;
