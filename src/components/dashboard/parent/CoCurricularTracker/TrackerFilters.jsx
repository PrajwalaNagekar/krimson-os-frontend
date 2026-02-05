import React from "react";
import { Search } from "lucide-react";
import * as LucideIcons from "lucide-react";

const TrackerFilters = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  totalActivitiesCount,
  filteredActivitiesCount,
}) => {
  return (
    <div className="mb-4 md:mb-6 relative z-10">
      {/* Search */}
      <div className="relative mb-4">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search activities, achievements, competitions..."
          className="w-full pl-10 pr-4 py-2.5 bg-white/95 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => {
          // Dynamic Icon Mapping
          // Assuming category.icon is a string name in the data or component needs to map it
          // However, for now, let's assume we map strict names or pass icons if they are in data as strings (which I removed in JSON plan, so I need to map them back)
          // Actually in the original code, the icon object was passed. In my new JSON, I removed it.
          // I should look up the icon by name or hardcode the mapping here for safety if the data only has strings.

          // Simplified mapping based on common icons used in original
          let IconComponent = LucideIcons.Star; // Default
          if (category.name === "Sports") IconComponent = LucideIcons.Trophy;
          else if (category.name === "Arts")
            IconComponent = LucideIcons.Palette;
          else if (category.name === "Academics")
            IconComponent = LucideIcons.BookOpen;
          else if (category.name === "Leadership")
            IconComponent = LucideIcons.Crown;

          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex-shrink-0 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : "bg-white/80 text-slate-600 hover:bg-white hover:scale-105"
              }`}
            >
              <IconComponent size={16} />
              <span>{category.name}</span>
              {selectedCategory === category.id && (
                <span className="bg-white/30 px-2 py-0.5 rounded-full text-xs">
                  {category.id === "all"
                    ? totalActivitiesCount
                    : filteredActivitiesCount}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TrackerFilters;
