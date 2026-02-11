import React from "react";
import {
  Settings,
  DollarSign,
  CheckCircle,
  Clock,
  Users,
  Edit,
  Book,
  Gift,
  Bus,
  FileText,
} from "lucide-react";
import { getColorClasses } from "./utils";

const FeeStructureSetup = ({ feeCategories }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Book":
        return <Book size={20} />;
      case "Gift":
        return <Gift size={20} />;
      case "Bus":
        return <Bus size={20} />;
      case "FileText":
        return <FileText size={20} />;
      default:
        return <FileText size={20} />;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-800">
          Fee Structure Setup
        </h2>
        <span className="text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
          {feeCategories.length} Categories
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {feeCategories.map((category) => {
          const colors = getColorClasses(category.color);
          const collected = parseInt(category.collected.replace(/[^0-9]/g, ""));
          const pending = parseInt(category.pending.replace(/[^0-9]/g, ""));
          const total = collected + pending;
          const collectionPercentage = ((collected / total) * 100).toFixed(1);

          return (
            <div
              key={category.id}
              className="relative bg-white rounded-3xl p-6 shadow-lg border border-slate-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient Accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.bg} opacity-60`}
              ></div>

              {/* Decorative Background Element */}
              <div
                className={`absolute -right-8 -top-8 w-32 h-32 ${colors.bg} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 ${colors.icon} ${colors.text} rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    {getIcon(category.iconType)}
                  </div>
                  <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                    <Settings size={18} />
                  </button>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  {category.description}
                </p>

                <div className="space-y-3 mb-4">
                  {/* Fee Amount Card with Gradient */}
                  <div
                    className={`relative ${colors.bg} ${colors.text} p-4 rounded-2xl border ${colors.border} shadow-sm overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <div className="relative z-10">
                      <p className="text-xs font-bold opacity-80 mb-1 flex items-center gap-1.5">
                        <DollarSign size={12} />
                        Fee Amount
                      </p>
                      <p className="text-2xl font-bold">{category.amount}</p>
                      <p className="text-xs opacity-70">{category.term}</p>
                    </div>
                  </div>

                  {/* Enhanced Collection Stats */}
                  <div className="bg-gradient-to-br from-slate-50 to-white p-3 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-600">
                        Collection Progress
                      </span>
                      <span className="text-xs font-bold text-blue-600">
                        {collectionPercentage}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-3">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${collectionPercentage}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white p-2 rounded-lg border border-green-100">
                        <p className="text-slate-500 font-medium mb-1 flex items-center gap-1">
                          <CheckCircle size={10} className="text-green-500" />
                          Collected
                        </p>
                        <p className="font-bold text-green-600">
                          {category.collected}
                        </p>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-amber-100">
                        <p className="text-slate-500 font-medium mb-1 flex items-center gap-1">
                          <Clock size={10} className="text-amber-500" />
                          Pending
                        </p>
                        <p className="font-bold text-amber-600">
                          {category.pending}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Students Info with Icon */}
                  <div className="flex items-center gap-2 text-xs bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <div className="p-1.5 bg-white rounded-md border border-slate-200">
                      <Users size={14} className="text-blue-500" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-700">
                        {category.students} Students
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Currently enrolled
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Action Button */}
                <button className="w-full py-2.5 bg-gradient-to-r from-slate-50 to-slate-100 hover:from-blue-50 hover:to-indigo-50 text-slate-600 hover:text-blue-600 font-bold rounded-xl text-xs transition-all flex flex-col items-center gap-0.5 shadow-sm hover:shadow-md border border-slate-200 hover:border-blue-200">
                  <div className="flex items-center gap-1.5">
                    <Edit size={14} />
                    Edit Category
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeeStructureSetup;
