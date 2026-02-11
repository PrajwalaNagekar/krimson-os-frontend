import React from "react";
import { BookOpen } from "lucide-react";

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

const DepartmentPerformance = ({ departments }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Department Performance
          </h2>
          <p className="text-sm text-gray-600">
            Academic outcomes by department
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${getStatusColor(dept.status)} shadow-lg`}
                ></div>
                <h3 className="font-bold text-gray-800">{dept.name}</h3>
              </div>
              <div className="text-right">
                <p
                  className={`text-2xl font-bold ${dept.performance >= dept.target ? "text-green-600" : dept.performance >= dept.target - 5 ? "text-yellow-600" : "text-red-600"}`}
                >
                  {dept.performance}%
                </p>
                <p className="text-xs text-gray-500">Target: {dept.target}%</p>
              </div>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-3 mb-3">
              <div
                className={`h-full rounded-full transition-all ${dept.status === "good" ? "bg-gradient-to-r from-green-400 to-emerald-500" : dept.status === "warning" ? "bg-gradient-to-r from-yellow-400 to-orange-500" : "bg-gradient-to-r from-red-400 to-pink-500"}`}
                style={{
                  width: `${(dept.performance / dept.target) * 100}%`,
                }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>{dept.students} students</span>
              <span>{dept.teachers} teachers</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPerformance;
