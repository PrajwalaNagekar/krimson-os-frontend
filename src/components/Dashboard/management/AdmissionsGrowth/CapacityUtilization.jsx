import React from "react";
import { BarChart3 } from "lucide-react";

const CapacityUtilization = ({ data }) => {
  const totalEnrolled = data.reduce((acc, curr) => acc + curr.enrolled, 0);

  const totalCapacity = data.reduce((acc, curr) => acc + curr.capacity, 0);

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20 h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Capacity Utilization
          </h2>
          <p className="text-sm text-gray-600">Seats filled vs available</p>
        </div>
      </div>

      <div className="space-y-4">
        {data.map((grade, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-800">{grade.grade}</h3>
              <div className="text-right">
                <p
                  className={`text-2xl font-bold ${
                    grade.percentage >= 95
                      ? "text-green-600"
                      : grade.percentage >= 90
                        ? "text-yellow-600"
                        : "text-orange-600"
                  }`}
                >
                  {grade.percentage.toFixed(1)}%
                </p>
                <p className="text-xs text-gray-500">Utilization</p>
              </div>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-3 mb-3">
              <div
                className={`h-full rounded-full transition-all ${
                  grade.percentage >= 95
                    ? "bg-gradient-to-r from-green-400 to-emerald-500"
                    : grade.percentage >= 90
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                      : "bg-gradient-to-r from-orange-400 to-red-500"
                }`}
                style={{ width: `${grade.percentage}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="text-gray-600">Enrolled: </span>
                <span className="font-bold text-green-700">
                  {grade.enrolled}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Capacity: </span>
                <span className="font-bold text-blue-700">
                  {grade.capacity}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Available: </span>
                <span className="font-bold text-orange-700">
                  {grade.capacity - grade.enrolled}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-800">Total Capacity</span>
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
            {totalEnrolled} / {totalCapacity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CapacityUtilization;
