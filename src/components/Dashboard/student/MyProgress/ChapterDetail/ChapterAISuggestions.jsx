import React from "react";
import {
  Brain,
  Microscope,
  Target,
  ChevronRight,
  RefreshCw,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

const ICON_MAP = { RefreshCw, TrendingUp, Lightbulb };

const ChapterAISuggestions = ({ aiSuggestions, conceptWeaknesses }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-6 border border-indigo-100 shadow-sm">
      {/* Section Title */}
      <h2 className="font-bold text-slate-800 mb-5 flex items-center gap-2 text-lg">
        <Brain size={22} className="text-indigo-600" />
        AI Learning Suggestions
        <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 text-[10px] rounded-full uppercase tracking-wider font-bold">
          Beta
        </span>
      </h2>

      {/* Suggestion Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aiSuggestions.map((suggestion) => {
          const IconCmp = ICON_MAP[suggestion.icon] || Lightbulb;
          const iconColor =
            suggestion.type === "Remedial"
              ? "text-orange-500"
              : "text-purple-500";

          return (
            <div
              key={suggestion.id}
              className={`p-4 rounded-xl border ${suggestion.color} transition-all hover:shadow-md cursor-pointer group`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                  <IconCmp size={18} className={iconColor} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/50 rounded-md">
                  {suggestion.type}
                </span>
              </div>
              <h4 className="font-bold text-sm mb-1">{suggestion.title}</h4>
              <p className="text-xs opacity-80 mb-3 leading-relaxed">
                {suggestion.description}
              </p>
              <div className="flex items-center gap-1 text-xs font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                View Details <ChevronRight size={14} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Concept Weaknesses */}
      {conceptWeaknesses && conceptWeaknesses.length > 0 && (
        <div className="mt-5 bg-orange-50 border border-orange-100 rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-orange-100 flex items-center gap-2 bg-orange-100/50">
            <Microscope size={18} className="text-orange-600" />
            <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wide">
              Identified Concept Gaps
            </h3>
          </div>
          <div className="divide-y divide-orange-100">
            {conceptWeaknesses.map((weakness) => (
              <div
                key={weakness.id}
                className="p-4 hover:bg-orange-100/30 transition-colors"
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="px-2 py-0.5 bg-white border border-orange-200 rounded text-[10px] font-bold text-orange-700 uppercase">
                    {weakness.topic}
                  </span>
                </div>
                <p className="font-bold text-slate-800 text-sm mb-1">
                  {weakness.weakness}
                </p>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  <span className="font-semibold text-slate-500">
                    Analysis:{" "}
                  </span>
                  {weakness.observation}
                </p>
                <div className="flex items-center gap-2 bg-white/60 p-2 rounded-lg border border-orange-100">
                  <Target size={14} className="text-orange-500" />
                  <p className="text-xs font-medium text-orange-800">
                    <span className="font-bold uppercase text-[10px] text-orange-500 mr-1">
                      Fix:
                    </span>
                    {weakness.recommendation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChapterAISuggestions;
