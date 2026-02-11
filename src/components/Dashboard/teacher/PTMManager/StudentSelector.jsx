import React from "react";
import { Filter, ChevronRight } from "lucide-react";

const StudentSelector = ({ slots, selectedSlot, onSelectSlot }) => {
  return (
    <div className="w-full lg:w-[320px] bg-white/40 backdrop-blur-3xl rounded-[2.5rem] p-6 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.1)] border border-white/40 flex flex-col h-[700px]">
      <div className="flex items-center justify-between mb-8 px-2">
        <div>
          <h3 className="text-xl font-bold text-indigo-900 tracking-tight">
            Schedule
          </h3>
          <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mt-1">
            Today's Focus
          </p>
        </div>
        <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 hover:bg-indigo-100 transition-colors cursor-pointer">
          <Filter size={18} />
        </div>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        {slots
          .filter((s) => s.status === "booked")
          .map((slot) => (
            <button
              key={slot.id}
              onClick={() => onSelectSlot(slot)}
              className={`w-full text-left p-5 rounded-[2rem] transition-all duration-500 group relative overflow-hidden border-2 ${
                selectedSlot?.id === slot.id
                  ? "bg-white border-indigo-400 shadow-xl scale-[1.02]"
                  : "bg-white/40 border-transparent hover:border-indigo-200 hover:bg-white/60"
              }`}
            >
              <div className="relative z-10 flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                    selectedSlot?.id === slot.id
                      ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg rotate-3"
                      : "bg-indigo-50 text-indigo-600"
                  }`}
                >
                  {slot.student[0]}
                </div>
                <div className="flex-1">
                  <p
                    className={`font-bold tracking-tight transition-colors duration-500 ${
                      selectedSlot?.id === slot.id
                        ? "text-indigo-900 text-base"
                        : "text-slate-700 text-sm"
                    }`}
                  >
                    {slot.student}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-medium text-slate-400">
                      {slot.time}
                    </span>
                    <span
                      className={`w-1 h-1 rounded-full ${
                        slot.mode === "Online"
                          ? "bg-indigo-400"
                          : "bg-violet-400"
                      }`}
                    ></span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                      {slot.mode}
                    </span>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className={`transition-all duration-500 ${
                    selectedSlot?.id === slot.id
                      ? "text-indigo-600 translate-x-1"
                      : "text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                  }`}
                />
              </div>
              {selectedSlot?.id === slot.id && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
              )}
            </button>
          ))}
      </div>
    </div>
  );
};

export default StudentSelector;
