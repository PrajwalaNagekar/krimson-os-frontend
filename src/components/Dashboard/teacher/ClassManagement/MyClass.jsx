import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  MapPin,
  BookOpen,
  Star,
  TrendingUp,
} from "lucide-react";
import { TEACHER_DATA } from "../../../../data/teacherData";

const MyClass = ({ classes = [] }) => {
  const navigate = useNavigate();
  const emptyText = TEACHER_DATA.classManagement.config.emptyTexts.assignments;

  if (classes.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400 text-sm">
        {emptyText}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <LayoutGrid size={15} className="text-blue-500" />
        <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-500 flex-1">
          My Assigned Classes
        </h2>
        <span className="text-[11px] font-bold text-slate-400">
          {classes.length} Classes
        </span>
      </div>

      {classes.map((cls) => {
        const progress = Math.round(
          (cls.completedChapters / cls.totalChapters) * 100,
        );
        return (
          <div
            key={cls.id}
            onClick={() => navigate(`/dashboard/teacher/classes/${cls.id}`)}
            className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-pointer group"
          >
            {/* Header: class name + attendance badge */}
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors tracking-tight">
                    {cls.grade}
                    <span className="text-slate-300 font-light mx-2">|</span>
                    <span className="font-bold text-slate-600">
                      {cls.subject}
                    </span>
                  </h3>
                  {cls.isClassTeacher && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-yellow-50 border border-yellow-200 rounded-lg text-[10px] font-black uppercase tracking-widest text-yellow-700 shrink-0">
                      <Star size={11} fill="currentColor" /> Class Teacher
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-5">
                  <span className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500">
                    <MapPin size={13} className="text-slate-400" /> {cls.room}
                  </span>
                  <span className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500">
                    <Users size={13} className="text-slate-400" />{" "}
                    {cls.students} Students
                  </span>
                  <span className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hidden sm:flex">
                    <BookOpen size={13} className="text-slate-400" />{" "}
                    {cls.currentTopic}
                  </span>
                </div>
              </div>

              {/* Attendance badge */}
              <div className="flex flex-col items-center px-4 py-3 bg-blue-50 border border-blue-100 rounded-xl shrink-0 group-hover:bg-blue-100 transition-colors">
                <TrendingUp size={15} className="text-blue-500 mb-1" />
                <span className="text-xl font-black text-blue-700">
                  {cls.avgAttendance}%
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                  Avg. Att.
                </span>
              </div>
            </div>

            {/* Chapter Progress */}
            <div>
              <div className="flex justify-between text-[12px] font-bold text-slate-500 mb-2">
                <span>Chapter Progress</span>
                <span className="text-blue-600 tracking-wide">
                  {cls.completedChapters}/{cls.totalChapters} ({progress}%)
                </span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyClass;
