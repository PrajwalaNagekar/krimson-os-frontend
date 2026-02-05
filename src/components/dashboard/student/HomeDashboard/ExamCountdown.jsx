import React from "react";
import { ExternalLink, Timer } from "lucide-react";

/**
 * ExamCountdown Component
 *
 * Purpose: Display upcoming exams with countdown timers
 */
const ExamCountdown = ({ upcomingExams, onViewSyllabus, onViewExams }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-400 opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl text-white">
              <Timer size={20} />
            </div>
            <h4 className="font-bold text-slate-800">Exams</h4>
          </div>

          {onViewExams && (
            <button
              onClick={onViewExams}
              className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors"
            >
              View All
            </button>
          )}
        </div>

        <div className="space-y-2">
          {upcomingExams.slice(0, 2).map((exam) => (
            <div key={exam.id} className="p-3 bg-slate-50 rounded-xl">
              <div className="flex justify-between items-start mb-1">
                <p className="text-sm font-bold text-slate-800">
                  {exam.subject}
                </p>
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase whitespace-nowrap">
                  {exam.daysLeft} Days
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamCountdown;
