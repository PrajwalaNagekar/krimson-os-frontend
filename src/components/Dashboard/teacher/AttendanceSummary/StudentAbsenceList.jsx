import React from "react";
import {
  AlertTriangle,
  Clock,
  TrendingUp,
  TrendingDown,
  Activity,
} from "lucide-react";

const StudentAbsenceList = ({ studentAbsences }) => {
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
            <AlertTriangle className="text-orange-500" size={24} />
            High Absence Frequency Students
          </h3>
          <p className="text-sm text-slate-500">
            Students requiring attendance intervention
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {studentAbsences.map((student, idx) => (
          <div
            key={idx}
            className="p-5 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-bold text-slate-800">{student.name}</h4>
                <p className="text-xs text-slate-500">{student.class}</p>
              </div>
              <div
                className={`flex items-center gap-1 text-xs font-bold ${getTrendColor(student.trend)}`}
              >
                {getTrendIcon(student.trend)}
                <span>{student.trend}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <p className="text-xs text-slate-600 mb-1">Total Absences</p>
                <p className="text-2xl font-bold text-red-600">
                  {student.absences}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Attendance %</p>
                <p className="text-2xl font-bold text-orange-600">
                  {student.percentage}%
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600 flex items-center gap-1">
                <Clock size={12} />
                Last absent:{" "}
                {new Date(student.lastAbsent).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentAbsenceList;
