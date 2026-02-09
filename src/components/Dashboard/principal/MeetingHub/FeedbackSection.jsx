import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import FeedbackCard from "./FeedbackCard";

const FeedbackSection = ({ feedbackData }) => {
  const [feedbackFilter, setFeedbackFilter] = useState("all");

  const filteredFeedback =
    feedbackFilter === "all"
      ? feedbackData
      : feedbackData.filter((f) => f.type === feedbackFilter);

  return (
    <>
      <div className="p-4 sm:p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              <span className="text-sm sm:text-base md:text-lg">
                Feedback Summary
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {filteredFeedback.length} items to review
            </p>
          </div>
        </div>

        {/* Feedback Filter */}
        <div className="flex flex-wrap gap-2 mt-4">
          {["all", "Parent", "Teacher", "Staff"].map((filter) => (
            <button
              key={filter}
              onClick={() => setFeedbackFilter(filter)}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                feedbackFilter === filter
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {filter === "all" ? "All" : filter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 max-h-[600px]">
        {filteredFeedback.map((feedback, idx) => (
          <FeedbackCard key={idx} feedback={feedback} />
        ))}
      </div>
    </>
  );
};

export default FeedbackSection;
