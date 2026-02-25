import React from "react";
import { ArrowLeft, BookOpen, AlertCircle } from "lucide-react";

const PostponeHeader = ({ lesson, onBack }) => {
  return (
    <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 border-none text-center sm:text-left sm:flex flex-col justify-between items-start rounded-2xl p-5 shadow-lg space-y-4 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

      <div className="flex items-center justify-between w-full relative z-10">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-100 hover:text-white transition-colors mb-2 bg-black/10 px-3 py-1.5 rounded-lg backdrop-blur-sm"
        >
          <ArrowLeft size={12} /> Back to Impacted Lessons
        </button>
        <span className="text-[11px] bg-white text-blue-600 font-black uppercase px-3 py-1.5 rounded-lg tracking-wider shadow-sm">
          Postpone Lesson
        </span>
      </div>

      <div className="w-full relative z-10">
        <h2 className="text-2xl font-black text-white flex items-center gap-2 justify-center sm:justify-start">
          <span className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
            {lesson.subjectIcon}
          </span>
          {lesson.subject} - {lesson.grade}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-3">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white bg-black/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
            <BookOpen size={14} className="text-cyan-200" /> Topic:{" "}
            {lesson.topic}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white bg-black/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
            <AlertCircle size={14} className="text-pink-200" /> Original:{" "}
            {lesson.originalDate}, {lesson.originalPeriod} (
            {lesson.originalTime})
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostponeHeader;
