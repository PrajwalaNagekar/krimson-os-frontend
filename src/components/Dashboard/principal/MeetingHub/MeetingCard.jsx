import React from "react";
import { Clock, MapPin, Users, Eye, FileText } from "lucide-react";

const MeetingCard = ({ meeting }) => {
  const getTypeColor = () => {
    switch (meeting.type) {
      case "Internal":
        return "from-blue-500 to-indigo-500";
      case "Parent":
        return "from-purple-500 to-pink-500";
      case "Department":
        return "from-cyan-500 to-blue-500";
      default:
        return "from-slate-500 to-slate-600";
    }
  };

  const getStatusBadge = () => {
    switch (meeting.status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Ongoing":
        return "bg-blue-100 text-blue-700";
      case "Scheduled":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-200 hover:shadow-lg transition-all hover:border-blue-300">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {/* Time Badge */}
        <div
          className={`flex flex-col items-center justify-center p-2 sm:p-3 bg-gradient-to-br ${getTypeColor()} rounded-lg text-white min-w-[70px] sm:min-w-[80px]`}
        >
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 mb-1" />
          <span className="text-xs sm:text-sm font-bold text-center leading-tight">
            {meeting.time}
          </span>
        </div>

        {/* Meeting Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
            <h4 className="font-bold text-sm sm:text-base text-slate-800 truncate">
              {meeting.title}
            </h4>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap self-start ${getStatusBadge()}`}
            >
              {meeting.status}
            </span>
          </div>

          <div className="space-y-1 mb-3">
            <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {meeting.location}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-1.5">
              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {meeting.attendees} attendees
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50 rounded-lg text-xs font-bold text-slate-700 transition-all">
              <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">View Agenda</span>
              <span className="sm:hidden">Agenda</span>
              <span className="text-[8px] opacity-70">(get in app)</span>
            </button>
            <button className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg text-xs font-bold transition-all shadow-sm">
              <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">Record MoM</span>
              <span className="sm:hidden">MoM</span>
              <span className="text-[8px] opacity-80">(get in app)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
