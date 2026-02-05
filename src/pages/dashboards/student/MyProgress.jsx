import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { STUDENT_DATA } from "../../../data/studentData";
import ProgressHeader from "../../../components/dashboard/student/MyProgress/ProgressHeader";
import OverallStatsCards from "../../../components/dashboard/student/MyProgress/OverallStatsCards";
import ChapterList from "../../../components/dashboard/student/MyProgress/ChapterList";
import ChapterDetailsModal from "../../../components/dashboard/student/MyProgress/ChapterDetailsModal";

const MyProgress = () => {
  const navigate = useNavigate();
  const { myProgress, resources, chapterDetails } = STUDENT_DATA;
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedChapter, setSelectedChapter] = useState(null);

  // Helper to get resources for a specific chapter
  const getChapterResources = (chapter) => {
    if (!resources || !chapter) return [];

    const subjectMap = {
      Mathematics: "MATH",
      Physics: "PHYSICS",
      Chemistry: "CHEMISTRY",
      Biology: "BIOLOGY",
      History: "HISTORY",
      English: "ENGLISH",
    };

    const targetSubject =
      subjectMap[chapter.subject] || chapter.subject.toUpperCase();
    const targetChapter = `Chapter ${chapter.chapterNumber}`;

    const realResources = resources.filter(
      (res) => res.subject === targetSubject && res.chapter === targetChapter,
    );

    // Mock data if no real resources exist
    if (realResources.length === 0) {
      return [
        {
          id: "mock-1",
          title: `Intro to ${chapter.title}`,
          type: "Video",
          subject: targetSubject,
        },
        {
          id: "mock-2",
          title: `${chapter.title} Notes`,
          type: "Document",
          subject: targetSubject,
        },
        {
          id: "mock-3",
          title: "Practical Experiment",
          type: "Experiment",
          subject: targetSubject,
        },
      ];
    }
    return realResources;
  };

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

  // Get details for opened chapter
  const currentChapterDetails = selectedChapter
    ? chapterDetails[selectedChapter.id] || chapterDetails.default
    : null;

  const currentChapterResources = selectedChapter
    ? getChapterResources(selectedChapter)
    : [];

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
        onChapterSelect={setSelectedChapter}
        isUnlocked={isChapterUnlocked}
      />

      {/* Chapter Details Modal */}
      <ChapterDetailsModal
        chapter={selectedChapter}
        details={currentChapterDetails}
        resources={currentChapterResources}
        onClose={() => setSelectedChapter(null)}
        onNavigate={navigate}
      />
    </div>
  );
};

export default MyProgress;
