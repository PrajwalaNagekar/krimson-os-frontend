import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const SurplusDeficitAnalysis = ({ data }) => {
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
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className={`p-3 bg-gradient-to-br ${
              data.status === "surplus"
                ? "from-green-400 to-emerald-500"
                : "from-red-400 to-pink-500"
            } rounded-xl`}
          >
            {data.status === "surplus" ? (
              <TrendingUp className="w-6 h-6 text-white" />
            ) : (
              <TrendingDown className="w-6 h-6 text-white" />
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Surplus/Deficit Analysis
            </h2>
            <p className="text-sm text-gray-600">
              6-month financial performance
            </p>
          </div>
        </div>
        <div
          className={`px-6 py-3 rounded-2xl ${
            data.status === "surplus" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <p className="text-sm text-gray-600 mb-1">Current Status</p>
          <p
            className={`text-2xl font-bold ${
              data.status === "surplus" ? "text-green-700" : "text-red-700"
            } capitalize`}
          >
            {data.status}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {data.history.map((month, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-gray-800 text-lg">
                {month.month}
              </span>
              <div className="text-right">
                <p
                  className={`text-2xl font-bold ${
                    month.surplus >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {month.surplus >= 0 ? "+" : ""}
                  {formatCurrency(month.surplus)}
                </p>
                <p className="text-xs text-gray-500">
                  {month.surplus >= 0 ? "Surplus" : "Deficit"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="p-3 bg-green-50 rounded-xl">
                <p className="text-xs text-gray-600 mb-1">Revenue</p>
                <p className="font-bold text-green-700">
                  {formatCurrency(month.revenue)}
                </p>
              </div>
              <div className="p-3 bg-red-50 rounded-xl">
                <p className="text-xs text-gray-600 mb-1">Expense</p>
                <p className="font-bold text-red-700">
                  {formatCurrency(month.expense)}
                </p>
              </div>
            </div>

            <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 to-emerald-500"
                style={{
                  width: `${(month.expense / month.revenue) * 100}%`,
                }}
              ></div>
              <div
                className="absolute right-0 top-0 h-full bg-gradient-to-r from-blue-400 to-cyan-500"
                style={{
                  width: `${(month.surplus / month.revenue) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurplusDeficitAnalysis;
