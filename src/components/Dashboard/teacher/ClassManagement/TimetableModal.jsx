import React from "react";
import { Calendar, X, Users } from "lucide-react";

const TimetableModal = ({ showTimetable, setShowTimetable, lessons }) => {
  if (!showTimetable) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-[2.5rem] w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-8 pb-4 flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200">
              <Calendar size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                Weekly Schedule
              </h2>
              <p className="text-sm font-medium text-slate-500">
                Academic Timetable & Classroom Allocation
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowTimetable(false)}
            className="p-3 bg-white text-slate-400 rounded-xl hover:bg-slate-50 hover:text-slate-600 transition-all border border-slate-100 shadow-sm"
          >
            <X size={20} />
          </button>
        </div>

        {/* Timetable Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {["monday", "tuesday", "wednesday", "thursday", "friday"].map(
              (day) => (
                <div key={day} className="space-y-4">
                  <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 sticky top-0 z-10">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">
                      {day}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {lessons && lessons[day] ? (
                      lessons[day].map((lesson) => (
                        <div
                          key={lesson.id}
                          className={`p-4 rounded-2xl border-l-4 shadow-sm hover:shadow-md transition-all group bg-white ${
                            lesson.subject === "Physics"
                              ? "border-l-blue-500"
                              : lesson.subject === "Chemistry"
                                ? "border-l-purple-500"
                                : "border-l-emerald-500"
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold">
                              {lesson.time}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400">
                              {lesson.duration}
                            </span>
                          </div>

                          <h4 className="font-bold text-slate-800 text-sm mb-1">
                            {lesson.subject}
                          </h4>
                          <p className="text-xs text-slate-500 font-medium mb-3 line-clamp-1">
                            {lesson.title}
                          </p>

                          <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                            <div className="flex items-center gap-1.5">
                              <Users size={12} className="text-slate-400" />
                              <span className="text-[10px] font-bold text-slate-600">
                                {lesson.class}
                              </span>
                            </div>
                            <div
                              className={`w-2 h-2 rounded-full ${
                                lesson.status === "Taught"
                                  ? "bg-emerald-400"
                                  : "bg-amber-400"
                              }`}
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400">
                        <span className="text-xs font-medium">Free Day</span>
                      </div>
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetableModal;
