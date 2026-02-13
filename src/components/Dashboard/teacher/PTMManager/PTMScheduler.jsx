import React from "react";
import SlotList from "./SlotList";
import AIInsights from "./AIInsights";

const PTMScheduler = ({ slots, onScheduleClick }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-8 duration-700">
      <SlotList slots={slots} onScheduleClick={onScheduleClick} />
      <AIInsights />
    </div>
  );
};

export default PTMScheduler;
