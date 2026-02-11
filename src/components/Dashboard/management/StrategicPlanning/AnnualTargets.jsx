import React from "react";
import { Target } from "lucide-react";
import { STRATEGIC_PLANNING_DATA } from "../../../../data/managementData";

const AnnualTargets = ({ getStatusColor }) => {
  const { annualTargets } = STRATEGIC_PLANNING_DATA;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
          <Target className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Annual Targets vs Actual
          </h2>
          <p className="text-sm text-gray-600">
            Performance against strategic goals (2024)
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {annualTargets.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-800">{item.category}</h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(item.status)}`}
              >
                {item.status === "exceeded" && "✓ Exceeded"}
                {item.status === "on-track" && "→ On Track"}
                {item.status === "needs-attention" && "! Attention"}
              </span>
            </div>

            <div className="mb-3">
              <div className="flex items-baseline gap-2 mb-2">
                <p
                  className={`text-3xl font-bold ${item.status === "exceeded" ? "text-green-600" : item.status === "on-track" ? "text-blue-600" : "text-red-600"}`}
                >
                  {item.actual}
                </p>
                <span className="text-sm text-gray-500">/ {item.target}</span>
              </div>
              <p className="text-sm font-semibold text-gray-600">
                {item.percentage}% of target
              </p>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-3 mb-3">
              <div
                className={`h-full rounded-full transition-all ${item.status === "exceeded" ? "bg-gradient-to-r from-green-400 to-emerald-500" : item.status === "on-track" ? "bg-gradient-to-r from-blue-400 to-cyan-500" : "bg-gradient-to-r from-red-400 to-pink-500"}`}
                style={{ width: `${Math.min(item.percentage, 100)}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span
                className={`font-semibold ${item.variance > 0 ? "text-green-600" : "text-red-600"}`}
              >
                Variance: {item.variance > 0 ? "+" : ""}
                {item.variance}
              </span>
              <span className="text-gray-600">YoY: +{item.yoyGrowth}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnualTargets;
