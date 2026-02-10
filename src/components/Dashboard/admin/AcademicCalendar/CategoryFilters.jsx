/**
 * @component CategoryFilters
 * @description Filter buttons for event categories
 * @props {Array} categories - Array of category objects
 * @props {string} activeCategory - Currently active category
 * @props {Function} onCategoryChange - Callback when category changes
 */
import React from "react";
import { BookOpen, Calendar, Users, Sun, GraduationCap } from "lucide-react";

const CategoryFilters = ({
  categories = [],
  activeCategory = "all",
  onCategoryChange,
}) => {
  const getIcon = (iconName) => {
    const icons = {
      BookOpen,
      Calendar,
      Users,
      Sun,
      GraduationCap,
    };
    return icons[iconName] || Calendar;
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Event Categories
      </h2>
      <div className="space-y-3">
        {/* All Events Option */}
        <button
          onClick={() => onCategoryChange && onCategoryChange("all")}
          className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 ${
            activeCategory === "all"
              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-transparent shadow-lg"
              : "bg-slate-50 text-slate-700 border-slate-100 hover:border-blue-200 hover:bg-blue-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${activeCategory === "all" ? "bg-white/20" : "bg-white"}`}
            >
              <Calendar
                size={18}
                className={
                  activeCategory === "all" ? "text-white" : "text-blue-500"
                }
              />
            </div>
            <span className="font-bold">All Events</span>
          </div>
          <span
            className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
              activeCategory === "all" ? "bg-white/20" : "bg-white"
            }`}
          >
            {categories.reduce((sum, cat) => sum + (cat.count || 0), 0)}
          </span>
        </button>

        {/* Category Options */}
        {categories.map((category) => {
          const Icon = getIcon(category.icon);
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange && onCategoryChange(category.id)}
              className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 ${
                isActive
                  ? `bg-gradient-to-r ${category.color.replace("bg-", "from-")} to-${category.color.replace("bg-", "").replace("500", "600")} text-white border-transparent shadow-lg`
                  : "bg-slate-50 text-slate-700 border-slate-100 hover:border-blue-200 hover:bg-blue-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${isActive ? "bg-white/20" : "bg-white"}`}
                >
                  <Icon
                    size={18}
                    className={
                      isActive
                        ? "text-white"
                        : category.color.replace("bg-", "text-")
                    }
                  />
                </div>
                <div className="text-left">
                  <p className="font-bold">{category.name}</p>
                  <p
                    className={`text-xs ${isActive ? "text-white/80" : "text-slate-500"}`}
                  >
                    {category.description}
                  </p>
                </div>
              </div>
              <span
                className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                  isActive ? "bg-white/20" : "bg-white"
                }`}
              >
                {category.count || 0}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilters;
