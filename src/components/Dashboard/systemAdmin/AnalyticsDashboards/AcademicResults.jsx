import React from "react";
import { Trophy, TrendingUp, Award } from "lucide-react";

const AcademicResults = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Trophy className="text-yellow-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Overall GPA
            </span>
          </div>
          <p className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            {data.overallGPA}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="text-green-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Pass Rate
            </span>
          </div>
          <p className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {data.passRate}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Award className="text-purple-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Honor Roll
            </span>
          </div>
          <p className="text-5xl font-bold text-purple-600">{data.honorRoll}</p>
        </div>
      </div>

      {/* Subject Performance */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Subject Performance
        </h3>
        <div className="space-y-4">
          {data.subjectPerformance.map((subject, idx) => (
            <div
              key={idx}
              className="p-5 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-slate-800">
                  {subject.subject}
                </h4>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                  Pass Rate: {subject.passRate}%
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Average Score</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {subject.average}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Pass Rate</p>
                  <p className="text-2xl font-bold text-green-600">
                    {subject.passRate}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Top Performers</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {subject.topPerformers}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grade Distribution */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Grade Distribution (%)
        </h3>
        <div className="grid grid-cols-5 gap-4">
          {Object.entries(data.gradeDistribution).map(([grade, percentage]) => (
            <div
              key={grade}
              className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl"
            >
              <p className="text-3xl font-bold text-slate-800">{grade}</p>
              <p className="text-2xl font-bold text-purple-600 mt-2">
                {percentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicResults;
