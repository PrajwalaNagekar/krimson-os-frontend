import React from "react";
import { Award } from "lucide-react";

/**
 * AchievementBadges Component
 *
 * Purpose: Display earned achievement badges in a grid
 */
const AchievementBadges = ({ achievementBadges }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-400 opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>

      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl text-white">
          <Award size={20} />
        </div>
        <h4 className="font-bold text-slate-800">Achievements</h4>
      </div>

      <div className="grid grid-cols-2 gap-3 relative z-10">
        {achievementBadges.map((badge) => (
          <div
            key={badge.id}
            className="p-3 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all text-center group/badge cursor-pointer"
          >
            <div className="text-3xl mb-2 group-hover/badge:scale-110 transition-transform">
              {badge.icon}
            </div>
            <p className="text-xs font-bold text-slate-800 mb-1">
              {badge.title}
            </p>
            <p className="text-[9px] text-slate-500 leading-tight">
              {badge.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementBadges;
