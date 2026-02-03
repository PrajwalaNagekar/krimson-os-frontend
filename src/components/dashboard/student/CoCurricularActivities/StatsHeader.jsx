import React from 'react';
import { Trophy } from 'lucide-react';

/**
 * StatsHeader Component
 * Displays overall co-curricular activity statistics with gradient background
 * 
 * @param {number} totalPoints - Total points earned
 * @param {number} totalActivities - Total number of activities
 * @param {number} certificatesEarned - Number of certificates earned
 */
const StatsHeader = ({ totalPoints, totalActivities, certificatesEarned }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
          <Trophy size={32} />
          Co-Curricular Activities
        </h1>
        <p className="text-white/90 text-sm md:text-base mb-6">Track your achievements beyond academics</p>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <div className="text-3xl md:text-4xl font-bold">{totalPoints}</div>
            <div className="text-xs text-white/80 mt-1">Total Points</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <div className="text-3xl md:text-4xl font-bold">{totalActivities}</div>
            <div className="text-xs text-white/80 mt-1">Activities</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <div className="text-3xl md:text-4xl font-bold">{certificatesEarned}</div>
            <div className="text-xs text-white/80 mt-1">Certificates</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsHeader;
