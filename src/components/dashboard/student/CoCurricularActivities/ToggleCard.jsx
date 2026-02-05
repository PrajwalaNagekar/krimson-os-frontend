import React from "react";
import { ChevronDown } from "lucide-react";

/**
 * ToggleCard Component
 *
 * A reusable card component that can be expanded/collapsed
 * Features:
 * - Smooth height animations
 * - Premium gradient design
 * - Responsive layout
 * - Customizable colors and icons
 */
const ToggleCard = ({
  title,
  icon: Icon,
  isExpanded,
  onToggle,
  previewContent,
  fullContent,
  badge,
  gradientColors = "from-cyan-400 via-blue-400 to-pink-400",
}) => {
  return (
    <div
      className={`bg-white rounded-3xl shadow-md transition-all duration-300 overflow-hidden ${
        isExpanded ? "shadow-xl xl:col-span-4" : "hover:shadow-lg"
      }`}
    >
      {/* Card Header - Always Visible */}
      <button
        onClick={onToggle}
        className="w-full p-4 md:p-6 flex flex-col items-center justify-center hover:bg-slate-50 transition-colors duration-200"
      >
        <div className="flex flex-col items-center gap-2">
          {/* Icon */}
          <div
            className={`p-3 bg-gradient-to-br ${gradientColors} rounded-2xl shadow-md transition-transform duration-300 mb-3 ${
              isExpanded ? "scale-110" : ""
            }`}
          >
            <Icon className="text-white" size={24} />
          </div>

          {/* Title and Badge */}
          <div className="text-center w-full">
            <h2 className="text-sm md:text-base font-bold text-slate-800 mb-2">
              {title}
            </h2>
            {badge && (
              <span className="text-xs px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold inline-block mb-2">
                {badge}
              </span>
            )}
            {!isExpanded && previewContent && (
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                {previewContent}
              </p>
            )}
          </div>
        </div>

        {/* Chevron Icon */}
        <ChevronDown
          className={`text-slate-400 transition-transform duration-300 mt-2 ${
            isExpanded ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>

      {/* Card Content - Expandable */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`px-6 md:px-8 pb-6 md:pb-8 ${isExpanded ? "pt-0" : ""}`}
        >
          {fullContent}
        </div>
      </div>
    </div>
  );
};

export default ToggleCard;
