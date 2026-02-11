import React from "react";
import { Package, Grid } from "lucide-react";
import * as Icons from "lucide-react";

const InventoryCategories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  totalItems,
}) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Package className="text-blue-500" size={24} />
        Inventory Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`p-4 rounded-2xl border-2 transition-all ${
            selectedCategory === "all"
              ? "bg-gradient-to-br from-blue-500 to-indigo-500 text-white border-blue-500 shadow-lg"
              : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:shadow-md"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <Grid size={24} />
            <p className="font-bold text-sm">All Items</p>
            <p className="text-xs">{totalItems} items</p>
          </div>
        </button>

        {categories.map((category) => {
          const Icon = Icons[category.iconName] || Icons.HelpCircle;

          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-2xl border-2 transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-br from-blue-500 to-indigo-500 text-white border-blue-500 shadow-lg"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:shadow-md"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <Icon size={20} />
                <p className="font-bold text-sm text-center">{category.name}</p>
                <p className="text-xs">{category.count} items</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default InventoryCategories;
