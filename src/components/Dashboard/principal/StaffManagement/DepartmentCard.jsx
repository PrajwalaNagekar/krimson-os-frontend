import React from "react";
import { Users } from "lucide-react";

const DepartmentCard = ({
  department,
  head,
  teacherCount,
  studentsHandled,
  avgWorkload,
  attendance,
}) => (
  <div className="p-5 bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1">
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <h3 className="font-bold text-lg text-slate-800 mb-1">{department}</h3>
        <p className="text-xs text-slate-500">Head: {head}</p>
      </div>
      <div
        className={`p-2 rounded-lg ${
          avgWorkload === "High"
            ? "bg-red-100"
            : avgWorkload === "Medium"
              ? "bg-orange-100"
              : "bg-green-100"
        }`}
      >
        <Users
          className={`w-5 h-5 ${
            avgWorkload === "High"
              ? "text-red-600"
              : avgWorkload === "Medium"
                ? "text-orange-600"
                : "text-green-600"
          }`}
        />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3 mb-4">
      <div>
        <p className="text-xs text-slate-500">Teachers</p>
        <p className="text-xl font-bold text-slate-800">{teacherCount}</p>
      </div>
      <div>
        <p className="text-xs text-slate-500">Students</p>
        <p className="text-xl font-bold text-slate-800">{studentsHandled}</p>
      </div>
    </div>

    <div className="mb-3">
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="text-slate-500">Avg Workload</span>
        <span className="font-bold text-slate-700">{avgWorkload}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${
            avgWorkload === "High"
              ? "bg-red-500"
              : avgWorkload === "Medium"
                ? "bg-orange-500"
                : "bg-green-500"
          }`}
          style={{
            width:
              avgWorkload === "High"
                ? "85%"
                : avgWorkload === "Medium"
                  ? "60%"
                  : "40%",
          }}
        ></div>
      </div>
    </div>

    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
      <span className="text-xs text-slate-500">Attendance</span>
      <span className="text-sm font-bold text-green-600">{attendance}%</span>
    </div>
  </div>
);

export default DepartmentCard;
