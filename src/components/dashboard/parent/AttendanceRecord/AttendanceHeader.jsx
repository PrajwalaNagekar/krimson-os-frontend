import React from "react";
import { CalendarCheck, Download } from "lucide-react";

const AttendanceHeader = ({ handleDownloadReport, viewMode, setViewMode }) => {
  return (
    <div className="mb-4 md:mb-6 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full md:w-auto">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
            <CalendarCheck size={24} className="md:hidden text-white" />
            <CalendarCheck size={28} className="hidden md:block text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Attendance Record
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">
              Track daily, weekly, and term-wise attendance
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm p-1 rounded-xl border border-white/60 shadow-sm">
          {["today", "monthly", "term"].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                viewMode === mode
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-blue-200"
                  : "text-slate-600 hover:bg-white/80"
              }`}
            >
              {mode === "today"
                ? "Today Update"
                : mode === "monthly"
                  ? "Monthly"
                  : "Term-wise"}
            </button>
          ))}
        </div>

        <button
          onClick={handleDownloadReport}
          className="bg-white border-2 border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold text-sm hover:border-cyan-300 hover:bg-cyan-50 transition-all flex items-center gap-2"
        >
          <Download size={16} />
          <div className="flex flex-col items-center">
            <span>Download Report</span>
          </div>
        </button>
      </div>
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default AttendanceHeader;
