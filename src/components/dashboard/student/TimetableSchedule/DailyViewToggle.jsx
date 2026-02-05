import React from "react";
import { Calendar, Target } from "lucide-react";

const DailyViewToggle = ({ dailySection, setDailySection }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex bg-white p-1.5 rounded-xl shadow-sm">
        <button
          onClick={() => setDailySection("schedule")}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
            dailySection === "schedule"
              ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white shadow-md"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <Calendar size={16} />
          Today's Schedule
        </button>
        <button
          onClick={() => setDailySection("planning")}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
            dailySection === "planning"
              ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white shadow-md"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <Target size={16} />
          Planning & Activities
        </button>
      </div>
    </div>
  );
};

export default DailyViewToggle;
