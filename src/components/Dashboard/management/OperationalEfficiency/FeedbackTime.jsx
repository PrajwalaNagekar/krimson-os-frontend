import React from "react";
import { Clock } from "lucide-react";
import { OPERATIONAL_EFFICIENCY_DATA } from "../../../../data/managementData";

const FeedbackTime = () => {
  const { feedbackTime } = OPERATIONAL_EFFICIENCY_DATA;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
          <Clock className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Assignment Feedback Time
          </h2>
          <p className="text-sm text-gray-600">
            Average turnaround by department
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-3 mb-2">
          <p className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
            {feedbackTime.overall.avgDays}
          </p>
          <span className="text-2xl text-gray-600">days</span>
        </div>
        <p className="text-sm text-gray-600">
          Target: {feedbackTime.overall.target} days
        </p>
      </div>

      <div className="space-y-3">
        {feedbackTime.byDepartment.map((dept, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-800">
                {dept.department}
              </span>
              <span
                className={`text-lg font-bold ${dept.avgDays <= 2 ? "text-green-600" : dept.avgDays <= 3 ? "text-yellow-600" : "text-red-600"}`}
              >
                {dept.avgDays} days
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>{dept.assignments} assignments</span>
              <span className="text-green-600">{dept.onTime} on time</span>
              <span className="text-red-600">{dept.delayed} delayed</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackTime;
