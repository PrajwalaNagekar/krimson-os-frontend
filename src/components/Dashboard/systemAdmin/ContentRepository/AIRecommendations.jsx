import React from "react";
import { Sparkles, AlertCircle, TrendingUp } from "lucide-react";

const AIRecommendations = ({ recommendations, storageBreakdown }) => {
  return (
    <div className="space-y-4">
      {/* AI Insights */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="text-cyan-600" size={20} />
          <h2 className="text-lg font-bold text-slate-800">
            AI Recommendations
          </h2>
        </div>

        {/* Optimization Tips */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
            <TrendingUp size={16} className="text-green-600" />
            Optimization Tips
          </h3>
          <div className="space-y-2">
            {recommendations.optimizationTips.map((tip, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2 bg-white rounded-lg"
              >
                <span className="text-green-600 mt-0.5">✓</span>
                <p className="text-sm text-slate-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Gaps */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
            <AlertCircle size={16} className="text-orange-600" />
            Content Gaps
          </h3>
          <div className="space-y-2">
            {recommendations.contentGaps.map((gap, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2 bg-orange-50 rounded-lg"
              >
                <span className="text-orange-600 mt-0.5">!</span>
                <p className="text-sm text-slate-700">{gap}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Tags */}
        <div>
          <h3 className="text-sm font-semibold text-slate-700 mb-2">
            Suggested Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {recommendations.suggestedTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-cyan-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">
              {recommendations.duplicateFiles}
            </p>
            <p className="text-xs text-slate-600">Duplicate Files</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-600">
              {recommendations.unusedAssets}
            </p>
            <p className="text-xs text-slate-600">Unused Assets</p>
          </div>
        </div>
      </div>

      {/* Storage Breakdown */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800 mb-4">
          Storage Breakdown
        </h2>
        <div className="space-y-3">
          {Object.entries(storageBreakdown).map(([type, data]) => (
            <div key={type}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-slate-700 capitalize">
                  {type}
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  {data.size} ({data.percentage}%)
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full ${
                    type === "documents"
                      ? "bg-blue-500"
                      : type === "images"
                        ? "bg-purple-500"
                        : type === "videos"
                          ? "bg-pink-500"
                          : "bg-slate-500"
                  } transition-all duration-500`}
                  style={{ width: `${data.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIRecommendations;
