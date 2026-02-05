import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";

const AttendanceWidget = ({ attendance }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-slate-800 text-lg mb-1">Attendance</h3>
          <p className="text-xs text-slate-500">Current Month</p>
        </div>
        <div className="p-2.5 bg-green-50 text-green-600 rounded-xl">
          <CheckCircle2 size={22} />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-extrabold text-slate-800">
            {attendance}
          </span>
          <span className="text-2xl font-bold text-slate-400">%</span>
        </div>
        <span className="inline-block mt-2 text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-lg">
          Excellent Standing
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-xs">
          <span className="text-slate-500">Days Present</span>
          <span className="font-bold text-slate-700">
            {Math.floor(attendance * 0.2)} / 20 days
          </span>
        </div>
        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${attendance}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Link
          to="/dashboard/parent/attendance"
          className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
        >
          View Full Record
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
};

export default AttendanceWidget;
