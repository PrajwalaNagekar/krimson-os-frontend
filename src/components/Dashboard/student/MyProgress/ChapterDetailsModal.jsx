import React from "react";
import {
  X,
  Brain,
  Microscope,
  Target,
  BookOpen,
  CheckCircle,
  FileText,
  ChevronRight,
  Award,
  Star,
  Video,
  Beaker,
  RefreshCw,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

const ChapterDetailsModal = ({
  chapter,
  details,
  resources,
  onClose,
  onNavigate,
}) => {
  if (!chapter || !details) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white p-6 rounded-t-3xl flex-shrink-0">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold">
                  {chapter.chapterNumber}
                </div>
                <h2 className="text-2xl font-bold">{chapter.title}</h2>
              </div>
              <p className="text-white/90 text-sm">{chapter.subject}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1 custom-scrollbar">
          {/* Progress Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <p className="text-3xl font-bold text-blue-600">
                {chapter.progress}%
              </p>
              <p className="text-xs text-slate-600 mt-1">Completion</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <p className="text-3xl font-bold text-purple-600">
                {chapter.timeSpent}
              </p>
              <p className="text-xs text-slate-600 mt-1">Time Spent</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <p className="text-3xl font-bold text-green-600">
                {chapter.quiz_score > 0 ? `${chapter.quiz_score}%` : "--"}
              </p>
              <p className="text-xs text-slate-600 mt-1">Quiz Score</p>
            </div>
          </div>

          {/* AI Smart Suggestions */}
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-5 border border-indigo-100">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Brain size={20} className="text-indigo-600" />
              AI Learning Suggestions
              <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 text-[10px] rounded-full uppercase tracking-wider font-bold">
                Beta
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.aiSuggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className={`p-4 rounded-xl border ${suggestion.color} transition-all hover:shadow-md cursor-pointer group`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                      {(() => {
                        const IconCmp =
                          { RefreshCw, TrendingUp, Lightbulb }[
                            suggestion.icon
                          ] || Lightbulb;
                        const iconColor =
                          suggestion.type === "Remedial"
                            ? "text-orange-500"
                            : "text-purple-500";
                        return <IconCmp size={18} className={iconColor} />;
                      })()}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/50 rounded-md">
                      {suggestion.type}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm mb-1">{suggestion.title}</h4>
                  <p className="text-xs opacity-80 mb-3 leading-relaxed">
                    {suggestion.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                    View Details <ChevronRight size={14} />
                  </div>
                </div>
              ))}
            </div>

            {/* Deep Concept Weakness Analysis */}
            {details.conceptWeaknesses &&
              details.conceptWeaknesses.length > 0 && (
                <div className="mt-4 bg-orange-50 border border-orange-100 rounded-2xl overflow-hidden">
                  <div className="p-4 border-b border-orange-100 flex items-center gap-2 bg-orange-100/50">
                    <Microscope size={18} className="text-orange-600" />
                    <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wide">
                      Identified Concept Gaps
                    </h4>
                  </div>
                  <div className="divide-y divide-orange-100">
                    {details.conceptWeaknesses.map((weakness) => (
                      <div
                        key={weakness.id}
                        className="p-4 hover:bg-orange-100/30 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="px-2 py-0.5 bg-white border border-orange-200 rounded text-[10px] font-bold text-orange-700 uppercase">
                            {weakness.topic}
                          </span>
                        </div>
                        <p className="font-bold text-slate-800 text-sm mb-1">
                          {weakness.weakness}
                        </p>
                        <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                          <span className="font-semibold text-slate-500">
                            Analysis:
                          </span>{" "}
                          {weakness.observation}
                        </p>
                        <div className="flex items-center gap-2 bg-white/60 p-2 rounded-lg border border-orange-100">
                          <Target size={14} className="text-orange-500" />
                          <p className="text-xs font-medium text-orange-800">
                            <span className="font-bold uppercase text-[10px] text-orange-500 mr-1">
                              Fix:
                            </span>
                            {weakness.recommendation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>

          {/* Topics */}
          <div>
            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <BookOpen size={18} className="text-blue-500" />
              Topics Covered
            </h3>
            <div className="flex flex-wrap gap-2">
              {chapter.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <CheckCircle size={14} className="text-green-500" />
                  <span className="text-sm text-slate-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Assignments */}
          <div>
            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <FileText size={18} className="text-purple-500" />
              Assignments ({details.assignments.length})
            </h3>
            <div className="space-y-2">
              {details.assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  onClick={() => onNavigate("/dashboard/student/assignments")}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        assignment.status === "completed"
                          ? "bg-green-500"
                          : assignment.status === "in-progress"
                            ? "bg-blue-500"
                            : "bg-slate-400"
                      }`}
                    ></div>
                    <div>
                      <p className="font-medium text-slate-800">
                        {assignment.name}
                      </p>
                      <p className="text-xs text-slate-500 capitalize">
                        {assignment.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {assignment.score && (
                      <span className="text-sm font-bold text-green-600">
                        {assignment.score}%
                      </span>
                    )}
                    <ChevronRight
                      size={16}
                      className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quizzes */}
          <div>
            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <Award size={18} className="text-yellow-500" />
              Quizzes ({details.quizzes.length})
            </h3>
            <div className="space-y-2">
              {details.quizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <Star size={16} className="text-yellow-500" />
                    <div>
                      <p className="font-medium text-slate-800">{quiz.name}</p>
                      <p className="text-xs text-slate-500 capitalize">
                        {quiz.status}
                      </p>
                    </div>
                  </div>
                  {quiz.score && (
                    <span className="text-sm font-bold text-yellow-600">
                      {quiz.score}%
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Reference Materials */}
          <div>
            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <BookOpen size={18} className="text-indigo-500" />
              Reference Materials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Video", "Document", "Experiment"].map((type) => {
                const typeResources = resources.filter((r) => r.type === type);
                if (typeResources.length === 0) return null;

                return (
                  <div
                    key={type}
                    className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {type === "Video" && (
                        <Video size={16} className="text-red-500" />
                      )}
                      {type === "Document" && (
                        <FileText size={16} className="text-blue-500" />
                      )}
                      {type === "Experiment" && (
                        <Beaker size={16} className="text-purple-500" />
                      )}
                      <h4 className="font-bold text-slate-700 text-sm">
                        {type}s{" "}
                        <span className="text-slate-400 font-medium text-xs ml-1">
                          ({typeResources.length})
                        </span>
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {typeResources.map((res) => (
                        <div
                          key={res.id}
                          onClick={() =>
                            onNavigate("/dashboard/student/resources")
                          }
                          className="group flex items-center justify-between p-2 hover:bg-white rounded-lg transition-colors cursor-pointer"
                        >
                          <p className="text-xs font-medium text-slate-600 group-hover:text-blue-600 transition-colors line-clamp-1">
                            {res.title}
                          </p>
                          <ChevronRight
                            size={12}
                            className="text-slate-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              {resources.length === 0 && (
                <div className="col-span-full p-6 text-center text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                  <p className="text-sm">
                    No specific reference materials linked to this chapter yet.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => onNavigate("/dashboard/student/assignments")}
              className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
            >
              View Assignments
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetailsModal;
