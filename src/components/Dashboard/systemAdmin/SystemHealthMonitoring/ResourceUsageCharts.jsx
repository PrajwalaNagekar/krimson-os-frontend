import React from "react";
import { Cpu, HardDrive } from "lucide-react";

const ResourceUsageCharts = ({
  cpuUsage,
  memoryUsage,
  cpuHistory,
  memoryHistory,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* CPU Usage Graph */}
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Cpu className="text-blue-500" size={24} />
                CPU Usage
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Real-time performance monitoring
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {Math.round(cpuUsage)}%
              </p>
              <p className="text-xs text-slate-400">Current</p>
            </div>
          </div>

          {/* Graph */}
          <div className="h-48 flex items-end justify-between gap-1">
            {cpuHistory.map((point, i) => {
              const height = (point.value / 100) * 100;
              const isLast = i === cpuHistory.length - 1;
              return (
                <div
                  key={i}
                  className="flex-1 flex flex-col justify-end group/bar"
                >
                  <div
                    className={`w-full rounded-t-lg transition-all duration-500 ${
                      isLast
                        ? "bg-gradient-to-t from-blue-500 to-purple-500 shadow-lg"
                        : point.value > 80
                          ? "bg-gradient-to-t from-red-400 to-red-500"
                          : point.value > 60
                            ? "bg-gradient-to-t from-yellow-400 to-yellow-500"
                            : "bg-gradient-to-t from-blue-400 to-blue-500"
                    } opacity-70 group-hover/bar:opacity-100`}
                    style={{ height: `${height}%` }}
                    title={`${Math.round(point.value)}%`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gradient-to-r from-blue-400 to-blue-500"></div>
              <span className="text-slate-600">Normal (&lt;60%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
              <span className="text-slate-600">Medium (60-80%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gradient-to-r from-red-400 to-red-500"></div>
              <span className="text-slate-600">High (&gt;80%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Usage Graph */}
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-pink-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <HardDrive className="text-pink-500" size={24} />
                Memory Usage
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                RAM allocation tracking
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {Math.round(memoryUsage)}%
              </p>
              <p className="text-xs text-slate-400">Current</p>
            </div>
          </div>

          {/* Graph */}
          <div className="h-48 flex items-end justify-between gap-1">
            {memoryHistory.map((point, i) => {
              const height = (point.value / 100) * 100;
              const isLast = i === memoryHistory.length - 1;
              return (
                <div
                  key={i}
                  className="flex-1 flex flex-col justify-end group/bar"
                >
                  <div
                    className={`w-full rounded-t-lg transition-all duration-500 ${
                      isLast
                        ? "bg-gradient-to-t from-pink-500 to-purple-500 shadow-lg"
                        : point.value > 85
                          ? "bg-gradient-to-t from-red-400 to-red-500"
                          : point.value > 70
                            ? "bg-gradient-to-t from-yellow-400 to-yellow-500"
                            : "bg-gradient-to-t from-pink-400 to-pink-500"
                    } opacity-70 group-hover/bar:opacity-100`}
                    style={{ height: `${height}%` }}
                    title={`${Math.round(point.value)}%`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gradient-to-r from-pink-400 to-pink-500"></div>
              <span className="text-slate-600">Good (&lt;70%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
              <span className="text-slate-600">Warning (70-85%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gradient-to-r from-red-400 to-red-500"></div>
              <span className="text-slate-600">Critical (&gt;85%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceUsageCharts;
