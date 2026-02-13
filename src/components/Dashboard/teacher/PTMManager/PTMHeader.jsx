import React from "react";
import { Download, Bell, Plus, Calendar, FileText, CheckCircle2, Sparkles } from "lucide-react";

/**
 * @component PTMHeader
 * @description High-fidelity header for PTM Management aligned with Communication Hub
 */
const PTMHeader = ({
  totalSlots,
  bookedSlots,
  openActions,
  onPlanSession,
  bookingLock,
  setBookingLock,
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    {
      id: "scheduler",
      label: "Scheduler",
      icon: <Calendar size={16} />,
    },
    {
      id: "agenda",
      label: "Agenda",
      icon: <FileText size={16} />,
    },
    {
      id: "tracker",
      label: "Tracker",
      icon: <CheckCircle2 size={16} />,
    },
  ];
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-inner ring-1 ring-white/20">
              <Sparkles size={12} className="text-cyan-300" />
              Krimson OS • Unified PTM Suite
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-2 tracking-tighter leading-none">
              PTM Manager
            </h1>
            <p className="opacity-80 font-bold text-sm md:text-lg max-w-2xl leading-relaxed">
              {activeTab === "scheduler"
                ? `Strategic coordination of ${totalSlots} parent engagement windows.`
                : activeTab === "agenda"
                  ? "Structured pedagogical alignment for high-impact parent interactions."
                  : `Real-time visibility into ${openActions} critical follow-up accountability items.`}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="inline-flex p-1.5 bg-black/10 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-lg relative z-20">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3 ${activeTab === tab.id
                      ? "bg-white text-blue-600 shadow-xl scale-105 ring-1 ring-black/5"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            <p className="opacity-90 font-bold text-[10px] uppercase tracking-widest bg-white/10 w-fit px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
              {bookedSlots} Slots Secured / {totalSlots} Total
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Booking Lock Toggle */}
          <div
            onClick={() => setBookingLock(!bookingLock)}
            className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/30 cursor-pointer hover:bg-white/20 transition-all group shadow-sm"
          >
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.1em] leading-none mb-1">
                Booking Lock
              </p>
              <p className="text-[9px] font-bold opacity-70 leading-none">
                {bookingLock ? "Protected" : "Open"}
              </p>
            </div>
            <div
              className={`w-11 h-6 rounded-full transition-all duration-500 relative flex items-center px-1 ${bookingLock ? "bg-white" : "bg-white/30"
                }`}
            >
              <div
                className={`w-4 h-4 rounded-full transition-all duration-500 shadow-sm ${bookingLock ? "translate-x-5 bg-blue-500" : "translate-x-0 bg-white"
                  }`}
              ></div>
            </div>
          </div>

          <button
            onClick={onPlanSession}
            className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Plus size={20} />
            <span>Plan Session</span>
          </button>

          <button
            className="p-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl hover:bg-white/30 transition-all group"
            title="Broadcast Reminders"
          >
            <Bell size={20} className="group-hover:animate-bounce" />
          </button>

          <button
            className="p-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl hover:bg-white/30 transition-all group"
            title="Export Session Logs"
          >
            <Download
              size={20}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PTMHeader;

