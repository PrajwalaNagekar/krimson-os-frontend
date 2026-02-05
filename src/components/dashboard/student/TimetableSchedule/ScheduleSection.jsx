import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import PeriodSchedule from "./PeriodSchedule";

const ScheduleSection = ({ timetable, setSelectedClass, setIsModalOpen }) => {
  return (
    <div className="space-y-6">
      <ProgressIndicator timetable={timetable} />
      <PeriodSchedule
        timetable={timetable}
        setSelectedClass={setSelectedClass}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default ScheduleSection;
