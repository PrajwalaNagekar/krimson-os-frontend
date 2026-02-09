import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

const EventCard = ({
  title,
  category,
  date,
  time,
  location,
  status,
  organizer,
}) => {
  const categoryColors = {
    Exam: "bg-red-100 text-red-700 border-red-200",
    Activity: "bg-green-100 text-green-700 border-green-200",
    CCA: "bg-purple-100 text-purple-700 border-purple-200",
    PTA: "bg-blue-100 text-blue-700 border-blue-200",
    Milestone: "bg-orange-100 text-orange-700 border-orange-200",
  };

  return (
    <div className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-all bg-white">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="font-bold text-slate-800 mb-1">{title}</h4>
          <p className="text-xs text-slate-500">{organizer}</p>
        </div>
        <span
          className={`px-2 py-1 rounded-lg text-xs font-bold border ${
            categoryColors[category] || "bg-slate-100 text-slate-700"
          }`}
        >
          {category}
        </span>
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-600 mb-2">
        <CalendarIcon className="w-3 h-3" />
        <span>{date}</span>
        {time && <span>• {time}</span>}
      </div>
      {location && <p className="text-xs text-slate-500 mb-2">📍 {location}</p>}
      {status && (
        <div className="flex gap-2 mt-3">
          <button className="flex-1 px-3 py-1.5 bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 rounded-lg text-xs font-bold transition-colors">
            View Details
            <span className="text-[8px] opacity-70 ml-1">(get in app)</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default EventCard;
