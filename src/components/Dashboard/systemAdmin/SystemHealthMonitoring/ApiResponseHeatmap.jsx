import React from "react";
import { Zap } from "lucide-react";

const ApiResponseHeatmap = ({ apiResponseTime, heatmapData }) => {
  return (
    <div className="lg:col-span-1 group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-5 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Zap className="text-cyan-500" size={24} />
            API Response Time
          </h3>
          <p className="text-sm text-slate-500 mt-1">Performance heatmap</p>
        </div>

        <div className="mb-4">
          <p className="text-xs text-slate-500 mb-1">Average Latency</p>
          <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {Math.round(apiResponseTime)}ms
          </p>
        </div>

        {/* Heatmap Grid */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {heatmapData.map((cell, i) => {
            let bgClass = "bg-green-400";
            if (cell.latency > 150) bgClass = "bg-yellow-400";
            if (cell.latency > 220) bgClass = "bg-red-400";

            return (
              <div
                key={i}
                className={`h-8 rounded-lg ${bgClass} opacity-70 hover:opacity-100 transition-all duration-200 cursor-pointer hover:scale-110`}
                title={`Latency: ${Math.round(cell.latency)}ms`}
              ></div>
            );
          })}
        </div>

        {/* Heatmap Legend */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded"></div>
              <span className="text-slate-600">Fast</span>
            </div>
            <span className="text-slate-400">&lt;150ms</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded"></div>
              <span className="text-slate-600">Medium</span>
            </div>
            <span className="text-slate-400">150-220ms</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded"></div>
              <span className="text-slate-600">Slow</span>
            </div>
            <span className="text-slate-400">&gt;220ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiResponseHeatmap;
