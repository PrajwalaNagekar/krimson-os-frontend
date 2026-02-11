import React from "react";
import { Target } from "lucide-react";

const GradeWiseSummary = ({ summary }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
          <Target className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Grade-wise Summary
          </h2>
          <p className="text-sm text-gray-600">
            Composite metrics by grade level
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
              <th className="p-3 text-left text-xs font-bold text-gray-700 uppercase">
                Grade
              </th>
              <th className="p-3 text-center text-xs font-bold text-gray-700 uppercase">
                Students
              </th>
              <th className="p-3 text-center text-xs font-bold text-gray-700 uppercase">
                Attendance
              </th>
              <th className="p-3 text-center text-xs font-bold text-gray-700 uppercase">
                Performance
              </th>
              <th className="p-3 text-center text-xs font-bold text-gray-700 uppercase">
                Fees
              </th>
            </tr>
          </thead>
          <tbody>
            {summary.map((grade, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors"
              >
                <td className="p-3 font-bold text-gray-800">{grade.grade}</td>
                <td className="p-3 text-center text-gray-700">
                  {grade.students}
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-2">
                    <span
                      className={`text-sm font-bold ${grade.attendance >= 95 ? "text-green-600" : grade.attendance >= 90 ? "text-yellow-600" : "text-red-600"}`}
                    >
                      {grade.attendance}%
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full ${grade.attendance >= 95 ? "bg-green-500" : grade.attendance >= 90 ? "bg-yellow-500" : "bg-red-500"}`}
                    ></div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-2">
                    <span
                      className={`text-sm font-bold ${grade.performance >= 85 ? "text-green-600" : grade.performance >= 80 ? "text-yellow-600" : "text-red-600"}`}
                    >
                      {grade.performance}%
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full ${grade.performance >= 85 ? "bg-green-500" : grade.performance >= 80 ? "bg-yellow-500" : "bg-red-500"}`}
                    ></div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-2">
                    <span
                      className={`text-sm font-bold ${grade.feesPaid >= 90 ? "text-green-600" : grade.feesPaid >= 85 ? "text-yellow-600" : "text-red-600"}`}
                    >
                      {grade.feesPaid}%
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full ${grade.feesPaid >= 90 ? "bg-green-500" : grade.feesPaid >= 85 ? "bg-yellow-500" : "bg-red-500"}`}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradeWiseSummary;
