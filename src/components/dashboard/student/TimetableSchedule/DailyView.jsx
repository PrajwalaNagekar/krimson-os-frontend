import React, { useState } from "react";
import DailyViewToggle from "./DailyViewToggle";
import ScheduleSection from "./ScheduleSection";
import PlanningSection from "./PlanningSection";

const DailyView = ({
  timetable,
  setSelectedClass,
  setIsModalOpen,
  checklist,
  homeworkList,
  ccaBlocks,
}) => {
  const [dailySection, setDailySection] = useState("schedule");

  return (
    <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 p-6 rounded-3xl shadow-sm">
      <DailyViewToggle
        dailySection={dailySection}
        setDailySection={setDailySection}
      />

      {dailySection === "schedule" && (
        <ScheduleSection
          timetable={timetable}
          setSelectedClass={setSelectedClass}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {dailySection === "planning" && (
        <PlanningSection
          checklist={checklist}
          homeworkList={homeworkList}
          ccaBlocks={ccaBlocks}
        />
      )}
    </div>
  );
};

export default DailyView;
