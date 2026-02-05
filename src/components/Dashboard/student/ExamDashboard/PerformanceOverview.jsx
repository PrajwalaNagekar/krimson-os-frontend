import React from "react";
import { TrendingUp, Award, TrendingDown } from "lucide-react";

const PerformanceOverview = ({ performance }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-slate-100">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
          <TrendingUp className="text-blue-600" size={20} />
        </div>
        <h3 className="font-bold text-slate-800 text-lg">
          Performance Overview
        </h3>
      </div>

      <div className="space-y-5">
        {/* Average Score */}
        <div>
          <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
            <span>Average Score</span>
            <span className="text-blue-600">{performance.average}%</span>
          </div>
          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all shadow-md"
              style={{ width: `${performance.average}%` }}
            ></div>
          </div>
        </div>

        {/* Strongest Subject */}
        <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
          <div className="flex items-center gap-3">
            <Award className="text-green-600" size={24} />
            <div className="flex-1">
              <p className="text-xs font-bold text-green-700 uppercase">
                Strongest Subject
              </p>
              <p className="text-base font-bold text-slate-800">
                {performance.strongest.subject}
              </p>
              <p className="text-sm font-bold text-green-600">
                {performance.strongest.score}%
              </p>
            </div>
          </div>
        </div>

        {/* Weakest Subject */}
        <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border-2 border-red-200">
          <div className="flex items-center gap-3">
            <TrendingDown className="text-red-600" size={24} />
            <div className="flex-1">
              <p className="text-xs font-bold text-red-700 uppercase">
                Needs Improvement
              </p>
              <p className="text-base font-bold text-slate-800">
                {performance.weakest.subject}
              </p>
              <p className="text-sm font-bold text-red-600">
                {performance.weakest.score}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
