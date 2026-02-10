import React from "react";

const CategoryGrid = ({ categories }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
      <h2 className="text-lg font-bold text-slate-800 mb-4">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-100 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{category.icon}</span>
              <span className="text-lg font-bold text-blue-600">
                {category.count}
              </span>
            </div>
            <p className="font-semibold text-slate-800">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
