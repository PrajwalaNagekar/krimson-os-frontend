import React from "react";
import { Users } from "lucide-react";

const StaffUtilizationChart = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            Staff Utilization
          </h3>
          <p className="text-sm text-slate-500">Department-wise breakdown</p>
        </div>
        <div className="p-2 bg-purple-50 rounded-full text-purple-600">
          <Users size={20} />
        </div>
      </div>

      {/* Utilization Breakdown */}
      <div className="space-y-4">
        {data.byDepartment.map((item, idx) => (
          <div key={idx} className="group">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-semibold text-slate-700 text-sm">
                  {item.dept}
                </span>
                <span className="text-xs text-slate-400 ml-2">
                  ({item.staff} staff)
                </span>
              </div>
              <span
                className={`font-bold text-sm ${
                  item.rate >= 90
                    ? "text-green-600"
                    : item.rate >= 80
                      ? "text-blue-600"
                      : "text-orange-600"
                }`}
              >
                {item.rate}%
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  item.rate >= 90
                    ? "bg-gradient-to-r from-green-400 to-emerald-500"
                    : item.rate >= 80
                      ? "bg-gradient-to-r from-purple-400 to-blue-500"
                      : "bg-gradient-to-r from-orange-400 to-amber-500"
                }`}
                style={{ width: `${item.rate}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
        <div className="p-2 bg-purple-50 rounded-lg">
          <p className="text-xs text-purple-600 font-semibold">Teaching</p>
          <p className="text-lg font-bold text-purple-700">{data.teaching}%</p>
        </div>
        <div className="p-2 bg-blue-50 rounded-lg">
          <p className="text-xs text-blue-600 font-semibold">Admin</p>
          <p className="text-lg font-bold text-blue-700">
            {data.administrative}%
          </p>
        </div>
        <div className="p-2 bg-cyan-50 rounded-lg">
          <p className="text-xs text-cyan-600 font-semibold">Support</p>
          <p className="text-lg font-bold text-cyan-700">{data.support}%</p>
        </div>
      </div>
    </div>
  );
};

export default StaffUtilizationChart;
