import React from "react";
import { Zap } from "lucide-react";

const AIInsights = ({ insights }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-100">
        <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
          <Zap className="w-5 h-5 text-purple-500" fill="currentColor" />
          AI Insights
        </h3>
        <p className="text-xs text-slate-600 mt-1">
          Automated performance analysis
        </p>
      </div>

      <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
        {insights.map((insight, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl border-l-4 ${
              insight.type === "high"
                ? "bg-green-50 border-green-500"
                : insight.type === "support"
                  ? "bg-orange-50 border-orange-500"
                  : "bg-blue-50 border-blue-500"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`p-2 rounded-lg ${
                  insight.type === "high"
                    ? "bg-green-100"
                    : insight.type === "support"
                      ? "bg-orange-100"
                      : "bg-blue-100"
                }`}
              >
                <insight.icon
                  className={`w-4 h-4 ${
                    insight.type === "high"
                      ? "text-green-600"
                      : insight.type === "support"
                        ? "text-orange-600"
                        : "text-blue-600"
                  }`}
                />
              </div>
              <div className="flex-1">
                <h4
                  className={`font-bold text-sm mb-1 ${
                    insight.type === "high"
                      ? "text-green-800"
                      : insight.type === "support"
                        ? "text-orange-800"
                        : "text-blue-800"
                  }`}
                >
                  {insight.title}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">
                  {insight.description}
                </p>
                {insight.teachers && (
                  <div className="flex flex-wrap gap-1">
                    {insight.teachers.map((teacher, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-1 bg-white rounded-full text-slate-600 font-medium"
                      >
                        {teacher}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <button className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2">
          View Full Analysis
          <span className="text-[9px] opacity-80">(get in app)</span>
        </button>
      </div>
    </div>
  );
};

export default AIInsights;
