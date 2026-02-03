import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * PillarCard Component
 * Displays a single pillar with icon, count, and points
 * 
 * @param {Object} pillar - Pillar data (pillar name, count, points, icon)
 * @param {Function} onClick - Handler for when pillar is clicked
 */
const PillarCard = ({ pillar, onClick }) => {
  // Map pillar names to gradient colors
  const getPillarGradient = (pillarName) => {
    const gradients = {
      'Imaginarium': 'from-purple-400 to-pink-500',
      'Literary': 'from-blue-400 to-indigo-500',
      'Science & Astronomy': 'from-cyan-400 to-blue-500',
      'Leadership & Service': 'from-green-400 to-emerald-500',
      'Sports & Wellness': 'from-orange-400 to-red-500',
      'Music & Dance': 'from-violet-400 to-purple-500',
    };
    return gradients[pillarName] || 'from-slate-400 to-slate-600';
  };

  const gradient = getPillarGradient(pillar.pillar);

  return (
    <button
      onClick={onClick}
      className="group bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 rounded-2xl p-5 hover:border-blue-200 hover:shadow-lg transition-all text-left w-full"
    >
      {/* Icon and Name */}
      <div className="flex items-start justify-between mb-4">
        <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-md flex-shrink-0`}>
          {pillar.icon}
        </div>
        <ArrowRight
          className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
          size={20}
        />
      </div>

      {/* Pillar Name */}
      <h3 className="font-bold text-slate-800 text-lg mb-2">{pillar.pillar}</h3>

      {/* Stats */}
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-slate-500">Activities:</span>
          <span className="font-semibold text-slate-700">{pillar.count}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500">Points:</span>
          <span className={`font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {pillar.points}
          </span>
        </div>
      </div>
    </button>
  );
};

export default PillarCard;
