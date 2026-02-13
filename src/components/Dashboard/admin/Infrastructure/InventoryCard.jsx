import React from "react";
import { Eye, Edit, Trash2, Wrench } from "lucide-react";
import * as Icons from "lucide-react";

const InventoryCard = ({
  item,
  categories,
  getCategoryColor,
  getStatusColor,
}) => {
  const colors = getCategoryColor(item.category);
  const categoryIcon = categories.find((c) => c.id === item.category)?.iconName;
  const CategoryIcon = Icons[categoryIcon] || Icons.HelpCircle;

  return (
    <div
      className={`p-6 rounded-2xl border-2 ${colors.border} hover:shadow-xl transition-all group bg-gradient-to-br from-white to-slate-50`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 ${colors.icon} rounded-2xl`}>
          <CategoryIcon size={20} />
        </div>
        <span
          className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(item.status)}`}
        >
          {item.status}
        </span>
      </div>

      <h3 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
        {item.name}
      </h3>
      <p className="text-xs text-slate-500 mb-4">{item.location}</p>

      <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
        <div className="bg-white p-3 rounded-xl border border-slate-200">
          <p className="text-slate-500 mb-1">Quantity</p>
          <p
            className={`text-lg font-bold ${
              item.quantity <= item.minQuantity
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {item.quantity}
          </p>
          <p className="text-[10px] text-slate-400">Min: {item.minQuantity}</p>
        </div>
        <div className="bg-white p-3 rounded-xl border border-slate-200">
          <p className="text-slate-500 mb-1">Condition</p>
          <p className="text-sm font-bold text-slate-700">{item.condition}</p>
        </div>
      </div>

      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <p className="text-slate-500">Cost</p>
            <p className="font-bold text-slate-700">{item.cost}</p>
          </div>
          <div>
            <p className="text-slate-500">Acquired</p>
            <p className="font-bold text-slate-700">{item.acquiredDate}</p>
          </div>
        </div>
      </div>

      {item.nextMaintenance && (
        <div className="bg-blue-50 p-2 rounded-lg mb-4 text-xs border border-blue-100">
          <div className="flex items-center gap-2">
            <Wrench size={12} className="text-blue-500" />
            <p className="font-semibold text-blue-700">
              Next Maintenance: {item.nextMaintenance}
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-2">
        <button className="py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-all border border-blue-200 flex flex-col items-center">
          <Eye size={14} />
        </button>
        <button className="py-2 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100 transition-all border border-green-200 flex flex-col items-center">
          <Edit size={14} />
        </button>
        <button className="py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all border border-slate-200 flex flex-col items-center">
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
};

export default InventoryCard;
