import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";

const AIInsights = ({ bookingLock, setBookingLock }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-[3.5rem] p-10 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.1)] border border-indigo-50 relative overflow-hidden">
        {/* Subtle background decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-[40px] -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-50 rounded-full blur-[30px] -ml-8 -mb-8"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl shadow-lg">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                AI5 Optimizer
              </h3>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                Smart Scheduler
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] backdrop-blur-md">
              <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest mb-3 bg-emerald-50 w-fit px-2 py-1 rounded-lg">
                Efficiency Insight
              </p>
              <p className="text-lg font-bold italic leading-relaxed text-indigo-900">
                "15-minute slots detected as efficient."
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] backdrop-blur-md">
              <p className="text-[9px] font-bold text-orange-500 uppercase tracking-widest mb-3 bg-orange-50 w-fit px-2 py-1 rounded-lg">
                Action Required
              </p>
              <p className="text-sm font-medium text-slate-600 mb-4">
                4 parents have not yet booked their slots.
              </p>
              <button className="w-full py-3 bg-white border border-orange-200 text-orange-500 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                Send Reminders
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck size={20} className="text-blue-400" />
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Conflict Prevention
          </h4>
        </div>
        <div className="space-y-4">
          <div
            onClick={() => setBookingLock(!bookingLock)}
            className="group flex items-center justify-between p-4 bg-indigo-50/30 hover:bg-white border border-indigo-100 hover:border-indigo-300 rounded-2xl cursor-pointer transition-all duration-300 shadow-sm"
          >
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-indigo-900 block">
                Double Booking Lock
              </span>
              <span className="text-[9px] font-medium text-indigo-400">
                Prevent overlapping sessions
              </span>
            </div>
            <div
              className={`w-11 h-6 rounded-full transition-all duration-500 relative flex items-center px-1 ${
                bookingLock
                  ? "bg-indigo-600 shadow-[0_0_15px_-3px_rgba(79,70,229,0.4)]"
                  : "bg-indigo-200"
              }`}
            >
              <div
                className={`w-4 h-4 bg-indigo-50 rounded-full transition-all duration-500 shadow-sm flex items-center justify-center ${
                  bookingLock ? "translate-x-5" : "translate-x-0"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    bookingLock
                      ? "bg-indigo-600 scale-100"
                      : "bg-indigo-300 scale-50 opacity-0"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
