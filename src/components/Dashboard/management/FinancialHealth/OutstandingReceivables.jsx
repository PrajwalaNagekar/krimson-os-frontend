import React from "react";
import { AlertCircle } from "lucide-react";

const OutstandingReceivables = ({ data }) => {
  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else {
      return `₹${amount.toLocaleString("en-IN")}`;
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
          <AlertCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Outstanding Receivables
          </h2>
          <p className="text-sm text-gray-600">Breakdown by category</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">
          {formatCurrency(data.total)}
        </p>
        <p className="text-sm text-gray-600">Total Outstanding</p>
      </div>

      <div className="space-y-3">
        {data.byCategory.map((cat, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-800">
                {cat.category}
              </span>
              <span className="text-sm font-bold text-orange-700">
                {formatCurrency(cat.amount)}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-gray-100 rounded-full h-2">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-400 to-yellow-500"
                  style={{ width: `${cat.percentage}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-600">
                {cat.count} students
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutstandingReceivables;
