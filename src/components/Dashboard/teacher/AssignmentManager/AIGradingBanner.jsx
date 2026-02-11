import React from "react";
import { Sparkles } from "lucide-react";

const AIGradingBanner = ({ pendingReviews }) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
          <Sparkles size={32} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold">AI Grading Assistant</h3>
            <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-bold">
              SMART
            </span>
          </div>
          <p className="text-sm opacity-90 mb-3">
            Automatically check assignment completion and detect plagiarism
            using advanced AI. Get instant insights on student performance.
          </p>
          <div className="flex flex-wrap gap-2">
            {pendingReviews > 0 && (
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium border border-white/30">
                {pendingReviews} submissions ready for AI analysis
              </span>
            )}
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium border border-white/30">
              Plagiarism Detection Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGradingBanner;
