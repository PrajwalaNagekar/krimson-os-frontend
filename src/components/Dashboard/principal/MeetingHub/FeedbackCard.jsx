import React from "react";
import { User, Star, CheckCircle, Send } from "lucide-react";

const FeedbackCard = ({ feedback }) => {
  const getTypeColor = () => {
    switch (feedback.type) {
      case "Parent":
        return {
          bg: "bg-purple-50",
          border: "border-purple-200",
          text: "text-purple-800",
          badge: "bg-purple-100 text-purple-700",
          icon: "text-purple-600",
        };
      case "Teacher":
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-800",
          badge: "bg-blue-100 text-blue-700",
          icon: "text-blue-600",
        };
      case "Staff":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-800",
          badge: "bg-green-100 text-green-700",
          icon: "text-green-600",
        };
      default:
        return {
          bg: "bg-slate-50",
          border: "border-slate-200",
          text: "text-slate-800",
          badge: "bg-slate-100 text-slate-700",
          icon: "text-slate-600",
        };
    }
  };

  const colors = getTypeColor();

  return (
    <div
      className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 ${colors.border} ${colors.bg} hover:shadow-md transition-all`}
    >
      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <div className="flex items-center gap-2">
          <User className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.icon}`} />
          <div>
            <h4 className={`font-bold text-xs sm:text-sm ${colors.text}`}>
              {feedback.sender}
            </h4>
            <span
              className={`text-[10px] sm:text-xs ${colors.badge} px-2 py-0.5 rounded-full font-bold`}
            >
              {feedback.type}
            </span>
          </div>
        </div>
        <span className="text-[10px] sm:text-xs text-slate-500 whitespace-nowrap">
          {feedback.time}
        </span>
      </div>

      <p
        className={`text-xs sm:text-sm ${colors.text} mb-3 line-clamp-2 italic`}
      >
        "{feedback.message}"
      </p>

      {feedback.rating && (
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                i < feedback.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-slate-300"
              }`}
            />
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <button
          className={`flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 ${colors.badge} hover:opacity-80 rounded-lg text-xs font-bold transition-all`}
        >
          <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          Acknowledge
          <span className="text-[8px] opacity-70">(get in app)</span>
        </button>
        <button className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 border border-slate-300 hover:bg-slate-100 rounded-lg text-xs font-bold text-slate-700 transition-all">
          <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          Reply
          <span className="text-[8px] opacity-70">(get in app)</span>
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
