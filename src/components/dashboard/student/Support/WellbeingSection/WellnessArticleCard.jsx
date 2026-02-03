import React from "react";
import { Book, Heart, User, ChevronRight } from "lucide-react";

const WellnessArticleCard = ({ article }) => {
  const Icon = { Book, Heart, User }[article.icon] || Book;

  const colors = {
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      hover: "hover:border-green-200",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      hover: "hover:border-blue-200",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      hover: "hover:border-purple-200",
    },
  }[article.color] || {
    bg: "bg-gray-100",
    text: "text-gray-600",
    hover: "hover:border-gray-200",
  };

  return (
    <div
      className={`bg-white p-6 rounded-3xl shadow-sm border border-slate-100 ${colors.hover} transition-all`}
    >
      <div
        className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center mb-4`}
      >
        <Icon size={24} />
      </div>
      <h3 className="font-bold text-slate-800 text-lg mb-2">{article.title}</h3>
      <p className="text-sm text-slate-500 mb-4">{article.desc}</p>
      <button
        className={`${colors.text} text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all`}
      >
        {article.action} <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default WellnessArticleCard;
