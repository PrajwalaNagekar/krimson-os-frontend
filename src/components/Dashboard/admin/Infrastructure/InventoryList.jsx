import React from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import * as Icons from "lucide-react";

const InventoryList = ({
  items,
  categories,
  getCategoryColor,
  getStatusColor,
}) => {
  return (
    <div className="space-y-3">
      {items.map((item) => {
        const categoryIcon = categories.find(
          (c) => c.id === item.category,
        )?.iconName;
        const CategoryIcon = Icons[categoryIcon] || Icons.HelpCircle;

        return (
          <div
            key={item.id}
            className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white group"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-2 ${getCategoryColor(item.category).icon} rounded-lg`}
              >
                <CategoryIcon size={20} />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500">{item.location}</p>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(item.status)}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="grid grid-cols-6 gap-4 text-xs">
                  <div>
                    <p className="text-slate-500">Category</p>
                    <p
                      className={`font-bold ${getCategoryColor(item.category).textColor}`}
                    >
                      {item.category.toUpperCase()}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Quantity</p>
                    <p
                      className={`font-bold ${item.quantity <= item.minQuantity ? "text-red-600" : "text-green-600"}`}
                    >
                      {item.quantity}/{item.minQuantity}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Condition</p>
                    <p className="font-bold text-slate-700">{item.condition}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Cost</p>
                    <p className="font-bold text-slate-700">{item.cost}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Acquired</p>
                    <p className="font-bold text-slate-700">
                      {item.acquiredDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Next Maintenance</p>
                    <p className="font-bold text-blue-600">
                      {item.nextMaintenance || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all">
                  <Eye size={16} />
                </button>
                <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all">
                  <Edit size={16} />
                </button>
                <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InventoryList;
