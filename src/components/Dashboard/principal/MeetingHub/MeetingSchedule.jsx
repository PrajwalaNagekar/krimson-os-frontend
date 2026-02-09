import React from "react";
import { Calendar } from "lucide-react";
import MeetingCard from "./MeetingCard";

const MeetingSchedule = ({ meetings }) => {
  return (
    <>
      <div className="p-4 sm:p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
              <span className="text-sm sm:text-base md:text-lg">
                Today's Schedule
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {meetings.length} meetings planned
            </p>
          </div>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md whitespace-nowrap">
            View Calendar
            <span className="text-[8px] sm:text-[9px] opacity-80 ml-1">
              (get in app)
            </span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 max-h-[600px]">
        {meetings.map((meeting, idx) => (
          <MeetingCard key={idx} meeting={meeting} />
        ))}
      </div>
    </>
  );
};

export default MeetingSchedule;
