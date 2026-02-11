import React from "react";
import { UserCheck } from "lucide-react";

const RetentionRates = ({ data }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20 h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
          <UserCheck className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Retention Rate by Grade
          </h2>
          <p className="text-sm text-gray-600">Student retention metrics</p>
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
                    grade.retentionRate >= 95
                      ? "text-green-600"
                      : grade.retentionRate >= 90
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                >
                  {grade.retentionRate}%
                </p>
                <p className="text-xs text-gray-500">Retention</p>
              </div>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-3 mb-3">
              <div
                className={`h-full rounded-full transition-all ${
                  grade.retentionRate >= 95
                    ? "bg-gradient-to-r from-green-400 to-emerald-500"
                    : grade.retentionRate >= 90
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                      : "bg-gradient-to-r from-red-400 to-pink-500"
                }`}
                style={{ width: `${grade.retentionRate}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="p-2 bg-blue-50 rounded-lg text-center">
                <p className="text-gray-600">Previous</p>
                <p className="font-bold text-blue-700">{grade.previous}</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg text-center">
                <p className="text-gray-600">Retained</p>
                <p className="font-bold text-green-700">{grade.retained}</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg text-center">
                <p className="text-gray-600">New</p>
                <p className="font-bold text-purple-700">
                  {grade.newAdmissions}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RetentionRates;
