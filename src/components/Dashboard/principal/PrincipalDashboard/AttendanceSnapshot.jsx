import React from "react";
import { CheckCircle } from "lucide-react";

const AttendanceSnapshot = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
      <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-green-500" />
        Today's Presence
      </h4>
      <div className="relative">
        <div className="flex items-center justify-center mb-3">
          <div className="relative w-32 h-32">
            <svg className="transform -rotate-90 w-32 h-32">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#e2e8f0"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray="351.68"
                strokeDashoffset="26.38"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-slate-800">
                {data.percentage}%
              </span>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-slate-600">
          <p className="font-semibold">
            {data.present} out of {data.total} students
          </p>
          <p className="text-slate-500 mt-1">
            {data.absent} absent • {data.trend}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSnapshot;
