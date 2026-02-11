import React from "react";
import { CheckCircle } from "lucide-react";

const GradePassRates = ({ gradePassRates }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
          <CheckCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Pass Rate by Grade
          </h2>
          <p className="text-sm text-gray-600">Grade-level success metrics</p>
        </div>
      </div>

      <div className="space-y-4">
        {gradePassRates.map((grade, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-800">{grade.grade}</h3>
              <div className="text-right">
                <p
                  className={`text-2xl font-bold ${grade.passRate >= 95 ? "text-green-600" : "text-yellow-600"}`}
                >
                  {grade.passRate}%
                </p>
                <p className="text-xs text-gray-500">Pass Rate</p>
              </div>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-3 mb-3">
              <div
                className={`h-full rounded-full transition-all ${grade.passRate >= 95 ? "bg-gradient-to-r from-green-400 to-emerald-500" : "bg-gradient-to-r from-yellow-400 to-orange-500"}`}
                style={{ width: `${grade.passRate}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-2 bg-green-50 rounded-lg">
                <p className="text-xs text-gray-600">Passed</p>
                <p className="font-bold text-green-700">
                  {grade.passed}/{grade.total}
                </p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <p className="text-xs text-gray-600">Avg Score</p>
                <p className="font-bold text-blue-700">{grade.avgScore}%</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <p className="text-xs text-gray-600">Distinctions</p>
                <p className="font-bold text-purple-700">
                  {grade.distinctions}
                </p>
              </div>
              <div className="p-2 bg-red-50 rounded-lg">
                <p className="text-xs text-gray-600">Failed</p>
                <p className="font-bold text-red-700">{grade.failures}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradePassRates;
