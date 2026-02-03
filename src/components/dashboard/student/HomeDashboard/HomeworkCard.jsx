import React from "react";
import { Book, ArrowRight } from "lucide-react";

/**
 * HomeworkCard Component
 *
 * Purpose: Display homework due today with progress tracking and priority indicators
 */
const HomeworkCard = ({ todayHomework, onViewAll }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-400 opacity-5 rounded-full blur-2xl"></div>

      <div className="flex items-center justify-between mb-5 relative z-10">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <Book className="text-pink-500" size={20} />
          Homework Due Today
        </h3>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onViewAll?.();
          }}
          className="text-xs font-bold text-pink-500 hover:text-pink-700 flex items-center gap-1 group"
        >
          View All
          <ArrowRight
            size={12}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>

      <div className="space-y-3 relative z-10">
        {todayHomework.map((hw) => (
          <div
            key={hw.id}
            className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all border border-slate-100 hover:border-slate-200"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 text-sm mb-1">
                  {hw.title}
                </h4>
                <p className="text-xs text-slate-500">{hw.subject}</p>
              </div>
              <span
                className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                  hw.priority === "high"
                    ? "bg-red-100 text-red-600"
                    : hw.priority === "medium"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-green-100 text-green-600"
                }`}
              >
                {hw.dueTime}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-slate-500 font-medium">
                  Progress
                </span>
                <span className="text-[10px] text-slate-700 font-bold">
                  {hw.progress}%
                </span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    hw.progress >= 90
                      ? "bg-gradient-to-r from-green-400 to-green-500"
                      : hw.progress >= 50
                        ? "bg-gradient-to-r from-blue-400 to-blue-500"
                        : "bg-gradient-to-r from-orange-400 to-orange-500"
                  }`}
                  style={{ width: `${hw.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-center w-full">
              <button className="w-fit px-4 py-2 bg-slate-800 text-white text-xs font-bold rounded-lg hover:bg-slate-900 transition-colors">
                {hw.progress > 0 ? "Continue" : "Start"} Assignment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeworkCard;
