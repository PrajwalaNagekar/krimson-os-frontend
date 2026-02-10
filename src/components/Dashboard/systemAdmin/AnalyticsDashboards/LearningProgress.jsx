import React from "react";
import { TrendingUp, AlertCircle, CheckCircle, BookOpen } from "lucide-react";

const LearningProgress = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <CheckCircle className="text-green-500" size={28} />
            <span className="text-sm font-medium text-slate-600">On Track</span>
          </div>
          <p className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {data.studentsOnTrack}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="text-blue-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Exceeding
            </span>
          </div>
          <p className="text-5xl font-bold text-blue-600">{data.exceeding}</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <AlertCircle className="text-orange-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Needing Support
            </span>
          </div>
          <p className="text-5xl font-bold text-orange-600">
            {data.needingSupport}
          </p>
        </div>
      </div>

      {/* Grade Progress */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Progress by Grade
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.progressData.map((grade, idx) => (
            <div
              key={idx}
              className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl"
            >
              <h4 className="text-lg font-bold text-slate-800 mb-4">
                {grade.grade}
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-slate-500 mb-1">On Track</p>
                  <p className="text-2xl font-bold text-green-600">
                    {grade.onTrack}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Exceeding</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {grade.exceeding}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Struggling</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {grade.struggling}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Intervention Programs */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Intervention Programs
        </h3>
        <div className="space-y-4">
          {data.interventionPrograms.map((program, idx) => (
            <div
              key={idx}
              className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="text-purple-500" size={20} />
                  <h4 className="text-lg font-bold text-slate-800">
                    {program.name}
                  </h4>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                  {program.percentage} Success
                </span>
              </div>
              <div className="flex gap-6">
                <div>
                  <p className="text-sm text-slate-500">Enrolled</p>
                  <p className="text-xl font-bold text-slate-700">
                    {program.enrolled}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Improved</p>
                  <p className="text-xl font-bold text-green-600">
                    {program.improved}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningProgress;
