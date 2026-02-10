import React from "react";
import { Calendar, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

const AttendanceRetention = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Calendar className="text-blue-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Overall Attendance
            </span>
          </div>
          <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {data.overallAttendance}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <CheckCircle2 className="text-green-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Perfect Attendance
            </span>
          </div>
          <p className="text-5xl font-bold text-green-600">
            {data.perfectAttendance}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <AlertCircle className="text-red-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Chronic Absence
            </span>
          </div>
          <p className="text-5xl font-bold text-red-600">
            {data.chronicAbsence}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="text-purple-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Retention Rate
            </span>
          </div>
          <p className="text-5xl font-bold text-purple-600">
            {data.retentionRate}
          </p>
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Monthly Attendance Trends
        </h3>
        <div className="grid grid-cols-5 gap-4">
          {data.monthlyTrends.map((trend, idx) => (
            <div
              key={idx}
              className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl"
            >
              <p className="text-lg font-semibold text-slate-600 mb-2">
                {trend.month}
              </p>
              <p className="text-3xl font-bold text-blue-600">{trend.rate}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Absence Reasons */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Absence Reasons
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.absenceReasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-5 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl text-center"
            >
              <p className="text-sm text-slate-600 mb-2">{reason.reason}</p>
              <p className="text-4xl font-bold text-orange-600">
                {reason.percentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceRetention;
