import React from "react";
import { DollarSign } from "lucide-react";

const getStatusColor = (status) => {
  switch (status) {
    case "good":
      return "bg-green-500";
    case "warning":
      return "bg-yellow-500";
    case "critical":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const formatCurrency = (amount) => {
  return `₹${(amount / 100000).toFixed(2)}L`;
};

const FeeCollectionEfficiency = ({ data }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Fee Collection Efficiency
            </h2>
            <p className="text-sm text-gray-600">
              Collected vs Expected (Academic Year)
            </p>
          </div>
        </div>
        <div
          className={`px-4 py-2 rounded-full ${data.status === "good" ? "bg-green-100" : "bg-yellow-100"} flex items-center gap-2`}
        >
          <div
            className={`w-3 h-3 rounded-full ${getStatusColor(data.status)} animate-pulse`}
          ></div>
          <span
            className={`font-bold ${data.status === "good" ? "text-green-700" : "text-yellow-700"}`}
          >
            {data.percentage}% Collection Rate
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
          <p className="text-sm text-gray-600 mb-1">Total Collected</p>
          <p className="text-3xl font-bold text-green-700">
            {formatCurrency(data.collected)}
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
          <p className="text-sm text-gray-600 mb-1">Expected</p>
          <p className="text-3xl font-bold text-blue-700">
            {formatCurrency(data.expected)}
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 border border-red-100">
          <p className="text-sm text-gray-600 mb-1">Outstanding</p>
          <p className="text-3xl font-bold text-red-700">
            {formatCurrency(data.outstanding)}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-700 mb-3">
          Monthly Collection Trends
        </p>
        {data.monthlyBreakdown.map((month, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="w-12 text-sm font-bold text-gray-700">
              {month.month}
            </span>
            <div className="flex-1 relative h-8 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${month.collected >= 90 ? "bg-gradient-to-r from-green-400 to-emerald-500" : month.collected >= 85 ? "bg-gradient-to-r from-yellow-400 to-orange-500" : "bg-gradient-to-r from-red-400 to-pink-500"}`}
                style={{ width: `${month.collected}%` }}
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                {month.collected}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeCollectionEfficiency;
