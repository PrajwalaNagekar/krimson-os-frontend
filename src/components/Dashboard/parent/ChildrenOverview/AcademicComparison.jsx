import React from "react";
import { BookOpen } from "lucide-react";

const AcademicComparison = ({ activeChild, classAverage }) => {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <BookOpen size={20} className="text-blue-600" />
            Academic Comparison
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Performance vs Class Average
          </p>
        </div>
      </div>

      {/* Comparison Bars */}
      <div className="space-y-6">
        {/* Child's Performance */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-slate-700">
              {activeChild.name}'s Grade
            </span>
            <span className="text-2xl font-extrabold text-blue-600">
              {activeChild.academicGrowth}%
            </span>
          </div>
          <div className="w-full bg-slate-200 h-6 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3"
              style={{ width: `${activeChild.academicGrowth}%` }}
            >
              <span className="text-white text-xs font-bold">
                {activeChild.academicGrowth}%
              </span>
            </div>
          </div>
        </div>

        {/* Class Average */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-slate-700">
              Class Average
            </span>
            <span className="text-2xl font-extrabold text-slate-600">
              {classAverage}%
            </span>
          </div>
          <div className="w-full bg-slate-200 h-6 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-slate-400 to-slate-500 h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3"
              style={{ width: `${classAverage}%` }}
            >
              <span className="text-white text-xs font-bold">
                {classAverage}%
              </span>
            </div>
          </div>
        </div>

        {/* Difference Indicator */}
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-600">
              Performance Difference
            </span>
            <span
              className={`text-xl font-extrabold ${
                activeChild.academicGrowth > classAverage
                  ? "text-green-600"
                  : activeChild.academicGrowth < classAverage
                    ? "text-orange-600"
                    : "text-slate-600"
              }`}
            >
              {activeChild.academicGrowth > classAverage ? "+" : ""}
              {activeChild.academicGrowth - classAverage}%
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            {activeChild.academicGrowth > classAverage
              ? "🎉 Performing above class average"
              : activeChild.academicGrowth < classAverage
                ? "📈 Room for improvement"
                : "✓ On par with class average"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicComparison;
