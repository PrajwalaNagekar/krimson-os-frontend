import React, { useState, useMemo } from "react";
import { STUDENT_DATA } from "../../../../data/studentData";
import QuizPlayer from "./QuizPlayer";
import QuizInstructionsModal from "./QuizInstructionsModal";
import QuizReviewMode from "./QuizReviewMode";
import {
  Play,
  Clock,
  Star,
  BookOpen,
  Filter,
  CheckCircle,
  BarChart2,
  ChevronRight,
  History,
  AlertCircle,
} from "lucide-react";

const QuizPlayerView = () => {
  // State
  const [activeTab, setActiveTab] = useState("new"); // "new" or "attempted"
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedChapter, setSelectedChapter] = useState("All");

  // Modal State
  const [showingInstructionsFor, setShowingInstructionsFor] = useState(null);
  const [playingQuiz, setPlayingQuiz] = useState(null);
  const [reviewingAttempt, setReviewingAttempt] = useState(null); // { quiz, attempt }

  // Data
  const { quizzes } = STUDENT_DATA;

  // Extract Filters
  const subjects = useMemo(() => {
    const subs = new Set(quizzes.map((q) => q.subject));
    return ["All", ...Array.from(subs)];
  }, [quizzes]);

  const chapters = useMemo(() => {
    let filteredQuizzes = quizzes;
    if (selectedSubject !== "All") {
      filteredQuizzes = quizzes.filter((q) => q.subject === selectedSubject);
    }
    const chaps = new Set(
      filteredQuizzes.map((q) => q.chapter).filter(Boolean),
    );
    return ["All", ...Array.from(chaps)];
  }, [quizzes, selectedSubject]);

  // Filter Quizzes
  const filteredQuizzes = useMemo(() => {
    return quizzes
      .filter((quiz) => {
        // Tab Filter
        const hasAttempts =
          quiz.previousAttempts && quiz.previousAttempts.length > 0;
        const attemptsRemaining =
          quiz.attemptsAllowed - (quiz.attemptsUsed || 0) > 0;
        const isCompleted = quiz.status === "completed";

        if (activeTab === "new") {
          if (!attemptsRemaining && isCompleted) return false;
          // Show if available, or if in-progress, or if completed but retakable?
          // Let's simplified: Show if status is NOT completed, OR if retakable
          // Actually best logic: status != 'completed' OR attemptsUsed < allowed
          if (quiz.status === "locked") return false; // Maybe show locked but disabled?
          // Let's show available and in-progress primarily
          return (
            quiz.status === "available" ||
            quiz.status === "in-progress" ||
            (isCompleted && attemptsRemaining)
          );
        } else {
          // Attempted Tab
          return hasAttempts;
        }
      })
      .filter((quiz) => {
        // Subject & Chapter Filter
        if (selectedSubject !== "All" && quiz.subject !== selectedSubject)
          return false;
        if (selectedChapter !== "All" && quiz.chapter !== selectedChapter)
          return false;
        return true;
      });
  }, [quizzes, activeTab, selectedSubject, selectedChapter]);

  // Handlers
  const handleStartQuizClick = (quiz) => {
    setShowingInstructionsFor(quiz);
  };

  const handleConfirmStart = () => {
    setPlayingQuiz(showingInstructionsFor);
    setShowingInstructionsFor(null);
  };

  const handleReviewClick = (quiz) => {
    // Get latest attempt
    const latestAttempt =
      quiz.previousAttempts[quiz.previousAttempts.length - 1];
    setReviewingAttempt({ quiz, attempt: latestAttempt });
  };

  const handleQuizComplete = (results) => {
    // In a real app, save to backend.
    // Here we just close player. The data won't update persistently in this mock setup.
    // But user can see results summary in the player before closing.
    setPlayingQuiz(null);
  };

  // Render Helpers
  const getSubjectColor = (subject) => {
    const colors = {
      Physics: "text-blue-600 bg-blue-50 border-blue-200",
      Mathematics: "text-purple-600 bg-purple-50 border-purple-200",
      Chemistry: "text-cyan-600 bg-cyan-50 border-cyan-200",
      History: "text-amber-600 bg-amber-50 border-amber-200",
      English: "text-pink-600 bg-pink-50 border-pink-200",
    };
    return colors[subject] || "text-slate-600 bg-slate-50 border-slate-200";
  };

  const getGradient = (subject) => {
    const gradients = {
      Physics: "from-blue-500 to-cyan-500",
      Mathematics: "from-purple-500 to-pink-500",
      Chemistry: "from-teal-500 to-emerald-500",
      History: "from-orange-500 to-amber-500",
      English: "from-pink-500 to-rose-500",
    };
    return gradients[subject] || "from-slate-500 to-slate-600";
  };

  // Sub-Components
  if (playingQuiz) {
    return (
      <QuizPlayer
        quiz={playingQuiz}
        onComplete={handleQuizComplete}
        onClose={() => setPlayingQuiz(null)}
      />
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            Quiz Zone
          </h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Challenge yourself with interactive quizzes, track your progress,
            and master your subjects.
          </p>
        </div>
      </div>

      {/* Tabs & Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-100 sticky top-4 z-30">
        {/* Tabs */}
        <div className="flex bg-slate-100 p-1 rounded-xl self-start md:self-auto">
          <button
            onClick={() => setActiveTab("new")}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === "new"
                ? "bg-white text-indigo-600 shadow-md"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Play size={16} />
            Available Quizzes
          </button>
          <button
            onClick={() => setActiveTab("attempted")}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === "attempted"
                ? "bg-white text-indigo-600 shadow-md"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <History size={16} />
            Attempted History
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <div className="relative min-w-[140px]">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                setSelectedChapter("All"); // Reset chapter on subject change
              }}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none cursor-pointer hover:bg-slate-100"
            >
              {subjects.map((sub) => (
                <option key={sub} value={sub}>
                  {sub === "All" ? "All Subjects" : sub}
                </option>
              ))}
            </select>
          </div>

          <div className="relative min-w-[200px]">
            <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none cursor-pointer hover:bg-slate-100"
            >
              {chapters.map((chap) => (
                <option key={chap} value={chap}>
                  {chap === "All" ? "All Chapters" : chap}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-indigo-100 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Header (Gradient) */}
              <div
                className={`h-2 bg-gradient-to-r ${getGradient(quiz.subject)}`}
              />

              <div className="p-6 flex-1 flex flex-col">
                {/* Meta Header */}
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${getSubjectColor(quiz.subject)}`}
                  >
                    {quiz.subject}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                    <Clock size={14} />
                    {Math.floor(quiz.duration / 60)} min
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {quiz.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  {quiz.description}
                </p>

                {/* Stats / Info */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-slate-50 p-2 rounded-lg text-center">
                    <p className="text-xs text-slate-400 font-bold uppercase">
                      Questions
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      {quiz.totalQuestions}
                    </p>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg text-center">
                    <p className="text-xs text-slate-400 font-bold uppercase">
                      Attempts
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      {quiz.attemptsUsed || 0}/{quiz.attemptsAllowed}
                    </p>
                  </div>
                </div>

                {/* Chapter Info */}
                {quiz.chapter && (
                  <div className="mt-auto mb-6 flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 p-2 rounded-lg">
                    <BookOpen size={14} className="text-indigo-400" />
                    <span className="truncate">{quiz.chapter}</span>
                  </div>
                )}

                {/* Footer Action */}
                <div className="mt-auto">
                  {activeTab === "new" ? (
                    <button
                      onClick={() => handleStartQuizClick(quiz)}
                      disabled={quiz.status === "locked"}
                      className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md group-hover:shadow-lg ${
                        quiz.status === "locked"
                          ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                          : `bg-gradient-to-r ${getGradient(quiz.subject)} text-white hover:opacity-90 hover:scale-[1.02]`
                      }`}
                    >
                      {quiz.status === "locked" ? (
                        <>
                          Locked <AlertCircle size={18} />
                        </>
                      ) : (
                        <>
                          Start Quiz <Play size={18} />
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleReviewClick(quiz)}
                      className="w-full py-3 bg-white border-2 border-indigo-100 hover:border-indigo-300 text-indigo-600 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-indigo-50"
                    >
                      <BarChart2 size={18} />
                      View Results
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">
              No Quizzes Found
            </h3>
            <p className="text-slate-500">
              Try adjusting your filters or check back later for new quizzes.
            </p>
          </div>
        )}
      </div>

      {/* Modals */}
      {showingInstructionsFor && (
        <QuizInstructionsModal
          quiz={showingInstructionsFor}
          onStart={handleConfirmStart}
          onCancel={() => setShowingInstructionsFor(null)}
        />
      )}

      {reviewingAttempt && (
        <QuizReviewMode
          quiz={reviewingAttempt.quiz}
          attempt={reviewingAttempt.attempt}
          onClose={() => setReviewingAttempt(null)}
        />
      )}
    </div>
  );
};

export default QuizPlayerView;
