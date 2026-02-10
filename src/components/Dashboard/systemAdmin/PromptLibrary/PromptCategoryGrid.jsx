import React from "react";

const PromptCategoryGrid = ({ categories }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
      <h2 className="text-lg font-bold text-slate-800 mb-4">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100 hover:shadow-md transition-all cursor-pointer text-center"
          >
            <div className="text-2xl mb-1">{category.icon}</div>
            <p className="text-xs font-semibold text-slate-700 truncate">
              {category.name}
            </p>
            <p className="text-xs text-slate-500">{category.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptCategoryGrid;
