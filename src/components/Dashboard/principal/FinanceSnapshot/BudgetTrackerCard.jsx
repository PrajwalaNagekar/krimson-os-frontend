import React from "react";

const BudgetTrackerCard = ({ department, allocated, spent, remaining }) => {
  const spentPercentage = (spent / allocated) * 100;
  const isOverBudget = spent > allocated;

  return (
    <div className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-bold text-slate-800 text-sm">{department}</h4>
        <span
          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
            isOverBudget
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {isOverBudget ? "Over Budget" : "On Track"}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 text-xs mb-3">
        <div>
          <p className="text-slate-500">Allocated</p>
          <p className="font-bold text-slate-800">
            ${allocated.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-slate-500">Spent</p>
          <p
            className={`font-bold ${
              isOverBudget ? "text-red-600" : "text-blue-600"
            }`}
          >
            ${spent.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-slate-500">Remaining</p>
          <p
            className={`font-bold ${
              isOverBudget ? "text-red-600" : "text-green-600"
            }`}
          >
            ${remaining.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${
            isOverBudget ? "bg-red-500" : "bg-blue-500"
          }`}
          style={{ width: `${Math.min(spentPercentage, 100)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BudgetTrackerCard;
