import React from "react";
import { AlertTriangle } from "lucide-react";

const OverdueTrends = ({ trends }) => {
  const getMaxOverdue = () => {
    return Math.max(...trends.map((t) => t.overdueCount));
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl">
          <AlertTriangle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Overdue Trends</h2>
          <p className="text-sm text-gray-600">6-month overdue analysis</p>
        </div>
      </div>

      <div className="space-y-3">
        {trends.map((trend, index) => {
          const maxValue = getMaxOverdue();
          const barWidth = (trend.overdueCount / maxValue) * 100;

          return (
            <div
              key={index}
              className="p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-gray-700">
                  {trend.month}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-600">
                    {trend.overdueCount} / {trend.totalIssued}
                  </span>
                  <span
                    className={`text-sm font-bold ${trend.rate >= 4.0 ? "text-red-600" : trend.rate >= 3.5 ? "text-orange-600" : "text-green-600"}`}
                  >
                    {trend.rate}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${trend.rate >= 4.0 ? "bg-gradient-to-r from-red-400 to-red-500" : trend.rate >= 3.5 ? "bg-gradient-to-r from-orange-400 to-orange-500" : "bg-gradient-to-r from-green-400 to-green-500"}`}
                  style={{ width: `${barWidth}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200">
        <p className="text-sm text-gray-700">
          <strong className="text-orange-700">Insight:</strong> Overdue rates
          have decreased by 1.3% this month. Continue sending timely reminders
          to maintain this trend.
        </p>
      </div>
    </div>
  );
};

export default OverdueTrends;
