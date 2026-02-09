import React from "react";
import { Target, ArrowUp, ArrowDown } from "lucide-react";

const AnnualObjectives = ({ objectives }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center">
          <Target className="text-white" size={20} />
        </div>
        <h3 className="font-bold text-xl text-slate-800">
          Annual Objectives (2026)
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {objectives.map((objective, idx) => (
          <div
            key={idx}
            className="group relative bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300"
          >
            {/* Decorative gradient blob */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${objective.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}
            ></div>

            <div className="relative z-10 space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 ${objective.bgColor} rounded-xl flex items-center justify-center`}
                  >
                    <objective.icon className={objective.textColor} size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      {objective.category}
                    </p>
                    <h4 className="font-bold text-slate-800 text-base">
                      {objective.title}
                    </h4>
                  </div>
                </div>
                {objective.trend === "up" ? (
                  <ArrowUp className="text-green-500" size={20} />
                ) : (
                  <ArrowDown className="text-red-500" size={20} />
                )}
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-2xl font-bold text-slate-800">
                      {objective.unit === "₹"
                        ? `₹${(objective.current / 10000000).toFixed(1)}Cr`
                        : objective.unit === "students"
                          ? objective.current
                          : `${objective.current}${objective.unit}`}
                    </p>
                    <p className="text-xs text-slate-500">
                      of{" "}
                      {objective.unit === "₹"
                        ? `₹${(objective.target / 10000000).toFixed(1)}Cr`
                        : objective.unit === "students"
                          ? objective.target
                          : `${objective.target}${objective.unit}`}
                    </p>
                  </div>
                  <span
                    className={`font-bold text-lg ${
                      objective.percentage >= 90
                        ? "text-green-600"
                        : objective.percentage >= 70
                          ? "text-blue-600"
                          : "text-amber-600"
                    }`}
                  >
                    {objective.percentage}% Achieved
                  </span>
                </div>

                <div className="relative w-full bg-slate-200 rounded-full h-4 overflow-hidden shadow-inner">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${objective.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{ width: `${objective.percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnualObjectives;
