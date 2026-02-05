import React from "react";
import { FiActivity } from "react-icons/fi";

const GrowthInsightCard = ({ insight }) => {
  if (!insight) return null;

  return (
    <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl shadow-blue-900/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <FiActivity size={120} />
      </div>
      <h3 className="text-lg font-bold mb-2 relative z-10">{insight.title}</h3>
      <p className="text-white/90 text-sm mb-4 relative z-10">
        {insight.description}
      </p>
      <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-all relative z-10 backdrop-blur-sm">
        {insight.buttonText}
      </button>
    </div>
  );
};

export default GrowthInsightCard;
