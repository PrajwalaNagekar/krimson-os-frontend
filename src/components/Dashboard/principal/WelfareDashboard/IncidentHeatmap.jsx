import React from "react";
import { TrendingDown } from "lucide-react";

// Incident Heatmap Cell
const HeatmapCell = ({ grade, incidentType, count }) => {
  const intensity =
    count > 5 ? "high" : count > 2 ? "medium" : count > 0 ? "low" : "none";

  return (
    <div
      className={`p-3 rounded-lg text-center transition-all hover:scale-105 cursor-pointer ${
        intensity === "high"
          ? "bg-red-500 text-white"
          : intensity === "medium"
            ? "bg-orange-400 text-white"
            : intensity === "low"
              ? "bg-yellow-300 text-slate-800"
              : "bg-slate-100 text-slate-400"
      }`}
      title={`${incidentType} in Grade ${grade}: ${count} incidents`}
    >
      <span className="text-xs font-bold">{count}</span>
    </div>
  );
};

const IncidentHeatmap = ({ heatmapData }) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-4 sm:p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
              Behavior Incident Heatmap
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Current term breakdown by grade and type
            </p>
          </div>
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 text-green-700 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap">
            ↓ 15% vs last month
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6 overflow-x-auto">
        <div className="min-w-[500px] sm:min-w-[600px]">
          {/* Header Row */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            <div className="p-2 text-xs font-bold text-slate-600">
              Type / Grade
            </div>
            {heatmapData.grades.map((grade, idx) => (
              <div
                key={idx}
                className="p-2 text-xs font-bold text-center text-slate-600"
              >
                Grade {grade}
              </div>
            ))}
          </div>

          {/* Heatmap Rows */}
          {heatmapData.types.map((incidentType, typeIdx) => (
            <div key={typeIdx} className="grid grid-cols-7 gap-2 mb-2">
              <div className="p-2 text-xs font-semibold text-slate-700 flex items-center">
                {incidentType}
              </div>
              {heatmapData.data[incidentType].map((count, gradeIdx) => (
                <HeatmapCell
                  key={gradeIdx}
                  grade={heatmapData.grades[gradeIdx]}
                  incidentType={incidentType}
                  count={count}
                />
              ))}
            </div>
          ))}

          {/* Legend */}
          <div className="flex items-center gap-4 mt-4 text-xs">
            <span className="font-semibold text-slate-600">Intensity:</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-slate-100 rounded"></div>
              <span>None</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-300 rounded"></div>
              <span>1-2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-orange-400 rounded"></div>
              <span>3-5</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-500 rounded"></div>
              <span>5+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentHeatmap;
