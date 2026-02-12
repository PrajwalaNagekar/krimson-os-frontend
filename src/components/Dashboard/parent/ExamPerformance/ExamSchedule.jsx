import React from "react";
import { Calendar, Clock } from "lucide-react";

const ExamSchedule = ({ schedule }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Calendar className="text-blue-500" size={20} />
        Exam Schedule
      </h3>
      <div className="space-y-3">
        {schedule.slice(0, 3).map((exam) => (
          <div
            key={exam.id}
            className="p-4 rounded-xl border-2 border-slate-100 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="px-2 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 text-xs font-bold rounded-full">
                {exam.subject}
              </span>
              <span className="text-xs text-slate-400">
                {new Date(exam.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-700 mb-1">
              {exam.topic}
            </p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {exam.time}
                </span>
                <span>•</span>
                <span>{exam.room}</span>
              </div>
              <span className="text-[9px] text-blue-400 font-medium bg-blue-50 px-2 py-0.5 rounded-full opacity-80">
                get in app
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamSchedule;
