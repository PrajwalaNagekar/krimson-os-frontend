import React from "react";
import { Plus, UserPlus } from "lucide-react";
import { meetingHubData } from "../../../data/principalData.jsx";

// Components
import MeetingSchedule from "../../../components/dashboard/principal/MeetingHub/MeetingSchedule";
import MoMSection from "../../../components/dashboard/principal/MeetingHub/MoMSection";
import FeedbackSection from "../../../components/dashboard/principal/MeetingHub/FeedbackSection";
import FeedbackStats from "../../../components/dashboard/principal/MeetingHub/FeedbackStats";

const MeetingHub = () => {
  const { meetings, feedbackData, minutesOfMeetings } = meetingHubData;

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-2xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 sm:w-72 h-64 sm:h-72 bg-white/20 rounded-full blur-3xl -mr-16 sm:-mr-20 -mt-16 sm:-mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-56 h-48 sm:h-56 bg-pink-500/30 rounded-full blur-3xl -ml-12 sm:-ml-16 -mb-12 sm:-mb-16"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 md:mb-2 tracking-tight">
                Meeting & Feedback Hub
              </h1>
              <p className="text-xs sm:text-sm md:text-lg text-white/90 font-medium">
                Track meetings, attendance & departmental feedback
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 border border-white/30">
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Schedule Meeting</span>
                <span className="sm:hidden">Schedule</span>
                <span className="text-[8px] sm:text-[9px] opacity-70 ml-0.5 sm:ml-1">
                  (get in app)
                </span>
              </button>
              <button className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 bg-white text-cyan-600 hover:bg-white/90 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 shadow-lg">
                <UserPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Add Attendees</span>
                <span className="sm:hidden">Attendees</span>
                <span className="text-[8px] sm:text-[9px] opacity-70 ml-0.5 sm:ml-1">
                  (get in app)
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Pane Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Pane: Meetings */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
          <MeetingSchedule meetings={meetings} />
          {/* Minutes of Meetings Section */}
          <MoMSection minutesOfMeetings={minutesOfMeetings} />
        </div>

        {/* Right Pane: Feedback */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
          <FeedbackSection feedbackData={feedbackData} />
          {/* Feedback Stats */}
          <FeedbackStats />
        </div>
      </div>
    </div>
  );
};

export default MeetingHub;
