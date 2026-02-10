import React from "react";
import { Sparkles, TrendingUp } from "lucide-react";

const AIInsightsPanel = ({ insights }) => {
  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-cyan-600" size={20} />
        <h2 className="text-lg font-bold text-slate-800">AI Insights</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <p className="text-xs text-slate-600 mb-1">Best Time to Send</p>
          <p className="text-sm font-semibold text-slate-800">
            {insights.bestTimeToSend}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-600 mb-1">Top Subject Line</p>
          <p className="text-sm font-semibold text-slate-800">
            {insights.topPerformingSubject}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-600 mb-1">Recommended Channels</p>
          <div className="flex gap-1">
            {insights.recommendedChannels.map((channel, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-white rounded-md text-slate-700"
              >
                {channel}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-slate-600 mb-1">Sentiment</p>
          <p className="text-sm font-semibold text-green-600">
            {insights.sentimentAnalysis}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-600 mb-1">Engagement Trend</p>
          <div className="flex items-center gap-1">
            <TrendingUp className="text-green-600" size={16} />
            <p className="text-sm font-semibold text-green-600">
              {insights.engagementTrend}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsightsPanel;
