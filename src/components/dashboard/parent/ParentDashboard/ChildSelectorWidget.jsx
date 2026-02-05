import React from "react";
import { ChevronDown } from "lucide-react";

const ChildSelectorWidget = ({ children, selectedChildId, onSelect }) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide p-1">
      {children.map((child) => (
        <button
          key={child.id}
          onClick={() => onSelect(child.id)}
          className={`flex items-center gap-3 p-2 pr-4 rounded-full border transition-all duration-300 min-w-[180px] flex-shrink-0 ${
            selectedChildId === child.id
              ? "bg-slate-800 border-slate-800 text-white shadow-md"
              : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
          }`}
        >
          <img
            src={child.photo}
            alt={child.name}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div className="text-left">
            <h4
              className={`text-xs font-bold ${selectedChildId === child.id ? "text-white" : "text-slate-800"}`}
            >
              {child.name.split(" ")[0]}
            </h4>
            <p
              className={`text-[10px] ${selectedChildId === child.id ? "text-slate-300" : "text-slate-500"}`}
            >
              {child.class}
            </p>
          </div>
          {selectedChildId === child.id && (
            <div className="ml-auto">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default ChildSelectorWidget;
