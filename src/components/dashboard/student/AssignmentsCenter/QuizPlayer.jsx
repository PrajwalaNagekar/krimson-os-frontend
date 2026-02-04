import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Clock,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Maximize,
  Shield,
} from "lucide-react";

const QuizPlayer = ({ quiz, onComplete, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(quiz.duration);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [submissionReason, setSubmissionReason] = useState("");
  const [results, setResults] = useState(null);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [showNavigationWarning, setShowNavigationWarning] = useState(false);
  const [violationCount, setViolationCount] = useState(0);
  const [showViolationWarning, setShowViolationWarning] = useState(false);

  const quizContainerRef = useRef(null);
  const autosaveIntervalRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const navigationAttemptedRef = useRef(false);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Enter Fullscreen
  const enterFullscreen = () => {
    if (quizContainerRef.current) {
      if (quizContainerRef.current.requestFullscreen) {
        quizContainerRef.current.requestFullscreen();
      } else if (quizContainerRef.current.webkitRequestFullscreen) {
        quizContainerRef.current.webkitRequestFullscreen();
      } else if (quizContainerRef.current.msRequestFullscreen) {
        quizContainerRef.current.msRequestFullscreen();
      }
    }
  };

  // Exit Fullscreen
  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  // Handle Fullscreen Change
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFs = !!document.fullscreenElement;
      setIsFullscreen(isFs);

      if (!isFs && !quizSubmitted) {
        setViolationCount((prev) => prev + 1);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange,
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange,
      );
    };
  }, [quizSubmitted]);

  // Auto-enter fullscreen on mount
  useEffect(() => {
    enterFullscreen();
  }, []);

  // Tab Switch Detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !quizSubmitted) {
        setViolationCount((prev) => prev + 1);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [quizSubmitted]);

  // Browser Navigation Protection (Back Button)
  useEffect(() => {
    if (quizSubmitted) return;

    // Prevent browser back/forward navigation
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue =
        "Quiz in progress! If you leave, your quiz will be auto-submitted.";
      return "Quiz in progress! If you leave, your quiz will be auto-submitted.";
    };

    // Handle browser back button
    const handlePopState = (e) => {
      if (!quizSubmitted && !navigationAttemptedRef.current) {
        // First attempt - show warning
        navigationAttemptedRef.current = true;
        window.history.pushState(null, "", window.location.href);
        setShowNavigationWarning(true);
      }
    };

    // Add a history entry to capture back button
    window.history.pushState(null, "", window.location.href);

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [quizSubmitted]);

  // Timer
  useEffect(() => {
    if (quizSubmitted) return;

    timerIntervalRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleAutoSubmit("Time expired");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [quizSubmitted]);

  // Autosave
  useEffect(() => {
    if (quizSubmitted) return;

    autosaveIntervalRef.current = setInterval(() => {
      const autosaveData = {
        quizId: quiz.id,
        answers,
        currentQuestion,
        timeRemaining,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(
        `quiz_autosave_${quiz.id}`,
        JSON.stringify(autosaveData),
      );
    }, 10000); // Autosave every 10 seconds

    return () => {
      if (autosaveIntervalRef.current) {
        clearInterval(autosaveIntervalRef.current);
      }
    };
  }, [answers, currentQuestion, timeRemaining, quiz.id, quizSubmitted]);

  // Load autosave data on mount
  useEffect(() => {
    const autosaveData = localStorage.getItem(`quiz_autosave_${quiz.id}`);
    if (autosaveData) {
      const parsed = JSON.parse(autosaveData);
      setAnswers(parsed.answers || {});
      setCurrentQuestion(parsed.currentQuestion || 0);
      setTimeRemaining(parsed.timeRemaining || quiz.duration);
    }
  }, [quiz.id, quiz.duration]);

  // Calculate Results
  const calculateResults = () => {
    let correctCount = 0;
    let totalPoints = 0;
    let earnedPoints = 0;

    quiz.questions.forEach((question, index) => {
      totalPoints += question.points;
      const userAnswer = answers[index];
      if (userAnswer !== undefined && userAnswer === question.correctAnswer) {
        correctCount++;
        earnedPoints += question.points;
      }
    });

    const score = Math.round((earnedPoints / totalPoints) * 100);
    const timeTaken = quiz.duration - timeRemaining;

    return {
      score,
      correctCount,
      totalQuestions: quiz.questions.length,
      earnedPoints,
      totalPoints,
      timeTaken,
      answers,
    };
  };

  // Auto Submit Quiz
  const handleAutoSubmit = (reason) => {
    if (quizSubmitted) return;

    setSubmissionReason(reason);
    setQuizSubmitted(true);

    // Clear intervals
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (autosaveIntervalRef.current) clearInterval(autosaveIntervalRef.current);

    const results = calculateResults();
    setResults(results);

    // Clear autosave
    localStorage.removeItem(`quiz_autosave_${quiz.id}`);

    // Exit fullscreen
    exitFullscreen();
  };

  // Monitor Violations
  useEffect(() => {
    if (violationCount === 1) {
      setShowViolationWarning(true);
    } else if (violationCount >= 2) {
      handleAutoSubmit(
        "Security violation limit reached (Tab switch / Fullscreen exit)",
      );
    }
  }, [violationCount]);

  // Manual Submit Quiz
  const handleSubmitQuiz = () => {
    setShowSubmitConfirm(false);
    handleAutoSubmit("Manual submission");
  };

  // Handle Navigation Warning Confirm
  const handleNavigationWarningConfirm = () => {
    setShowNavigationWarning(false);
    handleAutoSubmit("Navigation attempt - quiz auto-submitted");
  };

  // Handle Navigation Warning Cancel
  const handleNavigationWarningCancel = () => {
    setShowNavigationWarning(false);
    navigationAttemptedRef.current = false;
    // Keep quiz going
  };

  // Handle Answer Selection
  const handleAnswerSelect = (answerIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answerIndex,
    }));
  };

  // Navigation
  const goToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentQ = quiz.questions[currentQuestion];
  const isAnswered = answers[currentQuestion] !== undefined;
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / quiz.questions.length) * 100;

  // Results View
  if (quizSubmitted && results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Results Header */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6 border-2 border-blue-200">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Quiz Completed! 🎉
              </h2>
              {submissionReason && (
                <p className="text-sm text-slate-600 bg-blue-50 px-4 py-2 rounded-lg inline-block">
                  Reason: {submissionReason}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200 text-center">
                <p className="text-sm text-slate-600 mb-2 font-bold">Score</p>
                <p className="text-4xl font-bold text-green-600">
                  {results.score}%
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border-2 border-blue-200 text-center">
                <p className="text-sm text-slate-600 mb-2 font-bold">
                  Correct Answers
                </p>
                <p className="text-4xl font-bold text-blue-600">
                  {results.correctCount}/{results.totalQuestions}
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200 text-center">
                <p className="text-sm text-slate-600 mb-2 font-bold">
                  Time Taken
                </p>
                <p className="text-4xl font-bold text-purple-600">
                  {formatTime(results.timeTaken)}
                </p>
              </div>
            </div>

            <button
              onClick={() => onComplete(results)}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg"
            >
              Return to Quiz List
            </button>
          </div>

          {/* Question by Question Results */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Question Breakdown
            </h3>
            {quiz.questions.map((question, index) => {
              const userAnswer = results.answers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              const wasAnswered = userAnswer !== undefined;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${
                    isCorrect
                      ? "border-green-200"
                      : wasAnswered
                        ? "border-red-200"
                        : "border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        isCorrect
                          ? "bg-green-100 text-green-600"
                          : wasAnswered
                            ? "bg-red-100 text-red-600"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-800 mb-3">
                        {question.question}
                      </p>
                      <div className="space-y-2">
                        {question.options.map((option, optIndex) => {
                          const isUserAnswer = userAnswer === optIndex;
                          const isCorrectAnswer =
                            question.correctAnswer === optIndex;

                          return (
                            <div
                              key={optIndex}
                              className={`p-3 rounded-xl border-2 ${
                                isCorrectAnswer
                                  ? "bg-green-50 border-green-300 font-bold"
                                  : isUserAnswer
                                    ? "bg-red-50 border-red-300 font-bold"
                                    : "bg-gray-50 border-gray-200"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                {isCorrectAnswer && (
                                  <CheckCircle
                                    size={18}
                                    className="text-green-600"
                                  />
                                )}
                                {isUserAnswer && !isCorrectAnswer && (
                                  <XCircle size={18} className="text-red-600" />
                                )}
                                <span className="text-sm">{option}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Quiz Player View
  return (
    <div
      ref={quizContainerRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white"
    >
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <h2 className="text-xl font-bold">{quiz.title}</h2>
            <p className="text-sm text-white/70">{quiz.subject}</p>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-6">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold ${
                timeRemaining < 60
                  ? "bg-red-500/20 text-red-300 animate-pulse"
                  : timeRemaining < 300
                    ? "bg-orange-500/20 text-orange-300"
                    : "bg-blue-500/20 text-blue-300"
              }`}
            >
              <Clock size={20} />
              <span className="text-lg">{formatTime(timeRemaining)}</span>
            </div>

            {!isFullscreen && (
              <button
                onClick={enterFullscreen}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
              >
                <Maximize size={18} />
                <span className="text-sm font-bold">Fullscreen</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Question Panel */}
        <div className="lg:col-span-3 space-y-6">
          {/* Progress Bar */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </span>
              <span className="text-sm font-bold">
                {answeredCount}/{quiz.questions.length} Answered
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">{currentQ.question}</h3>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 font-medium transition-all duration-300 ${
                    answers[currentQuestion] === index
                      ? "bg-blue-500 border-blue-400 shadow-lg scale-[1.02]"
                      : "bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        answers[currentQuestion] === index
                          ? "border-white bg-white"
                          : "border-white/50"
                      }`}
                    >
                      {answers[currentQuestion] === index && (
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <button
              onClick={() => setShowSubmitConfirm(true)}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-xl font-bold shadow-lg transition-all"
            >
              Submit Quiz
            </button>

            <button
              onClick={nextQuestion}
              disabled={currentQuestion === quiz.questions.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Question Navigation Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sticky top-6">
            <h4 className="text-lg font-bold mb-4">Questions</h4>
            <div className="grid grid-cols-5 lg:grid-cols-4 gap-2">
              {quiz.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToQuestion(index)}
                  className={`aspect-square rounded-lg font-bold text-sm transition-all ${
                    currentQuestion === index
                      ? "bg-blue-500 ring-2 ring-blue-300 shadow-lg"
                      : answers[index] !== undefined
                        ? "bg-green-500/80 hover:bg-green-500"
                        : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white/20 rounded" />
                <span>Not Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded" />
                <span>Current</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-white text-slate-800 rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={24} className="text-orange-500" />
              <h3 className="text-xl font-bold">Submit Quiz?</h3>
            </div>
            <p className="text-slate-600 mb-6">
              You have answered {answeredCount} out of {quiz.questions.length}{" "}
              questions. Are you sure you want to submit?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 px-4 py-3 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitQuiz}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 rounded-xl font-bold transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Warning Modal */}
      {showNavigationWarning && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6">
          <div className="bg-white text-slate-800 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle size={28} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-600">Warning!</h3>
            </div>
            <div className="mb-6 space-y-3">
              <p className="text-slate-800 font-bold text-lg">
                You are attempting to leave the quiz!
              </p>
              <p className="text-slate-600">
                If you go back or navigate away, your quiz will be{" "}
                <strong>automatically submitted</strong> with your current
                answers.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded">
                <p className="text-sm text-orange-800 font-medium">
                  ⚠️ You have answered {answeredCount} out of{" "}
                  {quiz.questions.length} questions.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleNavigationWarningCancel}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 rounded-xl font-bold transition-all shadow-lg"
              >
                Stay in Quiz
              </button>
              <button
                onClick={handleNavigationWarningConfirm}
                className="flex-1 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition-all"
              >
                Leave & Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Violation Warning Modal */}
      {showViolationWarning && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6">
          <div className="bg-white text-slate-800 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in duration-300 border-2 border-red-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
                <Shield size={28} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-600">
                Security Violation!
              </h3>
            </div>
            <div className="mb-6 space-y-3">
              <p className="text-slate-800 font-bold text-lg">
                No Tab Switching or Full Screen Exit Allowed
              </p>
              <p className="text-slate-600">
                You have violated the quiz security protocol. The quiz must
                remain active and in full screen mode.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-sm text-red-800 font-bold">
                  ⚠️ Strike 1/2: Correct this immediately!
                </p>
                <p className="text-xs text-red-700 mt-1">
                  Next violation will result in{" "}
                  <strong>automatic submission</strong> of your quiz.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setShowViolationWarning(false);
                enterFullscreen();
              }}
              className="w-full px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all shadow-lg text-lg"
            >
              I Understand & Resume Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPlayer;
