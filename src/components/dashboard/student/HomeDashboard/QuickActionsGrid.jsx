import React from "react";
import {
  Video,
  Upload,
  BarChart3,
  BookOpen,
  MessageCircle,
  Calendar,
} from "lucide-react";

/**
 * QuickActionsGrid Component
 *
 * Purpose: Display grid of quick action buttons for common student tasks
 */
const QuickActionsGrid = ({ quickActions, onQuickAction }) => {
  // Icon mapping for quick actions
  const getQuickActionIcon = (iconName) => {
    const icons = {
      video: Video,
      upload: Upload,
      chart: BarChart3,
      book: BookOpen,
      message: MessageCircle,
      calendar: Calendar,
    };
    const Icon = icons[iconName] || BookOpen;
    return <Icon size={24} />;
  };

  // Color classes for quick actions
  const getColorClasses = (color, status) => {
    const colors = {
      cyan:
        status === "active"
          ? "from-cyan-400 to-cyan-500"
          : "from-cyan-400/80 to-cyan-500/80",
      blue:
        status === "pending"
          ? "from-blue-400 to-blue-500"
          : "from-blue-400/80 to-blue-500/80",
      pink:
        status === "ready"
          ? "from-pink-400 to-pink-500"
          : "from-pink-400/80 to-pink-500/80",
      purple: "from-purple-400/80 to-purple-500/80",
      indigo: "from-indigo-400/80 to-indigo-500/80",
      violet: "from-violet-400/80 to-violet-500/80",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {quickActions.map((action) => (
        <button
          key={action.id}
          onClick={() => onQuickAction(action.title)}
          className="group relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100 overflow-hidden text-left"
        >
          {/* Status indicator for active items */}
          {action.status === "active" && (
            <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          )}
          {action.status === "pending" && (
            <div className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          )}

          {/* Gradient Icon Background */}
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getColorClasses(action.color, action.status)} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform shadow-md`}
          >
            {getQuickActionIcon(action.icon)}
          </div>

          <h4 className="font-bold text-slate-800 text-sm mb-1">
            {action.title}
          </h4>
          <p className="text-[10px] text-slate-500 leading-tight">
            {action.description}
          </p>

          {/* Decorative gradient border on hover */}
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getColorClasses(action.color, action.status)} opacity-0 group-hover:opacity-10 transition-opacity`}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default QuickActionsGrid;
