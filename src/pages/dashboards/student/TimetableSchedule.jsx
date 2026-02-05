import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import TimetableHeader from "../../../components/dashboard/student/TimetableSchedule/TimetableHeader";
import DailyView from "../../../components/dashboard/student/TimetableSchedule/DailyView";
import WeeklyView from "../../../components/dashboard/student/TimetableSchedule/WeeklyView";
import ClassDetailsModal from "../../../components/dashboard/student/TimetableSchedule/ClassDetailsModal";

const TimetableSchedule = () => {
  const [view, setView] = useState("Daily"); // Daily or Weekly
  const [selectedClass, setSelectedClass] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    timetable,
    classDetails,
    preparationChecklist,
    todayHomework,
    ccaBlocks,
  } = STUDENT_DATA;

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="space-y-8">
      {/* Header with View Toggle */}
      <TimetableHeader view={view} setView={setView} />

      {/* Daily View with Two Sections Toggle */}
      {view === "Daily" && (
        <DailyView
          timetable={timetable}
          setSelectedClass={setSelectedClass}
          setIsModalOpen={setIsModalOpen}
          checklist={preparationChecklist}
          homeworkList={todayHomework}
          ccaBlocks={ccaBlocks}
        />
      )}

      {/* Weekly View - Enhanced with Color-Coding, Lab Icons, Free Periods */}
      {view === "Weekly" && (
        <WeeklyView
          days={days}
          timetable={timetable}
          setSelectedClass={setSelectedClass}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {/* Class Details Modal */}
      <ClassDetailsModal
        isModalOpen={isModalOpen}
        selectedClass={selectedClass}
        setIsModalOpen={setIsModalOpen}
        classDetails={classDetails}
      />
    </div>
  );
};

export default TimetableSchedule;
