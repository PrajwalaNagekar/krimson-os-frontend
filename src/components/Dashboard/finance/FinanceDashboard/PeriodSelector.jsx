import React from "react";

const PeriodSelector = ({ selectedPeriod, onPeriodChange }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20 flex gap-2">
      {["month", "term", "year"].map((period) => (
        <button
          key={period}
          onClick={() => onPeriodChange(period)}
          className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${
            selectedPeriod === period
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          This {period.charAt(0).toUpperCase() + period.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default PeriodSelector;
