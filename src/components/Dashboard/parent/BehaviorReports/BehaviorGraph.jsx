import React from "react";
import { BarChart3 } from "lucide-react";

const BehaviorGraph = ({ monthlyData }) => {
  const maxValue = Math.max(
    ...monthlyData.map((d) => Math.max(d.positive, d.negative)),
  );

  return (
    <div className="mb-4 md:mb-6 relative z-10">
      <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h3 className="font-bold text-slate-800 text-base md:text-lg flex items-center gap-2">
            <BarChart3 size={20} className="text-cyan-500" />
            Behavior Points Graph
          </h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              <span className="text-xs font-medium text-slate-600">
                Positive
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
              <span className="text-xs font-medium text-slate-600">
                Negative
              </span>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end justify-around gap-2 md:gap-4 h-48 md:h-64">
          {monthlyData.map((data, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center gap-2"
            >
              <div className="w-full flex gap-1 justify-center items-end h-full">
                {/* Positive Bar */}
                <div
                  className="flex-1 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t-lg transition-all duration-500 hover:scale-105 relative group"
                  style={{ height: `${(data.positive / maxValue) * 100}%` }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    +{data.positive}
                  </div>
                </div>
                {/* Negative Bar */}
                <div
                  className="flex-1 bg-gradient-to-t from-red-500 to-orange-400 rounded-t-lg transition-all duration-500 hover:scale-105 relative group"
                  style={{ height: `${(data.negative / maxValue) * 100}%` }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    -{data.negative}
                  </div>
                </div>
              </div>
              <span className="text-xs md:text-sm font-bold text-slate-600">
                {data.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BehaviorGraph;
