import React from "react";
import { Flame } from "lucide-react";

/**
 * HeroBanner Component
 *
 * Purpose: Welcome banner with user greeting, assignment count, and streak badge
 */
const HeroBanner = ({
  userName,
  assignmentsDue,
  streak,
  onViewAssignments,
  onCheckGrades,
}) => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute left-10 bottom-0 w-60 h-60 bg-pink-500 opacity-20 rounded-full blur-3xl -mb-10"></div>
      <div className="absolute right-1/3 top-1/2 w-40 h-40 bg-cyan-300 opacity-15 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-3xl">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
            Welcome Back
          </span>
          {/* Streak Badge */}
          <div className="bg-orange-500/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
            <Flame size={14} className="animate-pulse" />
            {streak} Day Streak!
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Hello, {userName.split(" ")[0]}!
        </h1>
        <p className="opacity-90 text-lg mb-1">
          You have{" "}
          <span className="font-bold underline decoration-2 decoration-white/50">
            {assignmentsDue} assignments
          </span>{" "}
          due today. Let's get started!
        </p>
        <p className="text-sm opacity-75">
          Your next class starts in 15 minutes
        </p>

        <div className="mt-6 flex gap-3 flex-wrap">
          <button
            onClick={onViewAssignments}
            className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl text-sm hover:bg-blue-50 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            View Assignments
          </button>
          <button
            onClick={onCheckGrades}
            className="px-6 py-3 bg-blue-600/80 backdrop-blur-sm text-white font-bold rounded-xl text-sm hover:bg-blue-700 shadow-md border border-white/20 hover:scale-105 transition-all"
          >
            Check Grades
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
