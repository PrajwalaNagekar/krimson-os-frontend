import React from "react";
import { Calendar, ChevronRight, Clock, User, MapPin } from "lucide-react";

const WeeklyView = ({ days, timetable, setSelectedClass, setIsModalOpen }) => {
  return (
    <div className="space-y-6">
      {days.map((day) => {
        const daySchedule = timetable[day.toLowerCase()] || [];

        // Define subject colors for consistency
        const subjectColors = {
          Math: "from-blue-500 to-blue-600",
          Mathematics: "from-blue-500 to-blue-600",
          English: "from-purple-500 to-purple-600",
          Physics: "from-cyan-500 to-cyan-600",
          Chemistry: "from-green-500 to-green-600",
          Biology: "from-teal-500 to-teal-600",
          History: "from-orange-500 to-orange-600",
          Geography: "from-yellow-500 to-yellow-600",
          "Computer Science": "from-indigo-500 to-indigo-600",
        };

        // Get subject color or default
        const getSubjectColor = (subject) => {
          return subjectColors[subject] || "from-slate-400 to-slate-500";
        };

        return (
          <div
            key={day}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200"
          >
            {/* Day Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                  <Calendar className="text-white" size={20} />
                </div>
                {day}
              </h3>
              <span className="text-sm px-4 py-2 bg-slate-100 rounded-xl font-bold text-slate-600">
                {daySchedule.length} Period
                {daySchedule.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Schedule Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {daySchedule.length > 0 ? (
                daySchedule.map((slot, idx) => {
                  const isLab =
                    slot.type === "Lab" || slot.type === "Practical";
                  const subjectGradient = getSubjectColor(slot.subject);

                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        const classKey = `${slot.subject}-${slot.period}-${day}`;
                        setSelectedClass({ ...slot, day, classKey });
                        setIsModalOpen(true);
                      }}
                      className="group relative bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                    >
                      {/* Color Strip */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${subjectGradient}`}
                      ></div>

                      {/* Period Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                          Period {slot.period}
                        </span>
                        {isLab && (
                          <div className="flex items-center gap-1 px-2 py-1 bg-pink-100 rounded-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 text-pink-600"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M7 2h10M9 2v4M15 2v4M6 6h12l-1 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 6z" />
                            </svg>
                            <span className="text-[10px] font-bold text-pink-700 uppercase">
                              Lab
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Subject Name with Color */}
                      <h4
                        className={`text-base font-bold mb-2 bg-gradient-to-r ${subjectGradient} bg-clip-text text-transparent`}
                      >
                        {slot.subject}
                      </h4>

                      {/* Time */}
                      <div className="flex items-center gap-2 mb-3 text-slate-600">
                        <Clock size={14} className="text-slate-400" />
                        <span className="text-sm font-semibold">
                          {slot.time}
                        </span>
                      </div>

                      {/* Teacher Info */}
                      <div className="flex items-center gap-2 mb-2">
                        {slot.teacherImage ? (
                          <img
                            src={slot.teacherImage}
                            alt={slot.teacher}
                            className="w-5 h-5 rounded-full object-cover border border-slate-300"
                          />
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-slate-200 grid place-items-center">
                            <User size={12} className="text-slate-500" />
                          </div>
                        )}
                        <span className="text-xs font-bold text-slate-700">
                          {slot.teacher}
                        </span>
                      </div>

                      {/* Room */}
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin size={12} className="text-slate-400" />
                        <span className="text-xs font-medium text-slate-500">
                          {slot.room}
                        </span>
                      </div>

                      {/* View Details Button */}
                      <div className="mt-auto pt-2 border-t border-slate-100/50 flex justify-end">
                        <span className="text-[10px] font-bold text-blue-600 flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
                          View Details <ChevronRight size={12} />
                        </span>
                      </div>

                      {/* Substitute Badge */}
                      {slot.isSubstitute && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 bg-red-100 text-red-700 text-[9px] font-bold rounded-lg border border-red-200 uppercase">
                            Substitute
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-slate-400 italic text-sm">
                    No classes scheduled
                  </p>
                </div>
              )}

              {/* Free Period Placeholder - Add if schedule has gaps */}
              {daySchedule.length > 0 && daySchedule.length < 6 && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-dashed border-green-200 rounded-2xl p-4 flex flex-col items-center justify-center">
                  <div className="p-3 bg-green-100 rounded-full mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-green-700">
                    Free Period
                  </span>
                  <span className="text-xs text-green-600 mt-1">
                    Break / Self Study
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyView;
