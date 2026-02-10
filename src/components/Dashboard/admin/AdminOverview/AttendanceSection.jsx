import React from "react";
import { Users, UserCheck, ArrowUpRight } from "lucide-react";

const AttendanceSection = ({ attendance }) => {
  if (!attendance) return null;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Today's Attendance
          </h2>
          <p className="text-sm text-slate-500">
            Live tracking of students and staff
          </p>
        </div>
        <button className="flex flex-col items-center gap-0.5 text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors group">
          <div className="flex items-center gap-1">
            View Report
            <ArrowUpRight size={16} />
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Attendance Card */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-5 border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Users size={20} />
              </div>
              <span className="font-bold text-slate-700">Students</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">
              {attendance.students.percentage}%
            </span>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-3 mb-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-400 to-cyan-400 h-full rounded-full animate-pulse"
              style={{ width: `${attendance.students.percentage}%` }}
            />
          </div>

          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="font-semibold text-slate-600">
                {attendance.students.present} Present
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-slate-400">
                {attendance.students.absent} Absent
              </span>
            </div>
          </div>
        </div>

        {/* Staff Attendance Card */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-5 border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <UserCheck size={20} />
              </div>
              <span className="font-bold text-slate-700">Staff</span>
            </div>
            <span className="text-2xl font-bold text-purple-600">
              {attendance.staff.percentage}%
            </span>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-3 mb-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-400 to-pink-400 h-full rounded-full animate-pulse"
              style={{ width: `${attendance.staff.percentage}%` }}
            />
          </div>

          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="font-semibold text-slate-600">
                {attendance.staff.present} Present
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-slate-400">
                {attendance.staff.absent} Absent
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSection;
