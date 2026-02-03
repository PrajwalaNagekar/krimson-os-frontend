import React from "react";
import { ExternalLink, TrendingUp } from "lucide-react";
import AttendanceRing from "../common/AttendanceRing";

/**
 * AttendanceWidget Component
 *
 * Purpose: Display attendance percentage with circular progress indicator
 */
const AttendanceWidget = ({ attendance, onViewDetails }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-400 opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onViewDetails?.();
        }}
        className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors group/link z-10"
      >
        <span>View Details</span>
        <ExternalLink
          size={10}
          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
        />
      </a>

      <div className="flex items-center gap-4 relative z-10">
        <div className="relative">
          <AttendanceRing
            percentage={attendance.replace("%", "")}
            size={96}
            strokeWidth={8}
            showPercentage={false} // We custom display text inside or keep it standard?
            // Original had text inside. Shared component has text inside.
            // Let's use showPercentage={false} and overlay custom text if we want different index styling
            // But SharedRing has pretty standard text. Let's try showPercentage={true} but we need to check if font matches
          />
          {/* Overriding the text display to match original exactly if needed, but SharedRing text is good.
              Original: text-lg font-bold text-slate-800
              Shared: text-3xl font-extrabold text-slate-800

              The original widget was smaller/compact.
              Let's customize the font in SharedRing or render it here.
          */}
          <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-slate-800">
            {attendance}
          </span>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 text-lg">Attendance</h4>
          <p className="text-xs text-slate-500 mb-1">Current Month</p>
          <div className="flex items-center gap-1 text-green-600">
            <TrendingUp size={12} />
            <span className="text-xs font-bold">+2% this month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceWidget;
