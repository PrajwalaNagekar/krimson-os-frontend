import React from "react";
import {
  Award,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Activity,
} from "lucide-react";

const StudentPerformanceLists = ({ topPerformers, bottomPerformers }) => {
  const getTrendColor = (trend) => {
    switch (trend) {
      case "improving":
        return "text-green-600";
      case "declining":
        return "text-red-600";
      default:
        return "text-slate-600";
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "improving":
        return <TrendingUp size={14} />;
      case "declining":
        return <TrendingDown size={14} />;
      default:
        return <Activity size={14} />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Top Performers */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 border-2 border-green-200 shadow-md">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-green-100 rounded-xl">
            <Award size={24} className="text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Top Performers</h3>
            <p className="text-sm text-slate-600">
              Students excelling across subjects
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {topPerformers.map((student, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-xl border border-green-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    #{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{student.name}</h4>
                    <p className="text-xs text-slate-500">{student.class}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">
                    {student.avgScore}%
                  </p>
                  <p
                    className={`text-xs font-bold flex items-center gap-1 justify-end ${getTrendColor(
                      student.trend,
                    )}`}
                  >
                    {getTrendIcon(student.trend)}
                    {student.trend}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Performers */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 md:p-8 border-2 border-orange-200 shadow-md">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-orange-100 rounded-xl">
            <AlertTriangle size={24} className="text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Students Needing Support
            </h3>
            <p className="text-sm text-slate-600">
              Require additional attention
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {bottomPerformers.map((student, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-xl border border-orange-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    <AlertTriangle size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{student.name}</h4>
                    <p className="text-xs text-slate-500">{student.class}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-orange-600">
                    {student.avgScore}%
                  </p>
                  <p
                    className={`text-xs font-bold flex items-center gap-1 justify-end ${getTrendColor(
                      student.trend,
                    )}`}
                  >
                    {getTrendIcon(student.trend)}
                    {student.trend}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentPerformanceLists;
