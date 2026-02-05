import React from "react";

/**
 * AttendanceRing Component
 *
 * Purpose: Shared circular progress indicator for attendance visualization
 * Used in: HomeDashboard (AttendanceWidget) and AttendanceTracker (AttendanceSummaryCard)
 */
const AttendanceRing = ({
  percentage,
  size = 120,
  strokeWidth = 8,
  showPercentage = true,
  className = "",
}) => {
  // Parse percentage to ensure it's a number
  const value = parseFloat(percentage);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  // Unique gradient ID to avoid conflicts if used multiple times with different styles
  // but we want consistency, so shared ID is fine for same visual
  const gradientId = "gradient-attendance-shared";

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg className="w-full h-full transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-slate-100"
        />

        {/* Progress Circle with Gradient */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      {/* Center Text */}
      {showPercentage && (
        <span className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold text-slate-800">
          {percentage}%
        </span>
      )}

      {/* SVG Gradient Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AttendanceRing;
