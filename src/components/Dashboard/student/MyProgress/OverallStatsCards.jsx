import React from "react";
import { Target, Clock, Flame, Award } from "lucide-react";

const OverallStatsCards = ({ stats, streak }) => {
  if (!stats || !streak) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Progress */}
      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <Target size={24} />
          </div>
          <div className="text-4xl font-bold">
            {stats.completionPercentage}%
          </div>
        </div>
        <h3 className="font-bold text-lg mb-1">Overall Progress</h3>
        <p className="text-xs text-white/80">
          {stats.completedChapters} of {stats.totalChapters} chapters completed
        </p>
      </div>

      {/* Time Spent */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <Clock size={24} />
          </div>
          <div className="text-3xl font-bold">{stats.totalTimeSpent}</div>
        </div>
        <h3 className="font-bold text-lg mb-1">Time Invested</h3>
        <p className="text-xs text-white/80">Total learning hours this term</p>
      </div>

      {/* Learning Streak */}
      <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <Flame size={24} />
          </div>
          <div className="text-4xl font-bold">{streak.currentStreak}</div>
        </div>
        <h3 className="font-bold text-lg mb-1">Day Streak</h3>
        <p className="text-xs text-white/80">
          Longest: {streak.longestStreak} days
        </p>
      </div>

      {/* Average Mastery */}
      <div className="bg-gradient-to-br from-green-400 to-teal-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <Award size={24} />
          </div>
          <div className="text-4xl font-bold">{stats.averageMastery}%</div>
        </div>
        <h3 className="font-bold text-lg mb-1">Avg Mastery</h3>
        <p className="text-xs text-white/80">Across all subjects</p>
      </div>
    </div>
  );
};

export default OverallStatsCards;
