import React, { useState } from "react";
import {
  UtensilsCrossed,
  Clock,
  DollarSign,
  Heart,
  AlertTriangle,
  TrendingUp,
  ShoppingCart,
  Calendar,
  Settings,
} from "lucide-react";

const CafeteriaSection = ({ cafeteriaPreferences }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const spendingPercentage =
    (parseFloat(
      cafeteriaPreferences.spendingControl.currentSpent.replace(/[^\d.]/g, ""),
    ) /
      parseFloat(
        cafeteriaPreferences.spendingControl.monthlyLimit.replace(
          /[^\d.]/g,
          "",
        ),
      )) *
    100;

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "overview"
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Overview
          </div>
        </button>
        <button
          onClick={() => setActiveTab("transactions")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "transactions"
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Transactions
          </div>
        </button>
        <button
          onClick={() => setActiveTab("menu")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "menu"
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-4 h-4" />
            Menu
          </div>
        </button>
        <button
          onClick={() => setActiveTab("preferences")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "preferences"
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Preferences
          </div>
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Student Info Card */}
          <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-pink-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <UtensilsCrossed className="w-6 h-6 text-pink-600" />
              Meal Plan Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Student</p>
                <p className="font-bold text-gray-800">
                  {cafeteriaPreferences.studentInfo.name}
                </p>
                <p className="text-sm text-gray-600">
                  {cafeteriaPreferences.studentInfo.class}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Plan Type</p>
                <p className="font-bold text-gray-800">
                  {cafeteriaPreferences.mealPlan.type}
                </p>
                <p className="text-sm text-green-600 font-semibold">
                  {cafeteriaPreferences.mealPlan.status}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Plan Cost</p>
                <p className="font-bold text-gray-800">
                  {cafeteriaPreferences.mealPlan.cost}
                </p>
                <p className="text-sm text-gray-600">
                  Next billing: {cafeteriaPreferences.mealPlan.nextBilling}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Plan Duration</p>
                <p className="font-bold text-gray-800">
                  {cafeteriaPreferences.mealPlan.startDate}
                </p>
                <p className="text-sm text-gray-600">
                  to {cafeteriaPreferences.mealPlan.endDate}
                </p>
              </div>
            </div>
          </div>

          {/* Spending Control Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-green-600" />
              Spending Control
            </h3>
            <div className="space-y-4">
              {/* Spending Progress Bar */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">
                    Monthly Spending
                  </span>
                  <span className="text-sm font-bold text-gray-800">
                    {cafeteriaPreferences.spendingControl.currentSpent} /{" "}
                    {cafeteriaPreferences.spendingControl.monthlyLimit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      spendingPercentage >= 80
                        ? "bg-gradient-to-r from-red-400 to-red-600"
                        : spendingPercentage >= 60
                          ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                          : "bg-gradient-to-r from-green-400 to-emerald-500"
                    }`}
                    style={{ width: `${Math.min(spendingPercentage, 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  {spendingPercentage.toFixed(1)}% of monthly limit used
                </p>
              </div>

              {/* Spending Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Remaining</p>
                  <p className="text-2xl font-bold text-green-600">
                    {cafeteriaPreferences.spendingControl.remaining}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Meals This Week</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {cafeteriaPreferences.weeklyAnalytics.mealsConsumed}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Avg per Meal</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {cafeteriaPreferences.weeklyAnalytics.avgSpendPerMeal}
                  </p>
                </div>
              </div>

              {/* Permissions */}
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-green-700">
                    Snacks Allowed
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-green-700">
                    Beverages Allowed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Favorite Items Card */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-orange-600" />
              Favorite Items
            </h3>
            <div className="flex flex-wrap gap-3">
              {cafeteriaPreferences.weeklyAnalytics.favoriteItems.map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-white px-4 py-2 rounded-lg border-2 border-orange-200 font-semibold text-gray-700"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      )}

      {/* Transactions Tab */}
      {activeTab === "transactions" && (
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-purple-600" />
            Recent Transactions
          </h3>
          <div className="space-y-4">
            {cafeteriaPreferences.recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {transaction.type}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <Calendar className="w-4 h-4" />
                      {transaction.date}
                      <Clock className="w-4 h-4 ml-2" />
                      {transaction.time}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">
                      {transaction.amount}
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Items:
                  </p>
                  <ul className="space-y-1">
                    {transaction.items.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Menu Tab */}
      {activeTab === "menu" && (
        <div className="space-y-6">
          {["breakfast", "lunch", "snacks"].map((category) => (
            <div
              key={category}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 capitalize">
                <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
                  {category === "breakfast" ? (
                    <Clock className="w-5 h-5" />
                  ) : category === "lunch" ? (
                    <UtensilsCrossed className="w-5 h-5" />
                  ) : (
                    <Heart className="w-5 h-5" />
                  )}
                </div>
                {category} Menu
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cafeteriaPreferences.menu?.[category]?.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow border border-pink-100"
                  >
                    <div className="relative h-32 bg-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-bold text-pink-600 shadow-sm">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-800">{item.name}</h4>
                        {item.calories && (
                          <span className="text-xs text-gray-500 bg-white px-2 py-0.5 rounded-full border border-gray-200">
                            {item.calories}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {item.tags?.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-white text-purple-600 text-[10px] px-2 py-1 rounded-full border border-purple-100 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Preferences Tab */}
      {activeTab === "preferences" && (
        <div className="space-y-6">
          {/* Dietary Preferences */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-600" />
              Dietary Preferences
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Restrictions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {cafeteriaPreferences.dietaryPreferences.restrictions.map(
                    (restriction, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-semibold"
                      >
                        {restriction}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  Allergies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {cafeteriaPreferences.dietaryPreferences.allergies.map(
                    (allergy, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-700 px-3 py-1 rounded-lg text-sm font-semibold"
                      >
                        {allergy}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Dislikes:
                </p>
                <div className="flex flex-wrap gap-2">
                  {cafeteriaPreferences.dietaryPreferences.dislikes.map(
                    (dislike, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-semibold"
                      >
                        {dislike}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Special Notes:
                </p>
                <p className="text-gray-700">
                  {cafeteriaPreferences.dietaryPreferences.specialNotes}
                </p>
              </div>
            </div>
          </div>

          {/* Update Preferences Button */}
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2">
            <Settings className="w-5 h-5" />
            Update Preferences
          </button>
        </div>
      )}
    </div>
  );
};

export default CafeteriaSection;
