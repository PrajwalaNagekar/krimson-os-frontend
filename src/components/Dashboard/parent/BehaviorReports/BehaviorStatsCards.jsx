import React from "react";
import {
  Smile,
  Frown,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  BarChart3,
  Target,
} from "lucide-react";

const BehaviorStatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6 relative z-10">
      {/* Positive Points */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
            <Smile size={20} className="text-white" />
          </div>
          <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-100 px-2 py-1 rounded-full">
            <TrendingUp size={12} />+{stats.positiveChange}%
          </div>
        </div>
        <h3 className="text-emerald-800 font-bold text-base md:text-lg mb-1">
          Positive Merits
        </h3>
        <p className="text-emerald-600 text-xs md:text-sm mb-2">
          Total this term
        </p>
        <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          {stats.positivePoints}
        </span>
      </div>

      {/* Negative Points */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl">
            <Frown size={20} className="text-white" />
          </div>
          <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-100 px-2 py-1 rounded-full">
            <TrendingDown size={12} />
            {stats.negativeChange}%
          </div>
        </div>
        <h3 className="text-red-800 font-bold text-base md:text-lg mb-1">
          Areas of Concern
        </h3>
        <p className="text-red-600 text-xs md:text-sm mb-2">Incidents logged</p>
        <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          {stats.negativePoints}
        </span>
      </div>

      {/* Overall Rating */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
            <Target size={20} className="text-white" />
          </div>
          <div className="flex items-center gap-1 text-blue-600 text-xs font-bold bg-blue-100 px-2 py-1 rounded-full">
            <CheckCircle size={12} />
            Active
          </div>
        </div>
        <h3 className="text-blue-800 font-bold text-base md:text-lg mb-1">
          Overall Rating
        </h3>
        <p className="text-blue-600 text-xs md:text-sm mb-2">This term</p>
        <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {stats.overallRating}
        </span>
      </div>

      {/* Trend */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
            <BarChart3 size={20} className="text-white" />
          </div>
          <div className="flex items-center gap-1 text-purple-600 text-xs font-bold bg-purple-100 px-2 py-1 rounded-full">
            <TrendingUp size={12} />
            Progress
          </div>
        </div>
        <h3 className="text-purple-800 font-bold text-base md:text-lg mb-1">
          Behavior Trend
        </h3>
        <p className="text-purple-600 text-xs md:text-sm mb-2">Last 4 months</p>
        <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent capitalize">
          {stats.trend}
        </span>
      </div>
    </div>
  );
};

export default BehaviorStatsCards;
