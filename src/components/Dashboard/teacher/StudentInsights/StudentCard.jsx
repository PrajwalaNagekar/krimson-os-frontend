import React from "react";
import { Eye, TrendingUp, TrendingDown } from "lucide-react";

const StudentCard = ({ student, onClick }) => {
  const getTrendColor = (trend) => {
    return trend === "improving" ? "text-green-600" : "text-red-600";
  };

  const getTrendIcon = (trend) => {
    return trend === "improving" ? (
      <TrendingUp size={16} />
    ) : (
      <TrendingDown size={16} />
    );
  };

  return (
    <div
      className={`bg-white rounded-3xl p-6 shadow-md border-2 transition-all duration-300 cursor-pointer ${
        student.atRisk
          ? "border-red-300 bg-red-50/30 hover:shadow-xl"
          : "border-transparent hover:border-blue-200 hover:shadow-xl"
      }`}
      onClick={onClick}
    >
      {/* Student Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md ${
              student.atRisk
                ? "bg-gradient-to-br from-red-500 to-pink-500"
                : "bg-gradient-to-br from-blue-500 to-cyan-500"
            }`}
          >
            {student.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-slate-800">{student.name}</h4>
            <p className="text-xs text-slate-500">
              Roll: {student.roll} • {student.class}
            </p>
          </div>
        </div>
        {student.atRisk && (
          <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold">
            At Risk
          </span>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 bg-slate-50 rounded-xl">
          <p className="text-xs text-slate-500 mb-1">Attendance</p>
          <p
            className={`text-lg font-bold ${student.attendance >= 90 ? "text-green-600" : student.attendance >= 75 ? "text-orange-600" : "text-red-600"}`}
          >
            {student.attendance}%
          </p>
        </div>
        <div className="p-3 bg-slate-50 rounded-xl">
          <p className="text-xs text-slate-500 mb-1">Avg Grade</p>
          <p className="text-lg font-bold text-slate-800">
            {student.avgGrade}%
          </p>
        </div>
      </div>

      {/* Trend */}
      <div className="mb-4 flex items-center justify-between p-3 bg-slate-50 rounded-xl">
        <span className="text-xs text-slate-600 font-medium">
          Performance Trend
        </span>
        <span
          className={`flex items-center gap-1 font-bold ${getTrendColor(student.trend)}`}
        >
          {getTrendIcon(student.trend)}
          <span className="text-sm">
            {student.trendValue > 0 ? "+" : ""}
            {student.trendValue}%
          </span>
        </span>
      </div>

      {/* View Details Button */}
      <button className="w-full px-4 py-3 bg-blue-50 text-blue-600 border-2 border-blue-200 rounded-xl font-bold hover:bg-blue-100 transition-all flex items-center justify-center gap-2">
        <Eye size={16} />
        View Full Profile
      </button>
    </div>
  );
};

export default StudentCard;
