import React from "react";
import ChapterCard from "./ChapterCard";

const ChapterList = ({
  chapters,
  selectedSubject,
  onSubjectChange,
  onChapterSelect,
  isUnlocked,
}) => {
  const getSubjectColor = (subject) => {
    const colors = {
      Mathematics: "from-blue-400 to-blue-600",
      Physics: "from-purple-400 to-purple-600",
      Chemistry: "from-green-400 to-green-600",
      Biology: "from-teal-400 to-teal-600",
      English: "from-pink-400 to-pink-600",
      History: "from-orange-400 to-orange-600",
    };
    return colors[subject] || "from-blue-400 to-blue-600";
  };

  const filteredChapters =
    selectedSubject === "All"
      ? chapters
      : chapters.filter((ch) => ch.subject === selectedSubject);

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-1">
            Chapter Progress
          </h2>
          <p className="text-sm text-slate-500">
            Detailed view of your learning journey
          </p>
        </div>

        {/* Subject Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => onSubjectChange("All")}
            className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
              selectedSubject === "All"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Subjects
          </button>
          {[
            "Mathematics",
            "Physics",
            "Chemistry",
            "Biology",
            "English",
            "History",
          ].map((subj) => (
            <button
              key={subj}
              onClick={() => onSubjectChange(subj)}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                selectedSubject === subj
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {subj}
            </button>
          ))}
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredChapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            unlocked={isUnlocked(chapter)}
            onSelect={onChapterSelect}
            getSubjectColor={getSubjectColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ChapterList;
