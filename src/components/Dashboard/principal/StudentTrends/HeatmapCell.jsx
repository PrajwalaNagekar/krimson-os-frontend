import React from "react";

const HeatmapCell = ({ percentage, gender }) => {
  const getColor = (pct) => {
    if (pct >= 95) return "bg-green-500";
    if (pct >= 90) return "bg-blue-500";
    if (pct >= 85) return "bg-yellow-500";
    if (pct >= 80) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div
      className={`${getColor(
        percentage,
      )} text-white p-3 rounded-lg text-center font-bold text-sm hover:scale-105 transition-transform cursor-pointer shadow-sm`}
      title={`${gender}: ${percentage}%`}
    >
      {percentage}%
    </div>
  );
};

export default HeatmapCell;
