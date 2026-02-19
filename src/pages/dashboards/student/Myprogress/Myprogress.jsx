import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { STUDENT_DATA } from "../../../../data/studentData";
import ProgressHeader from "../../../../components/dashboard/student/MyProgress/ProgressHeader";
import OverallStatsCards from "../../../../components/dashboard/student/MyProgress/OverallStatsCards";
import ChapterList from "../../../../components/dashboard/student/MyProgress/ChapterList";

const MyProgress = () => {
  const navigate = useNavigate();
  const { myProgress } = STUDENT_DATA;
  const [selectedSubject, setSelectedSubject] = useState("All");

  // Check if chapter should be unlocked (70% threshold)
  const isChapterUnlocked = (chapter) => {
    if (chapter.prerequisites.length === 0) return true;

    return chapter.prerequisites.every((prereqId) => {
      const prereqChapter = myProgress.chapters.find(
        (ch) => ch.id === prereqId,
      );
      return prereqChapter && prereqChapter.progress >= 70;
    });
  };

  const handleChapterSelect = (chapter) => {
    navigate(`/dashboard/student/progress/chapter/${chapter.id}`);
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <ProgressHeader />

      {/* Overall Stats Cards */}
      <OverallStatsCards
        stats={myProgress.overallStats}
        streak={myProgress.learningStreak}
      />

      {/* Chapter Progress Section */}
      <ChapterList
        chapters={myProgress.chapters}
        selectedSubject={selectedSubject}
        onSubjectChange={setSelectedSubject}
        onChapterSelect={handleChapterSelect}
        isUnlocked={isChapterUnlocked}
      />
    </div>
  );
};

export default MyProgress;
