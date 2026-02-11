import React from "react";
import { Target, ArrowRight } from "lucide-react";

const ConversionFunnel = ({ data }) => {
  const getMaxFunnelValue = () => {
    return Math.max(...data.map((f) => f.count));
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
          <Target className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Admissions Conversion Funnel
          </h2>
          <p className="text-sm text-gray-600">
            From inquiry to enrollment journey
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {data.map((stage, index) => {
          const maxValue = getMaxFunnelValue();
          const widthPercentage = (stage.count / maxValue) * 100;
          const dropOff = index > 0 ? data[index - 1].count - stage.count : 0;

          return (
            <div key={index} className="relative">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-800">{stage.stage}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                        {stage.count}
                      </span>
                      <span className="text-sm font-semibold text-gray-600">
                        ({stage.percentage.toFixed(1)}%)
                      </span>
                    </div>
                  </div>
                  <div className="relative h-12 bg-gray-100 rounded-2xl overflow-hidden">
                    <div
                      className={`h-full rounded-2xl bg-gradient-to-r ${stage.color} transition-all flex items-center justify-center`}
                      style={{ width: `${widthPercentage}%` }}
                    >
                      {widthPercentage > 20 && (
                        <span className="text-white font-bold text-sm">
                          {stage.count} students
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {dropOff > 0 && (
                <div className="flex items-center justify-center my-2">
                  <div className="flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full border border-red-200">
                    <ArrowRight className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-semibold text-red-600">
                      Drop-off: {dropOff} students
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConversionFunnel;
