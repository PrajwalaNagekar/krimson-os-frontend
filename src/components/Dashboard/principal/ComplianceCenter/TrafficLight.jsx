import React from "react";

const TrafficLight = ({ status }) => {
  const getStatusColor = () => {
    switch (status) {
      case "compliant":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "critical":
        return "bg-red-500";
      default:
        return "bg-slate-300";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${getStatusColor()} shadow-lg animate-pulse`}
      ></div>
    </div>
  );
};

export default TrafficLight;
