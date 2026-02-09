import React from "react";
import { BarChart2 } from "lucide-react";
import BudgetTrackerCard from "./BudgetTrackerCard";

const DepartmentBudget = ({ budgetTrackers }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-purple-500" />
              Departmental Budget Tracker
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Optional future integration with Finance API
            </p>
          </div>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-bold transition-colors">
            View Full Budget
            <span className="text-[9px] opacity-80 ml-1">(get in app)</span>
          </button>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {budgetTrackers.map((budget, idx) => (
            <BudgetTrackerCard key={idx} {...budget} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentBudget;
