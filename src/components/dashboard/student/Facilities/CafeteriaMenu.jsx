import React, { useState } from "react";
import {
  UtensilsCrossed,
  Clock,
  Flame,
  Leaf,
  AlertCircle,
  ChevronRight,
  X,
  Star,
} from "lucide-react";

const CafeteriaMenu = ({ menuData }) => {
  // Color scheme matching student sidebar
  const gradientBg = "bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400";
  const cardGradient = "bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50";

  const getTypeColor = (type) => {
    return type === "Vegetarian"
      ? "bg-green-500"
      : type === "Non-Vegetarian"
        ? "bg-red-500"
        : "bg-gray-500";
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Main Course":
        return "🍛";
      case "Accompaniment":
        return "🍚";
      case "Side Dish":
        return "🥗";
      case "Beverage":
        return "🥤";
      case "Snack":
        return "🍪";
      case "Dessert":
        return "🍮";
      default:
        return "🍽️";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div
        className={`${gradientBg} rounded-2xl p-6 text-white shadow-lg relative overflow-hidden`}
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-300 opacity-20 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Cafeteria Menu</h2>
              <p className="text-white/90 text-sm">
                {menuData.today}, {menuData.date}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Special Notes */}
      <div className={`${cardGradient} rounded-xl p-4 border border-cyan-200`}>
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-cyan-600" />
          Important Notes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {menuData.specialNotes.map((note, index) => (
            <div
              key={index}
              className="text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2"
            >
              {note}
            </div>
          ))}
        </div>
      </div>

      {/* Meals List */}
      <div className="space-y-8">
        {menuData.meals.map((meal) => (
          <div key={meal.id} className="space-y-4">
            {/* Meal Header */}
            <div className="flex items-center gap-3">
              <div className="text-4xl">{meal.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {meal.type}
                </h3>
                <p className="text-base text-gray-600 flex items-center gap-1">
                  <Clock className="w-5 h-5" />
                  {meal.time}
                </p>
              </div>
            </div>

            {/* Menu Items Grid - Adjusted for larger cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {meal.items.map((item) => (
                <div
                  key={item.id}
                  className={`${cardGradient} rounded-2xl border-2 hover:border-cyan-300 transition-all duration-300 ${!item.available ? "opacity-60" : ""}`}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start gap-4 flex-1">
                        <span className="text-4xl">
                          {getCategoryIcon(item.category)}
                        </span>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-800 mb-2">
                            {item.name}
                          </h4>
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getTypeColor(
                                item.type,
                              )}`}
                            >
                              {item.type}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-cyan-700 border border-cyan-200">
                              {item.category}
                            </span>
                            {item.popular && (
                              <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700 border border-yellow-300 flex items-center gap-1">
                                <Star className="w-3 h-3 fill-yellow-500" />
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl font-black text-cyan-600">
                        {item.price}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      {/* Nutritional Information Compact Row */}
                      <div className="grid grid-cols-4 gap-2">
                        <div className="bg-white/50 rounded-lg p-2 text-center border border-orange-100">
                          <div className="text-xs text-gray-500">Cal</div>
                          <div className="font-bold text-orange-600">
                            {item.calories}
                          </div>
                        </div>
                        <div className="bg-white/50 rounded-lg p-2 text-center border border-green-100">
                          <div className="text-xs text-gray-500">Prot</div>
                          <div className="font-bold text-green-600">
                            {item.protein}
                          </div>
                        </div>
                        <div className="bg-white/50 rounded-lg p-2 text-center border border-blue-100">
                          <div className="text-xs text-gray-500">Carb</div>
                          <div className="font-bold text-blue-600">
                            {item.carbs}
                          </div>
                        </div>
                        <div className="bg-white/50 rounded-lg p-2 text-center border border-yellow-100">
                          <div className="text-xs text-gray-500">Fat</div>
                          <div className="font-bold text-yellow-600">
                            {item.fat}
                          </div>
                        </div>
                      </div>

                      {/* Ingredients & Allergens */}
                      <div className="space-y-4">
                        {/* Ingredients */}
                        <div>
                          <h5 className="text-sm font-semibold text-gray-700 mb-2">
                            Ingredients
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {item.ingredients.map((ingredient, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600"
                              >
                                {ingredient}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Allergens */}
                        {item.allergens.length > 0 && (
                          <div>
                            <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4 text-red-500" />
                              Allergens
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {item.allergens.map((allergen, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-red-50 border border-red-200 rounded-md text-xs font-semibold text-red-700"
                                >
                                  {allergen}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {!item.available && (
                      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-center">
                        <div className="text-sm text-red-700 font-bold">
                          ⚠️ Currently Unavailable
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CafeteriaMenu;
