import React from "react";
import { MessageSquare, CheckCircle, AlertTriangle, Eye } from "lucide-react";

const TeacherComments = ({ comments }) => {
  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case "positive":
        return "from-green-400 to-emerald-400";
      case "neutral":
        return "from-blue-400 to-cyan-400";
      case "improvement":
        return "from-orange-400 to-amber-400";
      default:
        return "from-slate-400 to-gray-400";
    }
  };

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case "positive":
        return <CheckCircle size={18} />;
      case "neutral":
        return <MessageSquare size={18} />;
      case "improvement":
        return <AlertTriangle size={18} />;
      default:
        return <MessageSquare size={18} />;
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100">
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2 mb-6">
        <MessageSquare className="text-purple-500" size={24} />
        Teacher Comments & Feedback
      </h2>

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border-l-4 border-blue-400 hover:shadow-md transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-r ${getSentimentColor(comment.sentiment)} text-white`}
                >
                  {getSentimentIcon(comment.sentiment)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">
                    {comment.subject}
                  </h4>
                  <p className="text-xs text-slate-500">{comment.teacher}</p>
                </div>
              </div>
              <span className="text-xs text-slate-400">
                {new Date(comment.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {comment.comment}
            </p>

            <button className="w-fit px-6 py-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-lg font-semibold text-xs hover:shadow-md transition-all flex flex-col items-center gap-0.5 group">
              <div className="flex items-center gap-1 group-hover:scale-105 transition-transform">
                <Eye size={14} />
                <span>View Details</span>
              </div>
              <span className="text-[9px] opacity-80">get in app</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherComments;
