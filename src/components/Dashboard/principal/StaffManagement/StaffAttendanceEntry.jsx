import React from "react";

const StaffAttendanceEntry = ({ date, present, late, absent, punctuality }) => (
  <div className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs font-bold text-slate-700">{date}</span>
      <span
        className={`text-xs font-bold ${
          punctuality >= 95
            ? "text-green-600"
            : punctuality >= 90
              ? "text-blue-600"
              : "text-orange-600"
        }`}
      >
        {punctuality}%
      </span>
    </div>
    <div className="flex gap-2 text-xs">
      <div className="flex-1 text-center">
        <p className="text-slate-500">Present</p>
        <p className="font-bold text-green-600">{present}</p>
      </div>
      <div className="flex-1 text-center">
        <p className="text-slate-500">Late</p>
        <p className="font-bold text-orange-600">{late}</p>
      </div>
      <div className="flex-1 text-center">
        <p className="text-slate-500">Absent</p>
        <p className="font-bold text-red-600">{absent}</p>
      </div>
    </div>
  </div>
);

export default StaffAttendanceEntry;
