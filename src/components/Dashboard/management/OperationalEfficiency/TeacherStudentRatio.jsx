import React from "react";
import { Users } from "lucide-react";
import { OPERATIONAL_EFFICIENCY_DATA } from "../../../../data/managementData";

const TeacherStudentRatio = () => {
  const { teacherStudentRatio } = OPERATIONAL_EFFICIENCY_DATA;

  const getStatusColor = (status) => {
    switch (status) {
      case "good":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "critical":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Teacher-to-Student Ratio
          </h2>
          <p className="text-sm text-gray-600">
            Target vs Actual by department
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200">
          <h3 className="font-bold text-gray-800 mb-4">Overall Ratio</h3>
          <div className="flex items-baseline gap-3 mb-3">
            <p className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              1:{teacherStudentRatio.overall.ratio}
            </p>
            <div
              className={`w-4 h-4 rounded-full ${getStatusColor(teacherStudentRatio.overall.status)} animate-pulse`}
            ></div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-white rounded-xl">
              <p className="text-gray-600 mb-1">Teachers</p>
              <p className="font-bold text-gray-800">
                {teacherStudentRatio.overall.teachers}
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl">
              <p className="text-gray-600 mb-1">Students</p>
              <p className="font-bold text-gray-800">
                {teacherStudentRatio.overall.students}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Target: 1:{teacherStudentRatio.overall.target}
          </p>
        </div>

        <div className="space-y-3">
          {teacherStudentRatio.byDepartment.map((dept, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${getStatusColor(dept.status)}`}
                  ></div>
                  <span className="font-bold text-gray-800">
                    {dept.department}
                  </span>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                  1:{dept.ratio}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>{dept.teachers} teachers</span>
                <span>{dept.students} students</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherStudentRatio;
