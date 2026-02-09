import React from "react";
import { RefreshCw } from "lucide-react";

const RefundsSummary = ({ data }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl">
          <RefreshCw className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Refunds Summary</h2>
          <p className="text-xs text-gray-600">This month</p>
        </div>
      </div>

      <div className="space-y-3">
        {data.map((refund, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">
                {refund.type}
              </span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${refund.status === "Completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
              >
                {refund.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                {refund.count} requests
              </span>
              <span className="text-lg font-bold text-blue-600">
                {refund.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefundsSummary;
