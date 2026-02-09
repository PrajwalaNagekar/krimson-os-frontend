import React from "react";
import { Tag, BookOpen } from "lucide-react";

const PopularCategories = ({ categories }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
          <Tag className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Popular Categories
          </h2>
          <p className="text-sm text-gray-600">Browse by subject area</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group"
          >
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
            >
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 text-sm mb-1">
              {category.name}
            </h3>
            <p className="text-xs text-gray-500">{category.count} books</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
