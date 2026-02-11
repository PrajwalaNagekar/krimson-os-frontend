import React from "react";
import { PenTool, Share2, Calendar, Award } from "lucide-react";

const QuickStats = ({ reflections, feedbackScore }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Total Reflections
          </p>
          <PenTool className="text-blue-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
          {reflections.length}
        </h3>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-green-200 bg-white hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Positive Feedback
          </p>
          <Share2 className="text-green-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-green-600">
          {(
            (reflections.filter((r) => r.rating >= 4).length /
              reflections.length) *
            100
          ).toFixed(0)}
          %
        </h3>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-purple-200 bg-white hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            This Week
          </p>
          <Calendar className="text-purple-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600">
          {reflections.filter((r) => r.weekNumber === 3).length}
        </h3>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-yellow-200 bg-white hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Student Rating
          </p>
          <Award className="text-yellow-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-600">
          {feedbackScore}/5
        </h3>
      </div>
    </div>
  );
};

export default QuickStats;
