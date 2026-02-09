import React from "react";
import { BarChart3 } from "lucide-react";

const TermWiseCollectionChart = ({ termWiseCollection }) => {
  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  const getMaxCollection = () => {
    return Math.max(...termWiseCollection.map((t) => t.target));
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Term-wise Collection Overview
          </h2>
          <p className="text-sm text-gray-600">
            Collection vs Target analysis (in Lakhs ₹)
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {termWiseCollection.map((term, index) => {
          const maxValue = getMaxCollection();
          const collectedWidth = (term.collected / maxValue) * 100;
          const pendingWidth = (term.pending / maxValue) * 100;

          return (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {term.term}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Target: {formatCurrency(term.target * 100000)}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-2xl font-bold ${term.percentage >= 80 ? "text-green-600" : term.percentage >= 60 ? "text-yellow-600" : "text-red-600"}`}
                  >
                    {term.percentage}%
                  </p>
                  <p className="text-xs text-gray-500">Collection Rate</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-green-50 rounded-xl border border-green-100">
                  <p className="text-xs text-gray-600 mb-1">Collected</p>
                  <p className="text-lg font-bold text-green-700">
                    {formatCurrency(term.collected * 100000)}
                  </p>
                </div>
                <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                  <p className="text-xs text-gray-600 mb-1">Pending</p>
                  <p className="text-lg font-bold text-red-700">
                    {formatCurrency(term.pending * 100000)}
                  </p>
                </div>
              </div>

              <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-l-full transition-all"
                  style={{ width: `${collectedWidth}%` }}
                ></div>
                <div
                  className="absolute top-0 h-full bg-gradient-to-r from-red-400 to-pink-500 transition-all"
                  style={{
                    left: `${collectedWidth}%`,
                    width: `${pendingWidth}%`,
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-700 mix-blend-difference">
                    Collected: {term.percentage}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TermWiseCollectionChart;
