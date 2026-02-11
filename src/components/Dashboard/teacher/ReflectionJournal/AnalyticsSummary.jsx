import React from "react";
import {
  Sparkles,
  Activity,
  Award,
  Users,
  MessageSquare,
  TrendingUp,
  Target,
  AlertCircle,
} from "lucide-react";

const AnalyticsSummary = ({ analytics }) => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 md:p-8 border-2 border-purple-200 shadow-lg">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-purple-100 rounded-xl">
          <Sparkles size={24} className="text-purple-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            AI-Powered Insights from Student Data
          </h3>
          <p className="text-slate-600">
            Automated analytics to enhance your teaching reflection
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Weekly Engagement */}
        <div className="p-5 bg-white rounded-2xl border border-purple-100">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="text-purple-500" size={20} />
            <h4 className="font-bold text-slate-800">Weekly Engagement</h4>
          </div>
          <p className="text-3xl font-bold text-purple-600 mb-2">
            {analytics.weeklyAvgEngagement}%
          </p>
          <p className="text-sm text-slate-600">Average across all classes</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-green-600 font-bold">
            <TrendingUp size={14} />
            <span>{analytics.improvementTrend} vs last week</span>
          </div>
        </div>

        {/* Average Lesson Rating */}
        <div className="p-5 bg-white rounded-2xl border border-purple-100">
          <div className="flex items-center gap-2 mb-3">
            <Award className="text-yellow-500" size={20} />
            <h4 className="font-bold text-slate-800">Avg Lesson Rating</h4>
          </div>
          <p className="text-3xl font-bold text-yellow-600 mb-2">
            {analytics.avgLessonRating}/5
          </p>
        </div>

        {/* Participation Rate */}
        <div className="p-5 bg-white rounded-2xl border border-purple-100">
          <div className="flex items-center gap-2 mb-3">
            <Users className="text-blue-500" size={20} />
            <h4 className="font-bold text-slate-800">Participation</h4>
          </div>
          <p className="text-3xl font-bold text-blue-600 mb-2">
            {analytics.weeklyAvgParticipation}%
          </p>
          <p className="text-sm text-slate-600">Active student participation</p>
        </div>

        {/* Questions Asked */}
        <div className="p-5 bg-white rounded-2xl border border-purple-100">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="text-green-500" size={20} />
            <h4 className="font-bold text-slate-800">Questions This Week</h4>
          </div>
          <p className="text-3xl font-bold text-green-600 mb-2">
            {analytics.totalQuestionsAsked}
          </p>
          <p className="text-sm text-slate-600">Student inquiries</p>
        </div>
      </div>

      {/* Suggestions */}
      <div className="mt-6 p-5 bg-white rounded-2xl border border-purple-100">
        <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
          <Target className="text-purple-500" size={20} />
          Suggested Focus Areas
        </h4>
        <div className="space-y-2">
          {analytics.areasNeedingAttention.map((area, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <AlertCircle
                size={16}
                className="text-orange-500 flex-shrink-0 mt-0.5"
              />
              <span className="text-slate-700">{area}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-200">
          <p className="text-sm text-green-800">
            <span className="font-bold">Most Engaging Topic:</span>{" "}
            {analytics.mostEngagingTopic}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSummary;
