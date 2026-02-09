import React from "react";
import { BarChart3 } from "lucide-react";
import { ASSESSMENT_TRACKER_DATA } from "../../../../data/registrarData";

const TermAverages = () => {
  const { termAverages } = ASSESSMENT_TRACKER_DATA;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Term Averages</h2>
          <p className="text-sm text-gray-600">
            Performance progression by grade
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {termAverages.map((grade, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border border-cyan-100"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-800">{grade.grade}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Target:</span>
                <span className="text-sm font-bold text-purple-600">
                  {grade.target}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Term 1</p>
                <p className="text-lg font-bold text-gray-700">
                  {grade.term1}%
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Term 2</p>
                <p className="text-lg font-bold text-gray-700">
                  {grade.term2}%
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Current</p>
                <p className="text-lg font-bold text-cyan-600">
                  {grade.current}%
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full transition-all"
                style={{ width: `${(grade.current / grade.target) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermAverages;
