import React, { useState } from "react";
import { DollarSign } from "lucide-react";

const RevenueCollection = ({ data }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else {
      return `₹${amount.toLocaleString("en-IN")}`;
    }
  };

  const getMaxRevenue = () => {
    // Assuming this logic was based on surplusDeficit history in the original file,
    // but here we might want to base it on the current data or pass it in.
    // In the original file: getMaxRevenue uses surplusDeficit.history.map(h => h.revenue)
    // But revenueData.monthly.breakdown also has revenue.
    // Let's use the monthly breakdown for max value if available, or just recalculate.
    if (data.monthly && data.monthly.breakdown) {
      return Math.max(...data.monthly.breakdown.map((m) => m.revenue));
    }
    return 0;
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Revenue Collection Trends
            </h2>
            <p className="text-sm text-gray-600">
              Monthly collection performance
            </p>
          </div>
        </div>

        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
        >
          <option value="monthly">Monthly View</option>
          <option value="term">Term View</option>
          <option value="annual">Annual View</option>
        </select>
      </div>

      {selectedPeriod === "monthly" && (
        <div className="space-y-3">
          {data.monthly.breakdown.map((month, index) => {
            const maxValue = getMaxRevenue();
            const widthPercentage = (month.revenue / maxValue) * 100;

            return (
              <div
                key={index}
                className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-800 w-12">
                    {month.month}
                  </span>
                  <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {formatCurrency(month.revenue)}
                  </span>
                </div>
                <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all"
                    style={{ width: `${widthPercentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {selectedPeriod === "term" && (
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(data.term).map(([key, term], index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200"
            >
              <h3 className="font-bold text-gray-800 mb-4 capitalize">
                {key.replace(/(\d)/, " $1")}
              </h3>
              <div className="mb-4">
                <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {term.percentage}%
                </p>
                <p className="text-xs text-gray-500">Collection Rate</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Collected:</span>
                  <span className="font-bold text-green-700">
                    {formatCurrency(term.collected)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Target:</span>
                  <span className="font-bold text-blue-700">
                    {formatCurrency(term.target)}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 mt-3">
                <div
                  className={`h-full rounded-full transition-all ${
                    term.percentage >= 80
                      ? "bg-gradient-to-r from-green-400 to-emerald-500"
                      : "bg-gradient-to-r from-yellow-400 to-orange-500"
                  }`}
                  style={{ width: `${term.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedPeriod === "annual" && (
        <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
          <div className="text-center mb-6">
            <p className="text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              {data.annual.percentage}%
            </p>
            <p className="text-sm text-gray-600">Annual Collection Rate</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Total Collected</p>
              <p className="text-2xl font-bold text-green-700">
                {formatCurrency(data.annual.collected)}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Annual Target</p>
              <p className="text-2xl font-bold text-blue-700">
                {formatCurrency(data.annual.target)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RevenueCollection;
