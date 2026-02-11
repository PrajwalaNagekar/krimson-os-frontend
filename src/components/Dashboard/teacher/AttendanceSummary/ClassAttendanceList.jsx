import React from "react";
import {
  Users,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Activity,
} from "lucide-react";

const ClassAttendanceList = ({ classAttendance, setSelectedClass }) => {
  const getTrendColor = (trend) => {
    switch (trend) {
      case "up":
      case "decreasing": // decreasing absences is good
        return "text-green-600";
      case "down":
      case "increasing": // increasing absences is bad
        return "text-red-600";
      default:
        return "text-slate-600";
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "up":
      case "decreasing":
        return <TrendingUp size={14} />;
      case "down":
      case "increasing":
        return <TrendingDown size={14} />;
      default:
        return <Activity size={14} />;
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
            <Users className="text-green-500" size={24} />
            Class-wise Attendance Breakdown
          </h3>
          <p className="text-sm text-slate-500">
            Current vs previous week comparison
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {classAttendance.map((classData, idx) => (
          <div
            key={idx}
            className="p-5 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-all cursor-pointer"
            onClick={() => setSelectedClass(classData)}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-bold text-slate-800">{classData.class}</h4>
                <p className="text-xs text-slate-500">
                  {classData.students} students
                </p>
              </div>
              <div
                className={`flex items-center gap-1 font-bold ${getTrendColor(classData.trend)}`}
              >
                {getTrendIcon(classData.trend)}
                <span className="text-sm">{classData.trend}</span>
              </div>
            </div>

            {/* Current Attendance */}
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-slate-600">Current Week</span>
                <span
                  className={`font-bold ${classData.current >= 90 ? "text-green-600" : classData.current >= 85 ? "text-orange-600" : "text-red-600"}`}
                >
                  {classData.current}%
                </span>
              </div>
              <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    classData.current >= 90
                      ? "bg-gradient-to-r from-green-500 to-emerald-400"
                      : classData.current >= 85
                        ? "bg-gradient-to-r from-orange-500 to-amber-400"
                        : "bg-gradient-to-r from-red-500 to-pink-400"
                  }`}
                  style={{ width: `${classData.current}%` }}
                ></div>
              </div>
            </div>

            {/* Comparison */}
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span>Previous: {classData.previous}%</span>
              <span>Avg Absences: {classData.avgAbsences}/day</span>
            </div>

            {/* Alert */}
            {classData.current < classData.previous - 3 && (
              <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                <AlertTriangle
                  size={14}
                  className="text-red-600 flex-shrink-0 mt-0.5"
                />
                <p className="text-xs text-red-800">
                  Attendance dropped {classData.previous - classData.current}% -
                  requires attention
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassAttendanceList;
