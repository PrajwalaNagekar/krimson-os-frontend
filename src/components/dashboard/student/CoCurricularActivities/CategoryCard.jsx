import React from 'react';
import { getCategoryColor, getCategoryIcon } from './utils';

/**
 * CategoryCard Component
 * Displays a single co-curricular category with icon, points, and activity count
 * 
 * @param {Object} category - Category object
 * @param {string} category.name - Category name (e.g., Sports, Arts, Debate)
 * @param {number} category.points - Points earned in this category
 * @param {number} category.count - Number of activities in this category
 * @param {Function} onClick - Click handler for category selection
 */
const CategoryCard = ({ category, onClick }) => {
  const Icon = getCategoryIcon(category.name);
  const gradientColor = getCategoryColor(category.name);

  return (
    <div
      className={`bg-gradient-to-br ${gradientColor} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer`}
      onClick={() => onClick(category.name)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
          <Icon size={28} />
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold">+{category.points}</div>
          <div className="text-xs opacity-90">points</div>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
      <p className="text-sm opacity-90">{category.count} Activities</p>
    </div>
  );
};

export default CategoryCard;
