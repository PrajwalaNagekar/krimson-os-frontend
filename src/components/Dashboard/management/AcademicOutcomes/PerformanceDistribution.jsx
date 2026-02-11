import React from "react";
import { PieChart, Award, Users, Target } from "lucide-react";

const PerformanceDistribution = ({ distribution }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
          <PieChart className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Student Performance Distribution
          </h2>
          <p className="text-sm text-gray-600">
            Segmentation by achievement levels
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-800">Top 10%</h3>
            <Award className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-4xl font-bold text-green-700 mb-2">
            {distribution.top10.count}
          </p>
          <p className="text-sm text-gray-600 mb-3">
            students ({distribution.top10.percentage}%)
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Avg Score:</span>
              <span className="font-bold text-green-700">
                {distribution.top10.avgScore}%
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Range:</span>
              <span className="font-semibold text-gray-700">
                {distribution.top10.range}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-800">Mid 50%</h3>
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-4xl font-bold text-blue-700 mb-2">
            {distribution.mid50.count}
          </p>
          <p className="text-sm text-gray-600 mb-3">
            students ({distribution.mid50.percentage}%)
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Avg Score:</span>
              <span className="font-bold text-blue-700">
                {distribution.mid50.avgScore}%
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Range:</span>
              <span className="font-semibold text-gray-700">
                {distribution.mid50.range}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-800">Bottom 40%</h3>
            <Target className="w-6 h-6 text-orange-600" />
          </div>
          <p className="text-4xl font-bold text-orange-700 mb-2">
            {distribution.bottom40.count}
          </p>
          <p className="text-sm text-gray-600 mb-3">
            students ({distribution.bottom40.percentage}%)
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Avg Score:</span>
              <span className="font-bold text-orange-700">
                {distribution.bottom40.avgScore}%
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Range:</span>
              <span className="font-semibold text-gray-700">
                {distribution.bottom40.range}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDistribution;
