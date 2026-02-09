import React, { useState } from "react";
import { Download, BarChart3 } from "lucide-react";

const CollectionSummary = ({ monthlyCollection, termCollection }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  const getMaxCollection = () => {
    return Math.max(...monthlyCollection.map((m) => m.target));
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Collection Summary
            </h2>
            <p className="text-sm text-gray-600">
              Monthly collection vs target (in Lakhs ₹)
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
          >
            <option value="month">Monthly</option>
            <option value="term">Term-wise</option>
          </select>

          <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {selectedPeriod === "month" ? (
        <div className="space-y-3">
          {monthlyCollection.map((month, index) => {
            const maxValue = getMaxCollection();
            const collectedWidth = (month.collected / maxValue) * 100;
            const targetWidth = (month.target / maxValue) * 100;

            return (
              <div
                key={index}
                className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-800 w-16">
                    {month.month}
                  </span>
                  <div className="flex-1 px-4">
                    <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-l-full transition-all"
                        style={{ width: `${collectedWidth}%` }}
                      ></div>
                      <div
                        className="absolute left-0 top-0 h-full border-2 border-blue-400 border-dashed rounded-full transition-all"
                        style={{ width: `${targetWidth}%` }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">
                          {month.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span className="text-green-600 font-bold">
                      {formatCurrency(month.collected * 100000)}
                    </span>
                    <span className="text-gray-400">
                      / {formatCurrency(month.target * 100000)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4">
          {termCollection.map((term, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">{term.term}</h3>
                <span
                  className={`text-2xl font-bold ${term.percentage >= 80 ? "text-green-600" : term.percentage >= 60 ? "text-yellow-600" : "text-red-600"}`}
                >
                  {term.percentage}%
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 rounded-xl">
                  <p className="text-xs text-gray-600 mb-1">Collected</p>
                  <p className="text-xl font-bold text-green-700">
                    {formatCurrency(term.collected * 100000)}
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl">
                  <p className="text-xs text-gray-600 mb-1">Target</p>
                  <p className="text-xl font-bold text-blue-700">
                    {formatCurrency(term.target * 100000)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionSummary;
