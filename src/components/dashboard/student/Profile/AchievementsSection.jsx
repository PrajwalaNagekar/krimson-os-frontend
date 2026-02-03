import React from 'react';
import { Trophy, TrendingUp, Award } from 'lucide-react';

const AchievementsSection = ({ user }) => {
  if (!user.achievements || user.achievements.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Award className="text-yellow-500" size={24} />
          My Achievements
        </h2>
        {user.leaderboard && (
          <div className="flex items-center gap-4">
            <div className="text-center px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-blue-600" size={20} />
                <div className="text-left">
                  <p className="text-xs font-bold text-blue-700">Total Points</p>
                  <p className="text-lg font-black text-blue-800">{user.leaderboard.points}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Achievement Badges */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {user.achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="text-center">
              <div className={`text-4xl mb-2 group-hover:scale-110 transition-transform`}>
                {achievement.icon}
              </div>
              <h4 className="font-bold text-sm text-slate-800 mb-1">
                {achievement.title}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                {achievement.description}
              </p>
            </div>
            
            {/* Hover tooltip */}
            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                Earned
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default AchievementsSection;
