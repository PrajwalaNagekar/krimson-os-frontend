import React from "react";
import { Calendar, Edit, User, AlertCircle, RefreshCw } from "lucide-react";

const TimetableGrid = ({ timetableData, weekDays, periods }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 border-green-200";
      case "conflict":
        return "bg-red-100 text-red-700 border-red-200";
      case "substitute":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "break":
        return "bg-gray-100 text-gray-500 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Weekly Timetable - Grade 10-A
            </h2>
            <p className="text-sm text-gray-600">
              Current week schedule overview
            </p>
          </div>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2">
          <Edit className="w-4 h-4" />
          <span>Edit Schedule</span>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>
      </div>

      {/* Timetable Grid */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr>
              <th className="p-3 text-left text-xs font-bold text-gray-600 bg-gradient-to-r from-cyan-50 to-blue-50 border border-gray-200 rounded-tl-xl">
                Time / Day
              </th>
              {weekDays.map((day, idx) => (
                <th
                  key={idx}
                  className={`p-3 text-center text-sm font-bold text-gray-700 bg-gradient-to-r from-cyan-50 to-blue-50 border border-gray-200 ${idx === weekDays.length - 1 ? "rounded-tr-xl" : ""}`}
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {periods.map((period, periodIdx) => (
              <tr key={periodIdx}>
                <td className="p-3 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200 whitespace-pre-line">
                  {period}
                </td>
                {weekDays.map((day, dayIdx) => {
                  const classData = timetableData["Grade 10-A"][day];
                  const lesson = classData ? classData[periodIdx] : null;

                  if (!lesson) {
                    return (
                      <td
                        key={dayIdx}
                        className="p-3 border border-gray-200 bg-white"
                      ></td>
                    );
                  }

                  return (
                    <td
                      key={dayIdx}
                      className="p-3 border border-gray-200 bg-white hover:bg-blue-50 transition-colors cursor-pointer group"
                    >
                      <div
                        className={`p-3 rounded-xl border-2 ${getStatusColor(lesson.status)} transition-all group-hover:scale-105`}
                      >
                        <p className="font-bold text-sm mb-1">
                          {lesson.subject}
                        </p>
                        {lesson.status !== "break" && (
                          <>
                            <p className="text-xs text-gray-600 flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {lesson.teacher}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Room: {lesson.room}
                            </p>
                            {lesson.status === "conflict" && (
                              <p className="text-xs text-red-600 font-semibold mt-2 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                Conflict!
                              </p>
                            )}
                            {lesson.status === "substitute" && (
                              <p className="text-xs text-orange-600 font-semibold mt-2 flex items-center gap-1">
                                <RefreshCw className="w-3 h-3" />
                                Substitute
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-gray-200">
        <span className="text-xs font-semibold text-gray-600">Status:</span>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-100 border-2 border-green-200"></div>
          <span className="text-xs text-gray-600">Active</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-100 border-2 border-red-200"></div>
          <span className="text-xs text-gray-600">Conflict</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-orange-100 border-2 border-orange-200"></div>
          <span className="text-xs text-gray-600">Substitute</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-100 border-2 border-gray-200"></div>
          <span className="text-xs text-gray-600">Break</span>
        </div>
      </div>
    </div>
  );
};

export default TimetableGrid;
