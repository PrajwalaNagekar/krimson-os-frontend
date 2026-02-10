import React from "react";
import { BarChart3 } from "lucide-react";

const FeeCollectionChart = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            Fee Collection Trends
          </h3>
          <p className="text-sm text-slate-500">Monthly collection vs due</p>
        </div>
        <div className="p-2 bg-green-50 rounded-full text-green-600">
          <BarChart3 size={20} />
        </div>
      </div>

      {/* Bar Chart Visualization */}
      <div className="space-y-3">
        {data.monthlyTrend.slice(-4).map((item, idx) => {
          const percentage = (item.collected / item.due) * 100;
          return (
            <div key={idx} className="group cursor-pointer">
              <div className="flex justify-between items-center mb-1 text-sm">
                <span className="font-semibold text-slate-700">
                  {item.month}
                </span>
                <span className="font-bold text-green-600">
                  ₹{(item.collected / 1000).toFixed(0)}K
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-600 transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="grid grid-cols-3 gap-3 text-center">
          {data.byDepartment.map((dept, idx) => (
            <div key={idx} className="p-2 bg-slate-50 rounded-lg">
              <p className="text-xs font-semibold text-slate-500">
                {dept.dept}
              </p>
              <p className="text-sm font-bold text-slate-800">
                {dept.percentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeeCollectionChart;
