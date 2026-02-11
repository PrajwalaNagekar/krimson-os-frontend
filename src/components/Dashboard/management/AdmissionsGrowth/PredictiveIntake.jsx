import React from "react";
import { Activity, Calendar } from "lucide-react";

const PredictiveIntake = ({ data }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Predictive Intake Trend
            </h2>
            <p className="text-sm text-gray-600">
              Next 4 years enrollment forecast
            </p>
          </div>
        </div>
        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
          AI-Powered Forecast
        </span>
      </div>

      <div className="space-y-4">
        {data.map((year, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-500" />
                <h3 className="font-bold text-gray-800 text-lg">{year.year}</h3>
                {year.actual === null && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    Predicted
                  </span>
                )}
              </div>
              <div className="text-right">
                <p
                  className={`text-2xl font-bold ${
                    year.actual ? "text-green-600" : "text-blue-600"
                  }`}
                >
                  {year.actual || year.predicted}
                </p>
                <p className="text-xs text-gray-500">students</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-xs text-gray-600 mb-1">Capacity</p>
                <p className="font-bold text-gray-800">{year.capacity} seats</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Utilization</p>
                <p className="font-bold text-gray-800">
                  {(
                    ((year.actual || year.predicted) / year.capacity) *
                    100
                  ).toFixed(1)}
                  %
                </p>
              </div>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-4">
              <div
                className={`h-full rounded-full transition-all ${
                  year.actual
                    ? "bg-gradient-to-r from-green-400 to-emerald-500"
                    : "bg-gradient-to-r from-blue-400 to-cyan-500"
                }`}
                style={{
                  width: `${
                    ((year.actual || year.predicted) / year.capacity) * 100
                  }%`,
                }}
              ></div>
            </div>

            {index < data.length - 1 && year.predicted && (
              <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600">
                Projected Growth:{" "}
                <span className="font-bold text-green-600">
                  +{data[index + 1].predicted - year.predicted} students
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredictiveIntake;
