import React from "react";
import { Target, CheckCircle, Clock, Calendar } from "lucide-react";

const ProgressIndicator = ({ timetable }) => {
  const mondaySchedule = timetable["monday"] || [];
  const completedClasses = mondaySchedule.filter(
    (slot) => slot.status === "completed",
  ).length;
  const activeClasses = mondaySchedule.filter(
    (slot) => slot.status === "active",
  ).length;
  const upcomingClasses = mondaySchedule.filter(
    (slot) => slot.status === "upcoming",
  ).length;
  const totalClasses = mondaySchedule.length;
  const progressPercentage =
    totalClasses > 0 ? Math.round((completedClasses / totalClasses) * 100) : 0;

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-100">
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Target className="text-blue-500" size={20} />
        Today's Progress
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Progress Circle */}
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* SVG Circle Progress */}
            <svg className="transform -rotate-90" width="160" height="160">
              {/* Background Circle */}
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#e2e8f0"
                strokeWidth="12"
                fill="none"
              />
              {/* Progress Circle */}
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${
                  2 * Math.PI * 70 * (1 - progressPercentage / 100)
                }`}
                className="transition-all duration-1000 ease-out"
              />
              {/* Gradient Definition */}
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

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                {progressPercentage}%
              </span>
              <span className="text-xs font-semibold text-slate-500 mt-1">
                Complete
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-3">
          {/* Completed */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500 rounded-xl">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600">
                    Completed
                  </p>
                  <p className="text-2xl font-bold text-blue-700">
                    {completedClasses}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Active */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-100 border-2 border-yellow-200 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-500 rounded-xl">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600">
                    Active Now
                  </p>
                  <p className="text-2xl font-bold text-yellow-700">
                    {activeClasses}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-100 border-2 border-purple-200 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <Calendar size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600">
                    Upcoming
                  </p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {upcomingClasses}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
