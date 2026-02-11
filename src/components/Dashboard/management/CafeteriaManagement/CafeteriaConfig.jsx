import React from "react";
import { Calendar, Users } from "lucide-react";
import { CAFETERIA_DATA } from "../../../../data/managementData";

const CafeteriaConfig = ({
  menuPeriod,
  setMenuPeriod,
  selectedGrades,
  setSelectedGrades,
}) => {
  return (
    <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/20 shadow-xl flex flex-col md:flex-row gap-8">
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-sm">
            <Calendar size={18} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Menu Lifecycle</h3>
            <p className="text-xs text-gray-500">
              Validity and duration control
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
              Period Type
            </label>
            <select
              value={menuPeriod}
              onChange={(e) => setMenuPeriod(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl text-sm font-bold text-gray-700 outline-none focus:border-blue-400 transition-all shadow-inner"
            >
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Special Event</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
              Start Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl text-sm font-bold text-gray-700 outline-none focus:border-blue-400 transition-all shadow-inner"
              defaultValue="2026-02-09"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-4 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl shadow-sm">
            <Users size={18} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              Visibility Group
            </h3>
            <p className="text-xs text-gray-500">Target grade authorization</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {CAFETERIA_DATA.grades.map((grade) => (
            <button
              key={grade}
              onClick={() =>
                setSelectedGrades((prev) =>
                  prev.includes(grade)
                    ? prev.filter((g) => g !== grade)
                    : [...prev, grade],
                )
              }
              className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                selectedGrades.includes(grade)
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md scale-105"
                  : "bg-white border border-gray-200 text-gray-400 hover:border-purple-300 hover:text-purple-500"
              }`}
            >
              {grade}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CafeteriaConfig;
