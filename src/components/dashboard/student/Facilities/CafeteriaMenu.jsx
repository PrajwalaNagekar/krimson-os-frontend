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
  const [selectedItem, setSelectedItem] = useState(null);

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

      {/* Meals List with Expandable Cards */}
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

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {meal.items.map((item) => {
                const isExpanded = selectedItem?.id === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(isExpanded ? null : item)}
                    className={`${cardGradient} rounded-2xl border-3 transition-all duration-300 cursor-pointer group ${
                      isExpanded
                        ? "border-cyan-400 shadow-2xl ring-4 ring-cyan-200 md:col-span-2 lg:col-span-3"
                        : "border-transparent hover:border-cyan-300 hover:shadow-xl"
                    } ${!item.available ? "opacity-60" : ""}`}
                  >
                    {/* Collapsed View */}
                    {!isExpanded ? (
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-3xl">
                                {getCategoryIcon(item.category)}
                              </span>
                              <h4 className="text-xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">
                                {item.name}
                              </h4>
                              {item.popular && (
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                              )}
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <span
                                className={`w-3 h-3 rounded-full ${getTypeColor(
                                  item.type,
                                )}`}
                              ></span>
                              <span className="text-sm font-medium text-gray-600">
                                {item.type}
                              </span>
                              <span className="text-sm text-gray-500">•</span>
                              <span className="text-sm text-gray-600">
                                {item.category}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-cyan-600 transition-colors flex-shrink-0 ml-2" />
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5 text-gray-700">
                              <Flame className="w-5 h-5 text-orange-500" />
                              <span className="text-base font-semibold">
                                {item.calories}
                              </span>
                              <span className="text-sm">cal</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-700">
                              <Leaf className="w-5 h-5 text-green-500" />
                              <span className="text-base font-semibold">
                                {item.protein}
                              </span>
                            </div>
                          </div>
                          <span className="text-2xl font-bold text-cyan-600">
                            {item.price}
                          </span>
                        </div>

                        {!item.available && (
                          <div className="mt-3 text-sm text-red-600 font-bold">
                            ⚠️ Currently Unavailable
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Expanded View */
                      <div className="p-8">
                        {/* Header with Close Button */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-start gap-4 flex-1">
                            <span className="text-5xl">
                              {getCategoryIcon(item.category)}
                            </span>
                            <div className="flex-1">
                              <h4 className="text-3xl font-bold text-gray-800 mb-3">
                                {item.name}
                              </h4>
                              <div className="flex flex-wrap items-center gap-3">
                                <span
                                  className={`px-4 py-2 rounded-full text-sm font-bold text-white ${getTypeColor(
                                    item.type,
                                  )}`}
                                >
                                  {item.type}
                                </span>
                                <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700 border-2 border-cyan-300">
                                  {item.category}
                                </span>
                                {item.popular && (
                                  <span className="px-4 py-2 rounded-full text-sm font-bold bg-yellow-100 text-yellow-700 border-2 border-yellow-300 flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-500" />
                                    Popular
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedItem(null);
                            }}
                            className="p-3 hover:bg-red-100 rounded-full transition-colors text-gray-600 hover:text-red-600 flex-shrink-0"
                          >
                            <X className="w-7 h-7" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-center mb-8 py-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl border-2 border-cyan-300">
                          <div className="text-5xl font-black text-cyan-600">
                            {item.price}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Nutritional Information */}
                          <div>
                            <h5 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                              <Flame className="w-6 h-6 text-orange-500" />
                              Nutrition Facts
                            </h5>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-5 border-2 border-orange-200">
                                <div className="text-sm font-semibold text-gray-600 mb-1">
                                  Calories
                                </div>
                                <div className="text-3xl font-bold text-orange-600">
                                  {item.calories}
                                </div>
                              </div>
                              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-200">
                                <div className="text-sm font-semibold text-gray-600 mb-1">
                                  Protein
                                </div>
                                <div className="text-3xl font-bold text-green-600">
                                  {item.protein}
                                </div>
                              </div>
                              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border-2 border-blue-200">
                                <div className="text-sm font-semibold text-gray-600 mb-1">
                                  Carbs
                                </div>
                                <div className="text-3xl font-bold text-blue-600">
                                  {item.carbs}
                                </div>
                              </div>
                              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-5 border-2 border-yellow-200">
                                <div className="text-sm font-semibold text-gray-600 mb-1">
                                  Fat
                                </div>
                                <div className="text-3xl font-bold text-yellow-600">
                                  {item.fat}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Ingredients & Allergens */}
                          <div className="space-y-6">
                            {/* Ingredients */}
                            <div>
                              <h5 className="text-xl font-bold text-gray-800 mb-4">
                                Ingredients
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {item.ingredients.map((ingredient, index) => (
                                  <span
                                    key={index}
                                    className="px-4 py-2 bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-full text-base font-medium text-gray-700"
                                  >
                                    {ingredient}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Allergens */}
                            {item.allergens.length > 0 && (
                              <div>
                                <h5 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                  <AlertCircle className="w-6 h-6 text-red-500" />
                                  Allergen Warning
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {item.allergens.map((allergen, index) => (
                                    <span
                                      key={index}
                                      className="px-4 py-2 bg-red-50 border-2 border-red-300 rounded-full text-base font-bold text-red-700"
                                    >
                                      ⚠️ {allergen}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {!item.available && (
                          <div className="mt-8 p-4 bg-red-50 border-2 border-red-300 rounded-xl">
                            <div className="text-lg text-red-700 font-bold text-center">
                              ⚠️ Currently Unavailable
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CafeteriaMenu;
