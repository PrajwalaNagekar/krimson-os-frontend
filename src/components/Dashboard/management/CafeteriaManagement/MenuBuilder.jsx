import React from "react";
import {
  Menu,
  Plus,
  Utensils,
  Edit2,
  Trash2,
  Target,
  Info,
} from "lucide-react";

const MenuBuilder = ({
  activeDay,
  menuData,
  onAddItemRequest,
  onDeleteItem,
}) => {
  const meals = ["Breakfast", "Lunch", "Snacks"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
      {meals.map((meal, mIdx) => (
        <div key={meal} className="space-y-6">
          <div className="flex items-center justify-between px-2 bg-white/40 backdrop-blur-md py-3 rounded-2xl border border-white/40 shadow-sm">
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-xl text-white shadow-sm ${
                  mIdx === 0
                    ? "bg-gradient-to-br from-orange-400 to-amber-500"
                    : mIdx === 1
                      ? "bg-gradient-to-br from-blue-400 to-cyan-500"
                      : "bg-gradient-to-br from-purple-400 to-pink-500"
                }`}
              >
                <Menu size={16} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 tracking-tight">
                  {meal}
                </h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                  Protocol Matrix
                </p>
              </div>
            </div>
            <button
              onClick={() => onAddItemRequest(meal)}
              className="p-2 bg-white/50 text-gray-400 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-sm border border-white"
            >
              <Plus size={16} />
            </button>
          </div>

          <div className="space-y-4">
            {(menuData[activeDay]?.[meal] || []).map((item) => (
              <div
                key={item.id}
                className="bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-lg hover:shadow-xl transition-all group relative border border-white/20"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all flex gap-1.5 z-10">
                  <button className="p-2 text-gray-400 hover:text-blue-500 bg-white/50 backdrop-blur-md border border-white rounded-xl transition-all shadow-sm">
                    <Edit2 size={12} />
                  </button>
                  <button
                    onClick={() => onDeleteItem(activeDay, meal, item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 bg-white/50 backdrop-blur-md border border-white rounded-xl transition-all shadow-sm"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1">
                    <div
                      className={`w-3 h-3 rounded-full border-2 border-white shadow-sm ${
                        item.category === "Veg"
                          ? "bg-green-500"
                          : item.category === "Vegan"
                            ? "bg-emerald-400"
                            : "bg-red-500"
                      }`}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 tracking-tight leading-tight group-hover:text-blue-600 transition-colors uppercase">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {item.category}
                      </span>
                      <div className="w-1 h-1 bg-gray-200 rounded-full" />
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        ID: {item.id.toString().slice(-4)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg text-[9px] font-bold uppercase tracking-widest border border-blue-100 flex items-center gap-1"
                    >
                      <Target size={10} />
                      {tag}
                    </span>
                  ))}
                  <button className="px-2.5 py-1 bg-gray-50 text-gray-400 rounded-lg text-[9px] font-bold uppercase tracking-widest border border-gray-100 hover:border-blue-300 hover:text-blue-500 transition-all flex items-center gap-1">
                    <Plus size={10} /> Tag
                  </button>
                </div>

                {item.notes && (
                  <div className="mt-4 pt-4 border-t border-gray-50 flex items-start gap-2">
                    <div className="p-1 bg-gray-50 rounded">
                      <Info size={10} className="text-gray-400" />
                    </div>
                    <p className="text-[10px] text-gray-500 font-medium italic line-clamp-1 group-hover:line-clamp-none transition-all">
                      {item.notes}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {(!menuData[activeDay]?.[meal] ||
              menuData[activeDay]?.[meal]?.length === 0) && (
              <div className="p-10 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center text-gray-300 bg-white/30">
                <div className="w-12 h-12 bg-gray-50/50 rounded-2xl flex items-center justify-center mb-3">
                  <Utensils size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  Protocol Required
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuBuilder;
