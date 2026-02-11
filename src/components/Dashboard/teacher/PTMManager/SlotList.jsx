import React from "react";
import { Plus, Users, MessageSquare } from "lucide-react";

const SlotList = ({ slots, onScheduleClick }) => {
  return (
    <div className="lg:col-span-2 space-y-8">
      <div className="bg-white rounded-[3.5rem] p-10 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.1)] border border-indigo-50">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-indigo-900 tracking-tight mb-1">
              Upcoming Slots
            </h2>
            <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
              Calendar Management
            </p>
          </div>
          <button
            onClick={onScheduleClick}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Plus size={16} />
            Plan PTM Session
          </button>
        </div>

        <div className="space-y-3">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className="group p-5 bg-white border border-indigo-50 hover:border-indigo-300 rounded-2xl transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center gap-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    slot.status === "booked"
                      ? "bg-indigo-50 text-indigo-600"
                      : "bg-slate-50 text-slate-300"
                  }`}
                >
                  {slot.status === "booked" ? (
                    <Users size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold text-indigo-950 tracking-tight">
                    {slot.student || "Unbooked Slot"}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-medium text-slate-400">
                      {slot.time} • {slot.duration}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wider ${
                        slot.mode === "Online"
                          ? "bg-indigo-100 text-indigo-600"
                          : "bg-violet-100 text-violet-600"
                      }`}
                    >
                      {slot.mode}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {slot.status === "booked" && (
                  <button className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                    <MessageSquare size={16} />
                  </button>
                )}
                <button className="px-4 py-2 bg-indigo-900 text-white rounded-lg text-[9px] font-bold uppercase tracking-widest hover:bg-indigo-800 transition-all shadow-md">
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlotList;
