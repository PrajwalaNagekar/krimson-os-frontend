import React from "react";
import { BookOpen } from "lucide-react";

const DepartmentAttendance = ({ byDepartment }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
      <div className="bg-gradient-to-r from-slate-50 via-purple-50 to-slate-50 px-6 py-4 border-b border-slate-200">
        <h3 className="text-lg font-bold text-slate-800">
          Department Breakdown
        </h3>
        <p className="text-sm text-slate-500">Staff attendance by department</p>
      </div>

      <div className="p-6 space-y-3 max-h-[320px] overflow-y-auto custom-scrollbar-hidden">
        {byDepartment.map((dept, idx) => (
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
                  <p className="font-bold text-slate-800">{dept.department}</p>
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
                <p className="text-lg font-bold text-red-600">{dept.absent}</p>
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
  );
};

export default DepartmentAttendance;
