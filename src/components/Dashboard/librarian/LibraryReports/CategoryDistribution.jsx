import React from "react";
import { PieChart, BookOpen } from "lucide-react";

const CategoryDistribution = ({ distribution }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
          <PieChart className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Category Distribution
          </h2>
          <p className="text-sm text-gray-600">Borrowing by subject area</p>
        </div>
      </div>

      <div className="space-y-3">
        {distribution.map((cat, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center`}
                >
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-800">{cat.category}</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                {cat.percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                style={{ width: `${cat.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDistribution;
