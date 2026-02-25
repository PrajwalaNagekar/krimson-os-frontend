import React from "react";
import { Calendar as CalendarIcon, Clock, ChevronDown } from "lucide-react";

const PostponeScheduler = ({
  newDate,
  setNewDate,
  newPeriod,
  setNewPeriod,
  availablePeriods,
}) => {
  return (
    <div className="space-y-4 pt-2">
      <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-2">
        Select New Date & Period
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Date Selector */}
        <div className="relative flex items-center bg-white px-3 py-3 rounded-xl border border-slate-200">
          <CalendarIcon size={16} className="text-slate-400 absolute left-3" />
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="w-full pl-8 bg-transparent text-slate-700 font-bold text-[13px] outline-none border-none focus:ring-0 cursor-pointer"
          />
        </div>

        {/* Period Selector */}
        <div className="relative flex items-center bg-white px-3 py-3 rounded-xl border border-slate-200 cursor-pointer">
          <Clock size={16} className="text-slate-400 absolute left-3" />
          <select
            value={newPeriod}
            onChange={(e) => setNewPeriod(e.target.value)}
            className="w-full pl-8 pr-6 bg-transparent text-slate-700 font-bold text-[13px] outline-none border-none focus:ring-0 cursor-pointer appearance-none"
          >
            <option value="" disabled>
              Select Period
            </option>
            {availablePeriods.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="text-slate-400 absolute right-3 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default PostponeScheduler;
