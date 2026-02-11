import React from "react";
import { CAFETERIA_DATA } from "../../../../data/managementData";

const CafeteriaDayNav = ({ activeDay, setActiveDay }) => {
  return (
    <div className="bg-white/60 backdrop-blur-lg p-2 rounded-2xl border border-white/40 shadow-sm flex overflow-x-auto no-scrollbar gap-2">
      {CAFETERIA_DATA.days.map((day) => (
        <button
          key={day}
          onClick={() => setActiveDay(day)}
          className={`flex-1 min-w-[110px] py-3.5 rounded-xl text-[10px] font-bold transition-all uppercase tracking-widest border ${
            activeDay === day
              ? "bg-white text-blue-600 border-blue-100 shadow-md scale-[1.02]"
              : "text-gray-400 border-transparent hover:text-gray-600 hover:bg-white/50"
          }`}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default CafeteriaDayNav;
