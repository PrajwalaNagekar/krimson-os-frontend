import React from "react";
import { BookOpen } from "lucide-react";

const SubjectPerformanceTable = ({ performance }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Top 5 Subject Performance
            </h2>
            <p className="text-sm text-gray-600">
              Detailed subject-wise analysis
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Subject
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Cluster
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Avg Score
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Pass Rate
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Top Score
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Students
              </th>
            </tr>
          </thead>
          <tbody>
            {performance.map((subject, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors"
              >
                <td className="p-4 font-bold text-gray-800">
                  {subject.subject}
                </td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
                    {subject.cluster}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-lg font-bold text-cyan-600">
                    {subject.avgScore}%
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span
                    className={`text-lg font-bold ${subject.passRate >= 97 ? "text-green-600" : "text-yellow-600"}`}
                  >
                    {subject.passRate}%
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-lg font-bold text-purple-600">
                    {subject.topScore}
                  </span>
                </td>
                <td className="p-4 text-center text-gray-700">
                  {subject.students}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubjectPerformanceTable;
