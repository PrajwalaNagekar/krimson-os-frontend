import React from "react";

const HeatmapCell = ({ subject, grade, score }) => {
  const getColor = (score) => {
    if (score >= 85) return "bg-green-500";
    if (score >= 75) return "bg-blue-500";
    if (score >= 65) return "bg-yellow-500";
    if (score >= 50) return "bg-orange-500";
    return "bg-red-500";
  };

  const getTextColor = (score) => {
    return score >= 50 ? "text-white" : "text-white";
  };

  return (
    <div
      className={`${getColor(score)} ${getTextColor(score)} p-3 rounded-lg text-center font-bold text-sm hover:scale-105 transition-transform cursor-pointer shadow-sm`}
      title={`${subject} - Grade ${grade}: ${score}%`}
    >
      {score}%
    </div>
  );
};

export default HeatmapCell;
