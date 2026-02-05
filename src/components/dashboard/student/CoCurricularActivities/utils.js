import { Trophy, Palette, MessageSquare, Award } from "lucide-react";

/**
 * Get gradient color classes for a category
 * @param {string} category - Category name (Sports, Arts, Debate)
 * @returns {string} Tailwind gradient classes
 */
export const getCategoryColor = (category) => {
  switch (category) {
    case "Sports":
      return "from-orange-400 to-red-500";
    case "Arts":
      return "from-purple-400 to-pink-500";
    case "Debate":
      return "from-blue-400 to-indigo-500";
    default:
      return "from-slate-400 to-slate-600";
  }
};

/**
 * Get icon component for a category
 * @param {string} category - Category name (Sports, Arts, Debate)
 * @returns {Component} Lucide icon component
 */
export const getCategoryIcon = (category) => {
  switch (category) {
    case "Sports":
      return Trophy;
    case "Arts":
      return Palette;
    case "Debate":
      return MessageSquare;
    default:
      return Award;
  }
};
