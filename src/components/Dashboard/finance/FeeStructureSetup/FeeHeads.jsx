import React from "react";
import {
  Settings,
  Plus,
  Edit,
  Trash2,
  BookOpen,
  Trophy,
  Beaker,
  Bus,
} from "lucide-react";

const iconMap = {
  Settings: Settings,
  BookOpen: BookOpen,
  Trophy: Trophy,
  Beaker: Beaker,
  Bus: Bus,
};

const FeeHeads = ({ feeHeads }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Fee Categories</h2>
            <p className="text-sm text-gray-600">Manage fee heads and types</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>Add Category</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {feeHeads.map((head) => {
          const IconComponent = iconMap[head.iconName] || Settings;
          return (
            <div
              key={head.id}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${head.color}`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit className="w-4 h-4 text-blue-500" />
                  </button>
                  <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {head.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{head.description}</p>

              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${head.mandatory ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}`}
                >
                  {head.mandatory ? "Mandatory" : "Optional"}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${head.refundable ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                >
                  {head.refundable ? "Refundable" : "Non-refundable"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeeHeads;
