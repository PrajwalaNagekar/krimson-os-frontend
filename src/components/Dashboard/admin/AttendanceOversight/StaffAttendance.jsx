import React from "react";
import {
  UserCheck,
  Users,
  Activity,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";

const StaffAttendance = ({ staffAttendance }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <UserCheck className="text-purple-500" size={24} />
          Staff Attendance
        </h2>
        <span className="text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
          {staffAttendance.byDepartment.length} Departments
        </span>
      </div>

      {/* Staff Summary Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
              <Users size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-800">
            {staffAttendance.summary.present}/
            {staffAttendance.summary.totalStaff}
          </p>
          <p className="text-xs text-slate-500 font-medium">Present/Total</p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-cyan-100 text-cyan-600 rounded-lg">
              <Activity size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-800">
            {staffAttendance.summary.overallRate}
          </p>
          <p className="text-xs text-slate-500 font-medium">Attendance Rate</p>
        </div>
      </div>

      {/* Department Breakdown */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
        <div className="bg-gradient-to-r from-slate-50 via-purple-50 to-slate-50 px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-800">
            Department Breakdown
          </h3>
          <p className="text-sm text-slate-500">
            Staff attendance by department
          </p>
        </div>

        <div className="p-6 space-y-3 max-h-[320px] overflow-y-auto custom-scrollbar-hidden">
          {staffAttendance.byDepartment.map((dept, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-slate-200 hover:shadow-md hover:border-purple-200 transition-all group bg-gradient-to-br from-white to-slate-50"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-xl">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">
                      {dept.department}
                    </p>
                    <p className="text-xs text-slate-500">
                      {dept.total} staff members
                    </p>
                  </div>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                    dept.coverage === "Complete"
                      ? "bg-green-100 text-green-700 border-green-200"
                      : "bg-amber-100 text-amber-700 border-amber-200"
                  }`}
                >
                  {dept.coverage}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-white p-2 rounded-lg border border-green-100 text-center">
                  <p className="text-lg font-bold text-green-600">
                    {dept.present}
                  </p>
                  <p className="text-[10px] font-semibold text-green-600 uppercase">
                    Present
                  </p>
                </div>
                <div className="bg-white p-2 rounded-lg border border-red-100 text-center">
                  <p className="text-lg font-bold text-red-600">
                    {dept.absent}
                  </p>
                  <p className="text-[10px] font-semibold text-red-600 uppercase">
                    Absent
                  </p>
                </div>
                <div className="bg-white p-2 rounded-lg border border-amber-100 text-center">
                  <p className="text-lg font-bold text-amber-600">
                    {dept.onLeave}
                  </p>
                  <p className="text-[10px] font-semibold text-amber-600 uppercase">
                    On Leave
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-slate-600">
                  {dept.rate}% Attendance
                </p>
                <div className="relative w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full"
                    style={{ width: `${dept.rate}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timetable Impact / Subject Coverage */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
        <div className="bg-gradient-to-r from-slate-50 via-amber-50 to-slate-50 px-6 py-4 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <ClipboardCheck size={20} className="text-amber-500" />
                Timetable Cross-Reference
              </h3>
              <p className="text-sm text-slate-500">Subject coverage status</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold border border-green-200">
              {staffAttendance.timetableImpact.length} Substitutions
            </span>
          </div>
        </div>

        <div className="p-4 space-y-2">
          {staffAttendance.timetableImpact.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-3 rounded-xl border border-slate-100 hover:shadow-md transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-xs font-bold text-amber-700">
                  {item.class.split(" ")[1]}
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">
                    {item.subject}
                  </p>
                  <p className="text-xs text-slate-500">
                    {item.period} • {item.teacher}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-2 py-1 bg-green-50 text-green-700 border border-green-100 rounded-lg text-[10px] font-bold mb-1">
                  {item.status}
                </span>
                <p className="text-[10px] text-slate-400">
                  by {item.substitute}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffAttendance;
