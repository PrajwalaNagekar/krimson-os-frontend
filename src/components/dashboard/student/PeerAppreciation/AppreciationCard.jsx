import React from "react";
import { Heart, ThumbsUp, Users, HandHeart, Sparkles } from "lucide-react";

/**
 * Appreciation Card Component
 * Displays a single appreciation message with category-specific styling.
 */
const AppreciationCard = ({ message }) => {
  const {
    sender,
    recipient,
    message: text,
    category,
    date,
    likes,
    avatar,
  } = message;

  // Category Configuration
  const getCategoryStyle = (cat) => {
    switch (cat) {
      case "Kindness":
        return {
          bg: "bg-pink-50",
          border: "border-pink-100",
          text: "text-pink-600",
          icon: <Heart className="w-4 h-4" />,
        };
      case "Teamwork":
        return {
          bg: "bg-blue-50",
          border: "border-blue-100",
          text: "text-blue-600",
          icon: <Users className="w-4 h-4" />,
        };
      case "Helpfulness":
        return {
          bg: "bg-emerald-50",
          border: "border-emerald-100",
          text: "text-emerald-600",
          icon: <HandHeart className="w-4 h-4" />,
        };
      case "Inclusion":
        return {
          bg: "bg-purple-50",
          border: "border-purple-100",
          text: "text-purple-600",
          icon: <Sparkles className="w-4 h-4" />,
        };
      default:
        return {
          bg: "bg-slate-50",
          border: "border-slate-100",
          text: "text-slate-600",
          icon: <ThumbsUp className="w-4 h-4" />,
        };
    }
  };

  const style = getCategoryStyle(category);

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img
            src={
              avatar ||
              `https://ui-avatars.com/api/?name=${sender}&background=random`
            }
            alt={sender}
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
          />
          <div>
            <h4 className="font-bold text-slate-800 text-sm">{sender}</h4>
            <div className="text-xs text-slate-500">
              to <span className="font-medium text-slate-700">{recipient}</span>
            </div>
          </div>
        </div>
        <span
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${style.bg} ${style.text}`}
        >
          {style.icon}
          {category}
        </span>
      </div>

      {/* Message Body */}
      <p className="text-slate-600 text-sm leading-relaxed mb-4">"{text}"</p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-50">
        <span>{date}</span>
        <div className="flex items-center gap-1.5 hover:text-red-500 transition-colors cursor-pointer">
          <Heart
            className={`w-3.5 h-3.5 ${likes > 0 ? "fill-red-500 text-red-500" : ""}`}
          />
          <span className="font-medium">{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default AppreciationCard;
