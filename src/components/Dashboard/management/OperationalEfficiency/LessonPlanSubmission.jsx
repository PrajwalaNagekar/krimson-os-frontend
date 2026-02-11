import React from "react";
import { FileText } from "lucide-react";
import { OPERATIONAL_EFFICIENCY_DATA } from "../../../../data/managementData";

const LessonPlanSubmission = () => {
  const { lessonPlanSubmission } = OPERATIONAL_EFFICIENCY_DATA;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Lesson Plan Submission
          </h2>
          <p className="text-sm text-gray-600">
            Department-wise submission rates
          </p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
          {lessonPlanSubmission.overall.percentage}%
        </p>
        <p className="text-sm text-gray-600">
          {lessonPlanSubmission.overall.submitted}/
          {lessonPlanSubmission.overall.total} plans submitted (
          {lessonPlanSubmission.overall.onTime} on time,{" "}
          {lessonPlanSubmission.overall.late} late)
        </p>
      </div>

      <div className="space-y-3">
        {lessonPlanSubmission.byDepartment.map((dept, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-800">
                {dept.department}
              </span>
              <span
                className={`text-lg font-bold ${dept.percentage >= 95 ? "text-green-600" : dept.percentage >= 90 ? "text-yellow-600" : "text-red-600"}`}
              >
                {dept.percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
              <div
                className={`h-full rounded-full transition-all ${dept.percentage >= 95 ? "bg-gradient-to-r from-green-400 to-emerald-500" : dept.percentage >= 90 ? "bg-gradient-to-r from-yellow-400 to-orange-500" : "bg-gradient-to-r from-red-400 to-pink-500"}`}
                style={{ width: `${dept.percentage}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>
                {dept.submitted}/{dept.total} submitted
              </span>
              <span>{dept.late} late</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonPlanSubmission;
