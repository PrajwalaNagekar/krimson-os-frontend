import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, ChevronRight } from "lucide-react";
import { STUDENT_DATA } from "../../../../data/studentData";

// Sub-components
import ChapterDetailHeader from "../../../../components/dashboard/student/MyProgress/ChapterDetail/ChapterDetailHeader";
import ChapterProgressStats from "../../../../components/dashboard/student/MyProgress/ChapterDetail/ChapterProgressStats";
import ChapterAISuggestions from "../../../../components/dashboard/student/MyProgress/ChapterDetail/ChapterAISuggestions";
import ChapterTopics from "../../../../components/dashboard/student/MyProgress/ChapterDetail/ChapterTopics";
import ChapterAssignments from "../../../../components/dashboard/student/MyProgress/ChapterDetail/ChapterAssignments";
import ChapterQuizzes from "../../../../components/dashboard/student/MyProgress/ChapterDetail/ChapterQuizzes";
import ChapterResources from "../../../../components/dashboard/student/MyProgress/ChapterDetail/ChapterResources";

// Helper: build the resources list for a chapter using static data from studentData
const getChapterResources = (chapter) => {
  const { resources, chapterDetailSubjectMap, chapterDetailMockResources } =
    STUDENT_DATA;

  if (!resources || !chapter) return [];

  const targetSubject =
    chapterDetailSubjectMap[chapter.subject] || chapter.subject.toUpperCase();
  const targetChapter = `Chapter ${chapter.chapterNumber}`;

  const real = resources.filter(
    (res) => res.subject === targetSubject && res.chapter === targetChapter,
  );

  if (real.length === 0) {
    return chapterDetailMockResources.map((mock) => ({
      ...mock,
      title:
        mock.type === "Video"
          ? `Intro to ${chapter.title}`
          : mock.type === "Document"
            ? `${chapter.title} Notes`
            : "Practical Experiment",
      subject: targetSubject,
    }));
  }

  return real;
};

const ChapterDetail = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  const { myProgress, chapterDetails } = STUDENT_DATA;

  // NOTE: chapterId from URL is always a string; chapter IDs in data are numbers.
  // In the future, replace STUDENT_DATA lookup with an API call:
  //   const data = await fetch(`/api/student/chapters/${chapterId}`)
  const numericId = Number(chapterId);
  const chapter = myProgress.chapters.find((ch) => ch.id === numericId);
  const details = chapter
    ? chapterDetails[chapter.id] || chapterDetails.default
    : null;
  const chapterResources = chapter ? getChapterResources(chapter) : [];

  if (!chapter || !details) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-slate-500 text-lg font-medium">Chapter not found.</p>
        <button
          onClick={() => navigate("/dashboard/student/progress")}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white font-bold rounded-xl hover:shadow-lg transition-all"
        >
          <ArrowLeft size={18} />
          Back to My Progress
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Navigation Bar: Breadcrumb (left) + Back button (right) */}
      <div className="flex items-center justify-between">
        {/* Breadcrumb — left */}
        <nav className="flex items-center gap-1.5 text-sm">
          <button
            onClick={() => navigate("/dashboard/student")}
            className="flex items-center gap-1 text-slate-500 hover:text-blue-600 transition-colors font-medium"
          >
            <Home size={14} />
            Dashboard
          </button>
          <ChevronRight size={14} className="text-slate-400" />
          <button
            onClick={() => navigate("/dashboard/student/progress")}
            className="text-slate-500 hover:text-blue-600 transition-colors font-medium"
          >
            My Progress
          </button>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-slate-500 font-medium">{chapter.subject}</span>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-blue-600 font-semibold max-w-[160px] truncate">
            {chapter.title}
          </span>
        </nav>

        {/* Back Button — right, slight red */}
        <button
          onClick={() => navigate("/dashboard/student/progress")}
          className="flex items-center gap-2 px-5 py-2.5 bg-red-50 border border-red-200 text-red-600 font-semibold rounded-xl hover:bg-red-100 hover:border-red-400 hover:shadow-md transition-all shadow-sm"
        >
          <ArrowLeft size={18} />
          Back to My Progress
        </button>
      </div>

      {/* Chapter Banner Header */}
      <ChapterDetailHeader chapter={chapter} />

      {/* Progress Stats Row */}
      <ChapterProgressStats chapter={chapter} />

      {/* AI Suggestions + Concept Gaps */}
      <ChapterAISuggestions
        aiSuggestions={details.aiSuggestions}
        conceptWeaknesses={details.conceptWeaknesses}
      />

      {/* Topics Covered */}
      <ChapterTopics topics={chapter.topics} />

      {/* Assignments */}
      <ChapterAssignments assignments={details.assignments} />

      {/* Quizzes */}
      <ChapterQuizzes quizzes={details.quizzes} />

      {/* Reference Materials */}
      <ChapterResources resources={chapterResources} />

      {/* CTA */}
      <div className="pb-6">
        <button
          onClick={() => navigate("/dashboard/student/assignments")}
          className="w-full py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-bold rounded-2xl hover:shadow-xl transition-all text-lg"
        >
          View All Assignments
        </button>
      </div>
    </div>
  );
};

export default ChapterDetail;
