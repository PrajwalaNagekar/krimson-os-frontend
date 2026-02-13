import React from "react";

const QuickSwitch = ({
  childrenData,
  selectedChildIndex,
  setSelectedChildIndex,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
      <h2 className="text-lg font-bold text-slate-800 mb-4">Quick Switch</h2>
      <div className="flex flex-wrap gap-3">
        {childrenData.map((child, index) => (
          <button
            key={index}
            onClick={() => setSelectedChildIndex(index)}
            className={`flex items-center gap-3 px-5 py-3 rounded-xl border-2 transition-all ${
              selectedChildIndex === index
                ? "bg-gradient-to-r from-cyan-50 to-blue-50 border-blue-400 shadow-md"
                : "border-slate-200 hover:border-slate-300 hover:shadow-sm"
            }`}
          >
            <img
              src={child.photo}
              alt={child.name}
              className="w-10 h-10 rounded-xl object-cover shadow-sm"
            />
            <div className="text-left">
              <p
                className={`text-sm font-bold ${
                  selectedChildIndex === index
                    ? "text-blue-700"
                    : "text-slate-800"
                }`}
              >
                {child.name}
              </p>
              <p className="text-xs text-slate-500">{child.class}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickSwitch;
