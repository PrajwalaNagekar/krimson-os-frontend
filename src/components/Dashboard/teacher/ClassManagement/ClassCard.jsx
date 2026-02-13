import React from "react";
import {
  Users,
  BookOpen,
  PlusCircle,
  BarChart2,
  Calendar,
  FileText,
} from "lucide-react";

const ClassCard = ({ cls, setShowTimetable }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-transparent hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
      {/* Card Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 text-white rounded-xl shadow-md group-hover:scale-110 transition-transform">
          <Users size={24} />
        </div>
        <div className="text-right">
          <div className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-lg text-xs font-bold border border-blue-100">
            {cls.subject}
          </div>
        </div>
      </div>

      {/* Class Info */}
      <div className="mb-6">
        <h4 className="text-xl font-bold text-slate-800 mb-2">{cls.grade}</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <BookOpen size={14} className="text-slate-400" />
            <span className="text-slate-600 font-medium">Current Topic:</span>
            <span className="text-slate-800 font-bold">{cls.topic}</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Users size={14} className="text-slate-400" />
            <span className="text-slate-600 font-medium">Enrollment:</span>
            <span className="text-slate-800 font-bold">
              {cls.students} Students
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-500 font-medium">
            Course Progress
          </span>
          <span className="text-xs text-blue-600 font-bold">65%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full transition-all"
            style={{ width: "65%" }}
          ></div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-blue-100">
        <div className="text-center">
          <p className="text-xs text-slate-500 font-medium mb-1">Avg Score</p>
          <p className="text-sm font-bold text-slate-800">85%</p>
        </div>
        <div className="text-center border-x border-slate-200">
          <p className="text-xs text-slate-500 font-medium mb-1">Attendance</p>
          <p className="text-sm font-bold text-green-600">92%</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-slate-500 font-medium mb-1">Assignments</p>
          <p className="text-sm font-bold text-blue-600">8/10</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 shadow-md transition-all active:scale-95 flex flex-col items-center">
          <div className="flex items-center gap-1 mb-1">
            <PlusCircle size={14} />
            <span>Add Lesson</span>
          </div>
        </button>
        <button className="flex-1 px-4 py-3 bg-white text-slate-700 border-2 border-slate-200 text-xs font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 flex flex-col items-center">
          <div className="flex items-center gap-1 mb-1">
            <BarChart2 size={14} />
            <span>View Reports</span>
          </div>
        </button>
      </div>

      {/* Quick Links */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={() => setShowTimetable(true)}
          className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Calendar size={14} />
          Timetable
        </button>
        <button className="flex items-center gap-2 text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors">
          <FileText size={14} />
          Resources
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
