import React from "react";
import { Search } from "lucide-react";

const MessageFilters = ({
  searchQuery,
  setSearchQuery,
  filterTag,
  setFilterTag,
}) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search messages by sender, subject, or student..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Tag Filter */}
        <div className="flex gap-2 text-slate-400">
          {["all", "Academic", "Attendance", "Behavior"].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                filterTag === tag
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tag === "all" ? "All Tags" : tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageFilters;
