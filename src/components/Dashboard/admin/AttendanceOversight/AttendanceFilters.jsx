import React from "react";
import { Download, RefreshCcw, Calendar } from "lucide-react";

const AttendanceFilters = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex flex-wrap gap-3 w-full md:w-auto">
        <button className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-blue-500/20">
          <div className="flex items-center gap-2">
            <Download size={18} />
            Generate Report
          </div>
        </button>
        <button className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-indigo-500/20">
          <div className="flex items-center gap-2">
            <RefreshCcw size={18} />
            Refresh Data
          </div>
        </button>
      </div>

      <div className="flex gap-3 w-full md:w-auto">
        <div className="relative flex-1 md:flex-none">
          <Calendar
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full md:w-auto pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default AttendanceFilters;
