import React from "react";
import { BookOpen, ChevronRight } from "lucide-react";

const DepartmentRow = ({
  subject,
  deptHead,
  avgScore,
  passRate,
  status,
  classCount,
  teacherCount,
  onClick,
}) => {
  const getStatusColor = (status) => {
    if (status === "Excellent") return "bg-green-100 text-green-700";
    if (status === "Good") return "bg-blue-100 text-blue-700";
    if (status === "Review Needed") return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <tr
      className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-bold text-slate-800">{subject}</p>
            <p className="text-xs text-slate-500">
              {classCount} classes • {teacherCount} teachers
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">
            {deptHead
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <span className="text-sm text-slate-700">{deptHead}</span>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${avgScore >= 80 ? "bg-green-500" : avgScore >= 70 ? "bg-blue-500" : "bg-orange-500"}`}
              style={{ width: `${avgScore}%` }}
            ></div>
          </div>
          <span className="font-bold text-slate-800 text-sm w-12">
            {avgScore}%
          </span>
        </div>
      </td>
      <td className="px-4 py-4 font-semibold text-slate-700">{passRate}%</td>
      <td className="px-4 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(status)}`}
        >
          {status}
        </span>
      </td>
      <td className="px-4 py-4">
        <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
          <ChevronRight className="w-4 h-4 text-slate-600" />
        </button>
      </td>
    </tr>
  );
};

export default DepartmentRow;
