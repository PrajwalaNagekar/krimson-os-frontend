import React, { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  Eye,
  EyeOff,
  Trophy,
  Clock,
  Target,
} from "lucide-react";

const QuizReviewMode = ({ quiz, attempt, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showExplanations, setShowExplanations] = useState({});

  const currentQ = quiz.questions[currentQuestion];
  const userAnswer = attempt.answers[currentQuestion];
  const isCorrect = userAnswer === currentQ.correctAnswer;
  const wasAnswered = userAnswer !== undefined;

  const toggleExplanation = (questionIndex) => {
    setShowExplanations((prev) => ({
      ...prev,
      [questionIndex]: !prev[questionIndex],
    }));
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-indigo-200">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800 mb-1">
                📝 {quiz.title}
              </h2>
              <p className="text-slate-600 font-medium">
                {quiz.subject} • {quiz.chapter}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-700 transition-colors p-2 hover:bg-slate-100 rounded-xl"
            >
              <X size={24} />
            </button>
          </div>

          {/* Results Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border-2 border-green-200 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-green-600" />
                <p className="text-xs font-bold text-slate-600 uppercase">
                  Score
                </p>
              </div>
              <p className="text-3xl font-bold text-green-600">
                {attempt.score}%
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-2xl border-2 border-blue-200 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="w-5 h-5 text-blue-600" />
                <p className="text-xs font-bold text-slate-600 uppercase">
                  Correct
                </p>
              </div>
              <p className="text-3xl font-bold text-blue-600">
                {attempt.correctCount}/{quiz.questions.length}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl border-2 border-purple-200 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <p className="text-xs font-bold text-slate-600 uppercase">
                  Time
                </p>
              </div>
              <p className="text-3xl font-bold text-purple-600">
                {Math.floor(attempt.timeTaken / 60)}m
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-2xl border-2 border-orange-200 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-orange-600" />
                <p className="text-xs font-bold text-slate-600 uppercase">
                  Points
                </p>
              </div>
              <p className="text-3xl font-bold text-orange-600">
                {attempt.earnedPoints}/{attempt.totalPoints}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Display */}
          <div className="lg:col-span-3 space-y-6">
            {/* Progress */}
            <div className="bg-white rounded-2xl shadow-lg p-5 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-slate-700">
                  Question {currentQuestion + 1} of {quiz.questions.length}
                </span>
                <span
                  className={`text-sm font-bold ${
                    isCorrect
                      ? "text-green-600"
                      : wasAnswered
                        ? "text-red-600"
                        : "text-gray-600"
                  }`}
                >
                  {isCorrect
                    ? "✓ Correct"
                    : wasAnswered
                      ? "✗ Incorrect"
                      : "— Not Answered"}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, index) => {
                  const isUserAnswer = userAnswer === index;
                  const isCorrectAnswer = currentQ.correctAnswer === index;

                  let bgClass = "bg-slate-50 border-slate-200";
                  let textClass = "text-slate-700";
                  let icon = null;

                  if (isCorrectAnswer) {
                    bgClass = "bg-green-50 border-green-300";
                    textClass = "text-green-800 font-bold";
                    icon = <CheckCircle className="w-5 h-5 text-green-600" />;
                  } else if (isUserAnswer) {
                    bgClass = "bg-red-50 border-red-300";
                    textClass = "text-red-800 font-bold";
                    icon = <XCircle className="w-5 h-5 text-red-600" />;
                  }

                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border-2 ${bgClass} transition-all`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center">
                          {icon || (
                            <span className="text-xs font-bold">
                              {index + 1}
                            </span>
                          )}
                        </div>
                        <span className={`flex-1 ${textClass}`}>{option}</span>
                        {isCorrectAnswer && (
                          <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                            Correct Answer
                          </span>
                        )}
                        {isUserAnswer && !isCorrectAnswer && (
                          <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-full">
                            Your Answer
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              {currentQ.explanation && (
                <div className="mt-6">
                  <button
                    onClick={() => toggleExplanation(currentQuestion)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {showExplanations[currentQuestion] ? (
                      <>
                        <EyeOff size={20} />
                        Hide Explanation
                      </>
                    ) : (
                      <>
                        <Eye size={20} />
                        See Answer
                      </>
                    )}
                  </button>

                  {showExplanations[currentQuestion] && (
                    <div className="mt-4 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-indigo-200 animate-in slide-in-from-top duration-300">
                      <p className="flex items-start gap-2 text-indigo-900">
                        <span className="text-2xl">💡</span>
                        <span className="flex-1 leading-relaxed">
                          {currentQ.explanation}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-200 transition-all shadow-sm"
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <div className="text-sm font-bold text-slate-600">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </div>

              <button
                onClick={nextQuestion}
                disabled={currentQuestion === quiz.questions.length - 1}
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-200 transition-all shadow-sm"
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Question Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 sticky top-6">
              <h4 className="text-lg font-bold text-slate-800 mb-4">
                All Questions
              </h4>
              <div className="grid grid-cols-5 lg:grid-cols-4 gap-2 mb-6">
                {quiz.questions.map((_, index) => {
                  const qAnswer = attempt.answers[index];
                  const qCorrect =
                    qAnswer === quiz.questions[index].correctAnswer;
                  const qAnswered = qAnswer !== undefined;

                  let bgClass = "bg-gray-200";
                  if (index === currentQuestion) {
                    bgClass = "bg-indigo-500 text-white ring-2 ring-indigo-300";
                  } else if (qCorrect) {
                    bgClass = "bg-green-500 text-white";
                  } else if (qAnswered) {
                    bgClass = "bg-red-500 text-white";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => goToQuestion(index)}
                      className={`aspect-square rounded-lg font-bold text-sm transition-all hover:scale-110 ${bgClass}`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded" />
                  <span className="text-slate-600">Correct</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded" />
                  <span className="text-slate-600">Incorrect</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-200 rounded" />
                  <span className="text-slate-600">Not Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-indigo-500 rounded" />
                  <span className="text-slate-600">Current</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white rounded-xl font-bold transition-all duration-300 shadow-md"
              >
                Back to Quiz List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizReviewMode;
