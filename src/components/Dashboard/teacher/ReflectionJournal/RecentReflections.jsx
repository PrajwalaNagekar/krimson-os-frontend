import React from "react";
import {
  BookOpen,
  Share2,
  Calendar,
  Users,
  MessageSquare,
  Eye,
} from "lucide-react";

const RecentReflections = ({ reflections, onSelectReflection }) => {
  // Helper to get engagement color
  const getEngagementColor = (score) => {
    if (score >= 85) return "text-green-600 bg-green-100";
    if (score >= 70) return "text-blue-600 bg-blue-100";
    if (score >= 60) return "text-orange-600 bg-orange-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
            <BookOpen className="text-blue-500" size={24} />
            Recent Reflections
          </h3>
          <p className="text-sm text-slate-500">
            Your teaching journal entries
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {reflections.map((reflection) => (
          <div
            key={reflection.id}
            className="p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-md transition-all cursor-pointer"
            onClick={() => onSelectReflection(reflection)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-bold text-slate-800">
                    {reflection.lessonTopic}
                  </h4>
                  {reflection.shared && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold flex items-center gap-1">
                      <Share2 size={12} />
                      Shared
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(reflection.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span>{reflection.class}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`px-3 py-1 rounded-lg font-bold text-sm ${getEngagementColor(
                    reflection.studentEngagement,
                  )}`}
                >
                  {reflection.studentEngagement}% engaged
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs font-bold text-green-600 mb-1">
                  ✓ What Went Well
                </p>
                <p className="text-slate-700 line-clamp-2">
                  {reflection.whatWentWell}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-orange-600 mb-1">
                  → Areas for Improvement
                </p>
                <p className="text-slate-700 line-clamp-2">
                  {reflection.areasForImprovement}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Users size={12} />
                  {reflection.participationRate}% participated
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare size={12} />
                  {reflection.questionsAsked} questions
                </span>
              </div>
              <button className="px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors">
                <Eye size={14} className="inline mr-1" />
                View Full
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReflections;
