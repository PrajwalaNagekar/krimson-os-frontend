import React from "react";
import { Award, AlertCircle } from "lucide-react";
import { ASSESSMENT_TRACKER_DATA } from "../../../../data/registrarData";

const DepartmentPerformance = () => {
  const { departmentData } = ASSESSMENT_TRACKER_DATA;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
          <Award className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Department Summaries
          </h2>
          <p className="text-sm text-gray-600">Performance by subject area</p>
        </div>
      </div>

      <div className="space-y-4">
        {departmentData.map((dept, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-800">{dept.department}</h3>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${dept.improvement >= 0 ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}`}
                >
                  {dept.improvement >= 0 ? "+" : ""}
                  {dept.improvement}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Avg Score</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {dept.avgScore}%
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Assessments</p>
                <p className="text-2xl font-bold text-gray-700">
                  {dept.totalAssessments}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-200">
              <div>
                <p className="text-gray-500 mb-1">Top Performer</p>
                <p className="font-semibold text-green-600 flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  {dept.topPerformer}
                </p>
              </div>
              {dept.needsAttention && (
                <div className="text-right">
                  <p className="text-gray-500 mb-1">Needs Attention</p>
                  <p className="font-semibold text-orange-600 flex items-center gap-1 justify-end">
                    <AlertCircle className="w-3 h-3" />
                    {dept.needsAttention}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPerformance;
