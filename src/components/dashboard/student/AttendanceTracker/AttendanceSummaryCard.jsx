import React from "react";
import { Download, XCircle, ExternalLink } from "lucide-react";
import AttendanceRing from "../common/AttendanceRing";

/**
 * AttendanceSummaryCard Component
 *
 * Layout: LF — Analytics
 * Data Control: Mixed
 * AI: AI3 Monitor
 * Purpose: Display overall attendance percentage, stats, and download functionality
 */
const AttendanceSummaryCard = ({
  percentage,
  totalDays,
  presentDays,
  onDownload,
}) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col justify-between h-fit">
      <div>
        <div className="relative mb-4 flex justify-center">
          <AttendanceRing
            percentage={percentage}
            size={128}
            strokeWidth={8}
            className="text-green-500" // Optional color overrides if component supports it, or it uses mostly internals
          />

          {/* AI3 Monitor: Warning indicator for attendance below threshold */}
          {percentage < 90 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full border-4 border-white z-10">
              <XCircle size={20} />
            </div>
          )}
        </div>
        <h3 className="font-bold text-slate-800">Overall Attendance</h3>
        <p className="text-xs text-slate-500 mt-2">
          Total Days: {totalDays} • Present: {presentDays}
        </p>
      </div>

      <div>
        <button
          onClick={onDownload}
          className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition"
        >
          <Download size={16} />
          Download Certificate
        </button>

        <a
          href="#"
          className="mt-3 flex items-center justify-center gap-1 text-[10px] font-bold text-slate-400 hover:text-blue-600 transition group"
        >
          View detailed report
          <ExternalLink
            size={10}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
          />
        </a>
      </div>
    </div>
  );
};

export default AttendanceSummaryCard;
