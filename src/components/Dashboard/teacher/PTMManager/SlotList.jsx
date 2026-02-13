import React from "react";
import { Plus, Users, MessageSquare, Clock } from "lucide-react";

const SlotList = ({ slots, onScheduleClick }) => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="bg-white/70 backdrop-blur-3xl rounded-[3.5rem] p-8 md:p-10 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.08)] border border-white/50 ring-1 ring-indigo-500/5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-black text-indigo-950 tracking-tight leading-none mb-3">
              Upcoming Slots
            </h2>
            <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Live Tracking & Allocation
            </p>
          </div>
          <button
            onClick={onScheduleClick}
            className="px-8 py-4 bg-indigo-600 text-white rounded-[1.25rem] font-bold text-[11px] uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(79,70,229,0.4)] hover:bg-indigo-700 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-3 group"
          >
            <Plus size={18} className="group-hover:rotate-90 transition-transform duration-500" />
            Plan PTM Session
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {slots.map((slot) => {
            const isBooked = slot.status === "booked";

            return (
              <div
                key={slot.id}
                className={`group p-6 rounded-[2rem] transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden border-2 ${isBooked
                  ? "bg-white border-transparent shadow-md hover:shadow-xl hover:scale-[1.01] hover:border-indigo-100"
                  : "bg-slate-50/50 border-dashed border-slate-200 hover:border-indigo-200 hover:bg-white"
                  }`}
              >
                <div className="flex items-center gap-6 relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm ${isBooked
                      ? "bg-gradient-to-br from-indigo-50 to-indigo-100/50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
                      : "bg-slate-100 text-slate-300"
                      }`}
                  >
                    {isBooked ? (
                      <Users size={28} className="transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <div className="w-8 h-8 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center">
                        <Plus size={16} />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <p className={`font-black tracking-tight ${isBooked ? "text-indigo-950 text-lg" : "text-slate-400 text-base italic"}`}>
                        {slot.student || "Open Enrollment Slot"}
                      </p>
                      {isBooked && (
                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[9px] font-bold uppercase tracking-widest border border-indigo-100/50 shadow-sm">
                          Booked
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500">
                        <Clock size={14} className="text-indigo-400" />
                        {slot.time} <span className="text-slate-300 text-[10px]">•</span> {slot.duration}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-2 ${slot.mode === "Online"
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-violet-100 text-violet-600"
                        }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${slot.mode === "Online" ? "bg-indigo-400" : "bg-violet-400"}`}></div>
                        {slot.mode}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 relative z-10">
                  {isBooked && (
                    <button className="w-12 h-12 flex items-center justify-center bg-slate-50 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all shadow-sm">
                      <MessageSquare size={18} />
                    </button>
                  )}
                  <button className={`px-8 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all shadow-sm ${isBooked
                    ? "bg-indigo-950 text-white hover:bg-black hover:shadow-lg"
                    : "bg-white border-2 border-indigo-50 text-indigo-400 hover:border-indigo-600 hover:text-indigo-600"
                    }`}>
                    {isBooked ? "Manage Sync" : "Allocate Slot"}
                  </button>
                </div>

                {/* Background Decoration */}
                {isBooked && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SlotList;
