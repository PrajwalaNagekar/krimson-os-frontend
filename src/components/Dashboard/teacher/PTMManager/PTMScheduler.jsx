import React from "react";
import SlotList from "./SlotList";
import AIInsights from "./AIInsights";

const PTMScheduler = ({
  slots,
  onScheduleClick,
  bookingLock,
  setBookingLock,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-8 duration-700">
      <SlotList slots={slots} onScheduleClick={onScheduleClick} />
      <AIInsights bookingLock={bookingLock} setBookingLock={setBookingLock} />
    </div>
  );
};

export default PTMScheduler;
