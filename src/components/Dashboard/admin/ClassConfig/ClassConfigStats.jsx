import React from "react";
import { Building, FileText, Users, AlertTriangle } from "lucide-react";

const ClassConfigStats = ({
  totalGrades,
  totalSections,
  totalStudentsAllocated,
  unassignedStudents,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
            <Building size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">{totalGrades}</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
              Total Grades
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
            <FileText size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">{totalSections}</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
              Total Sections
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-green-100 text-green-600 rounded-xl group-hover:scale-110 transition-transform">
            <Users size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">
              {totalStudentsAllocated}
            </p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
              Allocated Students
            </p>
          </div>
        </div>
      </div>

      <div
        className={`rounded-2xl p-4 border shadow-sm hover:shadow-md transition-all group ${
          unassignedStudents > 0
            ? "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200"
            : "bg-white border-slate-100"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`p-2.5 rounded-xl group-hover:scale-110 transition-transform ${
              unassignedStudents > 0
                ? "bg-amber-500 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            <AlertTriangle size={20} />
          </div>
          <div>
            <p
              className={`text-2xl font-bold ${
                unassignedStudents > 0 ? "text-amber-700" : "text-slate-800"
              }`}
            >
              {unassignedStudents}
            </p>
            <p
              className={`text-xs font-medium uppercase tracking-wide ${
                unassignedStudents > 0 ? "text-amber-600" : "text-slate-500"
              }`}
            >
              Unassigned
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassConfigStats;
