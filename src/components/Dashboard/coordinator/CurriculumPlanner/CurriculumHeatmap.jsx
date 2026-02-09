import React from "react";
import { BarChart3, Filter } from "lucide-react";
import { CURRICULUM_PLANNER_DATA } from "../../../../data/registrarData";

const CurriculumHeatmap = () => {
  const { heatmapData, heatmapMonths, heatmapSubjects } =
    CURRICULUM_PLANNER_DATA;

  const getHeatmapColor = (value) => {
    if (value === 0) return "bg-gray-100";
    if (value < 40) return "bg-red-200";
    if (value < 60) return "bg-orange-200";
    if (value < 80) return "bg-yellow-200";
    return "bg-green-300";
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-pink-400 to-cyan-500 rounded-xl">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Curriculum Heatmap
            </h2>
            <p className="text-sm text-gray-600">
              Monthly progress visualization across subjects
            </p>
          </div>
        </div>
        <Filter className="w-5 h-5 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" />
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Month Headers */}
          <div className="flex gap-2 mb-2 pl-24">
            {heatmapMonths.map((month, idx) => (
              <div
                key={idx}
                className="w-12 text-center text-xs font-semibold text-gray-600"
              >
                {month}
              </div>
            ))}
          </div>

          {/* Heatmap Rows */}
          {heatmapSubjects.map((subject, subIdx) => (
            <div key={subIdx} className="flex items-center gap-2 mb-2">
              <div className="w-20 text-sm font-semibold text-gray-700">
                {subject}
              </div>
              {heatmapData[subject].map((value, monthIdx) => (
                <div
                  key={monthIdx}
                  className={`w-12 h-12 rounded-lg ${getHeatmapColor(value)} flex items-center justify-center text-xs font-bold text-gray-700 hover:scale-110 transition-transform cursor-pointer group relative`}
                  title={`${subject} - ${heatmapMonths[monthIdx]}: ${value}%`}
                >
                  {value > 0 ? value : "—"}
                </div>
              ))}
            </div>
          ))}

          {/* Legend */}
          <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-200">
            <span className="text-xs font-semibold text-gray-600">
              Progress:
            </span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-red-200"></div>
              <span className="text-xs text-gray-600">{"<40%"}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-orange-200"></div>
              <span className="text-xs text-gray-600">40-60%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-yellow-200"></div>
              <span className="text-xs text-gray-600">60-80%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-green-300"></div>
              <span className="text-xs text-gray-600">80-100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumHeatmap;
