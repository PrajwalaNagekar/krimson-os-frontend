import React from "react";
import { Calendar, ArrowRight, Clock, CheckCircle } from "lucide-react";

/**
 * TodayScheduleCard Component
 *
 * Purpose: Display a condensed view of today's class schedule with progress indicators
 */
const TodayScheduleCard = ({ todayTimetable, onViewFull }) => {
  // Status indicator for timetable
  const getStatusBadge = (status) => {
    if (status === "completed")
      return <CheckCircle size={16} className="text-green-500" />;
    if (status === "current")
      return (
        <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
      );
    return <Clock size={16} className="text-slate-400" />;
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400 opacity-5 rounded-full blur-2xl"></div>

      <div className="flex items-center justify-between mb-5 relative z-10">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <Calendar className="text-blue-500" size={20} />
          Today's Schedule
        </h3>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onViewFull?.();
          }}
          className="text-xs font-bold text-blue-500 hover:text-blue-700 flex items-center gap-1 group"
        >
          View Full
          <ArrowRight
            size={12}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>

      <div className="space-y-3 relative z-10">
        {todayTimetable.slice(2, 5).map((period, index) => (
          <div
            key={period.period}
            className={`relative pl-6 pb-4 ${index !== 2 ? "border-l-2 border-slate-100" : ""}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 -translate-x-[9px]">
              {getStatusBadge(period.status)}
            </div>

            <div
              className={`p-4 rounded-2xl transition-all ${
                period.status === "current"
                  ? "bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-l-4 border-blue-500 shadow-md"
                  : "bg-slate-50 hover:bg-slate-100"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-slate-800">{period.subject}</h4>
                  <p className="text-xs text-slate-500">{period.teacher}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-600">
                    {period.time.split(" - ")[0]}
                  </p>
                  {period.timeLeft && (
                    <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold">
                      {period.timeLeft}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-white px-2 py-1 rounded text-slate-600">
                  {period.room}
                </span>
                <span className="text-[10px] bg-white px-2 py-1 rounded text-slate-600">
                  {period.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayScheduleCard;
