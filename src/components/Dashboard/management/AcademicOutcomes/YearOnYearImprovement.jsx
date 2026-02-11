import React from "react";
import { Activity } from "lucide-react";

const YearOnYearImprovement = ({ yoyImprovement }) => {
  const getMaxValue = () => {
    return Math.max(
      ...yoyImprovement.map((y) =>
        Math.max(y.overall, y.stem, y.humanities, y.languages),
      ),
    );
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Year-on-Year Improvement
          </h2>
          <p className="text-sm text-gray-600">4-year performance trend</p>
        </div>
      </div>

      <div className="space-y-6">
        {yoyImprovement.map((year, index) => {
          const maxValue = getMaxValue();

          return (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-gray-800 text-lg">
                  {year.year}
                </span>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                  {year.overall}%
                </span>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">STEM</span>
                    <span className="text-xs font-bold text-cyan-600">
                      {year.stem}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all"
                      style={{ width: `${(year.stem / maxValue) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Humanities</span>
                    <span className="text-xs font-bold text-purple-600">
                      {year.humanities}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all"
                      style={{
                        width: `${(year.humanities / maxValue) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Languages</span>
                    <span className="text-xs font-bold text-green-600">
                      {year.languages}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all"
                      style={{ width: `${(year.languages / maxValue) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {index < yoyImprovement.length - 1 && (
                <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600">
                  Growth:{" "}
                  <span className="font-bold text-green-600">
                    +
                    {(yoyImprovement[index + 1].overall - year.overall).toFixed(
                      1,
                    )}
                    %
                  </span>{" "}
                  next year
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YearOnYearImprovement;
