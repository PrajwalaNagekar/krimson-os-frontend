import React from "react";
import { Clock, CheckCircle, XCircle, AlertCircle, Users } from "lucide-react";

const AttendanceStats = ({ attendanceData }) => {
  const isLowAttendance = attendanceData.percentage < 85;

  return (
    <div className="space-y-6">
      {/* Stats Summary */}
      <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white">
        <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-3 tracking-tight">
          <Clock className="text-cyan-600" size={24} />
          This Month Summary
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:shadow-md transition-shadow cursor-default">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">
              Total Days
            </span>
            <span className="text-2xl font-black text-slate-800">
              {attendanceData.totalDays}
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100/50 hover:shadow-md transition-shadow cursor-default">
            <span className="text-sm font-bold text-emerald-700 flex items-center gap-2 uppercase tracking-wide">
              <CheckCircle size={18} />
              Present
            </span>
            <span className="text-2xl font-black text-emerald-700">
              {attendanceData.present}
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-rose-50/50 rounded-2xl border border-rose-100/50 hover:shadow-md transition-shadow cursor-default">
            <span className="text-sm font-bold text-rose-700 flex items-center gap-2 uppercase tracking-wide">
              <XCircle size={18} />
              Absent
            </span>
            <span className="text-2xl font-black text-rose-700">
              {attendanceData.absent}
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-purple-50/50 rounded-2xl border border-purple-100/50 hover:shadow-md transition-shadow cursor-default">
            <span className="text-sm font-bold text-purple-700 uppercase tracking-wide">
              Holidays
            </span>
            <span className="text-2xl font-black text-purple-700">
              {attendanceData.holidays}
            </span>
          </div>
        </div>

        {/* Attendance Percentage */}
        <div className="mt-6 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl border border-cyan-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-black text-cyan-800 uppercase tracking-wide">
              Attendance Rate
            </span>
            <span
              className={`text-3xl font-black ${
                attendanceData.percentage >= 85
                  ? "text-emerald-600"
                  : "text-red-600"
              }`}
            >
              {attendanceData.percentage}%
            </span>
          </div>
          <div className="w-full bg-white/50 rounded-full h-3 overflow-hidden p-0.5">
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-out shadow-sm ${
                attendanceData.percentage >= 85
                  ? "bg-emerald-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${attendanceData.percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Class Average Comparison */}
        <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span className="flex items-center gap-2 uppercase tracking-wide">
              <Users size={16} />
              Class Average
            </span>
            <span className="text-base text-slate-700">
              {attendanceData.classAverage}%
            </span>
          </div>
        </div>
      </div>

      {/* Low Attendance Alert */}
      {isLowAttendance && (
        <div className="bg-rose-50 rounded-[2rem] p-6 border-2 border-rose-100 shadow-xl shadow-rose-100/50">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-2xl shadow-sm text-rose-500">
              <AlertCircle size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-black text-rose-800 text-base mb-2">
                Low Attendance Alert!
              </h4>
              <p className="text-rose-600 text-sm font-medium leading-relaxed opacity-90">
                Attendance has fallen below 85%. Regular attendance is crucial
                for academic success. Please ensure consistent presence.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceStats;
