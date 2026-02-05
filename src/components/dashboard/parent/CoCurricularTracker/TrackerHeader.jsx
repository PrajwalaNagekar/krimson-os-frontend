import React from "react";
import { Star, Zap, Award, Medal } from "lucide-react";

const TrackerHeader = ({
  totalPoints = 0,
  totalAchievements = 0,
  certificatesEarned = 0,
}) => {
  return (
    <div className="mb-4 md:mb-6 relative z-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 mb-3 md:mb-4">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
            <Star size={24} className="md:hidden text-white" />
            <Star size={28} className="hidden md:block text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Co-Curricular & Activities
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">
              Track participation, achievements & certificates
            </p>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4">
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-cyan-200">
          <div className="flex items-center gap-2 mb-1">
            <Zap size={16} className="text-cyan-600" />
            <span className="text-xs font-medium text-cyan-600">
              Total Points
            </span>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-cyan-700">
            {totalPoints}
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-purple-200">
          <div className="flex items-center gap-2 mb-1">
            <Award size={16} className="text-purple-600" />
            <span className="text-xs font-medium text-purple-600">
              Achievements
            </span>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-purple-700">
            {totalAchievements}
          </p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-amber-200">
          <div className="flex items-center gap-2 mb-1">
            <Medal size={16} className="text-amber-600" />
            <span className="text-xs font-medium text-amber-600">
              Certificates
            </span>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-amber-700">
            {certificatesEarned}
          </p>
        </div>
      </div>

      {/* Custom CSS for title animation if needed referenced globally or here, but usually injected in main page or global css */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default TrackerHeader;
