import React from "react";
import { BarChart2 } from "lucide-react";
import StaffAttendanceEntry from "./StaffAttendanceEntry";

const WeeklyAttendance = ({ weeklyAttendance, lateArrivals }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-green-50 to-emerald-50">
        <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-green-500" />
          Weekly Attendance & Punctuality
        </h3>
        <p className="text-sm text-slate-600 mt-1">Staff attendance tracking</p>
      </div>

      <div className="p-5 space-y-3">
        {weeklyAttendance.map((day, idx) => (
          <StaffAttendanceEntry key={idx} {...day} />
        ))}

        <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-xs text-blue-800 mb-2 font-semibold">
            📊 Weekly Summary:
          </p>
          <p className="text-xs text-blue-700 leading-relaxed">
            Average punctuality: 98% • Total late arrivals: {lateArrivals} •
            Perfect attendance: 92% of staff
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyAttendance;
