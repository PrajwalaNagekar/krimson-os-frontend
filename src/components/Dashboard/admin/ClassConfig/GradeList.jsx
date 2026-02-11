import React from "react";
import { Users, CheckCircle, Lock, AlertTriangle, Info } from "lucide-react";

const GradeList = ({ grades, selectedGrade, onSelectGrade }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-green-600 bg-green-50 border-green-100";
      case "Locked":
        return "text-red-600 bg-red-50 border-red-100";
      case "Draft":
        return "text-yellow-600 bg-yellow-50 border-yellow-100";
      default:
        return "text-slate-600 bg-slate-50 border-slate-100";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Active":
        return <CheckCircle size={14} />;
      case "Locked":
        return <Lock size={14} />;
      case "Draft":
        return <AlertTriangle size={14} />;
      default:
        return <Info size={14} />;
    }
  };

  return (
    <div className="lg:col-span-1 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-slate-800 text-lg">Grades</h3>
        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
          {grades.length} Total
        </span>
      </div>

      <div className="space-y-3 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar-hidden">
        {grades.map((grade) => (
          <div
            key={grade.id}
            onClick={() => onSelectGrade(grade)}
            className={`p-5 rounded-2xl cursor-pointer transition-all border-2 relative overflow-hidden group ${
              selectedGrade.id === grade.id
                ? "bg-gradient-to-br from-white to-blue-50/50 border-blue-500 shadow-md ring-4 ring-blue-500/5"
                : "bg-white border-slate-100 hover:border-blue-200 hover:shadow-lg"
            }`}
          >
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <h4
                  className={`font-bold text-lg ${
                    selectedGrade.id === grade.id
                      ? "text-blue-700"
                      : "text-slate-700"
                  }`}
                >
                  {grade.name}
                </h4>
                <p className="text-xs font-medium text-slate-400 mt-0.5">
                  {grade.sections} Sections Managed
                </p>
              </div>
              <div
                className={`px-2 py-1 rounded-lg text-[10px] uppercase font-bold flex items-center gap-1 border ${getStatusColor(
                  grade.status,
                )}`}
              >
                {getStatusIcon(grade.status)}
                {grade.status}
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Users size={14} />
                  Capacity
                </span>
                <span className="text-slate-700">
                  {grade.totalStudents} / {grade.capacity}
                </span>
              </div>

              {/* Capacity Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    grade.totalStudents > grade.capacity
                      ? "bg-red-500"
                      : "bg-gradient-to-r from-cyan-400 to-blue-500"
                  }`}
                  style={{
                    width: `${Math.min(
                      (grade.totalStudents / grade.capacity) * 100,
                      100,
                    )}%`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradeList;
